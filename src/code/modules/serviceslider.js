import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const LAPTOP_BREAKPOINT = "(min-width: 992px)";
let destroyAnimations = () => {};
let breakpointQuery;
let breakpointListener;

function createAnimations() {
    const cards = document.querySelectorAll(".services__item");
    if (cards.length < 2) return () => {};

    const lastCard = cards[cards.length - 1];
    const triggers = [];

    cards.forEach((card, index) => {
        // Later cards should appear above earlier pinned cards.
        gsap.set(card, { zIndex: index + 1 });

        if (index === cards.length - 1) return;

        const nextCard = cards[index + 1];

        const pinTrigger = ScrollTrigger.create({
            trigger: card,
            start: "top 60px",
            endTrigger: lastCard,
            end: "top 100px",
            pin: true,
            pinSpacing: false,
        });
        triggers.push(pinTrigger);

        const scaleTween = gsap.to(card, {
            scale: 0.9,
            ease: "none",
            scrollTrigger: {
                trigger: card,
                start: "top 100px",
                endTrigger: nextCard,
                end: "top 100px",
                scrub: 1.4,
            },
        });
        triggers.push(scaleTween.scrollTrigger);
    });

    return () => {
        triggers.forEach((trigger) => trigger?.kill());
        ScrollTrigger.refresh();
    };
}

export function init() {
    destroyAnimations();
    breakpointListener &&
        breakpointQuery?.removeEventListener("change", breakpointListener);

    breakpointQuery = window.matchMedia(LAPTOP_BREAKPOINT);
    breakpointListener = ({ matches }) => {
        destroyAnimations();
        destroyAnimations = matches ? createAnimations() : () => {};
    };

    breakpointListener(breakpointQuery);
    breakpointQuery.addEventListener("change", breakpointListener);
}
