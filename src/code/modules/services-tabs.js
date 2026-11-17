/**
 * services-tabs.js
 * The system section: tabs on desktop, an accordion on phones.
 * Without this script every service shows in full. Loads at once (interaction.js);
 * does nothing when the section is absent. Each change fires "services:change"
 * on the root, and `root.servicesTabs` lets motion.js select a service.
 */

const DESKTOP = "(min-width: 992px)";

export function init() {
    const root = document.querySelector(".services__content");
    if (!root) return;

    const tablist = root.querySelector(".services__tabs");
    const tabs = [...root.querySelectorAll(".services__tab")];
    const items = [...root.querySelectorAll(".services__item")];
    const triggers = items.map((item) => item.querySelector(".services__trigger"));
    const panels = items.map((item) => item.querySelector(".services__panel"));
    if (!tablist || !items.length || tabs.length !== items.length) return;

    const media = window.matchMedia(DESKTOP);
    const start = Number(root.dataset.active);
    let active = start >= 0 && start < items.length ? start : 0;
    // Accordion: index of the open item, or -1 when all are closed.
    let open = active;

    function showTabs() {
        root.classList.add("is-tabs");
        root.classList.remove("is-accordion");
        tablist.hidden = false;
        items.forEach((item, i) => {
            const isActive = i === active;
            item.hidden = !isActive;
            item.classList.remove("is-open");
            panels[i].hidden = false;
            panels[i].setAttribute("role", "tabpanel");
            panels[i].setAttribute("aria-labelledby", tabs[i].id);
            panels[i].tabIndex = 0;
            triggers[i].removeAttribute("aria-expanded");
            tabs[i].setAttribute("aria-selected", String(isActive));
            tabs[i].tabIndex = isActive ? 0 : -1;
        });
    }

    function showAccordion() {
        root.classList.add("is-accordion");
        root.classList.remove("is-tabs");
        tablist.hidden = true;
        items.forEach((item, i) => {
            const isOpen = i === open;
            item.hidden = false;
            item.classList.toggle("is-open", isOpen);
            panels[i].hidden = !isOpen;
            panels[i].setAttribute("role", "region");
            panels[i].setAttribute("aria-labelledby", triggers[i].id);
            panels[i].removeAttribute("tabindex");
            triggers[i].setAttribute("aria-expanded", String(isOpen));
        });
    }

    function render() {
        if (media.matches) showTabs();
        else showAccordion();
    }

    // source: "user" for a click or key, "scroll" when motion.js moves the pinned section.
    function selectTab(index, focus, source = "user") {
        active = (index + tabs.length) % tabs.length;
        open = active;
        showTabs();
        if (focus) tabs[active].focus();
        root.dispatchEvent(
            new CustomEvent("services:change", { detail: { index: active, source } }),
        );
    }

    // Lets motion.js drive the tabs while the section is pinned.
    root.servicesTabs = {
        get active() {
            return active;
        },
        select: (index) => selectTab(index, false, "scroll"),
    };

    tabs.forEach((tab, i) => {
        tab.addEventListener("click", () => selectTab(i, false));
        tab.addEventListener("keydown", (event) => {
            const keys = {
                ArrowDown: i + 1,
                ArrowRight: i + 1,
                ArrowUp: i - 1,
                ArrowLeft: i - 1,
                Home: 0,
                End: tabs.length - 1,
            };
            if (!(event.key in keys)) return;
            event.preventDefault();
            selectTab(keys[event.key], true);
        });
    });

    triggers.forEach((trigger, i) => {
        trigger.addEventListener("click", () => {
            if (!root.classList.contains("is-accordion")) return;
            open = open === i ? -1 : i;
            if (open !== -1) active = open;
            showAccordion();
            // Closing an item above can move this one out of view.
            if (open === i) trigger.scrollIntoView({ block: "nearest" });
        });
    });

    media.addEventListener("change", render);
    render();
}
