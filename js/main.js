/* ═══════════════════════════════════════════════════════════
   Rise & Bloom — interactions
   ═══════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── Sticky nav shadow on scroll ── */
  const nav = document.getElementById("siteNav");
  if (nav) {
    const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ── Mobile menu ── */
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ── Scroll reveal ── */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  /* ── Newsletter signup ── */
  const form = document.getElementById("signupForm");
  const success = document.getElementById("signupSuccess");
  const emailInput = document.getElementById("email");
  if (!form || !emailInput) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = emailInput.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    if (!valid) {
      emailInput.focus();
      emailInput.setAttribute("aria-invalid", "true");
      return;
    }
    emailInput.removeAttribute("aria-invalid");
    form.querySelector(".signup-row").hidden = true;
    form.querySelector(".signup-note").hidden = true;
    success.hidden = false;
  });
  emailInput.addEventListener("input", () => emailInput.removeAttribute("aria-invalid"));
})();
