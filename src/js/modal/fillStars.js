async function fillStars(exerciseData) {
  try {
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
