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
  containerModal
) {
  modalSection.classList.add('is-visible');
  containerModal.innerHTML = `
    <img
      src="${gifUrl}"
      alt="${name}"
      class="gif"
    />
    <div class="info">
        <h2 class="title">${name}</h2>
        <div class="raiting">
            <p>${rating}</p>
            <div class="stars">
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
                <svg class="icon">
                    <use href="./img/sprite.svg#star"></use>
                </svg>
            </div>
        </div>
        <ul class="info_list">
            <li class="info_el">
            <p class="info_el_title">Target</p>
            <p class="info_el_text">${target}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Body Part</p>
            <p class="info_el_text">${bodyPart}</p>
            </li>
            <li class="info_el">
            <p class="info_el_title">Equipment</p>
            <p class="info_el_text">${equipment}</p>
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
        <button type="button" class="addToFavorites">
            Add to favorites
            <svg class="icon">
            <use href="./img/sprite.svg#heart"></use>
            </svg>
        </button>
        <button type="button" class="deletedForFavorites">
            Remove from favorites
        </button>
        <button type="button" class="exitModal">
            <svg class="icon">
            <use href="./img/sprite.svg#close"></use>
            </svg>
        </button>
    </div>
    `;
}
export { renderExercise };
