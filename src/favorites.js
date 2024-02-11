function renderFilteredFavExercises() {
  const newData = dataList
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
  if (newData.length === 0) {
    const noFavExercisesHTML = `
      <div class="no-fav-ex-inner">
        <div class="dumbbell-img"></div>
        <p class="no-fav-text">It appears that you haven't added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future.</p>
      </div>
    `;
    // Render the HTML for no favorite exercises
    document.getElementsByClassName('no-fav-ex-inner').innerHTML =
      noFavExercisesHTML;
  } else {
    // Render the HTML for filtered favorite exercises
    document.getElementsByClassName('fav-ex-list').innerHTML = newData;
  }

  const screenWidth = window.innerWidth;
  const itemsPerPage = screenWidth > 768 ? 0 : 8;
  const totalPages = Math.ceil(dataList.length / itemsPerPage);

  if (totalPages > 1) {
    const paginationContainer =
      document.getElementsByClassName('fav-pag-btn-set')[0];
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.classList.add('fav-pagination-btn');
      button.textContent = i;
      paginationContainer.appendChild(button);
    }
  }
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
