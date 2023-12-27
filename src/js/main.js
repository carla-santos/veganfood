import SmoothScroll from './components/SmoothScroll.js';
import MenuMobile from './components/Menu-mobile.js';

const smoothScroll = new SmoothScroll('.main-nav__list', { behavior: 'smooth', block: 'start' });
smoothScroll.init();

const menu = new MenuMobile('[data-menu="button"]');
menu.init();
