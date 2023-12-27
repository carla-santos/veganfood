function initGallery() {
  const galleryContainer = document.querySelector('[data-gallery="container"]');
  const previewBox = document.querySelector('[data-gallery="box"]');
  const previewImage = document.querySelector('[data-gallery="img"]');
  const btnClose = document.querySelector('[data-gallery="close"]');
  const overlay = document.querySelector('.overlay');

  const limparHTML = function () {
    while (previewImage.firstChild) {
      previewImage.removeChild(previewImage.firstChild);
    }
  };

  const openModalImg = function (e) {
    if (e.target.classList.contains('gallery__img')) {
      limparHTML();
      previewBox.classList.add('active');
      overlay.classList.add('active');

      const imgSrc = e.target.dataset.gallery;
      previewImage.insertAdjacentHTML('beforeend', `<img src="img/gallery/gallery-${imgSrc}.jpg">`);
    }
  };

  const closeModalImg = function () {
    previewBox.classList.remove('active');
    overlay.classList.remove('active');
  };

  galleryContainer.addEventListener('click', openModalImg);
  btnClose.addEventListener('click', closeModalImg);
  overlay.addEventListener('click', closeModalImg);
}
initGallery();
