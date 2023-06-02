import { DataMovies } from "./data.js";

function fillMovieDetails(id) {
  const movie = DataMovies.find((movie) => movie.id === id);

  const movieHeader = document.querySelector(".movie__header");
  const ratingCurrent = document.querySelector(".rating__current");
  const description = document.querySelector(".about__movie-text");
  const genreBlock = document.querySelector(".about__movie-genre");
  const castBlock = document.querySelector(".cast__block");
  const ratingInput = document.querySelector(".popup__input");
  const ratingBtn = document.querySelector(".popup__btn");
  const popup = document.querySelector(".popup");
  const movieImg = document.querySelector(".movie__block-img");

  setMovieImage(movieImg, id);
  setMovieHeader(movieHeader, movie.title);
  setRatingCurrent(ratingCurrent, movie.rating);
  setDescription(description, movie.description);
  setGenres(genreBlock, movie.genre);
  setCastBlock(castBlock, movie.actors);
  addRatingEventListeners(ratingCurrent, ratingInput, ratingBtn, popup);
}

function setMovieImage(element, id) {
  element.src = `../assets/images/${id}.jpg`;
}

function setMovieHeader(element, title) {
  element.textContent = title;
}

function setRatingCurrent(element, rating) {
  element.textContent = rating.toFixed(1);

  if (parseFloat(element.textContent) > 8) {
    element.classList.add("green");
    element.classList.remove("yellow", "red");
  } else if (parseFloat(element.textContent) > 4) {
    element.classList.add("yellow");
    element.classList.remove("green", "red");
  } else {
    element.classList.add("red");
    element.classList.remove("green", "yellow");
  }
}

function setDescription(element, description) {
  element.textContent = description;
}

function setGenres(element, genres) {
  element.innerHTML = "";
  genres.forEach((genre) => {
    const genreElement = document.createElement("div");
    genreElement.classList.add("genre");
    genreElement.textContent = genre;
    element.appendChild(genreElement);
  });
}

function setCastBlock(element, actors) {
  element.innerHTML = "";
  actors.forEach((actor) => {
    const actorElement = document.createElement("div");
    actorElement.classList.add("cast__block-hero");
    const actorName = document.createElement("p");
    actorName.classList.add("cast__hero-name");
    actorName.textContent = actor.name;
    actorElement.appendChild(actorName);
    element.appendChild(actorElement);

    const lastName = actor.name.split(" ")[1].toLowerCase();
    const actorImage = document.createElement("img");
    actorImage.src = `../assets/images/actors/${lastName}.jpg`;
    actorElement.prepend(actorImage);
  });
}

function addRatingEventListeners(
  element,
  inputElement,
  buttonElement,
  popupElement
) {
  element.addEventListener("mouseover", () => {
    popupElement.style.display = "block";
  });

  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newRating = parseFloat(inputElement.value);
    const currentRating = parseFloat(element.textContent);
    const averageRating = (newRating + currentRating) / 2;
    element.textContent = averageRating.toFixed(1);
    popupElement.style.display = "none";

    if (averageRating > 8) {
      element.classList.add("green");
      element.classList.remove("yellow", "red");
    } else if (averageRating > 4) {
      element.classList.add("yellow");
      element.classList.remove("green", "red");
    } else {
      element.classList.add("red");
      element.classList.remove("green", "yellow");
    }
  });
}

fillMovieDetails(1);
