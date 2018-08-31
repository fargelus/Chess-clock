import Vue from 'vue';
import '../styles/all.scss';
import routes from './routes';


new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
  },

  computed: {
    ViewComponent() {
      let pageToRender = routes[this.currentRoute];
      if (!pageToRender) {
        pageToRender = routes['/404'];
      }

      return pageToRender;
    },
  },

  render(h) { return h(this.ViewComponent); },
});
