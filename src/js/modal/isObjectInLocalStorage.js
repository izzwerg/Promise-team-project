function isObjectInLocalStorage(exercisesId) {
    const addBtn = document.querySelector('.addToFavorites');
    const delBtn = document.querySelector('.deletedForFavorites');
    const favorites = localStorage.getItem('favorites');

    if (favorites === null) {
        addBtn.classList.add('is-visible');
        delBtn.classList.add('is-hidden');
        return false;
    }

    const searchId = favorites.indexOf(exercisesId);
    if (searchId == -1) {
        addBtn.classList.add('is-visible');
        delBtn.classList.add('is-hidden');
        return false;
    } else {
        addBtn.classList.add('is-hidden');
        delBtn.classList.add('is-visible');
        return true;
    }
}

export { isObjectInLocalStorage };