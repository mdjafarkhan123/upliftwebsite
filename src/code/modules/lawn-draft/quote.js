export function init() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const form = document.querySelector("#garden-quote");
  const service = document.querySelector("#service");
  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      service.value = link.dataset.service;
    });
  });

  if (form instanceof HTMLFormElement) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const message = document.querySelector("#quote-status");
      message.textContent = `Your ${service.value.toLowerCase()} enquiry preview is ready. In the finished website, this is where the customer would receive confirmation and next steps. This is a local demonstration; nothing has been sent or saved.`;
      message.hidden = false;
      message.focus({ preventScroll: true });
      message.scrollIntoView({
        block: "nearest",
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    });
    // Never allow an unenhanced form to send entered information into a URL.
    form.querySelector('button[type="submit"]').disabled = false;
  }
}
