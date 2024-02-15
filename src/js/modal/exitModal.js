function exitModal(modalSection, containerModal, overlay) {
  const exitModalButton = modalSection.querySelector('.exitModal');
  const exitModalHandler = () => {
    modalSection.classList.add('closing');
    setTimeout(() => {
      modalSection.classList.remove('is-visible');
      overlay.classList.remove('is-visible');
      document.body.style.overflow = 'visible';
      containerModal.innerHTML = '';
      modalSection.classList.remove('closing');
    }, 300);
    document.removeEventListener('click', backdropHandler);
    exitModalButton.removeEventListener('click', exitModalHandler);
    document.removeEventListener('keydown', keydownHandler);
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
