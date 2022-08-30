const allSections = document.querySelectorAll('.section--fade');

const exibirSections = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      entry.target.classList.add('section--hidden');
    } else {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  });
};

const obsOpt = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(exibirSections, obsOpt);

allSections.forEach(function (section) {
  sectionObserver.observe(section);
});
