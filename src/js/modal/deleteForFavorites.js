import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function deleteForFavorites(deletedObject) {
  const addBtn = document.querySelector('.addToFavorites');
  const delBtn = document.querySelector('.deletedForFavorites');

  const delHandler = () => {
    let favoritesInStorage = JSON.parse(localStorage.getItem('favorites'));
    for (let i = 0; i < favoritesInStorage.length; i++) {
      if (favoritesInStorage[i]._id === deletedObject._id) {
        favoritesInStorage.splice(i, 1);
        localStorage.setItem('favorites', JSON.stringify(favoritesInStorage));
        break;
      }
    }
    addBtn.classList.remove('is-hidden');
    addBtn.classList.add('is_visible_flex');
    delBtn.classList.remove('is_visible_flex');
    delBtn.classList.add('is-hidden');
    iziToast.info({
      message: 'Вправу видалено з улюблених!',
    });
  };

  delBtn.addEventListener('click', delHandler);
}

export { deleteForFavorites };
