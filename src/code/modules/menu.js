/**
 * menu.js
 * Mobile navigation toggle.
 * Loaded immediately on all devices — it's tiny and
 * the toggle button must work before any interaction.
 */

export function initMobileMenu() {
    const menuIcon = document.querySelector(".header__menu-toggler");
    const menu = document.getElementById("main-navigation");

    if (!menuIcon || !menu) return;

    const menuItems = menu.querySelectorAll(".header__menu-item");
    let isOpen = menuIcon.getAttribute("aria-expanded") === "true";

    function toggleMenu() {
        isOpen = !isOpen;
        menuIcon.setAttribute("aria-expanded", String(isOpen));
        menu.style.transform = isOpen ? "translateX(0%)" : "translateX(100%)";
    }

    function closeMenu() {
        if (!isOpen) return;
        isOpen = false;
        menuIcon.setAttribute("aria-expanded", "false");
        menu.style.transform = "translateX(100%)";
    }

    menuIcon.addEventListener("click", toggleMenu);
    menuItems.forEach((item) => item.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMenu();
    });
}
