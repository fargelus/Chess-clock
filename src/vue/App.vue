<template>
  <ChessClock :player="setPlayer()" v-on:toggle-player="togglePlayer"/>
</template>

<script>
import ChessClock from './components/ChessClock.vue';
import Settings from './../js/settings';
import $ from 'jquery';

export default {
  methods: {
    setPlayer() {
      return this.currentPath === '/' ? Settings.firstPlayerId : Settings.secondPlayerId;
    },

    togglePlayer() {
      const newPath = this.paths.filter((path) => path !== this.currentPath)[0];
      this.$router.push(newPath);
    }
  },

  components: {
    ChessClock
  }
}
</script>
