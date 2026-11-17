/**
 * Shared interaction entry point.
 * Navigation, sticky header, the header's current-section link, and every module that changes section height load
 * at once. Motion loads after the services tabs, unless the visitor asks for
 * reduced motion.
 */
import { initMobileMenu } from "./modules/menu.js";
import { initStickyHeader } from "./modules/sticky-header.js";
import { initNavSpy } from "./modules/nav-spy.js";
initMobileMenu();
initStickyHeader();
initNavSpy();

// These change section height, so they load early: a late load would shift the page
// under anyone jumping to a later section from the menu.
if (document.querySelector(".projects")) {
    import("./modules/projects.js").then((module) => module.init?.());
}
const faq = document.querySelector(".faq");
if (faq) {
    import("./modules/accordion.js").then((module) => {
        module.init?.();
        faq.classList.add("is-enhanced");
    });
}
const servicesContent = document.querySelector(".services__content");
const servicesReady = servicesContent
    ? import("./modules/services-tabs.js").then((module) => {
          module.init?.();
          servicesContent.classList.add("is-enhanced");
      })
    : Promise.resolve();

// critical.css holds the hero text back while <html> has the "motion" class
// (set in Layout.astro); motion.js releases it, and so does any failure here.
const reveal = () => document.documentElement.classList.add("motion-ready");
if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    servicesReady
        .catch(() => {})
        .then(() => import("./modules/motion.js"))
        .then((module) => module.init?.())
        .catch((error) => console.error("Motion unavailable:", error))
        .finally(reveal);
} else {
    reveal();
}

// Section-based modules: loaded as their section approaches. Nothing here may
// change a section's height (see the early loads above).
const modules = {};

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
