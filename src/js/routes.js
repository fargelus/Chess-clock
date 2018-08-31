import App from '../vue/App.vue';
import NotFound from '../vue/pages/404.vue';

const firstPlayer = Object.assign({
  data: () => {
    return {
      paths: ['/', '/second'],
      currentPath: '/',
    };
  },
}, App);

const secondPlayer = Object.assign({
  data: () => {
    return {
      paths: ['/', '/second'],
      currentPath: '/second',
    };
  },
}, App);

export default {
  '/': firstPlayer,
  '/second': secondPlayer,
  '/404': NotFound,
};
