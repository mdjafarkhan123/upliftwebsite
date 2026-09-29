export function init() {
  const comparison = document.querySelector(".comparison");
  const range = document.querySelector(".comparison-range");
  range?.addEventListener("input", () => {
    comparison.style.setProperty("--reveal", `${range.value}%`);
    range.setAttribute(
      "aria-valuetext",
      `${range.value} percent of the starting point visible`,
    );
  });
}
