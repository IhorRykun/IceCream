(() => {
    const refs = {
      openModalBtnMob: document.querySelector("[data-modal-mob-open]"),
      openModalBtnTab: document.querySelector("[data-modal-open-tablet]"),
      openModalBtnDesk: document.querySelector("[data-modal-open-desktop]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      openModalSuccessBtn: document.querySelector("[data-modal-success-open]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtnMob.addEventListener("click", toggleModal);
    refs.openModalBtnTab.addEventListener("click", toggleModal);
    refs.openModalBtnDesk.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.openModalSuccessBtn.addEventListener("click", toggleModal);
  
    function toggleModal(e) {
      refs.modal.classList.toggle("is-hidden");
      e.preventDefault();
    }
  })();