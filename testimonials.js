const navBarToggle = document.querySelector("#navbar-icon");
const navBarMenu = document.querySelector(".navbar__menu");
const navBarButtons = document.querySelector(".navbar__buttons");
const navBarIcon = document.querySelector("#navbar-icon");

navBarToggle.addEventListener("click", () => {
  navBarMenu.classList.toggle("active");
  navBarButtons.classList.toggle("active");

  if (navBarMenu.classList.contains("active")) {
    navBarToggle.classList = "fa-solid fa-xmark";
  } else {
    navBarToggle.classList = "fa-solid fa-bars";
  }
});
