/**
 * lazy.js
 * IntersectionObserver-based lazy loading for:
 *  - Background images   (.lazy-bg[data-bg])
 *  - SVG sprites         (svg[data-sprite][data-icon])
 *
 * Loaded on first interaction via interaction.js.
 */

const ROOT_MARGIN = "100px";

export function initLazyLoad() {
    const lazyBGs = document.querySelectorAll(".lazy-bg");
    const lazySVGs = document.querySelectorAll("svg[data-sprite]");

    // Nothing to observe — exit early
    if (!lazyBGs.length && !lazySVGs.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                const el = entry.target;

                // Background images
                if (el.classList.contains("lazy-bg")) {
                    const bgUrl = el.dataset.bg;
                    if (bgUrl) {
                        el.style.backgroundImage = `url(${bgUrl})`;
                        el.classList.add("loaded");
                        observer.unobserve(el);
                    }
                    return;
                }

                // SVG sprites
                if (el.tagName === "svg" && el.dataset.sprite) {
                    const spritePath = el.dataset.sprite;
                    const iconId = el.dataset.icon;

                    // Inject <use> — browser caches the sprite file automatically
                    const use = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        "use",
                    );
                    // href (not xlink:href — deprecated since SVG 2.0)
                    use.setAttribute("href", `${spritePath}#${iconId}`);
                    el.appendChild(use);
                    el.classList.add("loaded");
                    observer.unobserve(el);
                }
            });
        },
        { rootMargin: ROOT_MARGIN },
    );

    lazyBGs.forEach((el) => observer.observe(el));
    lazySVGs.forEach((el) => observer.observe(el));
}

export function init() {
    initLazyLoad();
}
