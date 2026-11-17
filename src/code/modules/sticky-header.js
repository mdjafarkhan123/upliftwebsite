/**
 * Phone "Book a call" bar (plan § The homepage, item 1).
 * The bar appears once the hero's button has scrolled away and hides again
 * while the closing call to action is on screen. While it shows, the header's
 * own "Book a call" hides so the page never shows two at once.
 * Pages without the hero button never show the bar.
 */
export function initStickyHeader() {
    const header = document.querySelector(".header");
    const bar = document.querySelector("[data-cta-bar]");
    const heroButton = document.querySelector("[data-hero-book]");
    if (!header || !bar || !heroButton || !("IntersectionObserver" in window))
        return;

    const finalCta = document.querySelector("[data-final-cta]");
    let heroGone = false;
    let finalInView = false;

    const update = () => {
        const show = heroGone && !finalInView;
        bar.classList.toggle("cta-bar--visible", show);
        header.classList.toggle("header--bar-visible", show);
        bar.inert = !show;
    };

    new IntersectionObserver(([entry]) => {
        heroGone =
            !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
        update();
    }).observe(heroButton);

    if (finalCta) {
        new IntersectionObserver(([entry]) => {
            finalInView = entry.isIntersecting;
            update();
        }).observe(finalCta);
    }
    update();
}
