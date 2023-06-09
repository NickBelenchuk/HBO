import { DataMovies } from "./data.js";

const fillMovieDetails = (id) => {
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

  setElementImage(movieImg, `../assets/images/${id}.jpg`);
  setElementText(movieHeader, movie.title);
  setElementText(ratingCurrent, movie.rating.toFixed(1));
  setRatingColor(ratingCurrent.textContent, ratingCurrent);
  setElementText(description, movie.description);
  setGenres(genreBlock, movie.genre);
  setCastBlock(castBlock, movie.actors);
  addRatingEventListeners(ratingCurrent, ratingInput, ratingBtn, popup);
};

const setElementImage = (element, imagePath) => {
  element.src = imagePath;
};

const setElementText = (element, text) => {
  element.textContent = text;
};

const setRatingColor = (rating, element) => {
  const ratingValue = parseFloat(rating);
  element.style.color =
    ratingValue > 8 ? "#64C342" : ratingValue > 4 ? "#ADBF3A" : "#CA3838";
};

const setGenres = (element, genres) => {
  element.innerHTML = "";
  genres.forEach((genre) => {
    const genreElement = createGenreElement(genre);
    element.appendChild(genreElement);
  });
};

const createGenreElement = (genre) => {
  const genreElement = document.createElement("div");
  genreElement.classList.add("genre");
  genreElement.textContent = genre;
  return genreElement;
};

const setCastBlock = (element, actors) => {
  element.innerHTML = "";
  actors.forEach((actor) => {
    const actorElement = createActorElement(actor);
    element.appendChild(actorElement);
  });
};

const createActorElement = (actor) => {
  const actorElement = document.createElement("div");
  actorElement.classList.add("cast__block-hero");
  const actorImage = createActorImage(actor);
  actorElement.appendChild(actorImage);
  const actorName = createActorName(actor);
  actorElement.appendChild(actorName);
  return actorElement;
};

const createActorImage = (actor) => {
  const actorImage = document.createElement("img");
  const lastName = actor.name.split(" ")[1].toLowerCase();
  actorImage.src = `../assets/images/actors/${lastName}.jpg`;
  return actorImage;
};

const createActorName = (actor) => {
  const actorName = document.createElement("p");
  actorName.classList.add("cast__hero-name");
  actorName.textContent = actor.name;
  return actorName;
};

const addRatingEventListeners = (
  element,
  inputElement,
  buttonElement,
  popupElement
) => {
  element.addEventListener("mouseover", () => {
    popupElement.style.display = "block";
  });

  buttonElement.addEventListener("click", (event) => {
    event.preventDefault();
    const newRating = parseFloat(inputElement.value);
    const currentRating = parseFloat(element.textContent);
    if (newRating >= 0 && newRating <= 10) {
      const averageRating = (newRating + currentRating) / 2;
      setElementText(element, averageRating.toFixed(1));
      popupElement.style.display = "none";
      setRatingColor(averageRating.toFixed(1), element);
    } else {
      alert("Значения должны быть в диапазоне от 0 до 10");
    }
  });
};

fillMovieDetails(1);
