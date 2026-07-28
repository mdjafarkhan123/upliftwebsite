/**
 * interaction.js
 * Orchestrator — the only file that loads immediately.
 * Everything else is imported dynamically on demand.
 *
 * Loading strategy:
 *  1. menu.js          → immediate (tiny, must work before interaction)
 *  2. animation.js     → on first user interaction OR after 10s
 *  3. lazy.js          → on first user interaction OR after 10s
 *  4. Section modules  → when their section is 200px from the viewport
 */

// ─────────────────────────────────────────────
// 1. MOBILE MENU — loads immediately, it's ~20 lines
// ─────────────────────────────────────────────
import { initMobileMenu } from "./modules/menu.js";
initMobileMenu();

// ─────────────────────────────────────────────
// 2. CORE (Lenis + GSAP + lazy load)
//    Triggered by first interaction or 10s timeout
// ─────────────────────────────────────────────
let coreLoaded = false;
let coreTimeoutId;

async function loadCore() {
    if (coreLoaded) return;
    coreLoaded = true;

    // Cancel the 10s timeout if interaction fired first
    clearTimeout(coreTimeoutId);

    // Remove all remaining event listeners — only the
    // fired event was removed by once:true, the rest stay
    CORE_EVENTS.forEach((e) => window.removeEventListener(e, loadCore));

    try {
        const [animationModule, lazyModule] = await Promise.all([
            import("./modules/animation.js"),
            import("./modules/lazy.js"),
        ]);
        animationModule.init();
        lazyModule.init();
    } catch (err) {
        console.error("[core] Failed to load:", err);
    }
}

const CORE_EVENTS = [
    "scroll",
    "mousemove",
    "mousedown",
    "touchstart",
    "keydown",
];

CORE_EVENTS.forEach((e) =>
    window.addEventListener(e, loadCore, { once: true, passive: true }),
);

// Fallback — load after 10s even with no interaction
coreTimeoutId = setTimeout(() => {
    CORE_EVENTS.forEach((e) => window.removeEventListener(e, loadCore));
    loadCore();
}, 10000);

// ─────────────────────────────────────────────
// 3. SECTION MODULES — each loads when its section
//    is 200px from entering the viewport
// ─────────────────────────────────────────────
const SECTION_MODULES = {
    ".about": () => import("./modules/truncedtext.js"),
    ".services": () => import("./modules/serviceslider.js"),
    ".testimonials": () => import("./modules/testimonialslider.js"),
    ".faq": () => import("./modules/accordion.js"),
};

const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(async (entry) => {
            if (!entry.isIntersecting) return;

            const selector = entry.target.dataset.lazyModule;
            const loader = SECTION_MODULES[selector];

            if (!loader) return;

            sectionObserver.unobserve(entry.target);

            try {
                const module = await loader();
                module.init?.();
            } catch (err) {
                console.error(
                    `[section] Failed to load module for ${selector}:`,
                    err,
                );
            }
        });
    },
    { rootMargin: "200px" },
);

// Attach observer to each section that has a module
Object.keys(SECTION_MODULES).forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) {
        el.dataset.lazyModule = selector;
        sectionObserver.observe(el);
    }
});
