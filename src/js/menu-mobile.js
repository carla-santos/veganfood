'use strict';

const btnMobile = document.querySelector('.js-btn-mobile');
const mainHeader = document.querySelector('.main-header');

const mostrarMenu = function () {
  mainHeader.classList.toggle('nav-active');
};

btnMobile.addEventListener('click', mostrarMenu);
