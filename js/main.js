// burger
const burger = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");

  burger.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
};

// swiper main
const swiperMain = () => {
  const backgroundImages = [
    "../assets/image/hero__bg2.png",
    "../assets/image/hero__bg3.png",
    "../assets/image/hero__bg.png",
  ];

  const signatureImages = [
    "./assets/image/signature2.png",
    "./assets/image/signature3.png",
    "./assets/image/signature.png",
  ];

  const container = document.querySelector(".container__hero");
  const signature = document.querySelector(".hero__block-signature");

  let currentImageIndex = 0;

  const changeBackgroundAndSignature = () => {
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.19%, #000000 100%), url("${backgroundImages[currentImageIndex]}")`;
    signature.src = signatureImages[currentImageIndex];

    currentImageIndex++;
    if (currentImageIndex === backgroundImages.length) {
      currentImageIndex = 0;
    }
  };

  setInterval(changeBackgroundAndSignature, 4000);
};

// popup

const popup = () => {
  const signinBtn = document.getElementById("signin-btn");
  const signinSection = document.getElementById("signin-section");
  const closePopup = document.getElementById("close");

  signinBtn.addEventListener("click", () => {
    signinSection.style.display = "block";
  });
  closePopup.addEventListener("click", () => {
    signinSection.style.display = "none";
  });
};

//////

burger();
swiperMain();
popup();
