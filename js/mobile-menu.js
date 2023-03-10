(() => {
  var mobileMenu = document.querySelectorAll('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    document.body.classList.toggle('modal-open');
    mobileMenu.forEach((element, index) => {
      mobileMenu[index].classList.toggle('is-open');
    });

    const scrollLockMethod = !isMenuOpen
      ? '.disableBodyScroll'
      : '.enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.forEach((element, index) => {
      mobileMenu[index].classList.removeAttribbute('is-open');
    });
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
