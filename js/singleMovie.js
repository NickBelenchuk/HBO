import { data } from "./data.js";

export const createMovieContainer = (data) => {
  const container = document.createElement("div");
  container.classList.add("container", "movie__container");

  const movieHTML = `
    <div class="movie__block-header">
      <h1 class="movie__header">${data.title}</h1>
      <div class="movie__rating">
        <p class="rating">
          Rating: <span class="rating__current">${data.rating}</span>
          <span class="rating__max"> / 10</span>
        </p>
      </div>
    </div>
    <div class="movie__block-content">
      <img class="movie__block-img" src="${data.image}" alt="movie" />
      <div class="about__movie">
        <p class="about__movie-text">${data.description}</p>
        <div class="about__movie-genre">
          <span class="genre">${data.genre}</span>
        </div>
        <div class="about__movie-cast">
          <h4 class="cast__header">Cast:</h4>
          <div class="cast__block"></div>
        </div>
      </div>
      <form class="popup" action="">
        <h5>Rate this</h5>
        <h4>Sharper</h4>
        <input class="popup__input" type="number" max="10" min="0" />
        <button class="popup__btn" type="submit">rate</button>
      </form>
    </div>
    <div class="movie__block-similar">
      <h4 class="similar__header">Similar movies</h4>
      <div class="similar__movies">
        <div class="similar__movies-block"></div>
      </div>
    </div>
  `;

  container.innerHTML = movieHTML;

  return container;
};
const params = new URLSearchParams(window.location.search);
const movieIndex = params.get("id");
const movieData = data.find((movie) => movie.id === movieIndex);

if (movieData) {
  const movieContainer = createMovieContainer(movieData);
  document.getElementById("movie-container").appendChild(movieContainer);
} else {
  console.log("Invalid movie id");
}
