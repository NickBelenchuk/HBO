export const accordionFunc = () => {
  const accordions = document.querySelectorAll(".faq__block-accordion");

  accordions.forEach((accordion) => {
    const accordionMain = accordion.querySelector(".accordion__main");
    const content = accordion.querySelector(".accordion__text-block");
    const button = accordion.querySelector(".accordion__main-btn");

    accordionMain.addEventListener("click", () => {
      content.classList.toggle("active");
      button.classList.toggle("active");
      if (content.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
};
