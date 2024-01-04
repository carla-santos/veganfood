export default class Slider {
	constructor() {
		this.slides = document.querySelectorAll('[data-slides]');
		this.btnLeft = document.querySelector('.slider__btn--left');
		this.btnRight = document.querySelector('.slider__btn--right');
		this.dotsContainer = document.querySelector('.dots');

		// Inicia slide atual
		this.slideAtual = 0;

		// Exibe a quantidade máxima de slides
		this.maxSlides = this.slides.length;
	}

	// Criar os pontos
	createDots() {
		this.slides.forEach((_, i) => {
			this.dotsContainer.insertAdjacentHTML(
				'beforeend',
				`<button class="dots__dot" data-slide="${i}"></button>`
			);
		});
	}

	// Ativar qual é o ponto atual.
	static activateDot(slide) {
		document
			.querySelectorAll('.dots__dot')
			.forEach((dot) => dot.classList.remove('dots__dot--active'));

		// Selecionar o elemento com a classe e com o atributo de data-slide definido.
		document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
	}

	goToSlide(slide) {
		this.slides.forEach((s, i) => {
			s.style.transform = `translateX(${100 * (i - slide)}%)`;
		});
	}

	nextSlide() {
		if (this.slideAtual === this.maxSlides - 1) {
			this.slideAtual = 0;
		} else {
			this.slideAtual += 1;
		}

		this.goToSlide(this.slideAtual);
		this.constructor.activateDot(this.slideAtual);
	}

	prevSlide() {
		if (this.slideAtual === 0) {
			this.slideAtual = this.maxSlides - 1;
		} else {
			this.slideAtual -= 1;
		}

		this.goToSlide(this.slideAtual);
		this.constructor.activateDot(this.slideAtual);
	}

	keyGoToSlide(event) {
		return event.key === 'ArrowLeft' ? this.prevSlide() : this.nextSlide();
	}

	dotsGoToSlide(event) {
		if (event.target.classList.contains('dots__dot')) {
			const { slide } = event.target.dataset;
			this.goToSlide(slide);
			this.constructor.activateDot(slide);
		}
	}

	init() {
		this.goToSlide(0);
		this.createDots();
		this.constructor.activateDot(0);

		this.btnRight.addEventListener('click', this.nextSlide.bind(this));
		this.btnLeft.addEventListener('click', this.prevSlide.bind(this));
		document.addEventListener('keydown', this.keyGoToSlide.bind(this));
		this.dotsContainer.addEventListener('click', this.dotsGoToSlide.bind(this));
	}
}
