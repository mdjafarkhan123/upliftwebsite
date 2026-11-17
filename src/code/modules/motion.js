/**
 * motion.js
 * Site motion (plan topic how-the-site-looks.md § Motion): polished, never in the way.
 * Every animation ends within a second; only the loops and scroll-linked moments run longer.
 *
 * - Smooth scrolling on desktop only (Lenis); phones keep native touch scrolling.
 * - Headings reveal line by line; the green highlight sweeps in behind marked words.
 * - The problem statement fills word by word from faded to full colour as you scroll.
 * - Cards and supporting text rise in as they reach the viewport.
 * - Buttons follow the cursor slightly (fine pointers only).
 * - Hero: the sample feed plays missed call → text → lead → review on a loop.
 * - Services: each newly chosen service settles in (no pinning; Jafar, 2026-11-17).
 * - How it works: a line draws through the steps as you scroll.
 * - Marquees: the service strip and the trade rows scroll sideways forever.
 *
 * Loaded only when reduced motion is off (interaction.js). Every part checks for its
 * elements, so the module is safe on pages without them. Content is only faded with
 * opacity, never hidden, so assistive technology always reads all of it.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const DESKTOP = "(min-width: 992px)";
const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const EASE = "power3.out";
const REVEAL_START = "top 88%";

/* Smooth scrolling ---------------------------------------------------------- */

function scrollPadding() {
    return parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
}

function initSmoothScroll(mm) {
    mm.add(`${DESKTOP} and ${FINE_POINTER}`, () => {
        // Lenis is fetched only here, so phones never download it.
        let cleanup = null;
        let active = true;
        import("lenis").then(({ default: Lenis }) => {
            if (!active) return;
            const lenis = new Lenis({
                // Quicker to follow the wheel than Lenis's default (0.1), and further per notch.
                lerp: 0.14,
                wheelMultiplier: 1.2,
                anchors: { offset: -scrollPadding() },
                // Let dialogs and the phone menu scroll themselves.
                prevent: (node) => Boolean(node.closest?.("dialog, .mobile-menu")),
            });
            lenis.on("scroll", ScrollTrigger.update);
            const tick = (time) => lenis.raf(time * 1000);
            gsap.ticker.add(tick);
            gsap.ticker.lagSmoothing(0);

            // Stop the page behind an open dialog.
            const sync = () => (document.querySelector("dialog[open]") ? lenis.stop() : lenis.start());
            const observer = new MutationObserver(sync);
            document.querySelectorAll("dialog").forEach((dialog) =>
                observer.observe(dialog, { attributes: true, attributeFilter: ["open"] }),
            );

            cleanup = () => {
                observer.disconnect();
                gsap.ticker.remove(tick);
                gsap.ticker.lagSmoothing(500, 33);
                lenis.destroy();
            };
        });

        return () => {
            active = false;
            cleanup?.();
            cleanup = null;
        };
    });
}

/* Headings and the highlight sweep ----------------------------------------- */

function sweepHighlights(scope, delay = 0) {
    const marks = scope.querySelectorAll(".marked-text");
    if (!marks.length) return null;
    const from = getComputedStyle(scope).color;
    const to = [...marks].map((mark) => getComputedStyle(mark).color);
    return gsap.fromTo(
        marks,
        { backgroundSize: "0% 100%", color: from },
        {
            backgroundSize: "100% 100%",
            color: (i) => to[i],
            duration: 0.7,
            ease: "power2.inOut",
            stagger: 0.12,
            delay,
            clearProps: "backgroundSize,color",
        },
    );
}

/**
 * Splits a heading into lines and brings them in one by one, then sweeps its
 * highlight. The split is undone when it ends, so resizing re-wraps normally.
 */
function revealHeading(heading, delay = 0) {
    const split = SplitText.create(heading, { type: "lines", linesClass: "split-line" });
    gsap.set(heading, { opacity: 1 });
    const tl = gsap.timeline({
        delay,
        onComplete: () => {
            split.revert();
            gsap.set(heading, { clearProps: "opacity" });
        },
    });
    // Hold the highlight empty until its line arrives.
    const marks = heading.querySelectorAll(".marked-text");
    if (marks.length) gsap.set(marks, { backgroundSize: "0% 100%" });
    tl.from(split.lines, { yPercent: 40, opacity: 0, duration: 0.8, ease: EASE, stagger: 0.09 });
    const sweep = sweepHighlights(heading);
    if (sweep) tl.add(sweep, 0.35);
    return tl;
}

/**
 * Scroll-linked text fill (Jafar, 2026-11-17): the words stay in place and go from
 * faded to full colour as the page scrolls, and fade back when scrolling up.
 * Only colour changes, never weight, so the lines never re-wrap.
 */
const FILL_TEXT = "#problem-heading";

function initTextFill() {
    document.querySelectorAll(FILL_TEXT).forEach((text) => {
        const split = SplitText.create(text, { type: "words", wordsClass: "fill-word" });
        gsap.fromTo(
            split.words,
            { opacity: 0.2 },
            {
                opacity: 1,
                ease: "none",
                stagger: 0.1,
                scrollTrigger: { trigger: text, start: "top 85%", end: "bottom 40%", scrub: 0.4 },
            },
        );
    });
}

function initHeadings() {
    const headings = document.querySelectorAll(
        `main h2[id$='-heading']:not(.technology__label):not(${FILL_TEXT})`,
    );
    headings.forEach((heading) => {
        gsap.set(heading, { opacity: 0 });
        ScrollTrigger.create({
            trigger: heading,
            start: REVEAL_START,
            once: true,
            onEnter: () => revealHeading(heading),
        });
    });
}

/* Cards and supporting text ------------------------------------------------- */

const RISE = [
    ".technology__label",
    ".technology__logos li",
    "main .badge:not(.hero .badge)",
    ".problem__card",
    ".projects__description",
    ".projects__item",
    ".projects__more",
    ".process__photo",
    ".process__card",
    ".pricing__description",
    ".pricing__card",
    ".pricing__perk",
    ".about__lead",
    ".about__body",
    ".about__aside",
    ".reason__item",
    ".faq__intro .btn",
    ".faq__list > *",
    ".cta__description",
    ".cta__book",
    ".cta__assurances li",
].join(",");

function initRise() {
    const items = gsap.utils.toArray(RISE);
    if (!items.length) return;
    gsap.set(items, { opacity: 0, y: 32 });
    ScrollTrigger.batch(items, {
        start: REVEAL_START,
        once: true,
        onEnter: (batch) =>
            gsap.to(batch, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: EASE,
                stagger: 0.08,
                overwrite: true,
                clearProps: "transform,opacity",
            }),
    });
}

/* Magnetic buttons --------------------------------------------------------- */

function initMagnetic(mm) {
    mm.add(FINE_POINTER, () => {
        const cleanups = [...document.querySelectorAll(".btn")].map((button) => {
            const text = button.querySelector(".btn__text");
            const moveX = gsap.quickTo(button, "x", { duration: 0.4, ease: "power3" });
            const moveY = gsap.quickTo(button, "y", { duration: 0.4, ease: "power3" });
            const textX = text && gsap.quickTo(text, "x", { duration: 0.4, ease: "power3" });

            const onMove = (event) => {
                const box = button.getBoundingClientRect();
                const dx = event.clientX - (box.left + box.width / 2);
                const dy = event.clientY - (box.top + box.height / 2);
                moveX(dx * 0.18);
                moveY(dy * 0.3);
                textX?.(dx * 0.06);
            };
            const onLeave = () => {
                gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)", overwrite: true });
                if (text) gsap.to(text, { x: 0, duration: 0.7, ease: "elastic.out(1, 0.45)", overwrite: true });
            };
            button.addEventListener("pointermove", onMove);
            button.addEventListener("pointerleave", onLeave);
            return () => {
                button.removeEventListener("pointermove", onMove);
                button.removeEventListener("pointerleave", onLeave);
                gsap.set([button, text].filter(Boolean), { clearProps: "transform" });
            };
        });
        return () => cleanups.forEach((cleanup) => cleanup());
    });
}

/* Hero --------------------------------------------------------------------- */

function initHero() {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    // The hero text has no entrance: it paints at once, without waiting for this
    // module (Jafar, 2026-11-17). Only the feed and status card come in.
    const status = hero.querySelector(".status-card");
    const feedWrap = hero.querySelector(".hero__feed-wrap");
    const notes = gsap.utils.toArray(".hero__feed .notification", hero);

    const intro = gsap.timeline({ defaults: { ease: EASE } });
    if (status) intro.from(status, { opacity: 0, y: 40, duration: 0.9 }, 0);
    if (feedWrap) intro.from(feedWrap, { opacity: 0, x: -24, duration: 0.8 }, 0.1);
    if (status) {
        const days = status.querySelectorAll(".status-card__days .is-done");
        intro.from(days, { scaleY: 0.2, opacity: 0, duration: 0.4, stagger: 0.05, transformOrigin: "50% 100%" }, 0.3);
    }
    // The feed and status card were held back by critical.css until this timeline existed.
    document.documentElement.classList.add("motion-ready");

    if (notes.length < 2) return;
    // Missed call → automatic text → new lead → review request, on a loop.
    const loop = gsap.timeline({ repeat: -1, repeatDelay: 0.4, paused: true });
    loop.set(notes, { opacity: 0, y: 14, scale: 0.97 });
    notes.forEach((note, i) => {
        loop.to(note, { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "back.out(1.6)" }, i === 0 ? 0.2 : ">+0.55");
    });
    loop.to(notes, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in", stagger: 0.05 }, ">+2.4");
    intro.call(() => loop.play(), null, 0.6);

    // Run the loop only while the hero is on screen.
    ScrollTrigger.create({
        trigger: hero,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive && intro.progress() === 1 ? loop.play() : loop.pause()),
    });
}

/* Services: a chosen service settles in ----------------------------------- */

function initServices() {
    const content = document.querySelector(".services__content");
    if (!content) return;
    const items = [...content.querySelectorAll(".services__item")];
    content.addEventListener("services:change", ({ detail }) => {
        const item = items[detail.index];
        const parts = item?.querySelectorAll(".services__description, .services__point, .services__phone-wrap");
        if (!parts?.length || item.hidden) return;
        gsap.fromTo(
            parts,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.5, ease: EASE, stagger: 0.04, overwrite: true, clearProps: "transform,opacity" },
        );
    });
}

/* How it works: the line through the steps --------------------------------- */

function initProcess() {
    const list = document.querySelector(".process__steps");
    const steps = list ? [...list.querySelectorAll(".process__step")] : [];
    if (steps.length < 2) return;
    const lines = steps.length - 1;

    ScrollTrigger.create({
        trigger: list,
        start: "top 65%",
        end: "bottom 55%",
        scrub: 0.6,
        onUpdate: (self) => {
            const reached = self.progress * lines;
            steps.forEach((step, i) => {
                const fill = gsap.utils.clamp(0, 1, reached - i);
                step.style.setProperty("--line-fill", `${fill * 100}%`);
                step.classList.toggle("process__step--active", i === 0 || reached >= i - 0.02);
            });
        },
    });
}

/* Marquees ------------------------------------------------------------------- */

/** Loops a track that holds its content twice; direction -1 moves left. */
function loopTrack(track, speed, direction = -1) {
    const half = track.scrollWidth / 2;
    const tween = gsap.fromTo(
        track,
        { xPercent: direction < 0 ? 0 : -50 },
        { xPercent: direction < 0 ? -50 : 0, duration: half / speed, ease: "none", repeat: -1 },
    );
    // Slow down while the cursor rests on it.
    track.addEventListener("pointerenter", () => gsap.to(tween, { timeScale: 0.25, duration: 0.4 }));
    track.addEventListener("pointerleave", () => gsap.to(tween, { timeScale: 1, duration: 0.4 }));
    ScrollTrigger.create({
        trigger: track,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => (self.isActive ? tween.play() : tween.pause()),
    });
    return tween;
}

function initMarquees() {
    const track = document.querySelector(".services__marquee-track");
    if (track) {
        track.closest(".services__marquee")?.classList.add("is-looping");
        loopTrack(track, 40);
    }

    const rows = document.querySelector(".contractors__rows");
    if (!rows) return;
    rows.classList.add("is-looping");
    rows.querySelectorAll(".contractors__row").forEach((row, i) => {
        // A hidden copy closes the loop; the list itself stays as written.
        [...row.children].forEach((trade) => {
            const copy = trade.cloneNode(true);
            copy.removeAttribute("role");
            copy.setAttribute("aria-hidden", "true");
            row.append(copy);
        });
        loopTrack(row, 28 + i * 6, i % 2 ? 1 : -1);
    });
}

/* Start ---------------------------------------------------------------------- */

function watchHeight() {
    // Projects "Show more", the FAQ and late images change the page height.
    let timer;
    let lastHeight = document.body.offsetHeight;
    new ResizeObserver(() => {
        const height = document.body.offsetHeight;
        if (Math.abs(height - lastHeight) < 2) return;
        lastHeight = height;
        clearTimeout(timer);
        timer = setTimeout(() => ScrollTrigger.refresh(), 150);
    }).observe(document.body);
}

export async function init() {
    // Lines must be measured in the final fonts.
    await document.fonts?.ready;
    const mm = gsap.matchMedia();
    initSmoothScroll(mm);
    initHero();
    initServices();
    initProcess();
    initMarquees();
    initTextFill();
    initHeadings();
    initRise();
    initMagnetic(mm);
    watchHeight();
    ScrollTrigger.refresh();
}
