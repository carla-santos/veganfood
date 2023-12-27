function initSlider() {
  const slides = document.querySelectorAll('[data-slides]');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotsContainer = document.querySelector('.dots');

  // Inicia slide atual
  let slideAtual = 0;

  // Exibe a quantidade máxima de slides
  const maxSlides = slides.length;

  // Criar os pontos
  const createDots = function () {
    slides.forEach((_, i) => {
      dotsContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`,
      );
    });
  };

  // Ativar qual é o ponto atual.
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));

    // Selecionar o elemento com a classe e com o atributo de data-slide definido.
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });

    slideAtual = slide;
  };

  const nextSlide = function () {
    if (slideAtual === maxSlides - 1) {
      slideAtual = 0;
    } else {
      slideAtual++;
    }

    goToSlide(slideAtual);
    activateDot(slideAtual);
  };

  const prevSlide = function () {
    if (slideAtual === 0) {
      slideAtual = maxSlides - 1;
    } else {
      slideAtual--;
    }

    goToSlide(slideAtual);
    activateDot(slideAtual);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Controle deslizante pelo teclado
  document.addEventListener('keydown', function (e) {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
}
initSlider();
