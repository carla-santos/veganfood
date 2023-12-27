export default class SmoothScroll {
	constructor(links, options) {
		this.linksInternos = document.querySelector(links);
		this.heroBtns = document.querySelectorAll('[data-button]');
		this.mainNav = document.querySelector('[data-menu="nav"]');
		this.options = options;
	}

	scrollToSection(event) {
		event.preventDefault();
		if (event.target.classList.contains('main-nav__link')) {
			this.scrollConfig(event.target);

			// Fechar a navegação mobile
			this.mainNav.classList.toggle('nav-active');
		}
	}

	heroBtnToSections() {
		this.heroBtns.forEach((btn) => {
			btn.addEventListener('click', (event) => {
				event.preventDefault();
				this.scrollConfig(event.target);
			});
		});
	}

	scrollConfig(target) {
		const href = target.getAttribute('href');
		const sectionScroll = document.querySelector(href);
		sectionScroll.scrollIntoView(this.options);
	}

	addLinkEvent() {
		this.linksInternos.addEventListener('click', this.scrollToSection.bind(this));
	}

	init() {
		this.addLinkEvent();
		this.heroBtnToSections();
	}
}
