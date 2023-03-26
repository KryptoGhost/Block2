const btn = document.querySelector(".explore");
const display = document.querySelector(".disappear");
const navBtn = document.querySelector(".navcontrol");
const nav = document.querySelector(".nav");

btn.addEventListener("click", function() {
   display.classList.toggle("show-disappear");
    //console.log("shake");
});

navBtn.addEventListener("click", function() {
    nav.classList.toggle("show-disappear");
});