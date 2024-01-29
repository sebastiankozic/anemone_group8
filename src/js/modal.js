(() => {
  const refs = {
    openModalBtn2: document.querySelector("[data-modal-open='2']"),
    closeModalBtn2: document.querySelector("[data-modal-close='2']"),
    modal2: document.querySelector("[data-modal='2']"),
  };

  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal2.classList.toggle("is-hidden");
  }
})();
