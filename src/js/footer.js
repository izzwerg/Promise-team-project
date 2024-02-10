import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const subscriptionForm = document.getElementById('subscriptionForm');
const userSubmit = document.getElementById('user-submit');
const subscribeButton = document.getElementById('subscribeButton');
const BASE_URL = 'https://energyflow.b.goit.study/api/subscription';

subscriptionForm.addEventListener('submit', onFormSubmit);
async function onFormSubmit(event) {
  event.preventDefault();

  const userEmail = userSubmit.value;

  if (!validateEmail(userEmail)) {
    alert('Введіть коректний email адресу');
    return;
  }

  try {
    const checkResponse = await fetch(`${BASE_URL}/check-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    });

    const checkData = await checkResponse.json();

    if (!checkResponse.ok) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, an error occurred while verifying an email. Please try again!',
      });

      return;
    }

    if (checkData.exists) {
      iziToast.info({
        title: 'Info',
        message: 'Subscription already exists',
      });
      return;
    }

    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    });

    if (response.ok) {
      iziToast.info({
        title: 'Info',
        message:
          "We're excited to have you on board! 🎉 Thank you for subscribing to new exercises on Energy Flow. You've just taken a significant step towards improving your fitness and well-being.",
      });
    } else {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, an error occurred while verifying an email. Please try again!',
      });
    }
  } catch (error) {
    console.error(error);
  }
}

function validateEmail(email) {
  const regex = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return regex.test(email);
}
