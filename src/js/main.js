import Vue from 'vue';
import App from '../vue/App.vue';
import '../styles/all.scss';

const vm = new Vue({
  el: '#app',
  render: h => h(App),
});
