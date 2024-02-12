
import 'starability/starability-css/starability-basic.css';
import Starability from 'starability';


const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".rating-form");
const emailInput = document.querySelector(".rating-input-email");
const messageTextarea = document.querySelector(".rating-input-textaera");
const closeBottom = document.querySelector(".rating-close");

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


document.addEventListener("DOMContentLoaded", function () {
  const starabilityElement = document.querySelector('.starability-basic');
  const ratingNumberElement = document.querySelector('.rating-number');

  const starability = new Starability(starabilityElement, {
    starSize: 24, 
  });


  starability.on('change', function(currentRating, rating) {
    ratingNumberElement.textContent = rating.toFixed(1);
  });
});



closeBottom.addEventListener("click", function(){
   const Backdrop = document.querySelector(".backdrop");
   Backdrop.classList.remove("is-open");
});



function onFormSubmit(event){
    event.preventDefault();
    
    if (emailInput.value !== "" && messageTextarea.value !== "") {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value
    };

    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
  } else {
    alert("All fields must be filled \n (Усі поля повинні бути заповнені)");
  }
}

function onFormInput() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}

function populateFormFields() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const { email, message } = JSON.parse(savedMessage);
    emailInput.value = email;
    messageTextarea.value = message;
  }
}

populateFormFields();
