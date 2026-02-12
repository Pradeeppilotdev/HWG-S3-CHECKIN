// All registered participants for Hack with GDG S3
// Rebuilt from CSV on Feb 12, 2026
// Rules applied:
//   - Withdrawn teams removed (Evalytix, Pro-crastinators, Stranger AI)
//   - Duplicate form entries skipped
//   - Lead appearing again as member → counted once
//   - Koushik (Hyena Coders) refunded & removed
//   - snacksOnly flag for teams that paid only for snacks (Elite Hackers, QuantriX)
//   - PHOENIX ZETRA: partial payment OK, all 4 members included
//   - 3 new teams: GoJo Sensai, Tiny Coders, Cyberkiddos
//   - food: 'veg' | 'non-veg'   beverage: 'tea' | 'coffee' | 'none'

const participants = [
  // ── 1. Build4bucks ──────────────────────────────
  { id: 'HWGDG-001', name: 'Vishnudharshan S', team: 'Build4bucks', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-002', name: 'Sriram R P', team: 'Build4bucks', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-003', name: 'Amal Raajan S', team: 'Build4bucks', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-004', name: 'Lokesh Kumar M S', team: 'Build4bucks', food: 'non-veg', bev: 'coffee' },

  // ── 2. Byte & Bite ─────────────────────────────
  { id: 'HWGDG-005', name: 'Gokulanathan M', team: 'Byte & Bite', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-006', name: 'Aadhithya Balu S', team: 'Byte & Bite', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-007', name: 'Ahamed Atheep K', team: 'Byte & Bite', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-008', name: 'Allimuthu S', team: 'Byte & Bite', food: 'non-veg', bev: 'coffee' },

  // ── 3. Code Crafters ───────────────────────────
  { id: 'HWGDG-009', name: 'Varshitha S B', team: 'Code Crafters', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-010', name: 'Naga Jothi A', team: 'Code Crafters', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-011', name: 'Maruthupriyanka M', team: 'Code Crafters', food: 'non-veg', bev: 'tea' },

  // ── 4. Shypyard ────────────────────────────────
  { id: 'HWGDG-012', name: 'Farhan Tawfeeq', team: 'Shypyard', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-013', name: 'Lakshan Adhithyaa S', team: 'Shypyard', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-014', name: 'Karthick R', team: 'Shypyard', food: 'non-veg', bev: 'coffee' },

  // ── 5. LOCAL_HOST ──────────────────────────────
  { id: 'HWGDG-015', name: 'Siddharth Srinivasan', team: 'LOCAL_HOST', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-016', name: 'Yogesh S', team: 'LOCAL_HOST', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-017', name: 'Sujitvinu RR', team: 'LOCAL_HOST', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-018', name: 'Sibi Muthuvel', team: 'LOCAL_HOST', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-019', name: 'Saaivishrudh', team: 'LOCAL_HOST', food: 'non-veg', bev: 'coffee' },

  // ── 6. The DUO ─────────────────────────────────
  { id: 'HWGDG-020', name: 'Tamiliniyan C', team: 'The DUO', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-021', name: 'Iniyasri R K', team: 'The DUO', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-022', name: 'Vishnnu R', team: 'The DUO', food: 'non-veg', bev: 'coffee' },

  // ── 7. Elite Hackers [SNACKS ONLY] ─────────────
  { id: 'HWGDG-023', name: 'Vikas V', team: 'Elite Hackers', isLead: true, snacksOnly: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-024', name: 'Sabinaya R S', team: 'Elite Hackers', snacksOnly: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-025', name: 'Mukesh A', team: 'Elite Hackers', snacksOnly: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-026', name: 'Gowsalya A', team: 'Elite Hackers', snacksOnly: true, food: 'non-veg', bev: 'coffee' },

  // ── 8. AI Drifters ─────────────────────────────
  { id: 'HWGDG-027', name: 'Preethi S Kumar', team: 'AI Drifters', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-028', name: 'Hemanth G', team: 'AI Drifters', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-029', name: 'Sai Vennela Vallbadas', team: 'AI Drifters', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-030', name: 'Harshith G', team: 'AI Drifters', food: 'veg', bev: 'coffee' },

  // ── 9. SPARKS ──────────────────────────────────
  { id: 'HWGDG-031', name: 'Sri Swasthi S', team: 'SPARKS', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-032', name: 'Brahmos S', team: 'SPARKS', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-033', name: 'Louvin Raj V', team: 'SPARKS', food: 'non-veg', bev: 'tea' },

  // ── 10. The Mavericks ────────────────────────── (Akash Kashyap withdrawn – high fever)
  { id: 'HWGDG-034', name: 'Rajkumar N', team: 'The Mavericks', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-036', name: 'Harish S', team: 'The Mavericks', food: 'non-veg', bev: 'coffee' },

  // ── 11. Ethical Crew ───────────────────────────
  { id: 'HWGDG-037', name: 'Haritha Shree S', team: 'Ethical Crew', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-038', name: 'Sharan U', team: 'Ethical Crew', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-039', name: 'Aksaya R', team: 'Ethical Crew', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-040', name: 'Hariharan L', team: 'Ethical Crew', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-041', name: 'Lathika T', team: 'Ethical Crew', food: 'non-veg', bev: 'tea' },

  // ── 12. True Vision ────────────────────────────
  { id: 'HWGDG-042', name: 'Anirudh S', team: 'True Vision', isLead: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-043', name: 'Akshaya N', team: 'True Vision', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-044', name: 'Janane Arokya J', team: 'True Vision', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-045', name: 'Yuvaraj M', team: 'True Vision', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-046', name: 'Jayan Moogilan G', team: 'True Vision', food: 'non-veg', bev: 'coffee' },

  // ── 13. AI Pulse ───────────────────────────────
  { id: 'HWGDG-047', name: 'Jyoshna S', team: 'AI Pulse', isLead: true, food: 'veg', bev: 'none' },
  { id: 'HWGDG-048', name: 'Keerthana S', team: 'AI Pulse', food: 'veg', bev: 'tea' },
  { id: 'HWGDG-049', name: 'Nandhini G', team: 'AI Pulse', food: 'veg', bev: 'tea' },

  // ── 14. PHOENIX ZETRA (partial pay OK, all 4) ──
  { id: 'HWGDG-050', name: 'Vaanathi P', team: 'PHOENIX ZETRA', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-051', name: 'Sham K', team: 'PHOENIX ZETRA', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-052', name: 'Sowmiya T', team: 'PHOENIX ZETRA', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-053', name: 'Ummay Arshiya M', team: 'PHOENIX ZETRA', food: 'non-veg', bev: 'tea' },

  // ── 15. RUNTIME REBELS ─────────────────────────
  { id: 'HWGDG-054', name: 'Aswinkumaar SR', team: 'RUNTIME REBELS', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-055', name: 'Pavithra R', team: 'RUNTIME REBELS', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-056', name: 'Ruba Sri SG', team: 'RUNTIME REBELS', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-057', name: 'Parkavi C', team: 'RUNTIME REBELS', food: 'veg', bev: 'tea' },

  // ── 16. WHITE HAT ──────────────────────────────
  { id: 'HWGDG-058', name: 'Aathil Ahamed A', team: 'WHITE HAT', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-059', name: 'Hemachandran A', team: 'WHITE HAT', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-060', name: 'Nivetha R', team: 'WHITE HAT', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-061', name: 'Deepa R', team: 'WHITE HAT', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-062', name: 'Rubavarshini P', team: 'WHITE HAT', food: 'non-veg', bev: 'coffee' },

  // ── 17. Unknown Explorers ──────────────────────
  { id: 'HWGDG-063', name: 'Sangeeth M', team: 'Unknown Explorers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-064', name: 'Akshay A', team: 'Unknown Explorers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-065', name: 'Gokulasree V', team: 'Unknown Explorers', food: 'non-veg', bev: 'tea' },

  // ── 18. TechTonic ──────────────────────────────
  { id: 'HWGDG-066', name: 'Sujith A', team: 'TechTonic', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-067', name: 'Subashini S', team: 'TechTonic', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-068', name: 'Gokul A', team: 'TechTonic', food: 'veg', bev: 'tea' },

  // ── 19. 404 Thinkers ──────────────────────────
  { id: 'HWGDG-069', name: 'Sahana K S', team: '404 Thinkers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-070', name: 'Manoj S', team: '404 Thinkers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-071', name: 'Harshitha P', team: '404 Thinkers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-072', name: 'Nitin Keerthi', team: '404 Thinkers', food: 'non-veg', bev: 'coffee' },

  // ── 20. Team Visionary ─────────────────────────
  { id: 'HWGDG-073', name: 'Sahil Gaikwad', team: 'Team Visionary', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-074', name: 'Vishal M', team: 'Team Visionary', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-075', name: 'Sumanth Karthic T A', team: 'Team Visionary', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-076', name: 'Shruthika R', team: 'Team Visionary', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-077', name: 'Aditya', team: 'Team Visionary', food: 'non-veg', bev: 'coffee' },

  // ── 21. NOVA ───────────────────────────────────
  { id: 'HWGDG-078', name: 'Naveen Kumar R', team: 'NOVA', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-079', name: 'Ranjith Kumar J', team: 'NOVA', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-080', name: 'Pranith Kumar P', team: 'NOVA', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-081', name: 'Pranesh S', team: 'NOVA', food: 'non-veg', bev: 'coffee' },

  // ── 22. Straw Hats ─────────────────────────────
  { id: 'HWGDG-082', name: 'Balamurugan T', team: 'Straw Hats', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-083', name: 'Immanuel Franklin S', team: 'Straw Hats', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-084', name: 'Akailan I', team: 'Straw Hats', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-085', name: 'Krishna Kumar K', team: 'Straw Hats', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-086', name: 'Kiruthikkailash', team: 'Straw Hats', food: 'non-veg', bev: 'coffee' },

  // ── 23. Think Tankers ──────────────────────────
  { id: 'HWGDG-087', name: 'Ramya V', team: 'Think Tankers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-088', name: 'Kaviya A', team: 'Think Tankers', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-089', name: 'Dhatchayani R', team: 'Think Tankers', food: 'veg', bev: 'coffee' },

  // ── 24. Terminal Twins ─────────────────────────
  { id: 'HWGDG-090', name: 'Manoranjith D', team: 'Terminal Twins', isLead: true, food: 'non-veg', bev: 'coffee' },

  // ── 25. Ilamai ─────────────────────────────────
  { id: 'HWGDG-091', name: 'Balamurugan R', team: 'Ilamai', isLead: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-092', name: 'Praveen K Y', team: 'Ilamai', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-093', name: 'Sujay Chidambaram C S', team: 'Ilamai', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-094', name: 'Baranidharan D', team: 'Ilamai', food: 'non-veg', bev: 'tea' },

  // ── 26. InnvoteX ───────────────────────────────
  { id: 'HWGDG-095', name: 'Sathyarubini V', team: 'InnvoteX', isLead: true, food: 'non-veg', bev: 'none' },
  { id: 'HWGDG-096', name: 'Srimathi V', team: 'InnvoteX', food: 'non-veg', bev: 'none' },
  { id: 'HWGDG-097', name: 'Subhiksha S G', team: 'InnvoteX', food: 'non-veg', bev: 'none' },
  { id: 'HWGDG-098', name: 'Kavipriya M', team: 'InnvoteX', food: 'non-veg', bev: 'none' },

  // ── 27. Udyog Setu ─────────────────────────────
  { id: 'HWGDG-099', name: 'Abhilash Pattnaik', team: 'Udyog Setu', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-100', name: 'Abhinav Rai', team: 'Udyog Setu', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-101', name: 'Ashutosh Shukla', team: 'Udyog Setu', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-102', name: 'Madhav Menon', team: 'Udyog Setu', food: 'non-veg', bev: 'coffee' },

  // ── 28. MLSIN28 ────────────────────────────────
  { id: 'HWGDG-103', name: 'Madhava Lingaa GT', team: 'MLSIN28', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-104', name: 'Nivetha Angusamy', team: 'MLSIN28', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-105', name: 'Chaaru Dharshina A', team: 'MLSIN28', food: 'non-veg', bev: 'tea' },

  // ── 29. Tech Devs ──────────────────────────────
  { id: 'HWGDG-106', name: 'Sanjay Kumar U', team: 'Tech Devs', isLead: true, food: 'veg', bev: 'tea' },
  { id: 'HWGDG-107', name: 'SasiKumar S', team: 'Tech Devs', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-108', name: 'Sachin R', team: 'Tech Devs', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-109', name: 'Prakash B', team: 'Tech Devs', food: 'non-veg', bev: 'coffee' },

  // ── 30. Direwolves ─────────────────────────────
  { id: 'HWGDG-110', name: 'Shakhib Akthar S', team: 'Direwolves', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-111', name: 'Shahid Afridi T', team: 'Direwolves', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-112', name: 'Fawaz F', team: 'Direwolves', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-113', name: 'Thillak K', team: 'Direwolves', food: 'non-veg', bev: 'coffee' },

  // ── 31. Nebula ─────────────────────────────────
  { id: 'HWGDG-114', name: 'Vaishnavi Sakthi J', team: 'Nebula', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-115', name: 'Sujitha K', team: 'Nebula', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-116', name: 'Yasaswini J', team: 'Nebula', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-117', name: 'Sneha R', team: 'Nebula', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-118', name: 'Maha Lakshmi R', team: 'Nebula', food: 'non-veg', bev: 'tea' },

  // ── 32. SPR Techies ────────────────────────────
  { id: 'HWGDG-119', name: 'Pushparani B', team: 'SPR Techies', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-120', name: 'Shamini V', team: 'SPR Techies', food: 'veg', bev: 'tea' },
  { id: 'HWGDG-121', name: 'Rohith Venkatagiri', team: 'SPR Techies', food: 'non-veg', bev: 'none' },

  // ── 33. DevX ───────────────────────────────────
  { id: 'HWGDG-122', name: 'Nishanth A', team: 'DevX', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-123', name: 'Mithun S', team: 'DevX', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-124', name: 'Kishore D', team: 'DevX', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-125', name: 'Dharshan Balaji S', team: 'DevX', food: 'non-veg', bev: 'coffee' },

  // ── (Stranger AI — LEFT) ───────────────────────

  // ── 34. Vorteqon ───────────────────────────────
  { id: 'HWGDG-126', name: 'Surveshwar T', team: 'Vorteqon', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-127', name: 'Sivabalan S', team: 'Vorteqon', food: 'non-veg', bev: 'tea' },

  // ── 35. IT Warriors ────────────────────────────
  { id: 'HWGDG-128', name: 'Vishal B', team: 'IT Warriors', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-129', name: 'Obulihariharan N', team: 'IT Warriors', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-130', name: 'Kalaiarasan S', team: 'IT Warriors', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-131', name: 'Anbuarasan L', team: 'IT Warriors', food: 'non-veg', bev: 'tea' },

  // ── 36. GaBN ───────────────────────────────────
  { id: 'HWGDG-132', name: 'Riduvarshini Mahesh Kumar', team: 'GaBN', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-133', name: 'Rohith Ram', team: 'GaBN', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-134', name: 'Ashmit Saxena', team: 'GaBN', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-135', name: 'Josh Thomas', team: 'GaBN', food: 'non-veg', bev: 'coffee' },

  // ── 37. Hyena Coders (Koushik refunded & removed)
  { id: 'HWGDG-136', name: 'Shaarugesh', team: 'Hyena Coders', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-137', name: 'Syed Imthiaz', team: 'Hyena Coders', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-138', name: 'Joshua Anthony', team: 'Hyena Coders', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-139', name: 'Roshni Kumari', team: 'Hyena Coders', food: 'non-veg', bev: 'tea' },

  // ── 38. QuantriX [SNACKS ONLY] ─────────────────
  { id: 'HWGDG-140', name: 'Suryaa M', team: 'QuantriX', isLead: true, snacksOnly: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-141', name: 'Shabari E S', team: 'QuantriX', snacksOnly: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-142', name: 'Dharunkumar V', team: 'QuantriX', snacksOnly: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-143', name: 'Santhoshini V J', team: 'QuantriX', snacksOnly: true, food: 'veg', bev: 'coffee' },

  // ── 39. Pixel Pirates ──────────────────────────
  { id: 'HWGDG-144', name: 'Sandhiya B', team: 'Pixel Pirates', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-145', name: 'Selva Suganthi V', team: 'Pixel Pirates', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-146', name: 'Senthil Kumar M', team: 'Pixel Pirates', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-147', name: 'Sabarish Kumar S', team: 'Pixel Pirates', food: 'non-veg', bev: 'coffee' },

  // ── 40. DEV CORE ───────────────────────────────
  { id: 'HWGDG-148', name: 'Soundararajan RT', team: 'DEV CORE', isLead: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-149', name: 'Sanjeev M', team: 'DEV CORE', food: 'non-veg', bev: 'none' },
  { id: 'HWGDG-150', name: 'Sumaiya Thaslim', team: 'DEV CORE', food: 'non-veg', bev: 'none' },
  { id: 'HWGDG-151', name: 'Revathy S', team: 'DEV CORE', food: 'non-veg', bev: 'none' },

  // ── 41. Gryffindor ─────────────────────────────
  { id: 'HWGDG-152', name: 'Ponmadhan D', team: 'Gryffindor', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-153', name: 'Parthiban', team: 'Gryffindor', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-154', name: 'Prem', team: 'Gryffindor', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-155', name: 'Vijai', team: 'Gryffindor', food: 'non-veg', bev: 'coffee' },

  // ── 42. Pascode Horizon Hunters ────────────────
  { id: 'HWGDG-156', name: 'Arun S', team: 'Pascode Horizon Hunters', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-157', name: 'Pragadeeswaran K', team: 'Pascode Horizon Hunters', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-158', name: 'Harish Ragavendra B', team: 'Pascode Horizon Hunters', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-159', name: 'Priyadharshan M', team: 'Pascode Horizon Hunters', food: 'non-veg', bev: 'tea' },

  // ── 43. DevOps Titans ──────────────────────────
  { id: 'HWGDG-160', name: 'Kevin P', team: 'DevOps Titans', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-161', name: 'Sachidanand S', team: 'DevOps Titans', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-162', name: 'Taufiq Ahmed N', team: 'DevOps Titans', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-163', name: 'Sheik Faridul M', team: 'DevOps Titans', food: 'non-veg', bev: 'tea' },

  // ── (Evalytix — WITHDRAWN) ─────────────────────

  // ── 44. Blazers ────────────────────────────────
  { id: 'HWGDG-164', name: 'Shaik Mohammed Umar', team: 'Blazers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-165', name: 'Poojala Mythriya', team: 'Blazers', food: 'non-veg', bev: 'coffee' },

  // ── 45. NuetreX.io ─────────────────────────────
  { id: 'HWGDG-166', name: 'Ricky', team: 'NuetreX.io', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-167', name: 'Suriyan TR', team: 'NuetreX.io', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-168', name: 'Dharmeswaran', team: 'NuetreX.io', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-169', name: 'Prabhavathi', team: 'NuetreX.io', food: 'veg', bev: 'tea' },

  // ── 46. TEAM KLU ───────────────────────────────
  { id: 'HWGDG-170', name: 'Vishva A', team: 'TEAM KLU', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-171', name: 'Maha Lakshmi J', team: 'TEAM KLU', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-172', name: 'Prem Surya P', team: 'TEAM KLU', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-173', name: 'Ruba Dharshan P', team: 'TEAM KLU', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-174', name: 'Surya T', team: 'TEAM KLU', food: 'non-veg', bev: 'coffee' },

  // ── 47. MetaMorph ──────────────────────────────
  { id: 'HWGDG-175', name: 'Madhan Kumar S', team: 'MetaMorph', isLead: true, food: 'non-veg', bev: 'coffee' },

  // ── 48. SeemaRekha ─────────────────────────────
  { id: 'HWGDG-176', name: 'Khurram Rashid', team: 'SeemaRekha', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-177', name: 'Kinza Zahra', team: 'SeemaRekha', food: 'non-veg', bev: 'tea' },

  // ── 49. PIXELATE ───────────────────────────────
  { id: 'HWGDG-178', name: 'Sahul Hameed Dhameem M', team: 'PIXELATE', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-179', name: 'Mathan Kumar N', team: 'PIXELATE', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-180', name: 'Balaji S', team: 'PIXELATE', food: 'non-veg', bev: 'tea' },

  // ── 50. Curious Coders ─────────────────────────
  { id: 'HWGDG-181', name: 'Bharath K', team: 'Curious Coders', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-182', name: 'Boomika L', team: 'Curious Coders', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-183', name: 'Dinesh Pandi T', team: 'Curious Coders', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-184', name: 'Bhavithra M', team: 'Curious Coders', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-185', name: 'Bharathiraja M', team: 'Curious Coders', food: 'non-veg', bev: 'tea' },

  // ── 51. Phonix Squad ───────────────────────────
  { id: 'HWGDG-186', name: 'Yaswanth V', team: 'Phonix Squad', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-187', name: 'Srinath D', team: 'Phonix Squad', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-188', name: 'Surendar Prakash S', team: 'Phonix Squad', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-189', name: 'Vishal V', team: 'Phonix Squad', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-190', name: 'Deepan G', team: 'Phonix Squad', food: 'veg', bev: 'coffee' },

  // ── 52. CompileX ───────────────────────────────
  { id: 'HWGDG-191', name: 'Somasundaran A S', team: 'CompileX', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-192', name: 'Mohanavel V', team: 'CompileX', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-193', name: 'Pranesh P', team: 'CompileX', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-194', name: 'NandhaKishore J', team: 'CompileX', food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-195', name: 'Pragadeeshwaran R', team: 'CompileX', food: 'non-veg', bev: 'tea' },

  // ── 53. TECH CREW ──────────────────────────────
  { id: 'HWGDG-196', name: 'Dharshini K', team: 'TECH CREW', isLead: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-197', name: 'Dharaniya M', team: 'TECH CREW', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-198', name: 'Agalya S', team: 'TECH CREW', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-199', name: 'Gobika S', team: 'TECH CREW', food: 'non-veg', bev: 'coffee' },

  // ── 54. Codex ──────────────────────────────────
  { id: 'HWGDG-200', name: 'Aeesha Shamra N', team: 'Codex', isLead: true, food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-201', name: 'Shabana B', team: 'Codex', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-202', name: 'Madhumitha R', team: 'Codex', food: 'non-veg', bev: 'coffee' },

  // ── 55. Tech Titans ────────────────────────────
  { id: 'HWGDG-203', name: 'Bhuvaneshwari S', team: 'Tech Titans', isLead: true, food: 'non-veg', bev: 'coffee' },

  // ── 56. Vision Weavers ─────────────────────────
  { id: 'HWGDG-204', name: 'Sowmya C', team: 'Vision Weavers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-205', name: 'Shubaharini', team: 'Vision Weavers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-206', name: 'Sanghamithra P', team: 'Vision Weavers', food: 'veg', bev: 'coffee' },
  { id: 'HWGDG-207', name: 'Sakthi Lakshmi L V', team: 'Vision Weavers', food: 'veg', bev: 'coffee' },

  // ── (Pro-crastinators — WITHDRAWN) ─────────────

  // ── 57. Bug Squashers ──────────────────────────
  { id: 'HWGDG-208', name: 'Nehaa Vairavel', team: 'Bug Squashers', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-209', name: 'Deepika M', team: 'Bug Squashers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-210', name: 'Harini V', team: 'Bug Squashers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-211', name: 'Muralidharan E', team: 'Bug Squashers', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-212', name: 'Kaviya K', team: 'Bug Squashers', food: 'non-veg', bev: 'tea' },

  // ── 58. GoJo Sensai [NEW] ─────────────────────
  { id: 'HWGDG-213', name: 'Surendar GR', team: 'GoJo Sensai', isLead: true, food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-214', name: 'Tharunrahaj R S', team: 'GoJo Sensai', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-215', name: 'Sanjay V', team: 'GoJo Sensai', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-216', name: 'Sivapadhasekaran G', team: 'GoJo Sensai', food: 'non-veg', bev: 'coffee' },
  { id: 'HWGDG-217', name: 'Santhosh M', team: 'GoJo Sensai', food: 'non-veg', bev: 'coffee' },

  // ── 59. Tiny Coders [NEW] ─────────────────────
  { id: 'HWGDG-218', name: 'Nitin Basker', team: 'Tiny Coders', isLead: true, food: 'veg', bev: 'tea' },
  { id: 'HWGDG-219', name: 'Mahbuba Yasmin Laskar', team: 'Tiny Coders', food: 'non-veg', bev: 'coffee' },

  // ── 60. Cyberkiddos [NEW] ─────────────────────
  { id: 'HWGDG-220', name: 'Rudhrabalan V', team: 'Cyberkiddos', isLead: true, food: 'non-veg', bev: 'coffee' },

  // ── 61. HACKTELLIGENCE [NEW] ───────────────────
  { id: 'HWGDG-221', name: 'Logesh Kumar', team: 'HACKTELLIGENCE', isLead: true, food: 'non-veg', bev: 'tea' },
  { id: 'HWGDG-222', name: 'Dhanush Kumar', team: 'HACKTELLIGENCE', food: 'non-veg', bev: 'none' },
];

// Food/meal check-in types (snacksOnly participants are blocked from these)
export const MEAL_TYPES = [
  'dinner-feb13', 'breakfast-feb14', 'lunch-feb14', 'dinner-feb14', 'breakfast-feb15'
];

// Lookup helpers
export const participantMap = new Map(participants.map(p => [p.id, p]));

export const findParticipantById = (id) => participantMap.get(id) || null;

export const findParticipantsByName = (query) => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return participants.filter(p =>
    p.name.toLowerCase().includes(q) || p.team.toLowerCase().includes(q) || p.id.toLowerCase().includes(q)
  );
};

export const getTeams = () => {
  const teams = {};
  participants.forEach(p => {
    if (!teams[p.team]) teams[p.team] = [];
    teams[p.team].push(p);
  });
  return teams;
};

// Aggregate counts
export const getFoodCounts = () => {
  const counts = { veg: 0, 'non-veg': 0 };
  participants.forEach(p => { counts[p.food] = (counts[p.food] || 0) + 1; });
  return counts;
};

export const getBevCounts = () => {
  const counts = { tea: 0, coffee: 0, none: 0 };
  participants.forEach(p => { counts[p.bev] = (counts[p.bev] || 0) + 1; });
  return counts;
};

export const TOTAL_PARTICIPANTS = participants.length;
export const TOTAL_TEAMS = new Set(participants.map(p => p.team)).size;

export default participants;
