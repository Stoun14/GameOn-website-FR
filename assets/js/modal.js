// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");
const modalValid = document.querySelector('#modal-valid');
const form = document.querySelector("#reserve");
const validationBtn = document.querySelector("#btn");

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validationModal() {
  // Cacher le formulaire
  form.style.display = 'none';
  // Afficher le message de confirmation
  modalValid.style.display = 'flex';
  // Gestion du clic sur le bouton
  btn.addEventListener('click', function(event) {
    // Fermeture de la modale
    closeModal();
  });
}

function nameControl(balise) {
  let regex = new RegExp("^[a-zA-Z\-]{2,}$");
  if (regex.test(balise)) {    
    return true;
  } else {
    return false;
  }  
}

function mailControl(balise) {
  let regex = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9._-]+");
  if (regex.test(balise)) {
    return true;
  } else {
    return false;
  }
}

function numberControl(balise) {
  let regex = new RegExp("^[0-9]{1,2}$");
  if (regex.test(balise)) {
    return true;
  } else {
    return false;
  }
}

function isDateValid(balise) {
  var date = new Date(balise);
  if (date.toString() === "Invalid Date") {
    return false;
  }
  return true;
}

function radioBtnChecked() {
  /* const radioBtn = document.querySelectorAll('input[name="location"]');
  radioBtn.forEach(bouton => {
    if (bouton.checked) {
      return true;
    }
    return false;
  }); */
  let listeBtnradio = document.querySelectorAll('input[name="location"]')
  var location = ""
  for (let i = 0; i < listeBtnradio.length; i++) {
      if (listeBtnradio[i].checked) {
        location = listeBtnradio[i].value
        return location;
      }
  }
}

// Sélection du formulaire et ajout du gestionnaire d'événement de soumission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstValue = document.getElementById("first").value;
  const lastValue = document.getElementById("last").value;
  const emailValue = document.getElementById("email").value;
  const dateValue = document.getElementById("birthdate").value;
  const quantity = document.getElementById("quantity").value;
  const checkbox1 = document.getElementById("checkbox1").checked;
  let error = document.querySelector('.firstname');
  if (nameControl(firstValue)) {
    if (nameControl(lastValue)) {
      if (mailControl(emailValue)) {
        if (isDateValid(dateValue)) {        
          if (numberControl(quantity)) {
            if (checkbox1 === true) {
              if (radioBtnChecked() !== "") {
                validationModal();
              } else {
                let error = document.querySelector('.town');
                error.setAttribute('data-error-visible', 'true');
              }
            } else {
              let error = document.querySelector('.cgu');
              error.setAttribute('data-error-visible', 'true');
            } 
          } else {
            let error = document.querySelector('.tournament');
            error.setAttribute('data-error-visible', 'true');
          }
        } else {
          let error = document.querySelector('.birthdate');
          error.setAttribute('data-error-visible', 'true');
        }
      } else {
        let error = document.querySelector('.email');
        error.setAttribute('data-error-visible', 'true');
      }
    } else {
      let error = document.querySelector('.lastname');
      error.setAttribute('data-error-visible', 'true');
    }
  } else {
    error.setAttribute('data-error-visible', 'true');
  }
  
});

/*function validate() {

}*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}