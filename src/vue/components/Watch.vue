<template lang="html">
  <div class="chess-clock__watch">{{ countdown_val }}</div>
</template>

<script>
export default {
  data() {
    return {
      countdown_val: '02:00'
    };
  },
  methods: {
    tick() {
      const that = this;
      let seconds = 120;
      setInterval(() => {
        seconds -= 1;
        that.convertSecondsToCountdown(seconds);
      }, 1000)
    },

    convertSecondsToCountdown(seconds) {
      const secondsPerMin = 60;
      const minsToRender = Math.floor(seconds / secondsPerMin);
      const secondsToRender = seconds % secondsPerMin;

      this.countdown_val = '0' + minsToRender + ':' + secondsToRender;
    }
  }
}
</script>

<style lang="scss">
  .chess-clock__watch {
    align-items: center;
    display: flex;
    font-size: 80px;
    line-height: 1;
    justify-content: center;
    height: 100%;
    width: 50%;
    position: relative;
  }

  .chess-clock__watch:nth-child(n + 2) {
    border-left: 2px solid black;
  }
</style>
