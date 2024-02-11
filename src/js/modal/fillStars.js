import { searchExercises } from './fetcher';

async function fillStars(exerciseId) {
  try {
    const exerciseData = await searchExercises(exerciseId);
    const roundedRating = Math.floor(exerciseData.rating);
    const iconsStars = document.querySelectorAll('.icon');

    for (let i = 0; i < roundedRating; i++) {
      iconsStars[i].style.fill = '#EEA10C';
    }
  } catch (error) {
    console.error('Error while fetching exercise data:', error);
  }
}

export { fillStars };
