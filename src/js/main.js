import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';
import '../styles/all.scss';

Vue.use(VueRouter);

new Vue({
  router,
}).$mount('#app');
