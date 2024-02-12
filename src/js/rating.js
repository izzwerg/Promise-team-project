
const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector(".rating-form");
const emailInput = document.querySelector(".rating-input-email");
const messageTextarea = document.querySelector(".rating-input-textaera");
const closeBottom = document.querySelector(".rating-close");
const openRating = document.querySelector(".giveRating");
const Backdrop = document.querySelector(".backdrop");
const stars = document.querySelectorAll(".rating-star-form input");
const ratingNumber = document.querySelector(".rating-number");

form.addEventListener("input", onFormInput);
form.addEventListener("submit", onFormSubmit);




openRating.addEventListener("click", openRatingFunction);

function openRatingFunction(){
  Backdrop.classList.add("is-open");
};




closeBottom.addEventListener("click", function(){
   Backdrop.classList.remove("is-open");
});




stars.forEach((star) => {
  star.addEventListener("change", () => {
    const selectedRating = star.value;
    ratingNumber.textContent = selectedRating + ".0";
    saveRatingToLocalStorage(selectedRating);
  });
});




function onFormSubmit(event){
  event.preventDefault();

  if (emailInput.value !== "" && messageTextarea.value !== "") {
    const formData = {
      email: emailInput.value,
      message: messageTextarea.value,
      rating: getSelectedRating(),
    };

    form.reset();
    clearRatingSelection();
    ratingNumber.textContent = "0.0";
    localStorage.removeItem(STORAGE_KEY);

    stars.forEach((star) => {
      if (!star.checked) {
        star.parentElement.classList.add("disabled");
      }
    });
  } else {
    alert("All fields must be filled \n (Усі поля повинні бути заповнені)");
  }
}




function onFormInput() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
    rating: getSelectedRating(),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}



function getSelectedRating() {
  const selectedStar = document.querySelector(".rating-star-form input:checked");
  return selectedStar ? selectedStar.value : null;
}




function clearRatingSelection() {
  stars.forEach((star) => {
    star.checked = false;
  });
}




function saveRatingToLocalStorage(rating) {
  const formState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  formState.rating = rating;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formState));
}




function populateFormFields() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    const { email, message, rating } = JSON.parse(savedMessage);
    emailInput.value = email;
    messageTextarea.value = message;
    
    if (rating) {
      const selectedStar = document.querySelector(`.rating-star-form input[value="${rating}"]`);
      if (selectedStar) {
        selectedStar.checked = true;
        ratingNumber.textContent = `${rating}.0`;
      }
    }
  }
}

populateFormFields();
