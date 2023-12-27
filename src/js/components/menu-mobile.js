export default class MenuMobile {
	constructor(btnMobile) {
		this.btnMobile = document.querySelector(btnMobile);
		this.mainNav = document.querySelector('[data-menu="nav"]');
		this.eventos = ['click', 'touchstart'];
	}

	mostrarMenu(event) {
		if (event.type === 'touchstart') {
			event.preventDefault();
		}

		this.mainNav.classList.toggle('nav-active');
		const active = this.mainNav.classList.contains('nav-active');
		this.btnMobile.setAttribute('aria-expanded', active);

		if (active) {
			this.btnMobile.setAttribute('aria-label', 'Fechar Menu');
		} else {
			this.btnMobile.setAttribute('aria-label', 'Abrir Menu');
		}
	}

	addMenuEvent() {
		this.eventos.forEach((evento) =>
			this.btnMobile.addEventListener(evento, this.mostrarMenu.bind(this))
		);
	}

	init() {
		return this.addMenuEvent();
	}
}
