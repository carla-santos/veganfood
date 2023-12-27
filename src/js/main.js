import SmoothScroll from './components/SmoothScroll.js';

const smoothScroll = new SmoothScroll('.main-nav__list', { behavior: 'smooth', block: 'start' });
smoothScroll.init();
