import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

function deleteForFavorites() {
    const addBtn = document.querySelector('.addToFavorites');
    const delBtn = document.querySelector('.deletedForFavorites');
    
    const delHandler = () => {
        localStorage.removeItem('favorites');
        addBtn.classList.remove('is-hidden');
        addBtn.classList.add('is-visible');
        delBtn.classList.remove('is-visible');
        delBtn.classList.add('is-hidden');
    }

    delBtn.addEventListener('click',delHandler);
    
}

export { deleteForFavorites };