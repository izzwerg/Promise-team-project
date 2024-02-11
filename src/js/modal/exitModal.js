function exitModal(modalSection, containerModal, overlay) {
  const exitModalButton = modalSection.querySelector('.exitModal');
  const exitModalHandler = () => {
    modalSection.classList.remove('is-visible');
    overlay.classList.remove('is-visible');
    containerModal.innerHTML = '';
  };

  const backdropHandler = event => {
    if (!modalSection.contains(event.target)) {
      exitModalHandler();
    }
  };

  const keydownHandler = event => {
    if (event.key === 'Escape') {
      exitModalHandler();
    }
  };

  document.addEventListener('click', backdropHandler);
  exitModalButton.addEventListener('click', exitModalHandler);
  document.addEventListener('keydown', keydownHandler);
}

export { exitModal };
