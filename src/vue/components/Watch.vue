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

      const countdown = () => {
        if (seconds === 0) {
          return;
        }

        seconds -= 1;
        that.renderTimer(seconds);
      };

      Promise.resolve(() => {
          setTimeout(countdown, 500);
      }).then(() => {
        setInterval(countdown, 1000);
      });
    },

    renderTimer(seconds) {
      const secondsPerMin = 60,
            minsToRender = Math.floor(seconds / secondsPerMin),
            secondsLeft = seconds % secondsPerMin,
            secondsToRender = `${secondsLeft}`.length === 2 ? `${secondsLeft}`
                                                          : `0${secondsLeft}`;

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
