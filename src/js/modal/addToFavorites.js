import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { renderFilteredFavExercises } from '../../favorites-copy';

function addToFavorites(newExercises) {
  const addBtn = document.querySelector('.addToFavorites');
  const delBtn = document.querySelector('.deletedForFavorites');

  const addHandler = () => {
    let favoritesInStorage = JSON.parse(localStorage.getItem('favorites'));
    if (!favoritesInStorage) {
      favoritesInStorage = [];
    }

    favoritesInStorage.push(newExercises);
    localStorage.setItem('favorites', JSON.stringify(favoritesInStorage));
    addBtn.classList.remove('is_visible_flex');
    addBtn.classList.add('is-hidden');
    delBtn.classList.remove('is-hidden');
    delBtn.classList.add('is_visible_flex');
    iziToast.info({
      message: 'Вправу додано до улюблених!',
    });
    renderFilteredFavExercises();
  };

  addBtn.addEventListener('click', addHandler);
}

export { addToFavorites };
