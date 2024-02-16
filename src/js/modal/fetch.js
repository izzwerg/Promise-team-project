import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

axios.defaults.baseURL = `https://energyflow.b.goit.study/api/exercises`;

async function searchExercises(exercisesId) {
  try {
    const response = await axios.get(`/${exercisesId}`);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { status } = error.response;
      if (status >= 400 && status < 500) {
        iziToast.error({
          message:
            'Client error: No detailed information about the exercise was found.',
        });
      } else if (status >= 500) {
        iziToast.error({
          message:
            'Server error: Something went wrong while fetching exercise data.',
        });
      }
    } else if (error.request) {
      iziToast.error({
        message: 'Request error: Failed to send request to the server.',
      });
    } else {
      iziToast.error({
        message: 'Unknown error: Failed to fetch exercise data.',
      });
    }
    throw error;
  }
}

export { searchExercises };
