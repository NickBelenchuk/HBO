import { data } from "./data.js";
import { cardSlider } from "./cardSlider.js";
// console.log(data);

////// burger //////
const burger = () => {
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

////// swiper main //////
const swiperMain = () => {
  const container = document.querySelector(".container__hero");
  const signature = document.querySelector(".hero__block-signature");

  let index = 1;
  setInterval(() => {
    index += 1;
    if (index === 4) {
      index = 1;
    }
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.19%, #000000 100%), url(./assets/image/hero__bg${index}.png`;
    signature.src = `./assets/image/signature${index}.png`;
  }, 4000);
};

////// popup //////

const popup = () => {
  const signinBtn = document.getElementById("signin-btn");
  const signinSection = document.getElementById("signin-section");
  const closePopup = document.getElementById("close");

  const togglePopup = () => {
    signinSection.style.display =
      signinSection.style.display === "block" ? "none" : "block";
  };

  signinBtn.addEventListener("click", togglePopup);
  closePopup.addEventListener("click", togglePopup);
};

////// render content //////

const cardContent = () => {
  const moviesContainer = document.querySelector(".cards__movies");
  const cartoonsContainer = document.querySelector(".cards__cartoons");
  const showsContainer = document.querySelector(".cards__show");
  const filterItems = (arr, type) => arr.filter((movie) => movie.type === type);
  const createCard = (el) => {
    const truncatedDescription = cutText(el.description, 150);
    const cutTitle = cutText(el.title, 15);
    return `
                <div class="card">
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
                <button class="card__btn">
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
            </div>
    `;
  };

  const displayCards = (container, type) => {
    filterItems(data, type).forEach((el) => {
      container.innerHTML += createCard(el);
    });
  };

  displayCards(moviesContainer, "movie");
  displayCards(cartoonsContainer, "cartoon");
  displayCards(showsContainer, "show");
};

////// scroll  //////
const scroll = () => {
  const links = document.querySelectorAll(".link");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");

      if (href && !href.startsWith("#")) {
        return;
      }

      e.preventDefault();

      const target = link.getAttribute("data-scroll-to");
      const targetElement = document.querySelector(`.${target}`);

      if (targetElement) {
        smoothScrollTo(targetElement);
      }
    });
  });

  const smoothScrollTo = (targetElement) => {
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;

    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const scrollY = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, scrollY);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };
};

////// others func //////

const cutText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

////// call func //////

swiperMain();
cardContent();
burger();
popup();
scroll();
cardSlider();
