export function init() {
    const readMoreBtn = document.querySelector(".about .read-more");
    const textBlock = document.querySelector(".about .about__description");
    const buttonText = readMoreBtn?.querySelector(".read-more__text");

    if (!readMoreBtn || !textBlock || !buttonText) return;

    readMoreBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const isTruncated = textBlock.classList.toggle("trunced-text");

        buttonText.textContent = isTruncated ? "Read more" : "Show less";
    });
}
