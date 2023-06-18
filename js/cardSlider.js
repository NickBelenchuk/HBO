export const cardSlider = () => {
  const containerShows = document.querySelector(".container-shows");
  const containerMovies = document.querySelector(".container-movies");
  const containerCartoons = document.querySelector(".container-cartoons");

  containerShows.addEventListener("click", handleSliderNavigation);
  containerMovies.addEventListener("click", handleSliderNavigation);
  containerCartoons.addEventListener("click", handleSliderNavigation);

  function handleSliderNavigation(event) {
    const arrowRight = event.target.closest(".arrow__right");
    if (!arrowRight) return;

    const sliderContainer = event.target
      .closest(".original__content")
      .querySelector(".cards");
    if (!sliderContainer) return;

    const firstCard = sliderContainer.querySelector(".card");

    sliderContainer.removeChild(firstCard);
    sliderContainer.appendChild(firstCard);
  }
};
