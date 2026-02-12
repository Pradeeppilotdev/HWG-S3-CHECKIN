// Quick script to parse food/beverage preferences from CSV
const fs = require('fs');

// Read CSV
const raw = fs.readFileSync('./src/data/Hack with GDG S3 (Responses) - Form Responses 1 (1).csv', 'utf8');

// Simple CSV parser that handles quoted fields with commas and newlines
function parseCSV(text) {
  const rows = [];
  let current = '';
  let inQuote = false;
  let row = [];
  
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuote) {
      if (ch === '"' && text[i+1] === '"') {
        current += '"';
        i++;
      } else if (ch === '"') {
        inQuote = false;
      } else {
        current += ch;
      }
    } else {
      if (ch === '"') {
        inQuote = true;
      } else if (ch === ',') {
        row.push(current.trim());
        current = '';
      } else if (ch === '\n') {
        row.push(current.trim());
        current = '';
        if (row.length > 5) rows.push(row); // skip partial/header continuation rows
        row = [];
      } else if (ch !== '\r') {
        current += ch;
      }
    }
  }
  if (current || row.length) {
    row.push(current.trim());
    if (row.length > 5) rows.push(row);
  }
  return rows;
}

const allRows = parseCSV(raw);
const header = allRows[0];
const dataRows = allRows.slice(1);

// Find column indices
function findCol(name) {
  const idx = header.findIndex(h => h.toLowerCase().includes(name.toLowerCase()));
  return idx;
}

const colTeamName = findCol('Team name');
const colTeamLead = findCol('Team Lead Name');
const colM1 = header.findIndex(h => h.includes('Team Member 1'));
const colM2 = header.findIndex(h => h.includes('Team Member 2'));
const colM3 = header.findIndex(h => h.includes('Team Member 3'));
const colM4 = header.findIndex(h => h.includes('Team Member 4'));
const colM5 = header.findIndex(h => h.includes('Team Member 5'));
const colCount = header.findIndex(h => h.includes('participant count'));
const colNotes = header.length - 1; // Column 1 (last column - notes)

console.log('Column indices:', { colTeamName, colTeamLead, colM1, colM2, colM3, colM4, colM5, colCount, colNotes });
console.log('Total columns:', header.length);

// Column layout after colCount:
// 1-part: Food, Bev, Scan (3 cols)
// 2-part: Food×2, Bev×2, Scan (5 cols)
// 3-part: Food×3, Bev×3, Scan (7 cols)
// 4-part: Food×4, Bev×4, Scan (9 cols)
// 5-part: Food×5, Bev×5, Scan (11 cols)
// Column1 (notes) (1 col)

const sectionOffsets = {
  '1': { start: colCount + 1, foodCount: 1 },
  '2': { start: colCount + 1 + 3, foodCount: 2 },
  '3': { start: colCount + 1 + 3 + 5, foodCount: 3 },
  '4': { start: colCount + 1 + 3 + 5 + 7, foodCount: 4 },
  '5': { start: colCount + 1 + 3 + 5 + 7 + 9, foodCount: 5 },
};

// Skip these teams
const skipTeams = new Set(['Evalytix', 'Pro-crastinators', 'Pro"crastinators']);
const skipDuplicateNotes = ['repeated form filling', 'Same Team paid rest'];

// Track seen teams to skip duplicates
const seenTeams = new Set();

const results = [];

for (const row of dataRows) {
  const teamName = (row[colTeamName] || '').trim();
  const notes = (row[colNotes] || '').trim();
  const countStr = (row[colCount] || '').trim();
  
  // Skip withdrawn/removed
  if (notes.toLowerCase().includes('withdrawn')) continue;
  if (skipDuplicateNotes.some(n => notes.toLowerCase().includes(n.toLowerCase()))) continue;
  
  // Normalize team name for dedup
  const teamKey = teamName.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Skip if team already seen (duplicate form entries)
  // Special case: PHOENIX ZETRA has 2 legitimate entries
  const isPhoenix = teamKey.includes('phoenix');
  if (seenTeams.has(teamKey) && !isPhoenix) continue;
  seenTeams.add(teamKey);
  
  // Get participant count
  const count = parseInt(countStr);
  if (!count || count < 1 || count > 5) {
    console.log(`WARN: Invalid count "${countStr}" for team "${teamName}"`);
    continue;
  }
  
  const section = sectionOffsets[String(count)];
  if (!section) continue;
  
  // Try the expected section first, then scan all if empty
  let foods = [];
  let bevs = [];
  
  function trySection(sec) {
    const f = [], b = [];
    for (let i = 0; i < sec.foodCount; i++) {
      f.push((row[sec.start + i] || '').trim());
    }
    for (let i = 0; i < sec.foodCount; i++) {
      b.push((row[sec.start + sec.foodCount + i] || '').trim());
    }
    return { f, b, hasData: f.some(x => x.length > 0) };
  }
  
  // Try expected section
  let result = trySection(section);
  if (result.hasData) {
    foods = result.f;
    bevs = result.b;
  } else {
    // Scan all sections for data
    for (const key of ['5','4','3','2','1']) {
      result = trySection(sectionOffsets[key]);
      if (result.hasData) {
        foods = result.f;
        bevs = result.b;
        console.log(`  [FIX] Data found in ${key}-participant section instead of ${count}`);
        break;
      }
    }
  }
  
  // Get team members
  const lead = (row[colTeamLead] || '').trim();
  const members = [lead];
  const memberCols = [colM1, colM2, colM3, colM4, colM5];
  for (const mc of memberCols) {
    const m = (row[mc] || '').trim();
    if (m && m !== '-' && m !== 'NIL' && m !== 'nil') {
      // Skip if same as lead (dedup)
      if (m.toLowerCase() !== lead.toLowerCase()) {
        members.push(m);
      }
    }
  }
  
  console.log(`\n=== ${teamName} (${count} participants) ===`);
  console.log(`  Members: ${members.join(', ')}`);
  console.log(`  Foods: ${foods.join(', ')}`);
  console.log(`  Bevs: ${bevs.join(', ')}`);
  if (notes) console.log(`  Notes: ${notes}`);
  
  results.push({ teamName, count, members, foods, bevs, notes, isPhoenix });
}

// Output summary
console.log('\n\n========== SUMMARY ==========');
let totalParticipants = 0;
for (const r of results) {
  const memberCount = r.members.length;
  totalParticipants += memberCount;
  console.log(`${r.teamName}: ${memberCount} members, ${r.foods.length} food prefs`);
}
console.log(`Total: ${results.length} teams, ${totalParticipants} participants`);
