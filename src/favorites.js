// function renderFilteredFavExercises() {
//   const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//   const newData = favorites

function renderFilteredFavExercises() {
  let favorites = [];
  if (typeof localStorage !== 'undefined') {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  }

  const newData = favorites
    .map(
      item => `<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./img/sprite.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn" type="button" data-id="${
            item._id
          }">Start
              <svg class="fav-start-arrow-icon" width="14" height="14">
                  <use href="./assets/sprite-a52c12ca.svg#arrow"></use>
              </svg>
          </button>
      </div>
      <div class="fav-ex-name-box">
          <div class="fav-run-icon-box">
              <svg class="fav-run-icon" width="16" height="16">
                  <use href="./img/sprite.svg#runner"></use>
              </svg>
          </div>
          <p class="fav-ex-name">${capitalizeText(item.name)}</p>
      </div>
      <ul class="fav-ex-desc-list">
          <li class="fav-ex-desc-item">Burned calories:
              <span class="fav-ex-desc-value">${item.burnedCalories} / ${
        item.time
      } min</span>
          </li>
          <li class="fav-ex-desc-item">Body part:
              <span class="fav-ex-desc-value">${capitalizeText(
                item.bodyPart
              )}</span>
          </li>
          <li class="fav-ex-desc-item">Target:
              <span class="fav-ex-desc-value">${capitalizeText(
                item.target
              )}</span>
          </li>
      </ul>
  </div>`
    )
    .join('');

  const noFavExercisesHTML = `
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `;

  // const screenWidth = window.innerWidth;
  // const itemsPerPage = screenWidth > 768 ? 0 : 8;
  // const totalPages = Math.ceil(favorites.length / itemsPerPage);

  // const noFavExercisesContainer = document.querySelector('.no-fav-ex-inner');
  // const favExercisesContainer = document.querySelector('.fav-ex-list');
  // const paginationContainer = document.querySelector('.fav-pag-btn-set');

  // if (newData.length === 0) {
  //   if (noFavExercisesContainer) {
  //     noFavExercisesContainer.innerHTML = noFavExercisesHTML;
  //   }
  // } else {
  //   if (favExercisesContainer) {
  //     favExercisesContainer.innerHTML = newData;
  //   }
  // }

  // if (totalPages > 1) {
  //   if (paginationContainer) {
  //     const fragment = document.createDocumentFragment();

  //     for (let i = 1; i <= totalPages; i++) {
  //       const button = document.createElement('button');
  //       button.classList.add('fav-pagination-btn');
  //       button.textContent = i;
  //       fragment.appendChild(button);
  //     }

  //     paginationContainer.innerHTML = '';
  //     paginationContainer.appendChild(fragment);
  //   }
  // }

  // const deleteButtons = document.querySelectorAll('.fav-delete-btn');
  // Array.from(deleteButtons).forEach(button => {
  //   button.addEventListener('click', () => {
  //     const listItem = button.closest('.fav-ex-item');
  //     const itemId = listItem.querySelector('.fav-start-ex-btn').dataset.id;

  //     // Remove the item from the list
  //     listItem.remove();

  //     // Remove the item from local storage
  //     const updatedFavorites = favorites.filter(item => item._id !== itemId);
  //     localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  //   });
  // });
}

export function capitalizeText(text) {
  if (!text.length) {
    return '';
  }
  const firstLetter = text.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = text.slice(1);
  return firstLetterCap + remainingLetters;
}

renderFilteredFavExercises();
