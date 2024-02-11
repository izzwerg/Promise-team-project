import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let favoritesInStorage = JSON.parse(localStorage.getItem('favorites'));

function addToFavorites(newExercises) {
    const addBtn = document.querySelector('.addToFavorites');
    const delBtn = document.querySelector('.deletedForFavorites');
    
    const addHandler = () => {
        if (!favoritesInStorage) {
            favoritesInStorage = [];
        }
        
        favoritesInStorage.push(newExercises);
        localStorage.setItem('favorites', JSON.stringify(favoritesInStorage));
        addBtn.classList.remove('is-visible');
        addBtn.classList.add('is-hidden');
        delBtn.classList.remove('is-hidden');
        delBtn.classList.add('is-visible');
        iziToast.info({
            message:'Вправу додано до улюблених!'
        })
    }

    addBtn.addEventListener('click',addHandler);
    
}

export { addToFavorites };