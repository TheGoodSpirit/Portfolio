window.onload = () => {
  document.querySelector("video").autoplay = true;
}

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
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    entry.target.classList.toggle("show", entry.isIntersecting);
    if(entry.isIntersecting) observer.unobserve(entry.target)
  });
}, {
  rootMargin: "80px" ,
  threshold : 1
});

els.forEach((el) => {
  observer.observe(el);
})