/**
 * Projects section: "Show more" and the project pop-up.
 * Without JavaScript every card is visible and links to its full image.
 * Safe to load when the section is absent.
 */

function initShowMore(section) {
    const button = section.querySelector("[data-projects-more]");
    if (!button) return;
    const items = [...section.querySelectorAll(".projects__item")];

    section.classList.add("projects--collapsed");
    button.hidden = false;

    button.addEventListener("click", () => {
        const revealed = items.filter(
            (item) => getComputedStyle(item).display === "none",
        );
        section.classList.remove("projects--collapsed");
        button.setAttribute("aria-expanded", "true");
        button.hidden = true;
        revealed[0]?.querySelector("a")?.focus();
    });
}

function initDialog(section) {
    const dialog = section.querySelector("[data-project-dialog]");
    if (!dialog || typeof dialog.showModal !== "function") return;

    const cards = [...section.querySelectorAll("[data-project-card]")];
    const slides = [...dialog.querySelectorAll("[data-project-slide]")];
    const title = dialog.querySelector("[data-project-dialog-title]");
    const meta = dialog.querySelector("[data-project-dialog-meta]");
    const visit = dialog.querySelector("[data-project-dialog-visit]");
    const counter = dialog.querySelector("[data-project-dialog-counter]");
    const preview = dialog.querySelector(".project-dialog__preview");
    const closeButton = dialog.querySelector("[data-project-dialog-close]");
    const total = slides.length;
    let current = 0;
    let trigger = null;

    function show(index) {
        current = (index + total) % total;
        const slide = slides[current];
        slides.forEach((item) => (item.hidden = item !== slide));

        title.textContent =
            cards[current]?.querySelector("[data-project-title]")?.textContent.trim() ?? "";
        const category = slide.dataset.category;
        meta.hidden = !category;
        meta.textContent = category ?? "";
        const url = slide.dataset.url;
        visit.hidden = !url;
        if (url) visit.href = url;
        counter.textContent = `${current + 1} ${counter.dataset.separator} ${total}`;
        if (preview) preview.scrollTop = 0;
    }

    cards.forEach((card, index) => {
        card.addEventListener("click", (event) => {
            event.preventDefault();
            trigger = card;
            show(index);
            dialog.showModal();
            closeButton?.focus();
        });
    });

    dialog
        .querySelector("[data-project-dialog-prev]")
        ?.addEventListener("click", () => show(current - 1));
    dialog
        .querySelector("[data-project-dialog-next]")
        ?.addEventListener("click", () => show(current + 1));
    closeButton?.addEventListener("click", () => dialog.close());

    // A click on the backdrop (the dialog element itself) closes it.
    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) dialog.close();
    });

    dialog.addEventListener("close", () => {
        trigger?.focus();
        trigger = null;
    });
}

export function init() {
    const section = document.querySelector(".projects");
    if (!section) return;
    initShowMore(section);
    initDialog(section);
}
