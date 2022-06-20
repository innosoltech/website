// popup handler starts
const popup = document.querySelector(".popup");
const close = document.querySelector(".close-pop-up");

window.onload = function () {
  setTimeout(function () {
    popup.style.display = "block";

    // delayed popup timer
  }, 1000);
};

close.addEventListener("click", () => {
  popup.style.display = "none";
});
// popup handler ends

// Auto Typesript control code
var typed = new Typed(".we-do", {
  strings: ["SOFTWARES", "WEBSITES", "DIGITAL ADVERTISING", "AND MORE..."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("auto-type").style.display = "block";
    return (a = 0);
  } else {
    document.getElementById("auto-type").style.display = "none";
    return (a = 1);
  }
}
