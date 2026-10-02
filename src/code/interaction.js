/**
 * Shared interaction entry point.
 * Navigation and sticky header behavior are immediate; FAQ behavior loads as its
 * section approaches the viewport.
 */
import { initMobileMenu } from "./modules/menu.js";
import { initStickyHeader } from "./modules/sticky-header.js";
initMobileMenu();
initStickyHeader();

import("./modules/truncedtext.js").then((module) => module.init?.());
if (document.querySelector(".system-strip")) {
    import("./modules/logo-strip.js").then((module) => module.init?.());
}

const modules = {
    ".faq": () => import("./modules/accordion.js"),
    ".hero-system": () => import("./modules/hero-system.js"),
};

function loadSection(element, loader) {
    loader()
        .then((module) => {
            module.init?.();
            element.classList.add("is-enhanced");
        })
        .catch((error) =>
            console.error("Section enhancement unavailable:", error),
        );
}

for (const [selector, loader] of Object.entries(modules)) {
    const element = document.querySelector(selector);
    if (!element) continue;
    if (!("IntersectionObserver" in window)) {
        loadSection(element, loader);
        continue;
    }
    const observer = new IntersectionObserver(
        (entries) => {
            if (!entries.some((entry) => entry.isIntersecting)) return;
            observer.disconnect();
            loadSection(element, loader);
        },
        { rootMargin: "200px" },
    );
    observer.observe(element);
}
