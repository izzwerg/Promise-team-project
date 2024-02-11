const buttonScrollToTop = document.querySelector('.button-to-top');

function handleScroll() {
  if (window.scrollY > window.innerHeight / 2) {
    showButton();
  } else {
    hideButton();
  }
}
window.addEventListener('scroll', handleScroll);

function handleClick(event) {
  event.preventDefault();
  scrollToTop();
}
buttonScrollToTop.addEventListener('click', handleClick);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
function showButton() {
  buttonScrollToTop.style.display = 'block';
}
function hideButton() {
  buttonScrollToTop.style.display = 'none';
}
