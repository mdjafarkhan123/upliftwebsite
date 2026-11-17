/**
 * nav-spy.js
 * Marks the header link of the section being read with aria-current="true"
 * (styled in critical.css), while scrolling and after a click. A section counts
 * while it crosses a reading line a little below the header; between linked
 * sections (Projects, About…) no link is marked. Does nothing on pages whose
 * header links point elsewhere.
 */
export function initNavSpy() {
    const header = document.querySelector(".header");
    const links = [...document.querySelectorAll(".header__link")]
        .map((link) => {
            const url = new URL(link.href, location.href);
            const onThisPage = url.pathname === location.pathname && url.hash.length > 1;
            const section = onThisPage && document.getElementById(decodeURIComponent(url.hash.slice(1)));
            return section ? { link, section } : null;
        })
        .filter(Boolean);
    if (!links.length) return;

    let current = null;
    let queued = false;

    function update() {
        queued = false;
        const line = (header?.offsetHeight || 0) + window.innerHeight * 0.3;
        const hit = links.find(({ section }) => {
            const box = section.getBoundingClientRect();
            return box.top <= line && box.bottom > line;
        });
        if (hit === current) return;
        current?.link.removeAttribute("aria-current");
        hit?.link.setAttribute("aria-current", "true");
        current = hit;
    }

    function queue() {
        if (queued) return;
        queued = true;
        requestAnimationFrame(update);
    }

    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue);
    update();
}
