import AllPages from './vue/pages/All.vue';

export default {
  '/': AllPages.FirstPlayer,
  '/second': AllPages.SecondPlayer,
  '/404': AllPages.NotFound,
};
