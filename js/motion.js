/* =====================================================================
   MOTION.JS — scroll reveal, counting numbers, header state, active link

   Deliberately small. A portfolio that stutters while someone scrolls it
   argues against the person who built it, so everything here is driven
   by IntersectionObserver rather than a scroll handler, and every effect
   is switched off under prefers-reduced-motion.
   ===================================================================== */
(function motion() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const qa = (s) => [...document.querySelectorAll(s)];

  /* Content injected by app.js does not exist yet when this file runs, so
     everything is set up after that has finished rather than on load. */
  document.addEventListener("DOMContentLoaded", () => {

    /* ---------- header: draw its underline only once the page moves ----
       One boolean toggled from a passive listener. Cheap enough that it
       runs even under reduced motion, because it is state, not motion. */
    const header = document.querySelector(".site-header");
    if (header) {
      const onScroll = () => header.classList.toggle("is-stuck", window.scrollY > 8);
      addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* ---------- counting numbers ----------
       Counts to the value in data-count over ~1.5s, eased so it slows as
       it lands. Runs once, when the number first comes into view. */
    const counters = qa("[data-count]");

    const runCount = (el) => {
      const target = parseFloat(el.dataset.count);
      if (!isFinite(target)) return;
      /* Match the source's decimal places, so 99.9 does not land on 100. */
      const dp = (String(el.dataset.count).split(".")[1] || "").length;
      const dur = 1500;
      let t0 = null, done = false;

      const land = () => { done = true; el.textContent = target.toFixed(dp); };

      const tick = (now) => {
        if (done) return;
        if (t0 === null) t0 = now;
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);          // ease-out cubic
        if (p < 1) { el.textContent = (target * eased).toFixed(dp); requestAnimationFrame(tick); }
        else land();                                    // exact on the last frame
      };
      requestAnimationFrame(tick);

      /* Safety net. Browsers throttle or suspend rAF for pages they think
         are not visible, and a counter frozen at 83 on the way to 100 does
         not read as an animation — it reads as a broken number. A timer
         is not subject to the same suspension, so the figure always ends
         up correct even if the animation never gets to finish. */
      setTimeout(land, dur + 150);
    };

    /* ---------- pause animation that has scrolled off screen ----------
       The sheen animates background-position, which no browser can hand
       to the compositor: every frame repaints the text of every element
       running it. A dozen of those ticking at once, most of them off
       screen, is work the scroll has to compete with. The ticker and the
       availability pulse are cheaper but equally pointless once out of
       view. Each is parked until it comes back. */
    const animated = qa(".ticker, .eyebrow, .stat-note, .site-footer p, .status");
    if (animated.length && "IntersectionObserver" in window) {
      const idle = new IntersectionObserver((entries) => {
        entries.forEach((e) => e.target.classList.toggle("anim-idle", !e.isIntersecting));
      }, { rootMargin: "120px 0px" });   /* wake just before it is needed */
      animated.forEach((el) => {
        el.classList.add("anim-idle");
        idle.observe(el);
      });
    }

    /* ---------- scroll reveal ---------- */
    const items = qa(".reveal");

    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
      counters.forEach((el) => {
        const v = parseFloat(el.dataset.count);
        el.textContent = isFinite(v)
          ? v.toFixed((String(el.dataset.count).split(".")[1] || "").length)
          : el.dataset.count;
      });
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

    const countIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        runCount(e.target);
        countIo.unobserve(e.target);
      });
    }, { threshold: 0.4 });

    counters.forEach((el) => countIo.observe(el));

    /* Anything already on screen at first paint is shown immediately.
       Without this, whatever sits in the bottom sliver of the viewport
       stays invisible until the visitor happens to scroll. */
    requestAnimationFrame(() => {
      qa(".reveal:not(.in)").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
      });
    });

    /* ---------- active header link for the section in view ----------
       Only same-page fragment links take part. Elsewhere the nav points
       at "index.html#work", which is not a valid selector and would
       throw rather than politely return nothing. */
    const links = qa(".nav a").filter((a) => (a.getAttribute("href") || "").startsWith("#"));
    if (!links.length) return;

    const sections = links
      .map((a) => document.querySelector(a.getAttribute("href")))
      .filter(Boolean);

    /* ---------- the travelling light behind the nav ----------
       A single element that slides to whichever link is current, and
       follows the pointer on hover before returning to the section you
       are actually in. */
    const glow = document.querySelector(".nav-glow");
    let current = null;

    const moveTo = (el) => {
      if (!glow || !el) return;
      /* offsetLeft is measured against .nav, which is position:relative
         and therefore the offset parent. */
      glow.style.width = el.offsetWidth + "px";
      glow.style.transform = `translateX(${el.offsetLeft}px)`;
      glow.classList.add("on");
    };
    const restore = () => (current ? moveTo(current) : glow && glow.classList.remove("on"));

    links.forEach((a) => a.addEventListener("mouseenter", () => moveTo(a)));
    const navEl = document.querySelector(".nav");
    if (navEl) navEl.addEventListener("mouseleave", restore);

    /* Links shift when the viewport resizes, and a glow left at the old
       coordinates would sit under nothing. */
    let rt;
    addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(restore, 120);
    }, { passive: true });

    const spy = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((a) => a.classList.toggle("is-active",
          a.getAttribute("href") === "#" + e.target.id));
        current = links.find((a) => a.classList.contains("is-active")) || null;
        if (!navEl || !navEl.matches(":hover")) restore();
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach((s) => spy.observe(s));
  });
})();
