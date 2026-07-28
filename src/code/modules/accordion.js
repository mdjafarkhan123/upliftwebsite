/**
 * accordion.js
 * FAQ accordion — open/close with aria-expanded state.
 * Loaded when the FAQ section approaches the viewport.
 */

export function init() {
    const items = document.querySelectorAll(".faq__item");
    if (!items.length) return;

    items.forEach((item) => {
        const trigger = item.querySelector(".faq__trigger");

        trigger.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");

            // close all
            items.forEach((i) => {
                i.classList.remove("is-open");
                i.querySelector(".faq__trigger").setAttribute(
                    "aria-expanded",
                    "false",
                );
            });

            // toggle clicked
            if (!isOpen) {
                item.classList.add("is-open");
                trigger.setAttribute("aria-expanded", "true");
            }
        });
    });
}
