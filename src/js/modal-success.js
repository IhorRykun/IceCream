(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-modal-success-open]"),
     openModalBtnFranchise: document.querySelector("[data-modal-success-open-franchise]"),
     closeModalBtn: document.querySelector("[data-modal-success-close]"),
     closeModalBtnOk: document.querySelector("[data-modal-success-close-1]"),
     modal: document.querySelector("[data-modal-success]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.openModalBtnFranchise.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtnOk.addEventListener("click", toggleModal);
 
   function toggleModal() {
     refs.modal.classList.toggle("is-hidden");
   }
 })();