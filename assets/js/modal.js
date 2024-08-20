function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

const first = document.getElementById("first").value

const last = document.getElementById("last").value

const email = document.getElementById("email").value

const birthdate = document.getElementById("birthdate").value

const quantity = document.getElementById("quantity").value

/* let listeBtnradio = document.querySelectorAll(".formData input")
for (let idx = 0; idx < listeBtnradio.length; idx++) {
    listeBtnradio[idx].addEventListener("change", (event)=>{
        let location = event.target.value
    })
} */

let listeBtnradio = document.querySelectorAll('input[name="location"]')
var location = ""
for (let i = 0; i < listeBtnradio.length; i++) {
    if (listeBtnradio[i].checked) {
      location = listeBtnradio[i].value
        break
    }
}

const checkbox1 = document.getElementById("checkbox1").checked

const checkbox2 = document.getElementById("checkbox2").checked

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}