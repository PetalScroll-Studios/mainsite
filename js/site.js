(() => {
    const header = document.querySelector(".site-header");
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav-links");

    document.documentElement.classList.add("nav-enhanced");
    document.querySelectorAll("[data-year]").forEach((el) => {
        el.textContent = new Date().getFullYear();
    });

    const closeMenu = () => {
        if (!nav || !navToggle) return;
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
    };

    navToggle?.addEventListener("click", () => {
        const open = !nav?.classList.contains("open");
        nav?.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
        navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
            navToggle?.focus();
        }
    });
    document.addEventListener("click", (event) => {
        if (header && !header.contains(event.target)) closeMenu();
    });
    matchMedia("(min-width: 851px)").addEventListener?.("change", closeMenu);

    const updateHeader = () => header?.classList.toggle("scrolled", scrollY > 20);
    updateHeader();
    addEventListener("scroll", updateHeader, { passive: true });

    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
        targets.forEach((el) => el.classList.add("visible"));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12 });
    targets.forEach((el) => observer.observe(el));
})();
