import { data } from "./data.js";
import { createMovieContainer } from "./singleMovie.js";

export const cardContent = () => {
  const moviesContainer = document.querySelector(".cards__movies");
  const cartoonsContainer = document.querySelector(".cards__cartoons");
  const showsContainer = document.querySelector(".cards__show");
  const filterItems = (arr, type) => arr.filter((movie) => movie.type === type);
  const createCard = (el, index) => {
    const truncatedDescription = cutText(el.description, 150);
    const cutTitle = cutText(el.title, 15);
    return `
                <a class="card" href="./pages/singleMovie.html?id=${el.id}">
              <div
                class="card__image"
                style="background-image: url('${el.image}')"
              ></div>
              <div class="card__content">
                <div class="card__rating">
                  <span class="card__rating-rate">
                    <svg
                      width="14"
                      height="13.22"
                      viewBox="0 0 14 13.22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_3_89)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M7.00008 11.0989L10.2279 13.0511C10.819 13.4089 11.5423 12.88 11.3867 12.2111L10.5312 8.54L13.3856 6.06667C13.9067 5.61556 13.6267 4.76 12.9423 4.70556L9.18563 4.38667L7.71563 0.917778C7.45119 0.287778 6.54897 0.287778 6.28452 0.917778L4.81452 4.37889L1.05785 4.69778C0.37341 4.75222 0.0934101 5.60778 0.614521 6.05889L3.46897 8.53222L2.61341 12.2033C2.45785 12.8722 3.18119 13.4011 3.7723 13.0433L7.00008 11.0989Z"
                          fill="#E3B100"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3_89">
                          <rect width="14" height="13.2222" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    ${el.rating}
                  </span>
                  <span class="card__rating-date">${el.year}</span>
                </div>
                <p class="card__season">Season 1</p>
                <h2 class="card__title">${cutTitle}</h2>
                <p class="card__about">${truncatedDescription}</p>
                <button class="card__btn" data-index="${index}>
                  <span class="card__btn-icon"
                    ><svg
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_2_38)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 2.15091V14.3945C0 15.3282 1.02818 15.8955 1.82 15.3873L11.44 9.26545C12.1727 8.80454 12.1727 7.74091 11.44 7.26818L1.82 1.15818C1.02818 0.649999 0 1.21727 0 2.15091Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_38">
                          <rect width="13" height="16.5455" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span class="card__btn-name">watch</span>
                </button>
              </div>
            </a>
    `;
  };

  const displayCards = (container, type) => {
    filterItems(data, type).forEach((el, index) => {
      const cardElement = document.createElement("a");
      cardElement.classList.add("card");
      cardElement.innerHTML = createCard(el, index);
      cardElement.addEventListener("click", () => {
        createMovieContainer(el);
        console.log(el);
      });
      container.appendChild(cardElement);
    });
  };

  displayCards(moviesContainer, "movie");
  displayCards(cartoonsContainer, "cartoon");
  displayCards(showsContainer, "show");
};

const cutText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
