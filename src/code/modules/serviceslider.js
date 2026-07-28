/**
 * services-slider.js
 * Splide carousel for the services section.
 * Loaded when the services section approaches the viewport.
 */

import Splide from "@splidejs/splide";

const CONFIG = {
    SPLIDE: {
        type: "loop",
        perPage: 3,
        gap: "2rem",
        arrows: false,
        pagination: false,
        perMove: 1,
    },
    BREAKPOINTS: {
        MOBILE: 640,
        MOBILE_LG: 768,
    },
};

export function init() {
    const splideEl = document.querySelector(".services .splide");
    if (!splideEl) return;

    const splide = new Splide(splideEl, {
        ...CONFIG.SPLIDE,
        breakpoints: {
            [CONFIG.BREAKPOINTS.MOBILE]: { perPage: 1 },
            [CONFIG.BREAKPOINTS.MOBILE_LG]: { perPage: 2 },
        },
    }).mount();

    // External prev/next controls (SliderController component)
    const prevBtns = document.querySelectorAll(
        ".services .slider-controls__btn--prev",
    );
    const nextBtns = document.querySelectorAll(
        ".services .slider-controls__btn--next",
    );

    prevBtns.forEach((btn) =>
        btn.addEventListener("click", () => splide.go("<")),
    );
    nextBtns.forEach((btn) =>
        btn.addEventListener("click", () => splide.go(">")),
    );
}