import { searchExercises } from './fetcher';
import { renderExercise } from './renderModal';
import { addToFavorites } from './addToFavorites';
import { deleteForFavorites } from './deleteForFavorites';
import { exitModal } from './exitModal';
import { isObjectInLocalStorage } from './isObjectInLocalStorage';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export const openModal = () => {
  const startButtons = document.querySelectorAll('.filtered-start-ex-btn');
  startButtons.forEach(item => {
    item.addEventListener('click', async event => {
      const exercisesId = event.target.dataset.id;
      const modalSection = document.querySelector('.section_modal');
      const containerModal = document.querySelector('.container_modal');
      try {
        const exerciseData = await searchExercises(exercisesId);
        renderExercise(exerciseData, modalSection, containerModal);
        isObjectInLocalStorage(exercisesId);
        addToFavorites(exerciseData);
        deleteForFavorites(exerciseData);
        exitModal(modalSection, containerModal);
      } catch (error) {
        console.log(error);
        iziToast.error({
          message: 'Error when trying to show the exercise',
        });
      }
    });
  });
};
