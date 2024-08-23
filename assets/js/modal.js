function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function namecontrol(balise) {
  let regex = new RegExp("[a-zA-Z\-]{2,}");
  if (regex.test(balise)) {
    return true;
  } else {
    // alert('Les champs nom et prénom doivent contenir au moins 2 lettres')
    return false;
  }
}

function mailcontrol(balise) {
  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if (regex.test(balise)) {
    return true;
  } else {
    //alert('Le champ doit contenir une adresse email valide')
    return false;
  }
}

function numbercontrol(balise) {
  let regex = new RegExp("\d{2}");
  if (regex.test(balise)) {
    return true;
  } else {
    //alert('Le champ doit contenir une quantité valide')
    return false;
  }
}

function validate() {
  const first = document.getElementById("first").value;
  const last = document.getElementById("last").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value
  const quantity = document.getElementById("quantity").value
  
  if (namecontrol(first)) {
    if (namecontrol(last)) {
      if (mailcontrol(email)) {
        if (numbercontrol(quantity)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }  
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const form = document.querySelector("form")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}



/*form.addEventListener("submit", (event) => {
    
  event.preventDefault();

  const first = document.getElementById("first").value
  namecontrol(first)  

  const last = document.getElementById("last").value
  namecontrol(last)

  const email = document.getElementById("email").value

  const birthdate = document.getElementById("birthdate").value

  const quantity = document.getElementById("quantity").value

  let listeBtnradio = document.querySelectorAll('input[name="location"]')
  var location = ""
  for (let i = 0; i < listeBtnradio.length; i++) {
      if (listeBtnradio[i].checked) {
        location = listeBtnradio[i].value
          break
      }
  }

  const checkbox1 = document.getElementById("checkbox1").checked

  const checkbox2 = document.getElementById("checkbox2").checked */


// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}