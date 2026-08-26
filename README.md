# Portfolio — Micheal Jabour

Personal portfolio and CV. Plain HTML, CSS and JavaScript: no framework,
no build step, no dependencies. Open `index.html` in a browser and it
runs. Deployed on GitHub Pages.

**Live:** https://michomimi.github.io/portfolio/

---

## Editing it

Almost everything you will want to change is in one place: the `PROFILE`
object at the top of [`js/app.js`](js/app.js). Your name, title, the
availability pill, links, the four numbers in the stats strip, the
about text and its fact rows, jobs, skills and projects are all there,
and both the site and the CV are built from it. Change a detail
once and it updates everywhere it appears, including the page title and
the structured data search engines read.

Anything currently marked `TODO` is a placeholder I wrote. It is not
true yet. **Replace every one of them before showing this to anybody.**

Find them all with:

```bash
grep -rn "TODO" js/app.js
```

### The four that matter most

1. **Your job bullets.** Write results, not duties. "Cut checkout errors
   by a third" beats "responsible for checkout". A rough number does more
   work than any adjective.
2. **The numbers in `PROFILE.stats`.** They are the first thing the eye
   lands on after the headline, and a reader trusts them precisely
   because they look checkable. Each one carries a `note` saying where it
   comes from. Delete any row you cannot stand behind — three true
   numbers beat four with one invented.
3. **Your LinkedIn URL** in `PROFILE.links.linkedin`. Recruiters search
   there before anywhere else. Leave it empty and the link is left out
   rather than pointing nowhere.
4. **A third project with a back end.** The two currently listed are
   front-end sites. For a full-stack role, one project with
   authentication, a database and an API says more than five static
   sites. Small and finished beats large and abandoned.

One more, which is not a TODO so it is easy to miss: the **skills list
claims more than the projects demonstrate**. React, Next.js, TypeScript,
PostgreSQL and MongoDB are all listed, and every project shown is
vanilla HTML, CSS and JavaScript. Everything in that list is fair game
in an interview. Cut what you would not want to be asked about.

---

## Structure

```
index.html        the portfolio itself
resume.html       the resume, built from the same PROFILE
404.html          not-found page
Micheal-Jabour-Resume.pdf    generated from resume.html
css/styles.css    the whole design system, one file, commented by section
js/app.js         PROFILE plus the renderers that build each page
js/motion.js      scroll reveal and the active nav link
images/           screenshots and the link-preview card
```

### Adding a project screenshot

Drop an image in `images/projects/` and point at it:

```js
{ name: "Something", shot: "images/projects/something.jpg", ... }
```

Leave `shot` empty and the card shows the project's initials instead of
a broken image, which is why the cards look complete before you have any
screenshots.

---

## Running it locally

No tooling needed, but a plain `file://` open will not behave exactly
like the real thing, so use a local server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

Push to `main`. GitHub Pages builds automatically, usually within a
minute. Nothing to run.

The stylesheet and scripts are linked with a `?v=` version, currently
`v=2`. Bump it in all three HTML files when you change CSS or JS, or
returning visitors keep the cached old copy for up to ten minutes.

Asset paths are relative on purpose. This is a project site served from
`/portfolio/`, so a root-absolute `/favicon.ico` asks the domain root
for a file that is not there. Relative paths work both on Pages and on a
local server. The exception is the two buttons on `404.html`: that page
is served for *any* wrong path, so its links are absolute or they
resolve against whatever the visitor mistyped.

---

## Notes on the build

- **The look.** Near-black ground with a faint engineering grid behind
  it, one electric accent, and monospaced labels on anything that is
  data rather than prose — borrowed from developer tooling rather than
  from the usual agency landing page. Space Grotesk sets the headings,
  Inter the body, JetBrains Mono the labels and the hero card.
- **The hero card** is a rendered `profile.json`, built from `PROFILE`
  like everything else, so it cannot drift from the rest of the page.
- **The numbers count up** when they scroll into view, and a timer
  guarantees the final figure even if the browser suspends the
  animation. A counter frozen part-way reads as a broken number.
- **Light and dark themes.** Follows the operating system until the
  visitor presses the toggle, after which their choice is remembered.
  The theme is applied by a small inline script before the stylesheet
  paints, so the page never flashes the wrong colour.
- **Reduced motion is respected.** Everything that moves is switched off
  for anyone who has asked their system for less animation.
- **The resume prints properly.** `resume.html` has a print stylesheet that
  strips the navigation, inverts the dark ground to save toner, and
  prints link destinations so a paper copy is still usable. "Print or
  save PDF" in the header is how you produce a PDF to attach to an
  application.
- **No analytics, no cookies, no third-party scripts.** The only outside
  request is the webfont.


---

## Regenerating the resume files

Both downloads are generated, never hand-edited — edit `PROFILE` and
rebuild, or the resume and the site will start disagreeing with each
other. The site must be running locally first.

```bash
python3 -m http.server 8080

# PDF: printed from resume.html, so it inherits the print stylesheet
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --no-pdf-header-footer \
  --print-to-pdf="Micheal-Jabour-Resume.pdf" \
  http://127.0.0.1:8080/resume.html
```

The site offers the PDF only. `PROFILE.links.resumeDocx` is empty on
purpose, and the Word button is omitted whenever it is — a .docx hands
an employer an editable file whose layout drifts between Word versions.
A Word copy can still be generated for your own use; it just does not
ship with the site.

Projects carry an optional `short` field. The site shows the full
`blurb`; the resume uses `short` where it exists, because a paragraph
that reads well on a web page costs a resume most of a page. Without the
short versions this runs to three pages instead of two.
