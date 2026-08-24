# Portfolio — Micheal Jabour

Personal portfolio and CV. Plain HTML, CSS and JavaScript: no framework,
no build step, no dependencies. Open `index.html` in a browser and it
runs. Deployed on GitHub Pages.

**Live:** https://michomimi.github.io/portfolio/

---

## Editing it

Almost everything you will want to change is in one place: the `PROFILE`
object at the top of [`js/app.js`](js/app.js). Your name, title, the
availability pill, links, about text, jobs, skills and projects are all
there, and both the site and the CV are built from it. Change a detail
once and it updates everywhere it appears, including the page title and
the structured data search engines read.

Anything currently marked `TODO` is a placeholder I wrote. It is not
true yet. **Replace every one of them before showing this to anybody.**

Find them all with:

```bash
grep -rn "TODO" js/app.js
```

### The three that matter most

1. **Your job bullets.** Write results, not duties. "Cut checkout errors
   by a third" beats "responsible for checkout". A rough number does more
   work than any adjective.
2. **Your LinkedIn URL** in `PROFILE.links.linkedin`. Recruiters search
   there before anywhere else. Leave it empty and the link is left out
   rather than pointing nowhere.
3. **A third project with a back end.** The two currently listed are
   front-end sites. For a full-stack role, one project with
   authentication, a database and an API says more than five static
   sites. Small and finished beats large and abandoned.

---

## Structure

```
index.html        the portfolio itself
resume.html       printable CV, built from the same PROFILE
404.html          not-found page
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

The stylesheet and scripts are linked with a `?v=` version. Bump it when
you change CSS or JS, or returning visitors keep the cached old copy for
up to ten minutes.

---

## Notes on the build

- **Light and dark themes.** Follows the operating system until the
  visitor presses the toggle, after which their choice is remembered.
  The theme is applied by a small inline script before the stylesheet
  paints, so the page never flashes the wrong colour.
- **Reduced motion is respected.** Everything that moves is switched off
  for anyone who has asked their system for less animation.
- **The CV prints properly.** `resume.html` has a print stylesheet that
  strips the navigation, inverts the dark ground to save toner, and
  prints link destinations so a paper copy is still usable. "Print or
  save PDF" in the header is how you produce a PDF to attach to an
  application.
- **No analytics, no cookies, no third-party scripts.** The only outside
  request is the webfont.
