import { data } from "./data.js";

function renderSingleMovieContent(rank) {
  const similarMoviesContainer = document.querySelector(
    ".similar__movies-block"
  );

  similarMoviesContainer.innerHTML = "";

  function hasMatchingGenre(movie, genre) {
    return movie.genre.includes(genre);
  }

  function addMovieImage(imageUrl) {
    const img = document.createElement("img");
    img.classList.add("similar__movies-img");
    img.src = imageUrl;
    img.alt = "movie";
    similarMoviesContainer.appendChild(img);
  }

  const targetMovie = data.find((movie) => movie.rank === rank);

  if (targetMovie) {
    const targetGenre = targetMovie.genre[0];

    data.forEach((movie) => {
      if (hasMatchingGenre(movie, targetGenre)) {
        addMovieImage(movie.image);
      }
    });
  }

  const movieHeader = document.querySelector(".movie__header");
  const ratingCurrent = document.querySelector(".rating__current");
  const ratingMax = document.querySelector(".rating__max");
  const movieImg = document.querySelector(".movie__block-img");
  const aboutMovieText = document.querySelector(".about__movie-text");
  const aboutMovieGenre = document.querySelector(".about__movie-genre");

  aboutMovieGenre.innerHTML = "";

  movieHeader.textContent = targetMovie.title;
  ratingCurrent.textContent = targetMovie.rating;
  ratingMax.textContent = ` / 10`;
  movieImg.src = targetMovie.image;
  aboutMovieText.textContent = targetMovie.description;

  targetMovie.genre.forEach((genre) => {
    const span = document.createElement("span");
    span.textContent = genre;
    span.classList.add("genre");
    aboutMovieGenre.appendChild(span);
  });
}

renderSingleMovieContent(5);
