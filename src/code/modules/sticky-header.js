export function initStickyHeader() {
    const header = document.querySelector(".header");
    if (!header) return;

    const update = () => {
        header.classList.toggle("header--compact", window.scrollY > 8);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
}
