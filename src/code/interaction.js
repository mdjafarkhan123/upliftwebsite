/**
 * Shared interaction entry point.
 * Navigation and sticky header behavior are immediate; FAQ behavior loads as its
 * section approaches the viewport.
 */
import { initMobileMenu } from "./modules/menu.js";
import { initStickyHeader } from "./modules/sticky-header.js";
initMobileMenu();
initStickyHeader();

// These change section height, so they load early: a late load would shift the page
// under anyone jumping to a later section from the menu.
if (document.querySelector(".projects")) {
    import("./modules/projects.js").then((module) => module.init?.());
}
const servicesContent = document.querySelector(".services__content");
if (servicesContent) {
    import("./modules/services-tabs.js").then((module) => {
        module.init?.();
        servicesContent.classList.add("is-enhanced");
    });
}

const modules = {
    ".faq": () => import("./modules/accordion.js"),
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
