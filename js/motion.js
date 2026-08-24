/* =====================================================================
   MOTION.JS — scroll reveal, and the active link in the header

   Deliberately small. A portfolio that stutters while someone scrolls it
   argues against the person who built it, so this uses an observer
   rather than a scroll handler and does nothing under reduced motion.
   ===================================================================== */
(function motion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const qa = (s) => [...document.querySelectorAll(s)];

  /* Content injected by app.js does not exist yet when this file runs, so
     the reveal is set up after that has finished rather than on load. */
  document.addEventListener("DOMContentLoaded", () => {
    const items = qa(".reveal");

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);          // reveal once, then stop watching
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });

    items.forEach((el) => io.observe(el));

    /* Anything already on screen at first paint is shown immediately.
       Without this, whatever sits in the bottom sliver of the viewport
       stays invisible until the visitor happens to scroll. */
    requestAnimationFrame(() => {
      qa(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      });
    });

    /* Header link for the section currently in view. */
    const links = qa(".nav a");
    if (!links.length) return;
    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("is-active",
          a.getAttribute("href") === "#" + e.target.id));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((s) => spy.observe(s));
  });
})();
