export const swiperMain = () => {
  const container = document.querySelector(".container__hero");
  const signature = document.querySelector(".hero__block-signature");

  let index = 1;
  setInterval(() => {
    index += 1;
    if (index === 4) {
      index = 1;
    }
    container.style.backgroundImage = `linear-gradient(180deg, rgba(0, 0, 0, 0) 63.19%, #000000 100%), url(../image/hero__bg${index}.png`;
    signature.src = `../image/signature${index}.png`;
  }, 4000);
};
