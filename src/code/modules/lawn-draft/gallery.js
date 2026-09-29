import Splide from "@splidejs/splide";
import "@splidejs/splide/css/core";

export function init() {
  const previous = document.querySelector(
    ".garden-projects .slider-controls__btn--prev",
  );
  const next = document.querySelector(
    ".garden-projects .slider-controls__btn--next",
  );
  const status = document.querySelector(".gallery-status");

  if (document.querySelector(".projects-section") && previous && next) {
    const gallery = new Splide(".projects-section", {
      type: "slide",
      fixedWidth: "62%",
      gap: "28px",
      perMove: 1,
      arrows: false,
      pagination: false,
      speed: 650,
      drag: true,
      keyboard: "focused",
      omitEnd: true,
      breakpoints: { 640: { fixedWidth: "90%", gap: "18px" } },
      reducedMotion: { speed: 0 },
    });
    function updateControls() {
      previous.disabled = gallery.index === 0;
      next.disabled = gallery.index >= gallery.Components.Controller.getEnd();
      status.textContent = `Showing concept ${gallery.index + 1} of ${gallery.length}`;
    }
    gallery.on("mounted moved updated resized", updateControls);
    gallery.mount();
    previous.addEventListener("click", () => gallery.go("<"));
    next.addEventListener("click", () => gallery.go(">"));
  }
}
