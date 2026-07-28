/**
 * animation.js
 * Lenis smooth scroll + GSAP ScrollTrigger animations.
 * Heaviest module — loaded only on first user interaction
 * or after 10s via interaction.js.
 */

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { throttle } from "./utils.js";

gsap.registerPlugin(ScrollTrigger);

export function initSmoothScroll() {
    const lenis = new Lenis({
        wheelMultiplier: 1.6,
        smoothWheel: true,
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}

export function initScrollTrigger() {
    window.addEventListener(
        "resize",
        throttle(() => {
            ScrollTrigger.refresh();
        }, 300),
    );

    // Add your GSAP ScrollTrigger animations here.
    // Example:
    // gsap.from(".slide-up", {
    //     scrollTrigger: { trigger: ".slide-up", start: "top 90%" },
    //     y: 40,
    //     opacity: 0,
    //     duration: 0.6,
    //     stagger: 0.1,
    // });
}

export function init() {
    initSmoothScroll();
    initScrollTrigger();
}
