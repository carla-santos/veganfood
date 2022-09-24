'use strict';

function initMenuMobile() {
  const btnMobile = document.querySelector('[data-menu="button"]');
  const mainNav = document.querySelector('[data-menu="nav"]');
  const eventos = ['click', 'touchstart'];

  if (btnMobile) {
    const mostrarMenu = function (e) {
      if (e.type === 'touchstart') {
        e.preventDefault();
      }

      mainNav.classList.toggle('nav-active');
      const active = mainNav.classList.contains('nav-active');
      this.setAttribute('aria-expanded', active);

      if (active) {
        this.setAttribute('aria-label', 'Fechar Menu');
      } else {
        this.setAttribute('aria-label', 'Abrir Menu');
      }
    };

    eventos.forEach((evento) => btnMobile.addEventListener(evento, mostrarMenu));
  }
}
initMenuMobile();
