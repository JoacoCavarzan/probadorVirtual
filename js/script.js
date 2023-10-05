// import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"

// import './register.js'
// import './login.js'
// import './googleLogin.js'

let searchForm = document.querySelector(".header .search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");
  navbar.classList.remove("active");
};

let slides = document.querySelectorAll(".home .slide");
let index = 0;

function next() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prev() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

// Filtro buscador

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#search-box")) {
    if (e.key === "Escape") e.target.value = "";

    document.querySelectorAll(".item").forEach((gafas) => {
      gafas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? gafas.classList.remove("filtro")
        : gafas.classList.add("filtro");
    });
  }
});

