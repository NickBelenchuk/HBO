import { data } from "./data.js";
import { burger } from "./burger.js";
import { popUpSignIn } from "./popUpSignIn.js";
export const createMovieContainer = (singleCardData) => {
  const container = document.createElement("div");
  container.classList.add("container", "movie__container");

  const similarMovies = data.filter((movie) =>
    movie.genre.some((genre) => singleCardData.genre.includes(genre))
  );

  const similarMoviesHTML = similarMovies
    .map(
      (movie) =>
        `<a href="./singleMovie.html?id=${movie.id}"><img class="similar__movies-img" src="${movie.image}" alt="img" /></a>`
    )
    .join("");

  const movieHTML = `
        <div class="movie__block-header">
      <h1 class="movie__header">${singleCardData.title}</h1>
      <div class="movie__rating">
        <p class="rating">
        <span class="year"> ${singleCardData.year}</span>
          Rating: <span class="rating__current">${singleCardData.rating}</span>
          <span class="rating__max"> / 10</span>
        </p>
      </div>
    </div>
    <div class="movie__block-content">
      <img class="movie__block-img" src="${singleCardData.image}" alt="movie" />
      
      <div class="about__movie">
        <p class="about__movie-text">${singleCardData.description}</p>
        <div class="about__movie-genre">
          ${singleCardData.genre
            .map((genre) => `<span class="genre">${genre}</span>`)
            .join("")}
        </div>
        <div class="about__movie-cast">
          <h4 class="cast__header">Director:</h4>
          <div class="cast__block"><div class="cast__block-hero">
          <span class="cast__hero-name">${
            singleCardData.director
          }</span></div></div>
        </div>
        <div class="about__movie-cast">
          <h4 class="cast__header">Writers:</h4>
          <div class="cast__block"><div class="cast__block-hero">
          ${singleCardData.writers
            .map((writer) => `<span class="cast__hero-name">${writer}</span>`)
            .join("")}</div></div>
            <a class="movie__block-watch" target="_blank" href="${
              singleCardData.trailer
            }">watch the trailer</a>
        </div>
      </div>
    </div>
    
    <div class="movie__block-similar">
      <h4 class="similar__header">Similar movies</h4>
      <div class="similar__movies">
        <div class="similar__movies-block">
          ${similarMoviesHTML}
        </div>
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

burger();
popUpSignIn();
