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

// image  slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {showSlides(slideIndex += n)}
function currentSlide(n) {showSlides(slideIndex = n)}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {slides[i].style.display = "none";  }
  for (i = 0; i < dots.length; i++) {dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}