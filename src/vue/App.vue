<template>
  <ChessClock v-on:toggle-player="togglePlayer"/>
</template>

<script>
import ChessClock from './components/ChessClock.vue';

export default {
  methods: {
    togglePlayer: function () {
      const newPath = this.paths.filter((path) => path !== this.currentPath)[0];
      location.pathname = newPath;
    }
  },
  components: {
    ChessClock
  }
}
</script>
