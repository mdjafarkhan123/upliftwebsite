/** Native dialog supplies modal focus containment and Escape handling. */
export function initMobileMenu() {
    const trigger = document.querySelector(".header__menu-toggler");
    const dialog = document.querySelector(".mobile-menu");
    if (!trigger || !(dialog instanceof HTMLDialogElement)) return;

    const closeButton = dialog.querySelector(".mobile-menu__close");
    const desktop = window.matchMedia("(min-width: 992px)");
    let previousOverflow = "";
    let returnFocus = true;

    trigger.hidden = false;
    document.documentElement.classList.add("has-mobile-menu");

    function close(restoreFocus = true) {
        if (!dialog.open) return;
        returnFocus = restoreFocus;
        dialog.close();
    }

    trigger.addEventListener("click", () => {
        if (dialog.open) return;
        previousOverflow = document.body.style.overflow;
        returnFocus = true;
        dialog.showModal();
        document.body.style.overflow = "hidden";
        trigger.setAttribute("aria-expanded", "true");
    });

    // Keep keyboard cycling inside the panel, including its first/last links.
    dialog.addEventListener("keydown", (event) => {
        if (event.key !== "Tab") return;
        const controls = [
            ...dialog.querySelectorAll("a[href], button:not([disabled])"),
        ].filter((element) => element.getClientRects().length);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
        }
    });

    closeButton.addEventListener("click", () => close());
    dialog.addEventListener("close", () => {
        document.body.style.overflow = previousOverflow;
        trigger.setAttribute("aria-expanded", "false");
        if (returnFocus && !desktop.matches)
            trigger.focus({ preventScroll: true });
    });

    // A click outside the panel lands on the dialog's backdrop.
    dialog.addEventListener("click", (event) => {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        )
            close();
    });

    dialog.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            close(false);
            const url = new URL(link.href, location.href);
            if (url.pathname !== location.pathname || !url.hash) return;
            const target = document.getElementById(url.hash.slice(1));
            if (target) {
                target.setAttribute("tabindex", "-1");
                target.focus({ preventScroll: true });
                target.addEventListener(
                    "blur",
                    () => target.removeAttribute("tabindex"),
                    { once: true },
                );
            }
        });
    });
    desktop.addEventListener("change", (event) => {
        if (event.matches) close(false);
    });
}
