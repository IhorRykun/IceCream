(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product1-modal-open]"),
     closeModalBtn: document.querySelector("[data-product1-modal-close]"),
     modal1: document.querySelector("[data-product1-modal]"),
     modal2: document.querySelector("[data-product2-modal]"),
     modal3: document.querySelector("[data-product3-modal]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal(e) {
     refs.modal1.classList.toggle("is-hidden");
     e.preventDefault();
   }

   refs.openModalBtn.addEventListener("click", closeOther);

   function closeOther(e) {
    refs.modal2.classList.add("is-hidden");
    refs.modal3.classList.add("is-hidden");
    e.preventDefault();
  }
 })();

(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product2-modal-open]"),
     closeModalBtn: document.querySelector("[data-product2-modal-close]"),
     modal1: document.querySelector("[data-product1-modal]"),
     modal2: document.querySelector("[data-product2-modal]"),
     modal3: document.querySelector("[data-product3-modal]"),
    };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal(e) {
     refs.modal2.classList.toggle("is-hidden");
     e.preventDefault();
   }

   refs.openModalBtn.addEventListener("click", closeOther);

   function closeOther(e) {
    refs.modal1.classList.add("is-hidden");
    refs.modal3.classList.add("is-hidden");
    e.preventDefault();
  }


 })();

(() => {
   const refs = {
     openModalBtn: document.querySelector("[data-product3-modal-open]"),
     closeModalBtn: document.querySelector("[data-product3-modal-close]"),
     modal1: document.querySelector("[data-product1-modal]"),
     modal2: document.querySelector("[data-product2-modal]"),
     modal3: document.querySelector("[data-product3-modal]"),
   };
 
   refs.openModalBtn.addEventListener("click", toggleModal);
   refs.closeModalBtn.addEventListener("click", toggleModal);
 
   function toggleModal(e) {
     refs.modal3.classList.toggle("is-hidden");
     e.preventDefault();
   }

   refs.openModalBtn.addEventListener("click", closeOther);

   function closeOther(e) {
    refs.modal1.classList.add("is-hidden");
    refs.modal2.classList.add("is-hidden");
    e.preventDefault();
  }
 })();