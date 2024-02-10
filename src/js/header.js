const openButton = document.querySelector(".head-button");
const backdropMenu = document.querySelector(".backdrop-menu-container");
openButton.addEventListener('click', openMenu);
const closeButton = document.querySelector(".backdrop-button");

function openMenu() {
    backdropMenu.classList.remove("is-hidden");
    closeButton.addEventListener('click', closeMenu);
};

function closeMenu() {
    backdropMenu.classList.add("is-hidden");
    closeButton.removeEventListener('click', closeMenu);
};
