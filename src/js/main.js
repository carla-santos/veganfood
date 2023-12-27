import SmoothScroll from './components/SmoothScroll.js';
import MenuMobile from './components/Menu-mobile.js';
import StickyNav from './components/Sticky-nav.js';

const smoothScroll = new SmoothScroll('.main-nav__list', { behavior: 'smooth', block: 'start' });
smoothScroll.init();

const menu = new MenuMobile('[data-menu="button"]');
menu.init();

const navFixa = new StickyNav('.hero', { root: null, threshold: 0, rootMargin: '-84px' });
navFixa.init();
