export const popUpSignIn = () => {
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
