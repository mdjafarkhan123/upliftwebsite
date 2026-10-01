export function init() {
    const strip = document.querySelector(".system-strip");
    if (!strip || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const reveal = () => strip.classList.add("is-revealing");

    if (!("IntersectionObserver" in window)) {
        reveal();
        return;
    }

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (!entry.isIntersecting) return;
            observer.disconnect();
            reveal();
        },
        { threshold: 0.35 },
    );

    observer.observe(strip);
}
