var navButton = document.querySelector(".navigation-menu-button img");
if (navButton.addEventListener) {
   navButton.addEventListener("click", function() {
      var nav = document.querySelector(".sitenavigation ul");
      if (nav.style.display === "block") {
         nav.style.display = "";
      } else {
         nav.style.display = "block";
      }
   }, false);
}
/*var navButton = document.querySelector(".navigation-menu-button div");
var navButtonshow = document.querySelector(".dropbtn");

function shownav() {
	navButtonshow.display = "none";
}

navButton.addEventListener("click", shownav, false);*/