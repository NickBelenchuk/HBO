import { cardSlider } from "./cardSlider.js";
import { burger } from "./burger.js";
import { swiperMain } from "./swiperMain.js";
import { popUpSignIn } from "./popUpSignIn.js";
import { scroll } from "./scroll.js";
import { cardContent } from "./cardContent.js";

swiperMain();
cardContent();
burger();
popUpSignIn();
scroll();
cardSlider();

const accardionFunc = () => {
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

accardionFunc();
