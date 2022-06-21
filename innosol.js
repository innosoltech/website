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

// Form processing control code
// window.addEventListener("DOMContentLoaded", function () {
//   // get the form elements defined in your form HTML above

//   var form = document.getElementById("my-form");
//   // var button = document.getElementById("my-form-button");
//   var status = document.getElementById("status");

//   // Success and Error functions for after the form is submitted

//   function success() {
//     form.reset();
//     status.classList.add("success");
//     status.innerHTML = "Submitted. Thanks!";

//   }

//   function error() {
//     status.classList.add("error");
//     status.innerHTML = "Oops! There was a problem. Try again.";
//   }

//   // handle the form submission event

//   form.addEventListener("submit", function (ev) {
//     ev.preventDefault();
//     var data = new FormData(form);
//     ajax(form.method, form.action, data, success, error);
//   });
// });

// helper function for sending an AJAX request
// function ajax(method, url, data, success, error) {
//   var xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("Accept", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState !== XMLHttpRequest.DONE) return;
//     if (xhr.status === 200) {
//       success(xhr.response, xhr.responseType);
//     } else {
//       error(xhr.status, xhr.response, xhr.responseType);
//     }
//   };
//   xhr.send(data);
// }

// open & close form control code
// function openForm() {
//   document.getElementById("myModal").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("myModal").style.display = "none";
// }
