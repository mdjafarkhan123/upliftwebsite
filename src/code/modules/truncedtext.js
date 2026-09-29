export function init() {
    const controls = document.querySelectorAll("[data-read-more]");

    controls.forEach((control) => {
        if (control.dataset.readMoreReady) return;

        const contentId = control.getAttribute("aria-controls");
        const content = contentId ? document.getElementById(contentId) : null;
        const label = control.querySelector(".read-more__text");

        if (!content || !label) return;

        const moreLabel = control.dataset.readMoreLabel || "Read more";
        const lessLabel = control.dataset.showLessLabel || "Show less";

        content.classList.add("is-collapsed");
        control.dataset.readMoreReady = "true";

        control.addEventListener("click", () => {
            const isExpanded = control.getAttribute("aria-expanded") === "true";
            const nextExpanded = !isExpanded;

            control.setAttribute("aria-expanded", String(nextExpanded));
            content.classList.toggle("is-collapsed", !nextExpanded);
            label.textContent = nextExpanded ? lessLabel : moreLabel;
        });
    });
}
