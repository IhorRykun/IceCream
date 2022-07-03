
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuOnModal = document.querySelector("[data-modal-mob-open]");
  const closeMenuLink1 = document.querySelector("[data-link1-close]");
  const closeMenuLink2 = document.querySelector("[data-link2-close]");
  const closeMenuLink3 = document.querySelector("[data-link3-close]");
  const closeMenuLink4 = document.querySelector("[data-link4-close]");
  const closeMenuLink5 = document.querySelector("[data-link5-close]");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  closeMenuLink1.addEventListener('click', toggleMenu);
  closeMenuLink2.addEventListener('click', toggleMenu);
  closeMenuLink3.addEventListener('click', toggleMenu);
  closeMenuLink4.addEventListener('click', toggleMenu);
  closeMenuLink5.addEventListener('click', toggleMenu);
  closeMenuOnModal.addEventListener('click', toggleMenu);

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();