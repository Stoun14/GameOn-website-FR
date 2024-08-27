function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function nameControl(balise) {
  let regex = new RegExp("^[a-zA-Z\-]{2,}$");
  if (regex.test(balise)) {    
    return true;
  } else {
    return false;
    /* alert('Les champs Prénom et Nom doivent contenir uniquement les caractères de a à z ou -');
    return false; */
  }  
}

function mailControl(balise) {
  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if (regex.test(balise)) {
    return true;
  } else {
    //alert('Le champ doit contenir une adresse email valide')
    return false;
  }
}

function numberControl(balise) {
  let regex = new RegExp("\d");
  if (regex.test(balise)) {
    return true;
  } else {
    //alert('Le champ doit contenir une valeur numérique')
    return false;
  }
}

function radioBtn() {
  let listeBtnradio = document.querySelectorAll('input[name="location"]')
  var location = ""
  for (let i = 0; i < listeBtnradio.length; i++) {
      if (listeBtnradio[i].checked) {
        location = listeBtnradio[i].value
        return location
      }
  }
}

function validate() {
  /*const firstValue = document.getElementById("first").value;
  const lastValue = document.getElementById("last").value;
  const emailValue = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  const town = radioBtn();
  const checkbox1 = document.getElementById("checkbox1").checked;
  const checkbox2 = document.getElementById("checkbox2").checked; */
  
  /*if (nameControl(firstValue)) {    
    if (nameControl(lastValue)) {      
      if (mailControl(emailValue)) {        
        if (numberControl(quantity)) {
          console.log("test concluant");
          if (town !== "") {
            return true
          } else {
            return false
          }
        } else {
          console.log("mauvaise quantité")
        }
      } else {
        console.log("mauvais email")
      } 
    } else {
      console.log("mauvais nom")
    }
  } else {
    console.log("mauvais prénom");
  }*/  
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