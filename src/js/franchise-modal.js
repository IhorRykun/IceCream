(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-franchise-modal-open]"),
      closeModalBtn1: document.querySelector("[data-franchise-modal-close1]"),
      closeModalBtn2: document.querySelector("[data-franchise-modal-close2]"),
      openNextStepBtn: document.querySelector("[data-franchise-modal-open-next-step]"),
      openPrevStepBtn: document.querySelector("[data-franchise-modal-open-prev-step]"),
      openModalSuccessBtn: document.querySelector("[data-modal-success-open-franchise]"),
      backdrop: document.querySelector("[data-franchise-modal]"),
      modal1: document.querySelector("[data-franchise-modal-1]"),
      modal2: document.querySelector("[data-franchise-modal-2]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn1.addEventListener("click", toggleModal);
    refs.closeModalBtn2.addEventListener("click", toggleModal);
    refs.openModalSuccessBtn.addEventListener("click", toggleModal);
    
    refs.openNextStepBtn.addEventListener("click", toggleStep);
    refs.openPrevStepBtn.addEventListener("click", toggleStep);
    refs.openModalSuccessBtn.addEventListener("click", toggleStep);
    refs.closeModalBtn2.addEventListener("click", toggleStep);

  
    function toggleModal(e) {
      refs.backdrop.classList.toggle("is-hidden");
      e.preventDefault();
    };

    function toggleStep(e) {
      refs.modal1.classList.toggle("active-step");
      refs.modal2.classList.toggle("active-step");
      e.preventDefault();
    }
  })();