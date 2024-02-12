
import 'starability/starability-minified/starability-basic.min.css';
import Starability from 'starability';

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".rating-form");
const emailInput = document.querySelector(".rating-input-email");
const messageTextarea = document.querySelector(".rating-input-textaera");
const closeBottom = document.querySelector(".rating-close");
const ratingStars = document.querySelector(".rating-rating");
const ratingNumber = document.querySelector(".rating-number");


ratingNumber.textContent = "0.0";



form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);


ratingStars.addEventListener("click", function() {
  ratingNumber.textContent = ratingStars.querySelector('fieldset input:checked').value + ".0" || "0.0";
  
})




closeBottom.addEventListener("click", function(){
   const Backdrop = document.querySelector(".backdrop");
   Backdrop.classList.remove("is-open");
   ratingNumber.textContent = "0.0";

   ratingStars.querySelectorAll('input').forEach(input => input.checked = false);
});

function onFormSubmit(event){
    event.preventDefault();

    if (emailInput.value !== "" && messageTextarea.value !== "") {
        const formData = {
            email: emailInput.value,
            message: messageTextarea.value,
            rating: ratingNumber.textContent 
        };

        localStorage.removeItem(STORAGE_KEY);
        event.currentTarget.reset();
        
        ratingNumber.textContent = "0.0";

        ratingStars.querySelectorAll('input').forEach(input => input.checked = false);
    } else {
        alert("Всі поля повинні бути заповнені.");
    }
}

function onFormInput() {
    const formState = {
        email: emailInput.value.trim(),
        message: messageTextarea.value.trim(),
        rating: ratingNumber.textContent 
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
    ratingNumber.textContent = ratingStars.querySelector('fieldset input:checked').value+".0" || "0.0";
}

function populateFormFields() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const { email, message, rating} = JSON.parse(savedMessage);
    emailInput.value = email;
    messageTextarea.value = message;
    ratingNumber.textContent = rating;
  }
}

populateFormFields();

