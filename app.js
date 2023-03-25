const btn = document.querySelector(".explore");
const display = document.querySelector(".disappear");

btn.addEventListener("click", function() {
   display.classList.toggle("show-disappear");
    //console.log("shake");
});