import iziToast from 'izitoast';
import axios from 'axios';

export function ratingWindow() {
  const STORAGE_KEY = 'feedback-form-state';
  const form = document.querySelector('.rating-form');
  const emailInput = document.querySelector('.rating-input-email');
  const messageTextarea = document.querySelector('.rating-input-textaera');
  const closeBottom = document.querySelector('.rating-close');
  const openRating = document.querySelector('.giveRating');
  const Backdrop = document.querySelector('.backdrop');
  const modalWindov = document.querySelector('.section_modal');
  let exerciseId;
  const stars = document.querySelectorAll('.rating-star-form input');
  const ratingNumber = document.querySelector('.rating-number');

  form.addEventListener('input', onFormInput);
  form.addEventListener('submit', onFormSubmit);

  openRating.addEventListener('click', function () {
    Backdrop.classList.add('is-open');
    modalWindov.classList.remove('is-visible');
    exerciseId = openRating.dataset.id;
  });

  closeBottom.addEventListener('click', function () {
    Backdrop.classList.remove('is-open');
    modalWindov.classList.add('is-visible');
  });

  stars.forEach(star => {
    star.addEventListener('change', () => {
      const selectedRating = star.value;
      ratingNumber.textContent = selectedRating + '.0';
      saveRatingToLocalStorage(selectedRating);
    });
  });

  async function onFormSubmit(event) {
    event.preventDefault();

    if (
      getSelectedRating() !== null
    ) {
      const formData = {
        email: emailInput.value,
        review: messageTextarea.value,
        rate: Number(getSelectedRating()),
      };

      async function sendPatchRequest(exercisesId, formData) {
        try {
          await axios.patch(
            `https://energyflow.b.goit.study/api/exercises/${exercisesId}/rating`,
            formData
          );
          iziToast.info({
            message:'Рейтинг оновлено!'
        })

        } catch (error) {
          iziToast.error({
            message: `PATCH error`,
          });

        }
      }

      sendPatchRequest(exerciseId, formData);

      form.reset();
      clearRatingSelection();
      ratingNumber.textContent = '0.0';
      localStorage.removeItem(STORAGE_KEY);
      Backdrop.classList.remove('is-open');

      stars.forEach(star => {
        if (!star.checked) {
          star.parentElement.classList.add('disabled');
        }
      });
    } else {
      iziToast.error({
        message: 'Необхідно поставити оцінку!',
      });
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
    const selectedStar = document.querySelector(
      '.rating-star-form input:checked'
    );
    return selectedStar ? selectedStar.value : null;
  }

  function clearRatingSelection() {
    stars.forEach(star => {
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
        const selectedStar = document.querySelector(
          `.rating-star-form input[value="${rating}"]`
        );
        if (selectedStar) {
          selectedStar.checked = true;
          ratingNumber.textContent = Number(`${rating}.toFixed(1)`);
        }
      }
    }
  }
  populateFormFields();
}
