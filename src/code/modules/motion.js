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
 * - Hero: the "You" text and the "Us" checklist come in once. Then, like an ad, the "You"
 *   text's worries take turns, each painted in by a stroke of the green highlight, and
 *   light their answers in the "Us" card; its button, a mouse over the text, or scrolling
 *   away stops them.
 * - Services: each newly chosen service settles in (no pinning; Jafar, 2026-11-17).
 * - How it works: a line draws through the steps as you scroll.
 * - Marquees: the service strip and the trade rows scroll sideways forever.
 *
 * Loaded only when reduced motion is off (interaction.js). Every part checks for its
 * elements, so the module is safe on pages without them. Content is only faded with
 * opacity, never hidden, so assistive technology always reads all of it. (The hero
 * worries are a visual copy of a sentence screen readers keep in full.)
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
    // module (Jafar, 2026-11-17). Only the "You" text and the "Us" checklist come in,
    // once; the check icons move with their rows, never on their own (no icon motion).
    const you = hero.querySelector(".hero__you");
    const checks = gsap.utils.toArray(".hero__check", hero);
    // The worries take over the "You" text while it is still held back, so the
    // switch from the full sentence is never seen.
    if (you) initWorries(hero, you);

    const intro = gsap.timeline({ defaults: { ease: EASE } });
    if (you) intro.from(you, { opacity: 0, y: 16, duration: 0.7 }, 0);
    if (checks.length) intro.from(checks, { opacity: 0, x: -12, duration: 0.5, stagger: 0.1 }, 0.15);
    // Both were held back by critical.css until this timeline existed.
    document.documentElement.classList.add("motion-ready");
}

/**
 * The hero's worries, like an ad (Jafar, 2026-11-17). After the lead, "without paying
 * thousands", "without learning tech" and "without losing leads…" take turns. Each one is
 * painted in by a stroke of the green highlight, word by word as one continuous drag, and
 * then its answer in the "Us" card gets the same highlight; the next turn wipes it off the
 * same way. A bar times each worry. The pause button or a mouse over the text stops the
 * turns, and they only run while the text is on screen. Screen readers keep the full
 * sentence, which is only hidden visually.
 */
function initWorries(hero, you) {
    const worries = gsap.utils.toArray(".hero__worry", you);
    const bars = gsap.utils.toArray(".hero__story-bar", you);
    const story = you.querySelector(".hero__story");
    const toggle = you.querySelector(".hero__story-toggle");
    const full = you.querySelector(".hero__you-full");
    const text = you.querySelector(".hero__you-text");
    if (worries.length < 2 || bars.length !== worries.length || !story || !toggle || !full || !text) return;

    full.classList.add("visually-hidden");
    you.classList.add("hero__you--rotating");
    story.hidden = false;

    // Each word carries a piece of the stroke (styled in pages/home/_hero.scss).
    const pieces = worries.map((worry) => {
        worry.innerHTML = worry.textContent
            .trim()
            .split(" ")
            .map((word) => `<span class="hero__paint"><span class="hero__ink">${word}</span></span>`)
            .join(" ");
        return [...worry.querySelectorAll(".hero__paint")];
    });

    // Keep the tallest worry's height, so the text never jumps when a shorter one shows.
    const reserve = () => {
        text.style.minHeight = "";
        let tallest = 0;
        worries.forEach((worry, i) => {
            worries.forEach((other, j) => (other.hidden = i !== j));
            tallest = Math.max(tallest, text.offsetHeight);
        });
        worries.forEach((worry, i) => (worry.hidden = i !== current));
        text.style.minHeight = `${tallest}px`;
    };

    // One continuous drag across the words: each word gets time for its length, and the
    // whole stroke is eased, so it speeds up and settles like a hand.
    const stroke = (index, prop, duration, ease) => {
        const path = gsap.timeline({ paused: true });
        pieces[index].forEach((piece) =>
            path.to(piece, { [prop]: 1, duration: piece.textContent.length + 1, ease: "none" }),
        );
        return gsap.to(path, { progress: 1, duration, ease });
    };

    // Longer worries stay up longer: from about 3.2 s to 4 s for the longest,
    // including the stroke (Jafar asked for a quicker pace, 2026-11-17).
    const hold = (worry) => 2.4 + worry.textContent.trim().length * 0.035;
    let current = 0;
    let timer = null;
    let onScreen = false;
    let hovered = false;
    let paused = false;
    const running = () => onScreen && !hovered && !paused && !document.hidden;
    const sync = () => timer && (running() ? timer.resume() : timer.pause());

    const light = (index) => {
        hero.querySelectorAll(".hero__answer.is-lit").forEach((answer) => answer.classList.remove("is-lit"));
        const key = worries[index].dataset.answer;
        hero.querySelectorAll(`.hero__answer[data-answer="${key}"]`).forEach((answer) =>
            answer.classList.add("is-lit"),
        );
    };

    // Paints a worry in; its answer lights as the stroke lands.
    const paintIn = (index, delay = 0) => {
        gsap.set(pieces[index], { "--p": 0, "--q": 0 });
        worries[index].hidden = false;
        return gsap
            .timeline({ delay })
            .add(stroke(index, "--p", 0.6, "power2.inOut"))
            .from(worries[index].querySelectorAll(".hero__ink"), { filter: "blur(4px)", duration: 0.35, stagger: 0.05 }, 0.05)
            .call(light, [index], 0.45);
    };

    // The bar's fill is the worry's clock: when it is full, the next worry comes in.
    const show = (index) => {
        bars.forEach((bar, i) => gsap.set(bar, { "--fill": i < index ? 1 : 0 }));
        timer = gsap.fromTo(
            bars[index],
            { "--fill": 0 },
            {
                "--fill": 1,
                duration: hold(worries[index]),
                ease: "none",
                paused: !running(),
                onComplete: () => turn((index + 1) % worries.length),
            },
        );
    };

    // The current worry is wiped off, then the next one is painted in.
    const turn = (index) => {
        const leaving = current;
        current = index;
        show(index);
        stroke(leaving, "--q", 0.35, "power2.in").eventCallback("onComplete", () => {
            worries[leaving].hidden = true;
            paintIn(index, 0.05);
        });
    };

    reserve();
    window.addEventListener("resize", reserve);
    // The first worry is painted in as the "You" text comes in.
    paintIn(0, 0.3);
    show(0);

    toggle.addEventListener("click", () => {
        paused = !paused;
        toggle.toggleAttribute("data-paused", paused);
        toggle.setAttribute("aria-label", paused ? toggle.dataset.playLabel : toggle.dataset.pauseLabel);
        sync();
    });
    const hover = (state) => (event) => {
        if (event.pointerType !== "mouse") return;
        hovered = state;
        sync();
    };
    you.addEventListener("pointerenter", hover(true));
    you.addEventListener("pointerleave", hover(false));
    document.addEventListener("visibilitychange", sync);
    const watch = (self) => {
        onScreen = self.isActive;
        sync();
    };
    ScrollTrigger.create({ trigger: you, start: "top bottom", end: "bottom top", onToggle: watch, onRefresh: watch });
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
