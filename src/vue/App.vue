<template>
  <ChessClock :player="setPlayer()" v-on:toggle-player="togglePlayer"/>
</template>

<script>
import ChessClock from './components/ChessClock.vue';
import Settings from './../js/settings';

export default {
  methods: {
    setPlayer: function() {
      return this.currentPath === '/' ? Settings.firstPlayerId : Settings.secondPlayerId;
    },

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
