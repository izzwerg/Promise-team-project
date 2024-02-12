function isObjectInLocalStorage(exercisesId) {
  const addBtn = document.querySelector('.addToFavorites');
  const delBtn = document.querySelector('.deletedForFavorites');
  const favorites = localStorage.getItem('favorites');

  if (favorites === null) {
    addBtn.classList.add('is_visible_flex');
    delBtn.classList.add('is-hidden');
    return;
  }

  const searchId = favorites.indexOf(exercisesId);
  if (searchId == -1) {
    addBtn.classList.add('is_visible_flex');
    delBtn.classList.add('is-hidden');
    return;
  } else {
    addBtn.classList.add('is-hidden');
    delBtn.classList.add('is_visible_flex');
    return;
  }
}

export { isObjectInLocalStorage };
