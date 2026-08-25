/* =====================================================================
   APP.JS — single source of truth for the portfolio

   Everything you are likely to change lives in PROFILE below. Both pages
   are built from it, so a detail is written once and appears everywhere
   it belongs: the site, the CV, the hero's profile.json card, the page
   titles and the structured data search engines read.

   Anything marked TODO is a placeholder and is not yet true.
   Replace those before sending this to anyone.
   ===================================================================== */

const PROFILE = {

  /* ---- WHO ---------------------------------------------------------- */
  name:      "Micheal Jabour",
  /* The line under your name. A hiring manager reads this and nothing
     else on a first pass, so it should say what you are, not what you
     aspire to. Keep it to one line. */
  title:     "Full-stack developer",
  /* One sentence. What you build, and who for. */
  tagline:   "I build and support the systems retail runs on: e-commerce platforms, internal tools and the operations behind them.",
  location:  "Calgary, Alberta",
  email:     "michel.jabour52@gmail.com",

  /* Shown as a pill above the headline. Set `open` to false when you are
     not looking, and change the text to match. */
  availability: { open: true, text: "Open to full-stack and e-commerce roles" },

  /* ---- LINKS -------------------------------------------------------
     Leave any of these empty and the link is left out rather than
     pointing nowhere. LinkedIn matters more than you would think for a
     first developer role: recruiters search there before anywhere else. */
  links: {
    github:   "https://github.com/michomimi",
    linkedin: "",                                  // TODO: add your LinkedIn URL
    website:  "https://djmishoo.ca",
    cv:       "resume.html",
  },

  /* ---- NUMBERS ------------------------------------------------------
     The strip under the hero. Numbers land harder than adjectives, but
     only because a reader assumes they can be checked — so every one of
     these has a `note` saying where it comes from, and none of them are
     rounded up in your favour. An unverifiable number is worse than no
     number, because it makes the rest of the page look decorative too.

     `value` is what counts up on screen. `suffix` is printed after it
     and is not animated. Delete any row you cannot stand behind. */
  stats: [
    {
      value: 3, suffix: "",
      label: "Sites built and shipped",
      note:  "OneShip, Royal Bake, DJ Mishoo",
    },
    {
      value: 104, suffix: "",
      label: "Dishes on the Royal Bake menu",
      note:  "10 categories, English and Arabic",
    },
    {
      value: 14, suffix: "",
      label: "Locations whose inventory I reconcile",
      note:  "daily, across Kit and Ace",
    },
    {
      value: 0, suffix: "",
      label: "Dependencies in this site",
      note:  "no framework, no build step",
    },
  ],

  /* ---- ABOUT -------------------------------------------------------
     Two or three short paragraphs, first person. Say what you work on,
     what you are good at, and one honest thing about how you work.
     Rewrite all of this: it is a guess at your story, not your story. */
  about: [
    "I am finishing a Computer Information Systems degree at Mount Royal University this fall, majoring in software development and minoring in supply chain. The pairing is deliberate: I spend my days running the back of house for a retail store, and I build the software that the same kind of operation depends on.",
    "So I see e-commerce from both ends. I know what a late shipment looks like on the floor \u2014 the restock that never arrived, the item nobody can find \u2014 as well as what it looks like in an inventory flow or a diagnostic report. Most of what I have built came out of that: a shipping platform, a restaurant menu people actually order from, a booking site that produces its own paperwork.",
    "TODO: read this one and make it sound like you. I work best on the parts most people would rather not take: the integration that keeps breaking, the page that fails in one browser, the process nobody has written down. I would rather finish something small than leave something ambitious half-built.",
  ],

  /* Scannable key/value rows beside the About copy. Short answers to the
     questions that otherwise cost an email each. */
  facts: [
    { k: "Based in",   v: "Calgary, Alberta \u00b7 MT" },
    { k: "Graduating", v: "Fall 2026 \u00b7 Mount Royal University" },
    { k: "Focus",      v: "E-commerce, inventory and internal tools" },
    { k: "Currently",  v: "Building this portfolio" },
    { k: "Open to",    v: "Full-time, hybrid or remote" },
    { k: "Languages",  v: "English, Arabic" },
  ],

  /* ---- EXPERIENCE ---------------------------------------------------
     Newest first. `points` are the bullets under each role.

     Write these as results, not duties. "Cut checkout errors by X" beats
     "responsible for checkout". Numbers, however rough, do more work
     than adjectives. Every point below is a placeholder. */
  experience: [
    {
      role:  "Operational Manager",
      at:    "Kit and Ace",
      when:  "Feb 2024 \u2014 present",
      where: "Calgary, AB",
      points: [
        "Run back of house for a team of 10: inbound shipments, inventory, restock and the logistics that keep the floor stocked.",
        "Rebuilt how back of house is organised \u2014 every item labelled and sorted into boxes and zoned sections \u2014 so staff find stock immediately instead of searching for it.",
        "Before that, stock sat in unsorted piles and staff dug through them to find a size; now they walk straight to it.",
      ],
      stack: ["Operations", "Inventory", "Logistics", "Team of 10"],
    },
    {
      role:  "E-commerce Platform Support",
      at:    "Kit and Ace",
      when:  "May 2026 \u2014 present",
      where: "Remote",
      points: [
        "Helped build oneship.ca, a multi-carrier shipping platform for Canadian merchants, working alongside the development team on the site itself.",
        "Ran diagnostics across the platform \u2014 user experience, technical, accessibility, SEO and security \u2014 producing around thirty-five rated findings, each paired with a recommended fix.",
        "Took the lead on inventory across all 14 Kit and Ace locations: introduced a daily discrepancy tracker every store fills in, and reconciled the adjustments myself each day until system counts stopped drifting from the floor.",
      ],
      stack: ["E-commerce", "Inventory flows", "QA and diagnostics", "Accessibility", "SEO"],
    },
    {
      role:  "Founder and developer",
      at:    "DJ Mishoo",
      when:  "2026 — present",
      where: "Calgary, AB",
      points: [
        "Designed, built and shipped a bilingual English and Arabic site with no framework and no build step, deployed on GitHub Pages.",
        "Built the booking tooling behind it: agreement, invoice and receipt generators, and planner sheets that email themselves.",
        "Handled the whole stack of the thing: design, front end, accessibility, performance, SEO, content security policy and deployment.",
      ],
      stack: ["JavaScript", "CSS", "Accessibility", "English and Arabic", "CI/CD"],
    },
  ],

  /* ---- SKILLS -------------------------------------------------------
     Group by what someone hiring would search for. Be honest: everything
     here is fair game in an interview, and a padded list is worse than a
     short one. Cut anything you would not want to be asked about — right
     now this list claims more than the projects below demonstrate. */
  skills: {
    "Languages":  ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL", "Python"],
    "Front end":  ["React", "Next.js", "Responsive UI", "Accessibility", "Web performance"],
    "Back end":   ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Auth"],
    /* From the Computer Information Systems side of things rather than the
       three sites below. Six groups also sits as an even 3 x 2 on the
       Toolkit grid, where five left a gap-toothed second row. */
    "Systems":    ["Databases", "Networking infrastructure", "Linux"],
    "E-commerce": ["Shopify", "Order and inventory flows", "Payments", "Platform support"],
    "Tools":      ["Git", "GitHub Actions", "VS Code", "Figma", "Vercel"],
  },

  /* ---- PROJECTS -----------------------------------------------------
     Two or three real ones beat ten toy ones. For each, the useful shape
     is: what problem, what you built, what it is made of, and a link to
     both the live thing and the code.

     `shot` is a screenshot at images/projects/<file>. Leave it empty and
     the card shows the initials instead of a broken image. */
  projects: [
    {
      name: "DJ Mishoo",
      role: "Design, build and deploy",
      blurb: "A bilingual booking site for a Calgary DJ. English and Arabic with full right-to-left support, a document generator that produces agreements, invoices and receipts in the browser, and planner sheets clients fill in and send. No framework, no build step, and it scores clean on performance and accessibility.",
      stack: ["JavaScript", "CSS", "English and Arabic", "GitHub Pages", "CSP"],
      live: "https://djmishoo.ca",
      code: "https://github.com/michomimi/micheals-new-dj-website",
      shot: "",
    },
    {
      name: "OneShip",
      role: "Build collaboration and site audit",
      blurb: "A multi-carrier shipping platform for Canadian merchants, built over roughly a year with the development team. I worked on the site itself and on the online inventory flow, then ran a five-part inspection of the result \u2014 user experience, technical, accessibility, SEO and security \u2014 producing around thirty-five rated findings, each paired with a recommended fix.",
      /* These chips describe the work, not the technology: the repo is no
         longer accessible, so the app's actual stack is not something I
         can state. Add it if you remember it. */
      stack: ["E-commerce", "Inventory flows", "UX audit", "WCAG", "SEO"],
      live: "https://oneship.ca",
      code: "",                                      // no longer have repo access
      shot: "",
    },
    {
      name: "Royal Bake",
      role: "Design and build",
      blurb: "A Mediterranean restaurant in northeast Calgary. Six pages and a menu of 104 dishes across ten categories, every one named in both English and Arabic, with per-size pricing and an order cart. Built to be read on a phone at the table, and to hand off to DoorDash, Skip or Uber Eats without getting in the way.",
      stack: ["JavaScript", "CSS", "English and Arabic", "GitHub Pages"],
      live: "https://michomimi.github.io/royal-bake/",
      code: "https://github.com/michomimi/royal-bake",
      shot: "",
    },
  ],

  /* ---- EDUCATION AND CERTIFICATIONS ---------------------------------
     Delete this array entirely if it does not apply — the CV renderer
     skips the whole section when it is empty, which is far better than
     printing a heading with nothing under it. */
  education: [
    {
      what:  "Computer Information Systems \u2014 major in Software Development, minor in Supply Chain",
      where: "Mount Royal University",
      when:  "Graduating Fall 2026",
      note:  "",
    },
  ],
};

/* =====================================================================
   Everything below renders the pages from PROFILE. You should not need
   to edit any of it to change content.
   ===================================================================== */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

/* Two-digit counter labels: 01, 02 … Used on projects, stats and skills
   so the eye can hold its place while skimming. */
const pad2 = (n) => String(n).padStart(2, "0");

const initials = (s) => {
  const words = s.split(/\s+/).filter(Boolean);
  /* Two words give two initials. A single word like "OneShip" would give
     one lonely letter in the screenshot placeholder, so it gets its first
     two characters instead. */
  const out = words.length > 1
    ? words.slice(0, 2).map((w) => w[0]).join("")
    : (words[0] || "").slice(0, 2);
  return out.toUpperCase();
};

const host = (url) => String(url || "").replace(/^https?:\/\//, "").replace(/\/$/, "");

/* Small inline icons. Inline rather than an icon font so there is no
   extra request and they inherit the colour around them. */
const ICON = {
  external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6"/><path d="M20 4L10 14"/><path d="M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>',
  code:     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6l-5 6 5 6"/><path d="M16 6l5 6-5 6"/></svg>',
  mail:     '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  pin:      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-4.5-7-10a7 7 0 0114 0c0 5.5-7 10-7 10z"/><circle cx="12" cy="11" r="2.5"/></svg>',
  github:   '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-4 1.3-4-2-6-2.5m12 4v-3.3a3 3 0 00-.8-2.3c2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.7 11.7 0 00-6 0C6.5 2.2 5.5 2.5 5.5 2.5a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004 8.9c0 4.7 2.8 5.7 5.5 6a3 3 0 00-.8 2.3V21"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 014 0v4"/></svg>',
  doc:      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/></svg>',
  arrow:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>',
  menu:     '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  close:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12"/><path d="M18 6L6 18"/></svg>',
  theme:    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>',
};

/* =====================================================================
   HEADER, MOBILE NAV AND FOOTER
   ===================================================================== */
const NAV = [
  { href: "#work",       label: "work" },
  { href: "#experience", label: "experience" },
  { href: "#about",      label: "about" },
  { href: "#skills",     label: "skills" },
  { href: "#contact",    label: "contact" },
];

function injectShell() {
  const onCv = document.body.dataset.page === "resume";
  /* Section links are bare fragments on the home page and absolute
     everywhere else. On 404.html a bare "#work" points at a section that
     is not on that page, so the link silently does nothing. */
  const onHome = document.body.dataset.page === "home";
  const base = onHome ? "" : "index.html";

  const navLinks = NAV.map((n, i) =>
    `<a href="${base}${n.href}" data-i="${pad2(i + 1)}">${esc(n.label)}</a>`).join("");

  document.body.insertAdjacentHTML("afterbegin", `
    <div class="backdrop" aria-hidden="true"></div>
    <a class="skip" href="#main">Skip to content</a>

    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html">
          <span class="brand-mark" aria-hidden="true">${esc(initials(PROFILE.name))}</span>
          ${esc(PROFILE.name.split(" ")[0])}<span>.</span>
        </a>

        ${onCv ? "" : `<nav class="nav" aria-label="Main">${navLinks}</nav>`}

        <div class="header-actions">
          ${onCv
            ? `<a class="btn btn-ghost" href="index.html">Back to site</a>
               <button class="btn btn-primary no-print" type="button" data-print>Print or save PDF</button>`
            : `<a class="btn btn-ghost" href="${esc(PROFILE.links.cv)}">${ICON.doc} CV</a>
               <a class="btn btn-primary" href="mailto:${esc(PROFILE.email)}">Get in touch</a>`}

          <button class="icon-btn" id="themeToggle" type="button"
                  aria-label="Switch between light and dark theme" title="Switch theme">
            ${ICON.theme}
          </button>

          ${onCv ? "" : `
          <button class="icon-btn nav-toggle" id="navToggle" type="button"
                  aria-label="Open menu" aria-expanded="false" aria-controls="mobileNav">
            ${ICON.menu}
          </button>`}
        </div>
      </div>
    </header>

    ${onCv ? "" : `
    <nav class="mobile-nav" id="mobileNav" aria-label="Mobile">
      ${NAV.map((n, i) =>
        `<a href="${base}${n.href}"><i>${pad2(i + 1)}</i>${esc(n.label)}</a>`).join("")}
      <a href="${esc(PROFILE.links.cv)}"><i>${pad2(NAV.length + 1)}</i>cv</a>
    </nav>`}`);

  const year = new Date().getFullYear();
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <p>&copy; ${year} ${esc(PROFILE.name)} — hand-built, no framework</p>
        <div class="footer-links">
          <a href="mailto:${esc(PROFILE.email)}">email</a>
          ${PROFILE.links.github ? `<a href="${esc(PROFILE.links.github)}" target="_blank" rel="noopener">github</a>` : ""}
          ${PROFILE.links.linkedin ? `<a href="${esc(PROFILE.links.linkedin)}" target="_blank" rel="noopener">linkedin</a>` : ""}
          <a href="${esc(PROFILE.links.cv)}">cv</a>
        </div>
      </div>
    </footer>`);
}

/* The print button is wired here rather than with an inline onclick, so
   the page stays compatible with a strict content security policy. */
function initPrint() {
  const btn = $("[data-print]");
  if (btn) btn.addEventListener("click", () => window.print());
}

/* ---------- mobile menu ----------
   Closes on a link, on Escape, and when the viewport grows past the
   breakpoint — otherwise the panel can be left open and invisible. */
function initMobileNav() {
  const btn = $("#navToggle");
  const panel = $("#mobileNav");
  if (!btn || !panel) return;

  const setOpen = (open) => {
    panel.classList.toggle("is-open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    btn.innerHTML = open ? ICON.close : ICON.menu;
  };

  btn.addEventListener("click", () => setOpen(!panel.classList.contains("is-open")));
  $$("a", panel).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => {
    if (e.matches) setOpen(false);
  });
}

/* ---------- theme ----------
   The choice is stored; while nothing is stored the site follows the
   operating system, including a change made while the page is open. */
const THEME_KEY = "portfolio-theme";
function initTheme() {
  const btn = $("#themeToggle");
  if (!btn) return;
  btn.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(THEME_KEY, next); } catch { /* private mode */ }
  });
}

/* =====================================================================
   HERO
   ===================================================================== */
function renderHero() {
  const el = $("[data-hero]");
  if (!el) return;
  const a = PROFILE.availability;
  const city = PROFILE.location.split(",")[0];

  el.innerHTML = `
    ${a && a.text
      ? `<p class="status reveal">${a.open ? "<i></i>" : ""}${esc(a.text)}</p>`
      : ""}

    <h1 class="h-display reveal d1">
      ${esc(PROFILE.title.replace(/\.$/, ""))}
      <em>in ${esc(city)}</em>
    </h1>

    <p class="lead reveal d2">${esc(PROFILE.tagline)}</p>

    <div class="hero-cta reveal d3">
      <a class="btn btn-primary" href="#work">See the work ${ICON.arrow}</a>
      <a class="btn btn-ghost" href="${esc(PROFILE.links.cv)}">${ICON.doc} Read the CV</a>
      ${PROFILE.links.github
        ? `<a class="btn btn-ghost" href="${esc(PROFILE.links.github)}" target="_blank" rel="noopener">${ICON.github} GitHub</a>`
        : ""}
    </div>

    <div class="hero-meta reveal d4">
      <div>location<b>${esc(PROFILE.location)}</b></div>
      <div>email<b>${esc(PROFILE.email)}</b></div>
      <div>status<b>${esc(a && a.open ? "available" : "not looking")}</b></div>
    </div>`;
}

/* ---------- the profile.json card ----------
   A portrait substitute. It says "developer" faster than a paragraph
   does, and because it is rendered from PROFILE it can never claim
   something the rest of the page does not. */
function renderCodeCard() {
  const el = $("[data-code]");
  if (!el) return;

  const a = PROFILE.availability;
  const stack = (PROFILE.skills["Languages"] || []).slice(0, 3);

  /* Keys are padded to a common width so the values line up in a column,
     which is most of what makes a block of JSON look deliberate. */
  const KEYW = 11;
  const pad = (k) => " ".repeat(Math.max(1, KEYW - k.length));

  const key = (k) => `<span class="t-key">"${esc(k)}"</span><span class="t-punc">:</span>${pad(k)}`;
  const str = (v) => `<span class="t-str">"${esc(v)}"</span>`;
  const comma = '<span class="t-punc">,</span>';

  const lines = [
    `<span class="t-punc">{</span>`,
    `  ${key("name")}${str(PROFILE.name)}${comma}`,
    `  ${key("role")}${str(PROFILE.title)}${comma}`,
    `  ${key("based")}${str(PROFILE.location)}${comma}`,
    `  ${key("stack")}<span class="t-punc">[</span>${
        stack.map(str).join('<span class="t-punc">, </span>')}<span class="t-punc">]</span>${comma}`,
    `  ${key("shipping")}<span class="t-num">true</span>${comma}`,
    `  ${key("available")}<span class="t-num">${a && a.open ? "true" : "false"}</span>`,
    `<span class="t-punc">}</span>`,
  ];

  el.innerHTML = `
    <div class="code-card reveal d2">
      <div class="code-bar">
        <span class="code-dots" aria-hidden="true"><i></i><i></i><i></i></span>
        <span class="code-name">profile.json</span>
        <span class="code-tag">${esc(a && a.open ? "hiring me is open" : "not looking")}</span>
      </div>
      <div class="code-body">
        ${lines.map((l, i) => `
          <div class="code-line"><span class="ln" aria-hidden="true">${i + 1}</span><span>${l}</span></div>
        `).join("")}
      </div>
    </div>`;
}

/* =====================================================================
   TICKER

   Built from the same skills object as the Toolkit section, then printed
   twice: the animation slides the track exactly half its width, so the
   second copy is in the first copy's place when it loops and the seam
   never shows.
   ===================================================================== */
function renderTicker() {
  const el = $("[data-ticker]");
  if (!el) return;
  const items = Object.values(PROFILE.skills).flat();
  const run = items.map((s) => `<span class="ticker-item">${esc(s)}</span>`).join("");
  el.innerHTML = `<div class="ticker-track">${run}${run}</div>`;
}

/* =====================================================================
   STATS
   ===================================================================== */
function renderStats() {
  const el = $("[data-stats]");
  if (!el || !PROFILE.stats) return;
  el.innerHTML = PROFILE.stats.map((s, i) => `
    <div class="stat reveal ${i ? "d" + Math.min(i, 4) : ""}">
      <span class="stat-idx">${pad2(i + 1)}</span>
      <p class="stat-num"><span data-count="${esc(s.value)}">0</span>${
        s.suffix ? `<span class="unit">${esc(s.suffix)}</span>` : ""}</p>
      <p class="stat-label">${esc(s.label)}</p>
      ${s.note ? `<p class="stat-note">${esc(s.note)}</p>` : ""}
    </div>`).join("");
}

/* =====================================================================
   PROJECTS, EXPERIENCE, ABOUT, SKILLS, CONTACT
   ===================================================================== */
function renderProjects() {
  const el = $("[data-projects]");
  if (!el) return;
  el.innerHTML = PROFILE.projects.map((p, i) => `
    <article class="project reveal ${i ? "d" + Math.min(i, 4) : ""}">
      <div class="project-shot">
        <span class="project-idx">${pad2(i + 1)}</span>
        ${p.shot
          ? `<img src="${esc(p.shot)}" alt="Screenshot of ${esc(p.name)}" loading="lazy" decoding="async">`
          : `<span class="ph" aria-hidden="true">${esc(initials(p.name))}</span>`}
      </div>
      <div class="project-body">
        ${p.role ? `<p class="project-role">${esc(p.role)}</p>` : ""}
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.blurb)}</p>
        <div class="chips">${(p.stack || []).map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
        ${(p.live || p.code) ? `<div class="project-links">
          ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">${ICON.external} Live site</a>` : ""}
          ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">${ICON.code} Source</a>` : ""}
        </div>` : ""}
      </div>
    </article>`).join("");
}

function renderExperience() {
  const el = $("[data-experience]");
  if (!el) return;
  el.innerHTML = PROFILE.experience.map((r) => `
    <article class="role reveal">
      <p class="role-when"><b>${esc(r.when)}</b>${r.where ? esc(r.where) : ""}</p>
      <div>
        <h3>${esc(r.role)}<span class="role-at">${esc(r.at)}</span></h3>
        <ul>${(r.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${(r.stack || []).length ? `<div class="chips">${
          r.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>` : ""}
      </div>
    </article>`).join("");
}

function renderAbout() {
  const el = $("[data-about]");
  if (!el) return;
  el.innerHTML = `
    <div class="about-copy">
      ${PROFILE.about.map((p) => `<p>${esc(p)}</p>`).join("")}
    </div>
    ${(PROFILE.facts || []).length ? `
      <div class="facts">
        ${PROFILE.facts.map((f) =>
          `<div class="fact"><span>${esc(f.k)}</span><b>${esc(f.v)}</b></div>`).join("")}
      </div>` : ""}`;
}

function renderSkills() {
  const el = $("[data-skills]");
  if (!el) return;
  el.innerHTML = Object.entries(PROFILE.skills).map(([group, list], i) => `
    <div class="skill-group reveal ${i ? "d" + Math.min(i, 4) : ""}">
      <div class="skill-head">
        <span class="skill-idx">${pad2(i + 1)}</span>
        <h3>${esc(group)}</h3>
        <span class="skill-count">${list.length}</span>
      </div>
      <div class="chips">${list.map((s) => `<span class="chip chip-accent">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");
}

function renderContact() {
  const el = $("[data-contact]");
  if (!el) return;

  const card = (icon, label, value, href, external) => !value ? "" : `
    <a class="contact-card reveal" href="${esc(href)}"${
      external ? ' target="_blank" rel="noopener"' : ""}>
      ${icon}<span><b>${esc(label)}</b><span class="v">${esc(value)}</span></span>
    </a>`;

  /* Location is information, not a destination, so it is a div. The old
     build linked it to "#", which looked clickable and went nowhere. */
  const staticCard = (icon, label, value) => `
    <div class="contact-card is-static reveal">
      ${icon}<span><b>${esc(label)}</b><span class="v">${esc(value)}</span></span>
    </div>`;

  el.innerHTML =
    card(ICON.mail, "Email", PROFILE.email, "mailto:" + PROFILE.email) +
    card(ICON.github, "GitHub", host(PROFILE.links.github), PROFILE.links.github, true) +
    card(ICON.linkedin, "LinkedIn", host(PROFILE.links.linkedin), PROFILE.links.linkedin, true) +
    staticCard(ICON.pin, "Based in", PROFILE.location);
}

/* =====================================================================
   THE CV PAGE
   ===================================================================== */
function renderCv() {
  const el = $("[data-cv]");
  if (!el) return;

  const link = (url) => `<a href="${esc(url)}">${esc(host(url))}</a>`;

  el.innerHTML = `
    <header class="cv-head">
      <h1>${esc(PROFILE.name)}</h1>
      <p class="lead" style="margin-top:.5rem">${esc(PROFILE.title)} · ${esc(PROFILE.location)}</p>
      <p class="cv-contact">
        <span>${esc(PROFILE.email)}</span>
        ${PROFILE.links.github ? `<span>${link(PROFILE.links.github)}</span>` : ""}
        ${PROFILE.links.linkedin ? `<span>${link(PROFILE.links.linkedin)}</span>` : ""}
        ${PROFILE.links.website ? `<span>${link(PROFILE.links.website)}</span>` : ""}
      </p>
    </header>

    <section class="cv-section">
      <p class="eyebrow">Profile</p>
      <p>${esc(PROFILE.about[0])}</p>
    </section>

    <section class="cv-section">
      <p class="eyebrow">Experience</p>
      <div class="timeline">${PROFILE.experience.map((r) => `
        <article class="role">
          <p class="role-when"><b>${esc(r.when)}</b>${r.where ? esc(r.where) : ""}</p>
          <div>
            <h3>${esc(r.role)}<span class="role-at">${esc(r.at)}</span></h3>
            <ul>${(r.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
        </article>`).join("")}</div>
    </section>

    <section class="cv-section">
      <p class="eyebrow">Selected projects</p>
      <div class="timeline">${PROFILE.projects
        .filter((p) => !p.name.startsWith("TODO"))
        .map((p) => `
        <article class="role">
          <p class="role-when"><b>${esc(p.role)}</b>${p.live ? esc(host(p.live)) : ""}</p>
          <div>
            <h3>${esc(p.name)}</h3>
            <ul><li>${esc(p.blurb)}</li></ul>
            <p class="stat-note" style="margin-top:.6rem">${esc((p.stack || []).join(" · "))}</p>
          </div>
        </article>`).join("")}</div>
    </section>

    <section class="cv-section">
      <p class="eyebrow">Skills</p>
      ${Object.entries(PROFILE.skills).map(([g, l]) =>
        `<p style="font-size:.93rem;margin-bottom:.4rem"><b>${esc(g)}:</b> ${esc(l.join(", "))}</p>`).join("")}
    </section>

    ${(PROFILE.education || []).length ? `
    <section class="cv-section">
      <p class="eyebrow">Education</p>
      <div class="timeline">${PROFILE.education.map((e) => `
        <article class="role">
          <p class="role-when"><b>${esc(e.when)}</b></p>
          <div>
            <h3>${esc(e.what)}<span class="role-at">${esc(e.where)}</span></h3>
            ${e.note ? `<ul><li>${esc(e.note)}</li></ul>` : ""}
          </div>
        </article>`).join("")}</div>
    </section>` : ""}`;
}

/* =====================================================================
   TITLES AND STRUCTURED DATA

   Written from PROFILE so the tab, the search result and the page can
   never disagree with each other.
   ===================================================================== */
function fillMeta() {
  const suffix = `${PROFILE.name} · ${PROFILE.title}`;
  if (document.body.dataset.page === "resume") document.title = `CV · ${suffix}`;

  $$("[data-fill]").forEach((el) => {
    const key = el.dataset.fill;
    const value = key.split(".").reduce((o, k) => (o || {})[k], PROFILE);
    if (typeof value === "string") el.textContent = value;
  });

  const ld = $("#schema");
  if (ld) {
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: PROFILE.name,
      jobTitle: PROFILE.title,
      description: PROFILE.tagline,
      email: "mailto:" + PROFILE.email,
      url: location.origin + location.pathname.replace(/[^/]*$/, ""),
      address: {
        "@type": "PostalAddress",
        addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA",
      },
      sameAs: [PROFILE.links.github, PROFILE.links.linkedin, PROFILE.links.website].filter(Boolean),
      knowsAbout: Object.values(PROFILE.skills).flat(),
    }, null, 2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  initTheme();
  initMobileNav();
  initPrint();

  renderHero();
  renderCodeCard();
  renderTicker();
  renderStats();
  renderProjects();
  renderExperience();
  renderAbout();
  renderSkills();
  renderContact();
  renderCv();

  fillMeta();
});
