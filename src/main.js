import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const exercisesWrapper = document.querySelector('.wrapper-exercises');
const paginationWrapper = document.querySelector('.pagination-wrapper');
const exercisesTitle = document.querySelector('.exercises-title');
const muscleBtn = document.getElementById('muscle-btn');
const bodyBtn = document.getElementById('body-btn');
const equipmentBtn = document.getElementById('equipment-btn');
const partHeader = document.querySelector('.exercises-title');
const searchPlace = document.querySelector('.search-container');

let currentFilter = 'Muscles';

let selectedBtn = 'muscle-btn';

let totalPages;
let page = 1;
let dataList;
let exerciseName;
let exercisePage = 1;

[muscleBtn, bodyBtn, equipmentBtn].forEach(btn => {
  btn.addEventListener('click', function () {
    if (selectedBtn !== btn.id) {
      changeActiveBtn(btn.id);
      selectedBtn = btn.id;
      page = 1;
      if (btn.id === 'muscle-btn') {
        currentFilter = 'Muscles';
      }
      if (btn.id === 'body-btn') {
        currentFilter = 'Body parts';
      }
      if (btn.id === 'equipment-btn') {
        currentFilter = 'Equipment';
      }
      getExercises();
    }
  });
});

function changeActiveBtn(id) {
  [muscleBtn, bodyBtn, equipmentBtn].forEach(btn => {
    btn.className = `exercises-category ${id === btn.id ? 'active' : ''}`;
  });
}

getExercises();

async function getExercises() {
  const apiUrl = 'https://energyflow.b.goit.study/api/filters';
  const requestData = {
    filter: currentFilter,
    limit: setLimit(),
    page,
  };

  try {
    const response = await axios.get(
      `${apiUrl}?${new URLSearchParams(requestData)}`
    );
    exercisesWrapper.innerHTML = `<div class="muscles-list"></div>`;
    dataList = response.data.results;
    totalPages = response.data.totalPages;
    renderExercises();
    setPagination();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong. Please try again later.`,
      position: 'topRight',
    });
  }
}

function getBodyParts() {
  // BODY PARTS SECTION
  return;
}

function getEquipment() {
  //Equipment SECTION
  return;
}
function renderExercises() {
  const newData = dataList
    .map(
      item => `<div class="muscle-item" 
       style="background-image: linear-gradient(rgba(16, 16, 16, 0.7), rgba(16, 16, 16, 0.7)), url(${
         item.imgUrl
       })" ><div class="muscle-item-wrapper">
          <span class="muscle-category">${capitalizeText(item.name)}</span>
           <span class="muscle-item-category">${item.filter}</span></div>
           </div>`
    )
    .join('');
  const muscleList = document.querySelector('.muscles-list');
  muscleList.innerHTML = newData;
  muscleList.classList.remove('desk-flex');
  muscleList.classList.remove('tab-flex');
  searchPlace.classList.add('is-hidden');
  partHeader.innerHTML = 'Exercises';
  getByFilter(muscleList);
  exercisePage = 1;
}

function setPagination() {
  paginationWrapper.classList.remove("scroll-x");
  if (totalPages > 1) {
  const paginationList = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationList.push(
      `<span class="pagination-number ${
        i === page ? 'active' : ''
      }">${i}</span>`
    );
  }
  paginationWrapper.innerHTML = paginationList.join('');
  const paginationNumbers =
    document.getElementsByClassName('pagination-number');
  for (let i = 0; i < paginationNumbers.length; i++) {
    paginationNumbers[i].addEventListener('click', function () {
      changePagination(i + 1);
    });
  }
} else {
  paginationWrapper.innerHTML = '';
}
}

function changePagination(newPageNumber) {
  if (newPageNumber === page) {
    return;
  }
  page = newPageNumber;
  getExercises();
}

function capitalizeText(text) {
  if (!text.length) {
    return '';
  }
  const firstLetter = text.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = text.slice(1);
  return firstLetterCap + remainingLetters;
}
function setLimit() {
  if (window.screen.width >= 768) {
    return 12;
  }
  return 8;
}

function getByFilter(muscleList) {
  const exerciseTargets = muscleList.querySelectorAll('.muscle-item');
  exerciseTargets.forEach(exerciseTarget =>
    exerciseTarget.addEventListener('click', function () {
      const targetName = exerciseTarget.querySelector('.muscle-category');
      exerciseName = targetName.textContent.toLowerCase();
      getFilteredExerrcises();
    })
  );
}

async function getFilteredExerrcises() {
  const apiUrl = 'https://energyflow.b.goit.study/api/exercises';
  let filterCheck = document.querySelector('.active');
  let requestData;
  if (filterCheck.textContent == 'Body parts') {
    requestData = {
      bodypart: exerciseName,
      limit: setExercisesLimit(),
      page: exercisePage,
    };
  }
  if (filterCheck.textContent == 'Muscles') {
    requestData = {
      muscles: exerciseName,
      limit: setExercisesLimit(),
      page: exercisePage,
    };
  }
  if (filterCheck.textContent == 'Equipment') {
    requestData = {
      equipment: exerciseName,
      limit: setExercisesLimit(),
      page: exercisePage,
    };
  }

  try {
    const response = await axios.get(
      `${apiUrl}?${new URLSearchParams(requestData)}`
    );
    exercisesWrapper.innerHTML = `<div class="muscles-list"></div>`;
    dataList = response.data.results;
    totalPages = response.data.totalPages;

    renderFilteredExercises();
    setFilteredPagination();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong. Please try again later.`,
      position: 'topRight',
    });
  }
}

function setExercisesLimit() {
  if (window.screen.width >= 1440) {
    return 9;
  }
  return 8;
}

function renderFilteredExercises() {
  const newData = dataList
    .map(
      item => `<div class="filtered-ex-item">
      <div class="filtered-ex-item-header">
          <div class="filtered-workout-box">
              <p class="filtered-workout-text">workout</p>
          </div>
          <div class="filtered-rating-container">
              <p class="filtered-rating-text">${Number(item.rating).toFixed(
                1
              )}</p>
              <div class="filtered-rating-icon-container">
              <svg class="filtered-rating-icon" width="14" height="14">
                  <use href="./img/sprite.svg#star"></use>
              </svg>
              </div>
          </div>
          <button class="filtered-start-ex-btn" type="button">Start
              <svg class="filtered-start-arrow-icon" width="14" height="14">
                  <use href="./img/sprite.svg#arrow"></use>
              </svg>
          </button>
      </div>
      <div class="filtered-ex-name-box">
          <div class="filtered-run-icon-box">
              <svg class="filtered-run-icon" width="16" height="16">
                  <use href="./img/sprite.svg#runner"></use>
              </svg>
          </div>
          <p class="filtered-ex-name">${capitalizeText(item.name)}</p>
      </div>
      <ul class="filtered-ex-desc-list">
          <li class="filtered-ex-desc-item">Burned calories:
              <span class="filtered-ex-desc-value">${item.burnedCalories} / ${
        item.time
      } min</span>
          </li>
          <li class="filtered-ex-desc-item">Body part:
              <span class="filtered-ex-desc-value">${capitalizeText(
                item.bodyPart
              )}</span>
          </li>
          <li class="filtered-ex-desc-item">Target:
              <span class="filtered-ex-desc-value">${capitalizeText(
                item.target
              )}</span>
          </li>
      </ul>
  </div>`
    )
    .join('');
  const muscleList = document.querySelector('.muscles-list');
  muscleList.innerHTML = newData;
  if (exercisePage == 1) {partHeader.insertAdjacentHTML(
    'beforeend',
    ` / <span class="exercises-title-grey">${capitalizeText(
      dataList[0].bodyPart
    )}</span>`
  );}
  searchPlace.classList.remove('is-hidden');
  if (window.screen.width >= 1440) {
    muscleList.classList.add('desk-flex');
  }
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    muscleList.classList.add('tab-flex');
  }
}

function setFilteredPagination() {
  const paginationList = [];
  paginationWrapper.classList.remove("scroll-x");
  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      paginationList.push(
        `<span class="pagination-number ${
          i === exercisePage ? 'active' : ''
        }">${i}</span>`
      );
    }
    paginationWrapper.innerHTML = paginationList.join('');
    const paginationNumbers =
      document.getElementsByClassName('pagination-number');
    for (let i = 0; i < paginationNumbers.length; i++) {
      paginationNumbers[i].addEventListener('click', function () {
        changeFilteredPagination(i + 1);
      });
    }
    if (totalPages > 12 && window.screen.width < 768) {
      paginationWrapper.classList.add("scroll-x");
    }
  } else {
    paginationWrapper.innerHTML = '';
  }
}

function changeFilteredPagination(newPageNumber) {
  if (newPageNumber === exercisePage) {
    return;
  }
  exercisePage = newPageNumber;
  getFilteredExerrcises();
}
