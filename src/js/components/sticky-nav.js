export default class StickyNav {
	constructor(section, options) {
		this.hero = document.querySelector(section);
		this.options = options;
	}

	static exibirStickyNav(entries) {
		const ent = entries[0];

		if (!ent.isIntersecting) {
			document.body.classList.add('sticky-nav');
		} else {
			document.body.classList.remove('sticky-nav');
		}
	}

	init() {
		const heroObserver = new IntersectionObserver(this.constructor.exibirStickyNav, this.options);
		heroObserver.observe(this.hero);
	}
}
