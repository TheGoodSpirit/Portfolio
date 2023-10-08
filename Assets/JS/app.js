// header animation
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("jamed", window.scrollY > 0);
});

// Menu Toggle
const menuToggler = document.querySelector(".menuToggler");
menuToggler.addEventListener("click", () => {
  const menu = document.querySelector("._menu");
  const nav = document.querySelector("nav");
  const close = document.querySelector(".close");
  nav.classList.toggle("active");
  close.classList.toggle("active");
  menu.classList.toggle("down");
});

//  Intersection observer~
const els = document.querySelectorAll(".ani");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      entry.target.classList.toggle("show", entry.isIntersecting);
      // if(entry.isIntersecting) observer.unobserve(entry.target)
    });
  },
  {
    rootMargin: "150px",
    threshold: 1,
  }
);
els.forEach((el) => {
  observer.observe(el);
});