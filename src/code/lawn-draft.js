/** Draft entry point follows interaction.js: navigation now, sections on approach. */
import { initMobileMenu } from "./modules/menu.js";
initMobileMenu();

// Quote selection must be ready for service links near the top of the page.
import("./modules/lawn-draft/quote.js").then((module) => module.init());

const modules = {
  ".faq": () => import("./modules/accordion.js"),
  ".comparison": () => import("./modules/lawn-draft/comparison.js"),
  ".projects-section": () => import("./modules/lawn-draft/gallery.js"),
};

function loadSection(element, loader) {
  loader()
    .then((module) => {
      module.init?.();
      element.classList.add("is-enhanced");
    })
    .catch((error) => console.error("Draft enhancement unavailable:", error));
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
