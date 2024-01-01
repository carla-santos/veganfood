export default class Gallery {
	constructor() {
		this.galleryContainer = document.querySelector('[data-gallery="container"]');
		this.previewBox = document.querySelector('[data-gallery="box"]');
		this.previewImage = document.querySelector('[data-gallery="img"]');
		this.btnClose = document.querySelector('[data-gallery="close"]');
		this.overlay = document.querySelector('.overlay');
	}

	openModalImg(event) {
		if (event.target.classList.contains('gallery__img')) {
			this.constructor.limparHTML(this.previewImage);

			this.previewBox.classList.add('active');
			this.overlay.classList.add('active');

			const imgSrc = event.target.dataset.gallery;
			this.previewImage.insertAdjacentHTML(
				'beforeend',
				`<img src="img/gallery/gallery-${imgSrc}.jpg">`
			);
		}
	}

	closeModalImg() {
		this.previewBox.classList.remove('active');
		this.overlay.classList.remove('active');
	}

	addEvent() {
		this.galleryContainer.addEventListener('click', this.openModalImg.bind(this));
		this.btnClose.addEventListener('click', this.closeModalImg.bind(this));
		this.overlay.addEventListener('click', this.closeModalImg.bind(this));
	}

	static limparHTML(element) {
		while (element.firstChild) {
			element.removeChild(element.firstChild);
		}
	}

	init() {
		return this.addEvent();
	}
}
