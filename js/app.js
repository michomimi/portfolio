/* =====================================================================
   APP.JS — single source of truth for the portfolio

   Everything you are likely to change lives in PROFILE below. The pages
   are built from it, so a detail is written once and appears everywhere
   it belongs: the site, the CV page, the page titles and the structured
   data search engines read.

   Anything marked TODO is a placeholder written by me and not yet true.
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

  /* Shown as a pill at the very top. Set `open` to false when you are not
     looking, and change the text to match. */
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

  /* ---- ABOUT -------------------------------------------------------
     Two or three short paragraphs, first person. Say what you work on,
     what you are good at, and one honest thing about how you work.
     Rewrite all of this: it is my guess at your story, not your story. */
  about: [
    "TODO: I work across the stack, from the database to the interface, and I like the parts of the job most people avoid: the integration that keeps breaking, the checkout that fails for one browser, the report nobody can reproduce.",
    "TODO: Day to day I manage operations for a retail store and support the e-commerce platforms behind two national brands, which means I see software from both sides. I know what a broken order looks like on the floor as well as in the logs.",
    "TODO: Outside work I DJ around Calgary, and I built and run the site for it. It is the reason I learned half of what I know about performance, accessibility and shipping something people actually use.",
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
      when:  "TODO: 2023 — present",
      where: "Calgary, AB",
      points: [
        "TODO: What you are accountable for: team size, store performance, stock, scheduling.",
        "TODO: A change you made and what it improved. A number if you have one.",
        "TODO: Anything you automated, reported on, or built a process for.",
      ],
      stack: ["Operations", "Reporting", "Inventory"],
    },
    {
      role:  "E-commerce Platform Support",
      at:    "Kit and Ace · Mastermind Toys",
      when:  "TODO: dates",
      where: "Remote",
      points: [
        "TODO: Which platforms: Shopify, Salesforce Commerce, custom? Say so, it is what people search for.",
        "TODO: What kind of issues you handled, and roughly how many, or how quickly.",
        "TODO: Anything you fixed permanently rather than case by case.",
      ],
      stack: ["E-commerce", "Shopify", "Support", "Troubleshooting"],
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
      stack: ["JavaScript", "CSS", "Accessibility", "i18n", "CI/CD"],
    },
  ],

  /* ---- SKILLS -------------------------------------------------------
     Group by what someone hiring would search for. Be honest: everything
     here is fair game in an interview, and a padded list is worse than a
     short one. Cut anything you would not want to be asked about. */
  skills: {
    "Languages":     ["JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Python"],
    "Front end":     ["React", "Next.js", "Responsive UI", "Accessibility", "Web performance"],
    "Back end":      ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Auth"],
    "E-commerce":    ["Shopify", "Order and inventory flows", "Payments", "Platform support"],
    "Tools":         ["Git", "GitHub Actions", "Figma", "Vercel", "Linux"],
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
      stack: ["JavaScript", "CSS", "i18n / RTL", "GitHub Pages", "CSP"],
      live: "https://djmishoo.ca",
      code: "https://github.com/michomimi/micheals-new-dj-website",
      shot: "",
    },
    {
      name: "Royal Bake",
      role: "Design and build",
      blurb: "TODO: one paragraph on what this is, what problem it solved for them, and what you built.",
      stack: ["HTML", "CSS", "JavaScript"],
      live: "",
      code: "https://github.com/michomimi/royal-bake",
      shot: "",
    },
    {
      name: "TODO: your next project",
      role: "TODO: your part in it",
      blurb: "TODO: The strongest thing you can show a full-stack employer is something with a back end: authentication, a database, an API. If you do not have one yet, build one small and finish it. A finished small thing beats an abandoned big one.",
      stack: ["Node.js", "PostgreSQL", "React"],
      live: "",
      code: "",
      shot: "",
    },
  ],

  /* ---- EDUCATION AND CERTIFICATIONS --------------------------------- */
  education: [
    {
      what:  "TODO: qualification or course",
      where: "TODO: institution",
      when:  "TODO: year",
      note:  "TODO: optional one line. Delete this whole block if it does not apply.",
    },
  ],
};

/* =====================================================================
   Everything below renders the page from PROFILE. You should not need
   to edit it to change content.
   ===================================================================== */

const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (m) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m]));

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
};

const initials = (s) =>
  s.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

/* ---------- header and footer, built once and shared ---------- */
const NAV = [
  { href: "#work",       label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills" },
  { href: "#contact",    label: "Contact" },
];

function injectShell() {
  const onCv = document.body.dataset.page === "resume";
  const nav = onCv ? "" :
    `<nav class="nav" aria-label="Main">${
      NAV.map((n) => `<a href="${n.href}">${esc(n.label)}</a>`).join("")
    }</nav>`;

  document.body.insertAdjacentHTML("afterbegin", `
    <a class="skip" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="brand" href="index.html">${esc(PROFILE.name.split(" ")[0])}<span>.</span></a>
        ${nav}
        <div class="header-actions">
          ${onCv
            ? `<a class="btn btn-ghost" href="index.html">Back to site</a>
               <button class="btn btn-primary no-print" onclick="window.print()">Print or save PDF</button>`
            : `<a class="btn btn-ghost" href="${esc(PROFILE.links.cv)}">CV</a>
               <a class="btn btn-primary" href="mailto:${esc(PROFILE.email)}">Get in touch</a>`}
          <button class="icon-btn" id="themeToggle" type="button"
                  aria-label="Switch theme" title="Switch theme">
            <svg viewBox="0 0 24 24"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
          </button>
        </div>
      </div>
    </header>`);

  const year = new Date().getFullYear();
  document.body.insertAdjacentHTML("beforeend", `
    <footer class="site-footer">
      <div class="wrap footer-inner">
        <p>&copy; ${year} ${esc(PROFILE.name)}. Built from scratch, no framework.</p>
        <div class="footer-links">
          <a href="mailto:${esc(PROFILE.email)}">Email</a>
          ${PROFILE.links.github ? `<a href="${esc(PROFILE.links.github)}" target="_blank" rel="noopener">GitHub</a>` : ""}
          ${PROFILE.links.linkedin ? `<a href="${esc(PROFILE.links.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>` : ""}
          <a href="${esc(PROFILE.links.cv)}">CV</a>
        </div>
      </div>
    </footer>`);
}

/* ---------- theme ----------
   The choice is stored, and while nothing is stored the site follows the
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

/* ---------- sections ---------- */
function renderHero() {
  const el = $("[data-hero]");
  if (!el) return;
  const a = PROFILE.availability;
  el.innerHTML = `
    ${a && a.text ? `<p class="status reveal">${a.open ? "<i></i>" : ""}${esc(a.text)}</p>` : ""}
    <h1 class="reveal d1">${esc(PROFILE.title.replace(/\.$/, ""))} in <em>${esc(PROFILE.location.split(",")[0])}</em></h1>
    <p class="lead reveal d2">${esc(PROFILE.tagline)}</p>
    <div class="hero-cta reveal d3">
      <a class="btn btn-primary" href="#work">See my work</a>
      <a class="btn btn-ghost" href="${esc(PROFILE.links.cv)}">${ICON.doc} Read my CV</a>
      ${PROFILE.links.github ? `<a class="btn btn-ghost" href="${esc(PROFILE.links.github)}" target="_blank" rel="noopener">${ICON.github} GitHub</a>` : ""}
    </div>`;
}

function renderAbout() {
  const el = $("[data-about]");
  if (!el) return;
  el.innerHTML = PROFILE.about.map((p) => `<p style="margin-bottom:1rem">${esc(p)}</p>`).join("");
}

function renderProjects() {
  const el = $("[data-projects]");
  if (!el) return;
  el.innerHTML = PROFILE.projects.map((p, i) => `
    <article class="project reveal ${i ? "d" + Math.min(i, 4) : ""}">
      <div class="project-shot">
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
        <h3>${esc(r.role)} <span class="role-at">${esc(r.at)}</span></h3>
        <ul>${(r.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${(r.stack || []).length ? `<div class="chips">${
          r.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>` : ""}
      </div>
    </article>`).join("");
}

function renderSkills() {
  const el = $("[data-skills]");
  if (!el) return;
  el.innerHTML = Object.entries(PROFILE.skills).map(([group, list], i) => `
    <div class="skill-group reveal ${i ? "d" + Math.min(i, 4) : ""}">
      <h3>${esc(group)}</h3>
      <div class="chips">${list.map((s) => `<span class="chip chip-accent">${esc(s)}</span>`).join("")}</div>
    </div>`).join("");
}

function renderContact() {
  const el = $("[data-contact]");
  if (!el) return;
  const card = (icon, label, value, href, external) => !value ? "" : `
    <a class="contact-card reveal" href="${esc(href)}"${
      external ? ' target="_blank" rel="noopener"' : ""}>
      ${icon}<span><b>${esc(label)}</b><span>${esc(value)}</span></span>
    </a>`;
  el.innerHTML =
    card(ICON.mail, "Email", PROFILE.email, "mailto:" + PROFILE.email) +
    card(ICON.github, "GitHub", PROFILE.links.github.replace(/^https?:\/\//, ""), PROFILE.links.github, true) +
    card(ICON.linkedin, "LinkedIn", PROFILE.links.linkedin.replace(/^https?:\/\//, ""), PROFILE.links.linkedin, true) +
    card(ICON.pin, "Based in", PROFILE.location, "#", false);
}

/* ---------- the CV page ---------- */
function renderCv() {
  const el = $("[data-cv]");
  if (!el) return;
  el.innerHTML = `
    <header class="cv-section" style="margin-bottom:2rem">
      <h1 style="font-size:2rem">${esc(PROFILE.name)}</h1>
      <p class="lead" style="margin-top:.4rem">${esc(PROFILE.title)} · ${esc(PROFILE.location)}</p>
      <p style="margin-top:.5rem;font-size:.92rem">
        ${esc(PROFILE.email)}
        ${PROFILE.links.github ? ` · <a href="${esc(PROFILE.links.github)}">${esc(PROFILE.links.github.replace(/^https?:\/\//, ""))}</a>` : ""}
        ${PROFILE.links.linkedin ? ` · <a href="${esc(PROFILE.links.linkedin)}">${esc(PROFILE.links.linkedin.replace(/^https?:\/\//, ""))}</a>` : ""}
      </p>
    </header>

    <section class="cv-section" style="padding-block:0;margin-bottom:2rem">
      <p class="eyebrow">Profile</p>
      <p>${esc(PROFILE.about[0])}</p>
    </section>

    <section class="cv-section" style="padding-block:0;margin-bottom:2rem">
      <p class="eyebrow">Experience</p>
      <div class="timeline">${PROFILE.experience.map((r) => `
        <article class="role">
          <p class="role-when"><b>${esc(r.when)}</b>${r.where ? esc(r.where) : ""}</p>
          <div>
            <h3>${esc(r.role)} <span class="role-at">${esc(r.at)}</span></h3>
            <ul>${(r.points || []).map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
          </div>
        </article>`).join("")}</div>
    </section>

    <section class="cv-section" style="padding-block:0;margin-bottom:2rem">
      <p class="eyebrow">Selected projects</p>
      <div class="timeline">${PROFILE.projects.filter((p) => !p.name.startsWith("TODO")).map((p) => `
        <article class="role">
          <p class="role-when"><b>${esc(p.role)}</b></p>
          <div>
            <h3>${esc(p.name)}</h3>
            <ul><li>${esc(p.blurb)}</li></ul>
            <p style="font-size:.86rem;color:var(--ink-3);margin-top:.5rem">${esc((p.stack || []).join(" · "))}</p>
          </div>
        </article>`).join("")}</div>
    </section>

    <section class="cv-section" style="padding-block:0;margin-bottom:2rem">
      <p class="eyebrow">Skills</p>
      ${Object.entries(PROFILE.skills).map(([g, l]) =>
        `<p style="font-size:.94rem;margin-bottom:.35rem"><b>${esc(g)}:</b> ${esc(l.join(", "))}</p>`).join("")}
    </section>

    ${PROFILE.education && PROFILE.education.length ? `
    <section class="cv-section" style="padding-block:0">
      <p class="eyebrow">Education</p>
      <div class="timeline">${PROFILE.education.map((e) => `
        <article class="role">
          <p class="role-when"><b>${esc(e.when)}</b></p>
          <div>
            <h3>${esc(e.what)} <span class="role-at">${esc(e.where)}</span></h3>
            ${e.note ? `<ul><li>${esc(e.note)}</li></ul>` : ""}
          </div>
        </article>`).join("")}</div>
    </section>` : ""}`;
}

/* ---------- titles and structured data ----------
   Written from PROFILE so the tab, the search result and the page can
   never disagree with each other. */
function fillMeta() {
  const suffix = `${PROFILE.name} · ${PROFILE.title}`;
  if (document.body.dataset.page === "resume") document.title = `CV · ${suffix}`;
  else if (!document.title) document.title = suffix;

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
      email: "mailto:" + PROFILE.email,
      url: location.origin + location.pathname.replace(/[^/]*$/, ""),
      address: { "@type": "PostalAddress", addressLocality: "Calgary", addressRegion: "AB", addressCountry: "CA" },
      sameAs: [PROFILE.links.github, PROFILE.links.linkedin, PROFILE.links.website].filter(Boolean),
      knowsAbout: Object.values(PROFILE.skills).flat(),
    }, null, 2);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  injectShell();
  initTheme();
  renderHero();
  renderAbout();
  renderProjects();
  renderExperience();
  renderSkills();
  renderContact();
  renderCv();
  fillMeta();
});
