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
// getElementsByClassName()

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

var acce = document.getElementsByClassName("accordion1");
var i;

for (i = 0; i < acce.length; i++) {
  acce[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
