import { gsap } from "gsap";

/** One quiet activation at a time; all geometry follows the existing layout. */
export function init() {
    const system = document.querySelector(".hero-system");
    if (!system || system.dataset.motionReady) return;
    const core = system.querySelector(".hero-system__core");
    const svg = system.querySelector(".hero-system__connections");
    const nodes = [...system.querySelectorAll(".hero-system__node")];
    const lines = [...system.querySelectorAll(".hero-system__connection")];
    const signals = [...system.querySelectorAll(".hero-system__signal")];
    const gradients = [...svg.querySelectorAll("linearGradient")];
    const geometry = [];
    const PULSE_LENGTH = 0.9;
    /** Draws the glowing comet from the tail to the head; progress runs 0 to 1 + PULSE_LENGTH. */
    const drawPulse = (index, progress) => {
        const { x1, y1, x2, y2 } = geometry[index];
        const point = (t) => [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
        const clamp = (t) => Math.min(Math.max(t, 0), 1);
        const set = (el, from, to) => {
            const [ax, ay] = point(from);
            const [bx, by] = point(to);
            el.setAttribute("x1", ax);
            el.setAttribute("y1", ay);
            el.setAttribute("x2", bx);
            el.setAttribute("y2", by);
        };
        // The gradient keeps its full length so a short segment shows only the faint tail, never a bright dot.
        set(gradients[index], progress - PULSE_LENGTH, progress);
        set(signals[index], clamp(progress - PULSE_LENGTH), clamp(progress));
        signals[index].style.strokeOpacity = Math.min(progress / 0.1, 1);
    };
    const sparks = [...system.querySelectorAll(".hero-system__sparks")];
    const control = system.querySelector(".hero-system__motion");
    if (!core || !svg || !control || nodes.length !== lines.length) return;
    system.dataset.motionReady = "true";
    const ns = "http://www.w3.org/2000/svg";
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    const traces = [...core.querySelectorAll("svg path")].map((path) => {
        const trace = path.cloneNode();
        trace.removeAttribute("fill");
        trace.setAttribute("class", "hero-system__logo-trace");
        trace.setAttribute("pathLength", "1");
        path.parentNode.append(trace);
        return trace;
    });
    sparks.forEach((group) => {
        for (let i = 0; i < 6; i++) {
            const dot = document.createElementNS(ns, "circle");
            dot.setAttribute("r", "1.6");
            group.append(dot);
        }
    });

    const positionLines = () => {
        const panel = system.getBoundingClientRect();
        const center = core.getBoundingClientRect();
        const cx =
            center.left + center.width / 2 - panel.left - system.clientLeft;
        const cy =
            center.top + center.height / 2 - panel.top - system.clientTop;
        svg.setAttribute(
            "viewBox",
            `0 0 ${system.clientWidth} ${system.clientHeight}`,
        );
        nodes.forEach((node, index) => {
            const bounds = node.getBoundingClientRect();
            const dx =
                bounds.left + bounds.width / 2 - center.left - center.width / 2;
            const dy =
                bounds.top + bounds.height / 2 - center.top - center.height / 2;
            const edge = (w, h) =>
                Math.min(
                    w / 2 / Math.abs(dx || 0.001),
                    h / 2 / Math.abs(dy || 0.001),
                );
            const start = edge(center.width, center.height);
            const end = 1 - edge(bounds.width, bounds.height);
            const coords = {
                x1: cx + dx * start,
                y1: cy + dy * start,
                x2: cx + dx * end,
                y2: cy + dy * end,
            };
            geometry[index] = coords;
            Object.entries(coords).forEach(([key, value]) =>
                lines[index].setAttribute(key, value),
            );
            drawPulse(index, 0);
            [...sparks[index].children].forEach((dot, i) => {
                const t = ((i % 3) + 1) / 4;
                const x = coords.x1 + (coords.x2 - coords.x1) * t;
                const y = coords.y1 + (coords.y2 - coords.y1) * t;
                dot.setAttribute("cx", Math.round((x - 10) / 20) * 20 + 10);
                dot.setAttribute(
                    "cy",
                    Math.round((y - 10) / 20) * 20 + 10 + (i < 3 ? -20 : 20),
                );
            });
        });
    };
    positionLines();
    new ResizeObserver(positionLines).observe(system);

    const timeline = gsap.timeline({
        paused: true,
        repeat: -1,
        repeatDelay: 1.4,
        defaults: { autoRound: false },
    });
    const order = [0, 5, 2, 3, 1, 4];
    order.forEach((index, step) => {
        const at = 0.7 + step * 3.6;
        const node = nodes[index];
        const signal = signals[index];
        const pulse = { p: 0 };
        const icon = node.querySelector(".hero-system__icon");
        timeline
            .call(
                () => {
                    nodes.forEach((card) =>
                        card.classList.remove("is-powered"),
                    );
                    signals.forEach((current) =>
                        current.classList.remove("is-powered"),
                    );
                    lines.forEach((connection) =>
                        connection.classList.remove("is-powered"),
                    );
                },
                [],
                at,
            )
            .call(() => node.classList.add("is-powered"), [], at + 1.3)
            .call(
                () => {
                    signal.classList.add("is-powered");
                    lines[index].classList.add("is-powered");
                },
                [],
                at + 1.6,
            );
        timeline
            .fromTo(
                traces,
                { strokeDashoffset: 1, opacity: 0 },
                {
                    strokeDashoffset: 0,
                    opacity: 0.95,
                    duration: 0.65,
                    ease: "power2.inOut",
                },
                at,
            )
            .to(core, { "--core-energy": 1, duration: 0.5 }, at + 0.15)
            .to(traces, { opacity: 0, duration: 0.5 }, at + 0.7)
            .to(core, { "--core-energy": 0, duration: 0.8 }, at + 0.85)
            .fromTo(
                pulse,
                { p: 0 },
                {
                    p: 1 + PULSE_LENGTH,
                    duration: 1.05,
                    ease: "none",
                    repeat: 1,
                    onUpdate: () => drawPulse(index, pulse.p),
                },
                at + 0.55,
            )
            .set(signal, { opacity: 1 }, at + 0.55)
            .to(lines[index], { opacity: 0.65, duration: 0.4 }, at + 0.7)
            .fromTo(
                sparks[index].children,
                { opacity: 0 },
                { opacity: 0.65, duration: 0.3, stagger: 0.07 },
                at + 0.7,
            )
            .to(
                sparks[index].children,
                { opacity: 0, duration: 0.65, stagger: 0.05 },
                at + 1.2,
            )
            .to(node, { "--node-energy": 1, duration: 0.4 }, at + 1.3)
            .to(
                icon,
                { y: -2, scale: 1.08, duration: 0.25, ease: "power2.out" },
                at + 1.35,
            )
            .to(
                icon,
                { y: 0, scale: 1, duration: 0.55, ease: "power2.out" },
                at + 1.6,
            )
            .to(signal, { opacity: 0, duration: 0.2 }, at + 2.5)
            .to(node, { "--node-energy": 0, duration: 0.85 }, at + 2.0)
            .to(lines[index], { opacity: 0.22, duration: 0.8 }, at + 2.0);
    });

    let inView = false;
    let userPaused = false;
    let hovered = -1;
    let focused = -1;
    const update = () => {
        const active = focused !== -1 ? focused : hovered;
        system.classList.toggle(
            "is-motion-paused",
            reducedMotion.matches ||
                !inView ||
                document.hidden ||
                userPaused ||
                active !== -1,
        );
        system.classList.toggle("has-active-node", active !== -1);
        nodes.forEach((node, index) =>
            node.classList.toggle("is-active", index === active),
        );
        lines.forEach((line, index) =>
            line.classList.toggle("is-active", index === active),
        );
        if (reducedMotion.matches) timeline.pause(0);
        else
            timeline.paused(
                !inView || document.hidden || userPaused || active !== -1,
            );
        control.hidden = reducedMotion.matches;
    };
    nodes.forEach((node, index) => {
        node.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                hovered = index;
                update();
            }
        });
        node.addEventListener("pointerleave", () => {
            hovered = -1;
            update();
        });
        node.addEventListener("focus", () => {
            focused = index;
            update();
        });
        node.addEventListener("blur", () => {
            focused = -1;
            update();
        });
    });
    control.addEventListener("click", () => {
        userPaused = !userPaused;
        control.setAttribute("aria-pressed", String(userPaused));
        control.setAttribute(
            "aria-label",
            `${userPaused ? "Resume" : "Pause"} diagram animation`,
        );
        control.firstElementChild.textContent = userPaused ? "▷" : "Ⅱ";
        update();
    });
    new IntersectionObserver(
        ([entry]) => {
            inView = entry.isIntersecting;
            update();
        },
        { threshold: 0.15 },
    ).observe(system);
    document.addEventListener("visibilitychange", update);
    reducedMotion.addEventListener("change", update);
    update();
}
