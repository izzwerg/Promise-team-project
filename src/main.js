import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const exercisesWrapper = document.querySelector('.wrapper-exercises');
const paginationWrapper = document.querySelector('.pagination-wrapper');
const exercisesTitle = document.querySelector('.exercises-title');
const muscleBtn = document.getElementById('muscle-btn');
const bodyBtn = document.getElementById('body-btn');
const equipmentBtn = document.getElementById('equipment-btn');
let currentFilter = 'Muscles';

let selectedBtn = 'muscle-btn';

let totalPages;
let page = 1;
let dataList;

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
}


function setPagination() {
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
