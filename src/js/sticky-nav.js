function initStickyNav() {
  const hero = document.querySelector('.hero');

  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];

      if (!ent.isIntersecting) {
        document.body.classList.add('sticky-nav');
      }

      if (ent.isIntersecting) {
        document.body.classList.remove('sticky-nav');
      }
    },
    {
      root: null,
      threshold: 0,
      rootMargin: '-84px',
    },
  );
  obs.observe(hero);
}
initStickyNav();
