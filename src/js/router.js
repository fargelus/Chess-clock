import VueRouter from 'vue-router';
import App from '../vue/App.vue';
import NotFound from '../vue/pages/404.vue';

const firstPlayer = Object.assign({
  data() {
    return {
      paths: ['/', '/second'],
      currentPath: '/',
    };
  },
}, App);

const secondPlayer = Object.assign({
  data() {
    return {
      paths: ['/', '/second'],
      currentPath: '/second',
    };
  },
}, App);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: firstPlayer,
    },
    {
      path: '/second',
      component: secondPlayer,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});


export default router;
