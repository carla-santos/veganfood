function initStickyNav() {
  const hero = document.querySelector('.hero');

  const exibirStickyNav = function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('sticky-nav');
    } else {
      document.body.classList.remove('sticky-nav');
    }
  };

  const obsOpt = {
    root: null,
    threshold: 0,
    rootMargin: '-84px',
  };

  const heroObserver = new IntersectionObserver(exibirStickyNav, obsOpt);
  heroObserver.observe(hero);
}
initStickyNav();
