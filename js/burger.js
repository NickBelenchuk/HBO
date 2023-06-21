export const burger = () => {
  const burgerBtn = document.querySelector(".burger__menu");
  const nav = document.querySelector(".header__nav");

  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  window.addEventListener("resize", () => {
    if (window.matchMedia(`(min-width: 768px)`).matches) {
      nav.classList.remove("active");
    }
  });
};
