const hamburger = document.querySelector(".hamburger-div");
const span = document.querySelector(".span");
const menu_slider = document.querySelector(".menu");
let showMenu = false;
hamburger.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    span.classList.add("open");
    menu_slider.style.width="300px";
    showMenu = true;
  } else {
    span.classList.remove("open");
    menu_slider.style.width="0px";
    showMenu = false;
  }
};
const slideshowContainer = document.querySelector(".slideshow-container");
const slideshowText = document.querySelector(".slideshow-text");
const plusSign = document.querySelector(".plus-sign");
const bar = document.querySelector(".bar");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let showIntro = false;
plusSign.addEventListener("click", toggleIntro);
function toggleIntro() {
  if (!showIntro) {
    bar.classList.add("openIntro");
    slideshowContainer.style.height="100%";
    slideshowContainer.style.visibility="visible";
    slideshowText.style.height="100%";
    slideshowText.style.visibility="visible";
    prev.style.display="block";
    next.style.display="block";
    showIntro = true;
  } else {
    bar.classList.remove("openIntro");
    slideshowContainer.style.height="0";
    slideshowContainer.style.visibility="hidden";
    slideshowText.style.height="0";
    slideshowText.style.visibility="hidden";
    prev.style.display="none";
    next.style.display="none";
    showIntro = false;
  }
};
// getElementsByClassName()
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var acc = document.getElementsByClassName("accordion");
var iee;

for (iee = 0; iee < acc.length; iee++) {
  acc[iee].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
