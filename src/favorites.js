import { openModal } from './js/modal/openModal';

function renderFilteredFavExercises() {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const newData = favorites
    .map(
      item => `<li class="fav-ex-item">
      <div class="fav-ex-item-header">
          <div class="fav-workout-box">
              <p class="fav-workout-text">workout</p>
          </div>
          <button class="fav-delete-btn" type="submit">
                <svg class="fav-delete-icon" width="16" height="16">
                    <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                </svg>
          </button>
          <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${
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
                  <use href="./assets/sprite-a52c12ca.svg#runner"></use>
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

  const screenWidth = window.innerWidth;
  let itemsPerPage;

  if (screenWidth < 768) {
    itemsPerPage = 8;
  } else {
    itemsPerPage = favorites.length;
  }

  const noFavExercisesContainer = document.querySelector('.no-fav-ex-inner');
  const favExercisesContainer = document.querySelector('.fav-ex-list');
  const paginationContainer = document.querySelector('.fav-pag-btn-set');

  if (favorites.length === 0) {
    if (noFavExercisesContainer) {
      noFavExercisesContainer.innerHTML = noFavExercisesHTML;
    }
  } else {
    if (favExercisesContainer) {
      favExercisesContainer.innerHTML = newData;
      openModal();
    }
  }

  if (itemsPerPage < favorites.length) {
    if (paginationContainer) {
      const fragment = document.createDocumentFragment();
      const totalPages = Math.ceil(favorites.length / itemsPerPage);

      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.classList.add('fav-pagination-btn');
        button.textContent = i;
        button.addEventListener('click', () => {
          const startIndex = (i - 1) * itemsPerPage;
          const endIndex = startIndex + itemsPerPage;
          const slicedData = favorites.slice(startIndex, endIndex);
          const slicedDataHTML = slicedData
            .map(
              item => `<li class="fav-ex-item">
              <div class="fav-ex-item-header">
                  <div class="fav-workout-box">
                      <p class="fav-workout-text">workout</p>
                  </div>
                  <button class="fav-delete-btn" type="submit">
                        <svg class="fav-delete-icon" width="16" height="16">
                            <use href="./assets/sprite-a52c12ca.svg#trash"></use>
                        </svg>
                  </button>
                  <button class="fav-start-ex-btn filtered-start-ex-btn" type="button" data-id="${
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
                          <use href="./assets/sprite-a52c12ca.svg#runner"></use>
                      </svg>
                  </div>
                  <p class="fav-ex-name">${capitalizeText(item.name)}</p>
              </div>
              <ul class="fav-ex-desc-list">
                  <li class="fav-ex-desc-item">Burned calories:
                      <span class="fav-ex-desc-value">${
                        item.burnedCalories
                      } / ${item.time} min</span>
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
          favExercisesContainer.innerHTML = slicedDataHTML;
          openModal();
        });
        if (totalPages > 9 && screenWidth < 768) {
          button.classList.add('fav-pagi-btn-overflow');
        } else {
          button.classList.remove('fav-pagi-btn-overflow');
        }
        fragment.appendChild(button);
      }

      paginationContainer.innerHTML = '';
      paginationContainer.appendChild(fragment);
    }
  }

  const deleteButtons = document.querySelectorAll('.fav-delete-btn');
  Array.from(deleteButtons).forEach(button => {
    button.addEventListener('click', () => {
      const listItem = button.closest('.fav-ex-item');
      const itemId = listItem.querySelector('.fav-start-ex-btn').dataset.id;

      // Remove the item from the list
      listItem.remove();

      // Remove the item from local storage
      const updatedFavorites = favorites.filter(item => item._id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      favorites = updatedFavorites;
      renderFilteredFavExercises();
    });
  });
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
