import { DataMovies } from "./data.js";

// import butler from "../assets/images/actors/butler.jpg";
// import kek from "../assets/images/1.jpg";

function fillMovieDetails(id) {
  const movie = DataMovies.find((movie) => movie.id === id);

  if (movie) {
    const movieHeader = document.querySelector(".movie__header");
    const ratingCurrent = document.querySelector(".rating__current");
    const description = document.querySelector(".about__movie-text");
    const genreBlock = document.querySelector(".about__movie-genre");
    const castBlock = document.querySelector(".cast__block");
    const ratingInput = document.querySelector(".popup__input");
    const ratingBtn = document.querySelector(".popup__btn");
    const popup = document.querySelector(".popup");

    movieHeader.textContent = movie.title;
    ratingCurrent.textContent = movie.rating.toFixed(1);
    description.textContent = movie.description;

    genreBlock.innerHTML = "";
    movie.genre.forEach((genre) => {
      const genreElement = document.createElement("div");
      genreElement.classList.add("genre");
      genreElement.textContent = genre;
      genreBlock.appendChild(genreElement);
    });

    castBlock.innerHTML = "";
    movie.actors.forEach((actor) => {
      const actorElement = document.createElement("div");
      actorElement.classList.add("cast__block-hero");
      const actorName = document.createElement("p");
      actorName.classList.add("cast__hero-name");
      actorName.textContent = actor.name;
      actorElement.appendChild(actorName);
      castBlock.appendChild(actorElement);

      const lastName = actor.name.split(" ")[1].toLowerCase();
      const actorImage = document.createElement("img");
      actorImage.src = `../assets/images/actors/${lastName}.jpg`;
      actorElement.prepend(actorImage);
    });

    ratingCurrent.addEventListener("mouseover", () => {
      popup.style.display = "block";
    });

    ratingBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const newRating = parseFloat(ratingInput.value);
      const currentRating = parseFloat(ratingCurrent.textContent);
      const averageRating = (newRating + currentRating) / 2;
      ratingCurrent.textContent = averageRating.toFixed(1);
      popup.style.display = "none";
    });
  }
}

fillMovieDetails(1);
