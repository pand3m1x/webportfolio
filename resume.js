/* Résumé section — add <script src="resume.js"></script> before </body> */
(() => {

const skills = [
  { id: "product", label: "Project & Product Development", blurb: "Project coordination, production management, workflow development, turning concepts into deliverables." },
  { id: "creative", label: "Creative Direction & Design", blurb: "Visual communication, graphic design, branding, creative problem-solving, digital experiences." },
  { id: "ai", label: "AI & Emerging Technology", blurb: "AI-assisted workflows, structured data creation, robotics-related data operations." },
  { id: "web", label: "Web Development & UX", blurb: "HTML, CSS, JavaScript, React, Tailwind CSS, MongoDB, user-centered design, prototyping." },
  { id: "collab", label: "Cross-Functional Collaboration", blurb: "Team coordination, stakeholder communication, client management." },
  { id: "management", label: "Management", blurb: "Office, property, and program management; team organization, scheduling, and operations." },
];


const roles = [
  {
    id: "zion", org: "Zion Creative Studios", title: "Independent Graphic Designer & Illustrator", where: "Remote", when: "2016 – Present", kind: "Professional",
     skills: ["product", "creative", "web", "collab"],
    points: [
      "Translate client ideas into coordinated visual identities, websites, promotional content, and learning resources, including the a2z Equity Coaching engagement (2022–2025) and its 2026 transition to e3 Equity Coaching.",
      "Shaped participatory game materials for SAIKA’s Fan Expo experience — character illustration, physical production, attendee activities, staff identification, and finished-asset review — in less than two months.",
      "Develop a React character-builder MVP combining hand-drawn components with interactive functionality; organize meetings and tasks for the three-person team, with crowdfunding planned for January 2027.",
      "Collaborated with an Indigenous Peoples Day Philly founder on campaign visuals for the 2026 Week of Action and Year of Awareness, featuring plants native to the Americas.",
      "Website redesign and social book-promotion work, including the Transformative Student Voice project and correcting an access-control issue on its Wix site.",
      "Coordinated artwork for music releases: Amalgam Effect’s logo, poster, and five albums, plus a five-cover single series for Dakota Slim.",
      "Apparel illustration across print-on-demand projects, including MyGearX’s holiday campaigns and product line (June–November 2020).",
    ],
    achievements: [
      "Completed a reusable tabletop-game asset collection: 11 character options across five races, two bosses, six classes, paintable wooden cards, and participant and staff badges.",
      "An art-market poster offering generated approximately 10 purchases and buyer requests for apparel-release notice.",
    ],
  },
  {
    id: "sunday", org: "Sunday Robotics", title: "Memory Developer (Part-time)", where: "Remote", when: "2025 – Present", kind: "Professional",
     skills: ["ai", "product"],
    points: ["Prepare structured training data for AI robotics within a two-level quality-review process and weekly performance evaluations."],
    achievements: ["Recommended for promotion into data evaluation and management of a 20-person team."],
  },
  {
    id: "saika", org: "SAIKA", title: "Volunteer, Tanabata Fundraiser", where: "Philadelphia, PA", when: "2026", kind: "Community",
    skills: ["product", "creative", "web", "collab"],
    points: [
      "Helped plan and publicize a community fundraiser, creating menus, game tokens, prizes, a limited-release poster, and a nighttime bamboo-forest photobooth.",
      "Recommended volunteer tiers and a four-level event pricing model; organizers adopted elements of both.",
      "Programmed an illustrated JavaScript fortune app connecting a physical QR slip to a digital fortune from four luck tiers.",
    ],
    achievements: ["Contributed to a month-long fundraiser that raised more than $500."],
  },
  {
    id: "fortify", org: "Fortify Martial Arts", title: "Apprentice Instructor (Jikideshi) & Program Coordinator", where: "Denver, CO", when: "2011 – 2016", kind: "Community",
     skills: ["collab", "management"],
    points: [
      "Organized communications, schedules, lodging, and transport for three multi-day bootcamps (~5 instructors, 15 participants each).",
      "Sustained a weekly self-defense program for queer participants and women with a partner organization for about a year.",
      "Delivered beginner instruction through the head instructor’s three-month medical absence.",
    ],
  },
  {
    id: "dhcc", org: "Dark Horse Combat Club", title: "Office Manager", where: "—", when: "2017 – 2018", kind: "Additional",
     skills: ["collab", "management"],
    points: ["Maintained member communications via social, email campaigns, and outreach; 2–3 posts weekly and four retention initiatives."],
  },
  {
    id: "property", org: "Property Management", title: "Property Manager", where: "Denver, CO; Philadelphia, PA", when: "2015 – 2016; 2021 – 2022", kind: "Additional",
     skills: ["management"],
    points: ["Administered rent, repairs, unit turnovers, and short-term rental setup for four-unit residential buildings."],
  },
  {
    id: "fashion", org: "Fashion & Event Production", title: "Intern → Contract (Mona Lucero, Maclovia, others)", where: "Denver, CO", when: "2010 – 2014", kind: "Additional",
    skills: ["creative", "collab"],
    points: [
      "Prepared garments for a Yves Saint Laurent–inspired line carried by the Denver Art Museum Shop; backstage at Denver Fashion Week and Red Ball.",
      "Interned during the launch year of Maclovia’s men’s underwear line.",
      "Online promotions and costume design for Black Out Productions; promotional support for Bass Kittens.",
    ],
  },
  {
    id: "cojacks", org: "Cojacks", title: "Office Manager", where: "—", when: "2013", kind: "Additional",
    skills: ["collab", "management"],
    points: ["Engaged local businesses through ~50 calls weekly to join a local-currency network; supported a crowdfunding campaign funded on launch night."],
  },
];

const highlights = [
  { tag: "Creative direction", title: "Fan Expo — Interactive Character Tokens", body: "Led creative direction and coordinated production of character tokens: production files, fabrication, deadlines, and solving execution challenges.", skills: ["creative", "product"] },
  { tag: "Product development", title: "Character Creator", body: "A React-based character creation experience connecting digital customization with tangible physical character assets.", skills: ["web", "product"] },
  { tag: "AI & robotics", title: "Data Operations", body: "Contributing to AI and robotics development through structured data creation and technology-focused workflows.", skills: ["ai"] },
];

const contact = {
  email: "zioncreativestudios@gmail.com",
  linkedin: "https://www.linkedin.com/in/j-b-zion/",
  website: "https://jbzioncreativetech.netlify.app/",
  github: "https://github.com/pand3m1x",
};

const targets = ["Creative Technologist", "Associate Product Manager", "Product Operations", "Digital Project Manager", "Experience Architect"];

  const $ = (id) => document.getElementById(id);
  if (!$('rz-timeline')) return;
  const el = (tag, cls, text) => { const n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; };
  let filter = 'all';
  const open = new Set();

  $('rz-targets').replaceChildren(...targets.map((t) => el('span', 'rz-chip', t)));

  const renderFilters = () => {
    $('rz-filter').replaceChildren(...[{ id: 'all', label: 'All' }, ...skills].map((s) => {
      const b = el('button', 'rz-filter', s.label);
      b.type = 'button';
      b.setAttribute('aria-pressed', String(filter === s.id));
      b.onclick = () => { filter = s.id; render(); };
      return b;
    }));
    $('rz-blurb').textContent = filter === 'all' ? '' : skills.find((s) => s.id === filter).blurb;
  };

  const shown = () => roles.filter((r) => filter === 'all' || r.skills.includes(filter));

  const renderTimeline = () => {
    const list = shown();
    $('rz-count').textContent = `${list.length} ${list.length === 1 ? 'role' : 'roles'}`;
    $('rz-toggle-all').textContent = list.every((r) => open.has(r.id)) ? 'Collapse all' : 'Expand all';
    $('rz-timeline').replaceChildren(...list.map((r) => {
      const isOpen = open.has(r.id);
      const li = el('li', 'rz-item');
      const dot = el('span', 'rz-dot'); dot.setAttribute('aria-hidden', 'true');
      const btn = el('button'); btn.type = 'button'; btn.setAttribute('aria-expanded', String(isOpen));
      const row = el('div', 'rz-row'); row.append(el('h3', 'rz-org', r.org), el('span', 'rz-when', r.when));
      const role = el('p', 'rz-role', r.title + ' '); role.append(el('span', '', `· ${r.where} · ${r.kind}`));
      btn.append(row, role, el('span', 'rz-more', isOpen ? '− Less' : '+ Details'));
      btn.onclick = () => { open.has(r.id) ? open.delete(r.id) : open.add(r.id); renderTimeline(); };
      const body = el('div', 'rz-body' + (isOpen ? ' is-open' : '')); const inner = el('div');
      const pts = el('ul', 'rz-points'); r.points.forEach((p) => pts.append(el('li', '', p))); inner.append(pts);
      if (r.achievements) {
        const a = el('div', 'rz-ach'); a.append(el('p', 'rz-eyebrow', 'Key achievements'));
        const ul = el('ul'); r.achievements.forEach((x) => ul.append(el('li', '', x))); a.append(ul); inner.append(a);
      }
      const tags = el('p', 'rz-tags'); r.skills.forEach((s) => tags.append(el('span', 'rz-chip rz-chip-sm', skills.find((k) => k.id === s).label)));
      inner.append(tags); body.append(inner);
      li.append(dot, btn, body);
      return li;
    }));
  };

  const render = () => { renderFilters(); renderTimeline(); };
  $('rz-toggle-all').onclick = () => {
    const list = shown(); const all = list.every((r) => open.has(r.id));
    list.forEach((r) => (all ? open.delete(r.id) : open.add(r.id))); renderTimeline();
  };
  $('rz-mail').onclick = () => { window.location.href = 'mailto:' + contact.email; };
  $('rz-copy').onclick = async () => {
    try { await navigator.clipboard.writeText(contact.email); $('rz-copy').textContent = 'Email copied'; $('rz-status').textContent = 'Email address copied to clipboard.'; }
    catch { $('rz-status').textContent = 'Couldn’t copy the email. Please use Email Jasmine instead.'; }
  };
  render();
})();
