/**
 * testimonial-slider.js
 * Splide carousel for the testimonials section.
 * Loaded when the testimonials section approaches the viewport.
 */

import Splide from "@splidejs/splide";

const CONFIG = {
    // Testimonial-specific config — 1 slide at a time
    SPLIDE_TESTIMONIALS: {
        type: "loop",
        perPage: 1,
        gap: "2rem",
        arrows: false,
        pagination: false,
        perMove: 1,
    },
    BREAKPOINTS: {
        MOBILE: 480,
        MOBILE_MD: 640,
        MOBILE_LG: 768,
    },
};

export function init() {
    const splideEl = document.querySelector(".testimonials .splide");
    if (!splideEl) return;

    const splide = new Splide(splideEl, {
        ...CONFIG.SPLIDE_TESTIMONIALS,
        breakpoints: {
            [CONFIG.BREAKPOINTS.MOBILE]: { perPage: 1 },
            [CONFIG.BREAKPOINTS.MOBILE_MD]: { perPage: 2 },
        },
    }).mount();

    // External prev/next controls (SliderController component)
    const prevBtns = document.querySelectorAll(
        ".testimonials .slider-controls__btn--prev",
    );
    const nextBtns = document.querySelectorAll(
        ".testimonials .slider-controls__btn--next",
    );

    prevBtns.forEach((btn) =>
        btn.addEventListener("click", () => splide.go("<")),
    );
    nextBtns.forEach((btn) =>
        btn.addEventListener("click", () => splide.go(">")),
    );
}
