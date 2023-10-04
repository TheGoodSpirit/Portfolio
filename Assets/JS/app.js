window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("jamed", window.scrollY > 0);
});

// Menu Toggle
const menuToggler = document.querySelector(".menuToggler");
menuToggler.addEventListener("click", () => {
  // show nav bar
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
  // show close icon
  const close = document.querySelector(".close");
  close.classList.toggle("active");
  // hide menu icon
  const menu = document.querySelector("._menu");
  menu.classList.toggle("down");
});
