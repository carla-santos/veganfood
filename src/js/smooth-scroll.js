function initSmoothScroll() {
  const links = document.querySelectorAll('a:not([target="_blank"]');
  const mainNav = document.querySelector('[data-menu="nav"]');

  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const href = link.getAttribute('href');

      // Scroll para rolar de volta ao topo
      if (href === '#') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      // Scroll para os outros links
      if (href !== '#' && href.startsWith('#')) {
        const sectionScroll = document.querySelector(href);
        sectionScroll.scrollIntoView({ behavior: 'smooth' });
      }

      // Fechar a navegação mobile
      if (link.classList.contains('main-nav__link')) {
        mainNav.classList.toggle('nav-active');
      }
    });
  });
}
initSmoothScroll();
