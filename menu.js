////////////////////////////MENU////////////////////////////////////
const hamburger = document.querySelector(".nav_hamburger");
const menu = document.querySelector(".nav_menu");
const links = document.querySelectorAll(".nav_li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("show");

  links.forEach((link) => {
    link.classList.toggle("apere");
  });
});