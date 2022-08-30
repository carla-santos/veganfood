function initMenuFade() {
  const nav = document.querySelector('.main-nav');

  const handleHover = function (opacity) {
    return function (e) {
      if (e.target.classList.contains('main-nav__link')) {
        const link = e.target;

        const siblings = link.closest('.main-nav').querySelectorAll('.main-nav__link');

        const logo = link.closest('.main-header').querySelector('img');

        siblings.forEach((el) => {
          if (el != link) el.style.opacity = opacity;
        });
        logo.style.opacity = opacity;
      }
    };
  };
  nav.addEventListener('mouseover', handleHover(0.5));
  nav.addEventListener('mouseout', handleHover(1));
}
initMenuFade();
