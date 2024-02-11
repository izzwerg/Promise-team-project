function capitalizeText(text) {
    if (!text.length) {
      return '';
    }
    const firstLetter = text.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = text.slice(1);
    return firstLetterCap + remainingLetters;
  }

function renderExercise(
  {
    gifUrl,
    name,
    rating,
    target,
    bodyPart,
    equipment,
    popularity,
    burnedCalories,
    description,
  },
  modalSection,
  containerModal,
  overlay
) {
  overlay.classList.add('is-visible');
  modalSection.classList.add('is-visible');
  containerModal.innerHTML = `
        <img
        src="${gifUrl}"
        alt="${name}"
        class="gif"
        />
        <div class="info">
            <h2 class="title">${capitalizeText(name)}</h2>
            <div class="raiting">
                <p>${Number(rating).toFixed(1)}</p>
                <div class="stars">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#star"></use>
                    </svg>
                </div>
            </div>
            <ul class="info_list">
                <li class="info_el">
                <p class="info_el_title">Target</p>
                <p class="info_el_text">${capitalizeText(target)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Body Part</p>
                <p class="info_el_text">${capitalizeText(bodyPart)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Equipment</p>
                <p class="info_el_text">${capitalizeText(equipment)}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Popular</p>
                <p class="info_el_text">${popularity}</p>
                </li>
                <li class="info_el">
                <p class="info_el_title">Burned calories</p>
                <p class="info_el_text">${burnedCalories}/3min</p>
                </li>
            </ul>
            <p class="description">${description}</p>
            <div class="buttons">
                <button type="button" class="addToFavorites">
                    Add to favorites
                    <svg class="iconHeart">
                        <use href="./assets/sprite-a52c12ca.svg#heart"></use>
                    </svg>
                </button>
                <button type="button" class="deletedForFavorites">
                    Remove from favorites
                </button>
                <button type="button" class="giveRating">
                    Give a rating
                </button>
                <button type="button" class="exitModal">
                    <svg class="icon">
                        <use href="./assets/sprite-a52c12ca.svg#close"></use>
                    </svg>
                </button>
            </div>
        </div>
        `;
}
export { renderExercise };
