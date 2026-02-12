// All registered participants for Hack with GDG S3
// Rebuilt from CSV on Feb 11, 2026
// Rules applied:
//   - Withdrawn teams removed (Evalytix, Pro-crastinators)
//   - Duplicate form entries skipped (Build4bucks ×3, SPARKS ×2, PHOENIX ZETRA merged)
//   - Lead appearing again as member → counted once
//   - Koushik (Hyena Coders) refunded & removed
//   - snacksOnly flag for teams that paid only for snacks (Elite Hackers, QuantriX)
//   - PHOENIX ZETRA: partial payment OK, all 4 members included
//   - 3 new teams added: GoJo Sensai, Tiny Coders, Cyberkiddos

const participants = [
  // ── 1. Build4bucks ──────────────────────────────
  { id: 'HWGDG-001', name: 'Vishnudharshan S', team: 'Build4bucks', isLead: true },
  { id: 'HWGDG-002', name: 'Sriram R P', team: 'Build4bucks' },
  { id: 'HWGDG-003', name: 'Amal Raajan S', team: 'Build4bucks' },
  { id: 'HWGDG-004', name: 'Lokesh Kumar M S', team: 'Build4bucks' },

  // ── 2. Byte & Bite ─────────────────────────────
  { id: 'HWGDG-005', name: 'Gokulanathan M', team: 'Byte & Bite', isLead: true },
  { id: 'HWGDG-006', name: 'Aadhithya Balu S', team: 'Byte & Bite' },
  { id: 'HWGDG-007', name: 'Ahamed Atheep K', team: 'Byte & Bite' },
  { id: 'HWGDG-008', name: 'Allimuthu S', team: 'Byte & Bite' },

  // ── 3. Code Crafters ───────────────────────────
  { id: 'HWGDG-009', name: 'Varshitha S B', team: 'Code Crafters', isLead: true },
  { id: 'HWGDG-010', name: 'Naga Jothi A', team: 'Code Crafters' },
  { id: 'HWGDG-011', name: 'Maruthupriyanka M', team: 'Code Crafters' },

  // ── 4. Shypyard ────────────────────────────────
  { id: 'HWGDG-012', name: 'Farhan Tawfeeq', team: 'Shypyard', isLead: true },
  { id: 'HWGDG-013', name: 'Lakshan Adhithyaa S', team: 'Shypyard' },
  { id: 'HWGDG-014', name: 'Karthick R', team: 'Shypyard' },

  // ── 5. LOCAL_HOST ──────────────────────────────
  { id: 'HWGDG-015', name: 'Siddharth Srinivasan', team: 'LOCAL_HOST', isLead: true },
  { id: 'HWGDG-016', name: 'Yogesh S', team: 'LOCAL_HOST' },
  { id: 'HWGDG-017', name: 'Sujitvinu RR', team: 'LOCAL_HOST' },
  { id: 'HWGDG-018', name: 'Sibi Muthuvel', team: 'LOCAL_HOST' },
  { id: 'HWGDG-019', name: 'Saaivishrudh', team: 'LOCAL_HOST' },

  // ── 6. The DUO ─────────────────────────────────
  { id: 'HWGDG-020', name: 'Tamiliniyan C', team: 'The DUO', isLead: true },
  { id: 'HWGDG-021', name: 'Iniyasri R K', team: 'The DUO' },
  { id: 'HWGDG-022', name: 'Vishnnu R', team: 'The DUO' },

  // ── 7. Elite Hackers [SNACKS ONLY] ─────────────
  { id: 'HWGDG-023', name: 'Vikas V', team: 'Elite Hackers', isLead: true, snacksOnly: true },
  { id: 'HWGDG-024', name: 'Sabinaya R S', team: 'Elite Hackers', snacksOnly: true },
  { id: 'HWGDG-025', name: 'Mukesh A', team: 'Elite Hackers', snacksOnly: true },
  { id: 'HWGDG-026', name: 'Gowsalya A', team: 'Elite Hackers', snacksOnly: true },

  // ── 8. AI Drifters ─────────────────────────────
  { id: 'HWGDG-027', name: 'Preethi S Kumar', team: 'AI Drifters', isLead: true },
  { id: 'HWGDG-028', name: 'Hemanth G', team: 'AI Drifters' },
  { id: 'HWGDG-029', name: 'Sai Vennela Vallbadas', team: 'AI Drifters' },
  { id: 'HWGDG-030', name: 'Harshith G', team: 'AI Drifters' },

  // ── 9. SPARKS ──────────────────────────────────
  { id: 'HWGDG-031', name: 'Sri Swasthi S', team: 'SPARKS', isLead: true },
  { id: 'HWGDG-032', name: 'Brahmos S', team: 'SPARKS' },
  { id: 'HWGDG-033', name: 'Louvin Raj V', team: 'SPARKS' },

  // ── 10. The Mavericks ──────────────────────────
  { id: 'HWGDG-034', name: 'Rajkumar N', team: 'The Mavericks', isLead: true },
  { id: 'HWGDG-035', name: 'Akash Kashyap', team: 'The Mavericks' },
  { id: 'HWGDG-036', name: 'Harish S', team: 'The Mavericks' },

  // ── 11. Ethical Crew ───────────────────────────
  { id: 'HWGDG-037', name: 'Haritha Shree S', team: 'Ethical Crew', isLead: true },
  { id: 'HWGDG-038', name: 'Sharan U', team: 'Ethical Crew' },
  { id: 'HWGDG-039', name: 'Aksaya R', team: 'Ethical Crew' },
  { id: 'HWGDG-040', name: 'Hariharan L', team: 'Ethical Crew' },
  { id: 'HWGDG-041', name: 'Lathika T', team: 'Ethical Crew' },

  // ── 12. True Vision ────────────────────────────
  { id: 'HWGDG-042', name: 'Anirudh S', team: 'True Vision', isLead: true },
  { id: 'HWGDG-043', name: 'Akshaya N', team: 'True Vision' },
  { id: 'HWGDG-044', name: 'Janane Arokya J', team: 'True Vision' },
  { id: 'HWGDG-045', name: 'Yuvaraj M', team: 'True Vision' },
  { id: 'HWGDG-046', name: 'Jayan Moogilan G', team: 'True Vision' },

  // ── 13. AI Pulse ───────────────────────────────
  { id: 'HWGDG-047', name: 'Jyoshna S', team: 'AI Pulse', isLead: true },
  { id: 'HWGDG-048', name: 'Keerthana S', team: 'AI Pulse' },
  { id: 'HWGDG-049', name: 'Nandhini G', team: 'AI Pulse' },

  // ── 14. PHOENIX ZETRA (partial pay OK, all 4) ──
  { id: 'HWGDG-050', name: 'Vaanathi P', team: 'PHOENIX ZETRA', isLead: true },
  { id: 'HWGDG-051', name: 'Sham K', team: 'PHOENIX ZETRA' },
  { id: 'HWGDG-052', name: 'Sowmiya T', team: 'PHOENIX ZETRA' },
  { id: 'HWGDG-053', name: 'Ummay Arshiya M', team: 'PHOENIX ZETRA' },

  // ── 15. RUNTIME REBELS ─────────────────────────
  { id: 'HWGDG-054', name: 'Aswinkumaar SR', team: 'RUNTIME REBELS', isLead: true },
  { id: 'HWGDG-055', name: 'Pavithra R', team: 'RUNTIME REBELS' },
  { id: 'HWGDG-056', name: 'Ruba Sri SG', team: 'RUNTIME REBELS' },
  { id: 'HWGDG-057', name: 'Parkavi C', team: 'RUNTIME REBELS' },

  // ── 16. WHITE HAT ──────────────────────────────
  { id: 'HWGDG-058', name: 'Aathil Ahamed A', team: 'WHITE HAT', isLead: true },
  { id: 'HWGDG-059', name: 'Hemachandran A', team: 'WHITE HAT' },
  { id: 'HWGDG-060', name: 'Nivetha R', team: 'WHITE HAT' },
  { id: 'HWGDG-061', name: 'Deepa R', team: 'WHITE HAT' },
  { id: 'HWGDG-062', name: 'Rubavarshini P', team: 'WHITE HAT' },

  // ── 17. Unknown Explorers ──────────────────────
  { id: 'HWGDG-063', name: 'Sangeeth M', team: 'Unknown Explorers', isLead: true },
  { id: 'HWGDG-064', name: 'Akshay A', team: 'Unknown Explorers' },
  { id: 'HWGDG-065', name: 'Gokulasree V', team: 'Unknown Explorers' },

  // ── 18. TechTonic ──────────────────────────────
  { id: 'HWGDG-066', name: 'Sujith A', team: 'TechTonic', isLead: true },
  { id: 'HWGDG-067', name: 'Subashini S', team: 'TechTonic' },
  { id: 'HWGDG-068', name: 'Gokul A', team: 'TechTonic' },

  // ── 19. 404 Thinkers ──────────────────────────
  { id: 'HWGDG-069', name: 'Sahana K S', team: '404 Thinkers', isLead: true },
  { id: 'HWGDG-070', name: 'Manoj S', team: '404 Thinkers' },
  { id: 'HWGDG-071', name: 'Harshitha P', team: '404 Thinkers' },
  { id: 'HWGDG-072', name: 'Nitin Keerthi', team: '404 Thinkers' },

  // ── 20. Team Visionary ─────────────────────────
  { id: 'HWGDG-073', name: 'Sahil Gaikwad', team: 'Team Visionary', isLead: true },
  { id: 'HWGDG-074', name: 'Vishal M', team: 'Team Visionary' },
  { id: 'HWGDG-075', name: 'Sumanth Karthic T A', team: 'Team Visionary' },
  { id: 'HWGDG-076', name: 'Shruthika R', team: 'Team Visionary' },
  { id: 'HWGDG-077', name: 'Aditya', team: 'Team Visionary' },

  // ── 21. NOVA ───────────────────────────────────
  { id: 'HWGDG-078', name: 'Naveen Kumar R', team: 'NOVA', isLead: true },
  { id: 'HWGDG-079', name: 'Ranjith Kumar J', team: 'NOVA' },
  { id: 'HWGDG-080', name: 'Pranith Kumar P', team: 'NOVA' },
  { id: 'HWGDG-081', name: 'Pranesh S', team: 'NOVA' },

  // ── 22. Straw Hats ─────────────────────────────
  { id: 'HWGDG-082', name: 'Balamurugan T', team: 'Straw Hats', isLead: true },
  { id: 'HWGDG-083', name: 'Immanuel Franklin S', team: 'Straw Hats' },
  { id: 'HWGDG-084', name: 'Akailan I', team: 'Straw Hats' },
  { id: 'HWGDG-085', name: 'Krishna Kumar K', team: 'Straw Hats' },
  { id: 'HWGDG-086', name: 'Kiruthikkailash', team: 'Straw Hats' },

  // ── 23. Think Tankers ──────────────────────────
  { id: 'HWGDG-087', name: 'Ramya V', team: 'Think Tankers', isLead: true },
  { id: 'HWGDG-088', name: 'Kaviya A', team: 'Think Tankers' },
  { id: 'HWGDG-089', name: 'Dhatchayani R', team: 'Think Tankers' },

  // ── 24. Terminal Twins ─────────────────────────
  { id: 'HWGDG-090', name: 'Manoranjith D', team: 'Terminal Twins', isLead: true },

  // ── 25. Ilamai ─────────────────────────────────
  { id: 'HWGDG-091', name: 'Balamurugan R', team: 'Ilamai', isLead: true },
  { id: 'HWGDG-092', name: 'Praveen K Y', team: 'Ilamai' },
  { id: 'HWGDG-093', name: 'Sujay Chidambaram C S', team: 'Ilamai' },
  { id: 'HWGDG-094', name: 'Baranidharan D', team: 'Ilamai' },

  // ── 26. InnvoteX ───────────────────────────────
  { id: 'HWGDG-095', name: 'Sathyarubini V', team: 'InnvoteX', isLead: true },
  { id: 'HWGDG-096', name: 'Srimathi V', team: 'InnvoteX' },
  { id: 'HWGDG-097', name: 'Subhiksha S G', team: 'InnvoteX' },
  { id: 'HWGDG-098', name: 'Kavipriya M', team: 'InnvoteX' },

  // ── 27. Udyog Setu ─────────────────────────────
  { id: 'HWGDG-099', name: 'Abhilash Pattnaik', team: 'Udyog Setu', isLead: true },
  { id: 'HWGDG-100', name: 'Abhinav Rai', team: 'Udyog Setu' },
  { id: 'HWGDG-101', name: 'Ashutosh Shukla', team: 'Udyog Setu' },
  { id: 'HWGDG-102', name: 'Madhav Menon', team: 'Udyog Setu' },

  // ── 28. MLSIN28 ────────────────────────────────
  { id: 'HWGDG-103', name: 'Madhava Lingaa GT', team: 'MLSIN28', isLead: true },
  { id: 'HWGDG-104', name: 'Nivetha Angusamy', team: 'MLSIN28' },
  { id: 'HWGDG-105', name: 'Chaaru Dharshina A', team: 'MLSIN28' },

  // ── 29. Tech Devs ──────────────────────────────
  { id: 'HWGDG-106', name: 'Sanjay Kumar U', team: 'Tech Devs', isLead: true },
  { id: 'HWGDG-107', name: 'SasiKumar S', team: 'Tech Devs' },
  { id: 'HWGDG-108', name: 'Sachin R', team: 'Tech Devs' },
  { id: 'HWGDG-109', name: 'Prakash B', team: 'Tech Devs' },

  // ── 30. Direwolves ─────────────────────────────
  { id: 'HWGDG-110', name: 'Shakhib Akthar S', team: 'Direwolves', isLead: true },
  { id: 'HWGDG-111', name: 'Shahid Afridi T', team: 'Direwolves' },
  { id: 'HWGDG-112', name: 'Fawaz F', team: 'Direwolves' },
  { id: 'HWGDG-113', name: 'Thillak K', team: 'Direwolves' },

  // ── 31. Nebula ─────────────────────────────────
  { id: 'HWGDG-114', name: 'Vaishnavi Sakthi J', team: 'Nebula', isLead: true },
  { id: 'HWGDG-115', name: 'Sujitha K', team: 'Nebula' },
  { id: 'HWGDG-116', name: 'Yasaswini J', team: 'Nebula' },
  { id: 'HWGDG-117', name: 'Sneha R', team: 'Nebula' },
  { id: 'HWGDG-118', name: 'Maha Lakshmi R', team: 'Nebula' },

  // ── 32. SPR Techies ────────────────────────────
  { id: 'HWGDG-119', name: 'Pushparani B', team: 'SPR Techies', isLead: true },
  { id: 'HWGDG-120', name: 'Shamini V', team: 'SPR Techies' },
  { id: 'HWGDG-121', name: 'Rohith Venkatagiri', team: 'SPR Techies' },

  // ── 33. DevX ───────────────────────────────────
  { id: 'HWGDG-122', name: 'Nishanth A', team: 'DevX', isLead: true },
  { id: 'HWGDG-123', name: 'Mithun S', team: 'DevX' },
  { id: 'HWGDG-124', name: 'Kishore D', team: 'DevX' },
  { id: 'HWGDG-125', name: 'Dharshan Balaji S', team: 'DevX' },

  // ── 34. Stranger AI ────────────────────────────
  { id: 'HWGDG-126', name: 'Gomathi', team: 'Stranger AI', isLead: true },
  { id: 'HWGDG-127', name: 'Janci', team: 'Stranger AI' },
  { id: 'HWGDG-128', name: 'R Udhayanidhi', team: 'Stranger AI' },

  // ── 35. Vorteqon ───────────────────────────────
  { id: 'HWGDG-129', name: 'Surveshwar T', team: 'Vorteqon', isLead: true },
  { id: 'HWGDG-130', name: 'Sivabalan S', team: 'Vorteqon' },

  // ── 36. IT Warriors ────────────────────────────
  { id: 'HWGDG-131', name: 'Vishal B', team: 'IT Warriors', isLead: true },
  { id: 'HWGDG-132', name: 'Obulihariharan N', team: 'IT Warriors' },
  { id: 'HWGDG-133', name: 'Kalaiarasan S', team: 'IT Warriors' },
  { id: 'HWGDG-134', name: 'Anbuarasan L', team: 'IT Warriors' },

  // ── 37. GaBN ───────────────────────────────────
  { id: 'HWGDG-135', name: 'Riduvarshini Mahesh Kumar', team: 'GaBN', isLead: true },
  { id: 'HWGDG-136', name: 'Rohith Ram', team: 'GaBN' },
  { id: 'HWGDG-137', name: 'Ashmit Saxena', team: 'GaBN' },
  { id: 'HWGDG-138', name: 'Josh Thomas', team: 'GaBN' },

  // ── 38. Hyena Coders (Koushik refunded & removed)
  { id: 'HWGDG-139', name: 'Shaarugesh', team: 'Hyena Coders', isLead: true },
  { id: 'HWGDG-140', name: 'Syed Imthiaz', team: 'Hyena Coders' },
  { id: 'HWGDG-141', name: 'Joshua Anthony', team: 'Hyena Coders' },
  { id: 'HWGDG-142', name: 'Roshni Kumari', team: 'Hyena Coders' },

  // ── 39. QuantriX [SNACKS ONLY] ─────────────────
  { id: 'HWGDG-143', name: 'Suryaa M', team: 'QuantriX', isLead: true, snacksOnly: true },
  { id: 'HWGDG-144', name: 'Shabari E S', team: 'QuantriX', snacksOnly: true },
  { id: 'HWGDG-145', name: 'Dharunkumar V', team: 'QuantriX', snacksOnly: true },
  { id: 'HWGDG-146', name: 'Santhoshini V J', team: 'QuantriX', snacksOnly: true },

  // ── 40. Pixel Pirates ──────────────────────────
  { id: 'HWGDG-147', name: 'Sandhiya B', team: 'Pixel Pirates', isLead: true },
  { id: 'HWGDG-148', name: 'Selva Suganthi V', team: 'Pixel Pirates' },
  { id: 'HWGDG-149', name: 'Senthil Kumar M', team: 'Pixel Pirates' },
  { id: 'HWGDG-150', name: 'Sabarish Kumar S', team: 'Pixel Pirates' },

  // ── 41. DEV CORE ───────────────────────────────
  { id: 'HWGDG-151', name: 'Soundararajan RT', team: 'DEV CORE', isLead: true },
  { id: 'HWGDG-152', name: 'Sanjeev M', team: 'DEV CORE' },
  { id: 'HWGDG-153', name: 'Sumaiya Thaslim', team: 'DEV CORE' },
  { id: 'HWGDG-154', name: 'Revathy S', team: 'DEV CORE' },

  // ── 42. Gryffindor ─────────────────────────────
  { id: 'HWGDG-155', name: 'Ponmadhan D', team: 'Gryffindor', isLead: true },
  { id: 'HWGDG-156', name: 'Parthiban', team: 'Gryffindor' },
  { id: 'HWGDG-157', name: 'Prem', team: 'Gryffindor' },
  { id: 'HWGDG-158', name: 'Vijai', team: 'Gryffindor' },

  // ── 43. Pascode Horizon Hunters ────────────────
  { id: 'HWGDG-159', name: 'Arun S', team: 'Pascode Horizon Hunters', isLead: true },
  { id: 'HWGDG-160', name: 'Pragadeeswaran K', team: 'Pascode Horizon Hunters' },
  { id: 'HWGDG-161', name: 'Harish Ragavendra B', team: 'Pascode Horizon Hunters' },
  { id: 'HWGDG-162', name: 'Priyadharshan M', team: 'Pascode Horizon Hunters' },

  // ── 44. DevOps Titans ──────────────────────────
  { id: 'HWGDG-163', name: 'Kevin P', team: 'DevOps Titans', isLead: true },
  { id: 'HWGDG-164', name: 'Sachidanand S', team: 'DevOps Titans' },
  { id: 'HWGDG-165', name: 'Taufiq Ahmed N', team: 'DevOps Titans' },
  { id: 'HWGDG-166', name: 'Sheik Faridul M', team: 'DevOps Titans' },

  // ── (Evalytix — WITHDRAWN) ─────────────────────

  // ── 45. Blazers ────────────────────────────────
  { id: 'HWGDG-167', name: 'Shaik Mohammed Umar', team: 'Blazers', isLead: true },
  { id: 'HWGDG-168', name: 'Poojala Mythriya', team: 'Blazers' },

  // ── 46. NuetreX.io ─────────────────────────────
  { id: 'HWGDG-169', name: 'Ricky', team: 'NuetreX.io', isLead: true },
  { id: 'HWGDG-170', name: 'Suriyan TR', team: 'NuetreX.io' },
  { id: 'HWGDG-171', name: 'Dharmeswaran', team: 'NuetreX.io' },
  { id: 'HWGDG-172', name: 'Prabhavathi', team: 'NuetreX.io' },

  // ── 47. TEAM KLU ───────────────────────────────
  { id: 'HWGDG-173', name: 'Vishva A', team: 'TEAM KLU', isLead: true },
  { id: 'HWGDG-174', name: 'Maha Lakshmi J', team: 'TEAM KLU' },
  { id: 'HWGDG-175', name: 'Prem Surya P', team: 'TEAM KLU' },
  { id: 'HWGDG-176', name: 'Ruba Dharshan P', team: 'TEAM KLU' },
  { id: 'HWGDG-177', name: 'Surya T', team: 'TEAM KLU' },

  // ── 48. MetaMorph ──────────────────────────────
  { id: 'HWGDG-178', name: 'Madhan Kumar S', team: 'MetaMorph', isLead: true },

  // ── 49. SeemaRekha ─────────────────────────────
  { id: 'HWGDG-179', name: 'Khurram Rashid', team: 'SeemaRekha', isLead: true },
  { id: 'HWGDG-180', name: 'Kinza Zahra', team: 'SeemaRekha' },

  // ── 50. PIXELATE ───────────────────────────────
  { id: 'HWGDG-181', name: 'Sahul Hameed Dhameem M', team: 'PIXELATE', isLead: true },
  { id: 'HWGDG-182', name: 'Mathan Kumar N', team: 'PIXELATE' },
  { id: 'HWGDG-183', name: 'Balaji S', team: 'PIXELATE' },

  // ── 51. Curious Coders ─────────────────────────
  { id: 'HWGDG-184', name: 'Bharath K', team: 'Curious Coders', isLead: true },
  { id: 'HWGDG-185', name: 'Boomika L', team: 'Curious Coders' },
  { id: 'HWGDG-186', name: 'Dinesh Pandi T', team: 'Curious Coders' },
  { id: 'HWGDG-187', name: 'Bhavithra M', team: 'Curious Coders' },
  { id: 'HWGDG-188', name: 'Bharathiraja M', team: 'Curious Coders' },

  // ── 52. Phonix Squad ───────────────────────────
  { id: 'HWGDG-189', name: 'Yaswanth V', team: 'Phonix Squad', isLead: true },
  { id: 'HWGDG-190', name: 'Srinath D', team: 'Phonix Squad' },
  { id: 'HWGDG-191', name: 'Surendar Prakash S', team: 'Phonix Squad' },
  { id: 'HWGDG-192', name: 'Vishal V', team: 'Phonix Squad' },
  { id: 'HWGDG-193', name: 'Deepan G', team: 'Phonix Squad' },

  // ── 53. CompileX ───────────────────────────────
  { id: 'HWGDG-194', name: 'Somasundaran A S', team: 'CompileX', isLead: true },
  { id: 'HWGDG-195', name: 'Mohanavel V', team: 'CompileX' },
  { id: 'HWGDG-196', name: 'Pranesh P', team: 'CompileX' },
  { id: 'HWGDG-197', name: 'NandhaKishore J', team: 'CompileX' },
  { id: 'HWGDG-198', name: 'Pragadeeshwaran R', team: 'CompileX' },

  // ── 54. TECH CREW ──────────────────────────────
  { id: 'HWGDG-199', name: 'Dharshini K', team: 'TECH CREW', isLead: true },
  { id: 'HWGDG-200', name: 'Dharaniya M', team: 'TECH CREW' },
  { id: 'HWGDG-201', name: 'Agalya S', team: 'TECH CREW' },
  { id: 'HWGDG-202', name: 'Gobika S', team: 'TECH CREW' },

  // ── 55. Codex ──────────────────────────────────
  { id: 'HWGDG-203', name: 'Aeesha Shamra N', team: 'Codex', isLead: true },
  { id: 'HWGDG-204', name: 'Shabana B', team: 'Codex' },
  { id: 'HWGDG-205', name: 'Madhumitha R', team: 'Codex' },

  // ── 56. Tech Titans ────────────────────────────
  { id: 'HWGDG-206', name: 'Bhuvaneshwari S', team: 'Tech Titans', isLead: true },

  // ── 57. Vision Weavers ─────────────────────────
  { id: 'HWGDG-207', name: 'Sowmya C', team: 'Vision Weavers', isLead: true },
  { id: 'HWGDG-208', name: 'Shubaharini', team: 'Vision Weavers' },
  { id: 'HWGDG-209', name: 'Sanghamithra P', team: 'Vision Weavers' },
  { id: 'HWGDG-210', name: 'Sakthi Lakshmi L V', team: 'Vision Weavers' },

  // ── (Pro-crastinators — WITHDRAWN) ─────────────

  // ── 58. Bug Squashers ──────────────────────────
  { id: 'HWGDG-211', name: 'Nehaa Vairavel', team: 'Bug Squashers', isLead: true },
  { id: 'HWGDG-212', name: 'Deepika M', team: 'Bug Squashers' },
  { id: 'HWGDG-213', name: 'Harini V', team: 'Bug Squashers' },
  { id: 'HWGDG-214', name: 'Muralidharan E', team: 'Bug Squashers' },
  { id: 'HWGDG-215', name: 'Kaviya K', team: 'Bug Squashers' },

  // ── 59. GoJo Sensai [NEW] ─────────────────────
  { id: 'HWGDG-216', name: 'Surendar GR', team: 'GoJo Sensai', isLead: true },
  { id: 'HWGDG-217', name: 'Tharunrahaj R S', team: 'GoJo Sensai' },
  { id: 'HWGDG-218', name: 'Sanjay V', team: 'GoJo Sensai' },
  { id: 'HWGDG-219', name: 'Sivapadhasekaran G', team: 'GoJo Sensai' },
  { id: 'HWGDG-220', name: 'Santhosh M', team: 'GoJo Sensai' },

  // ── 60. Tiny Coders [NEW] ─────────────────────
  { id: 'HWGDG-221', name: 'Nitin Basker', team: 'Tiny Coders', isLead: true },
  { id: 'HWGDG-222', name: 'Mahbuba Yasmin Laskar', team: 'Tiny Coders' },

  // ── 61. Cyberkiddos [NEW] ─────────────────────
  { id: 'HWGDG-223', name: 'Rudhrabalan V', team: 'Cyberkiddos', isLead: true },
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

export const TOTAL_PARTICIPANTS = participants.length;
export const TOTAL_TEAMS = new Set(participants.map(p => p.team)).size;

export default participants;
