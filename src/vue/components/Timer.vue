<template lang="html">
  <div class="chess-clock__watch">{{ countdownVal }}</div>
</template>

<script>
export default {
  data() {
    return {
      countdownVal: undefined,
      isStop: false,
      seconds: undefined
    };
  },
  methods: {
    tick() {
      const that = this;

      const countdown = () => {
        if (that.seconds === 0) {
          that.isStop = true;
          that.$emit('time-end', that.$el);
        }

        if (that.isStop) return;

        that.seconds -= 1;
        that.renderTimer();
      };

      // Промисифицируем, чтобы
      // не было задержки вначале отсчета
      new Promise(resolve => setTimeout(() => {
        countdown();
        resolve();
      }, 400)).then(() => {
        setInterval(countdown, 1000);
      });
    },

    toggleTick() {
      this.isStop = !this.isStop;
    },

    getSeconds() {
      return this.seconds;
    },

    setSeconds(_seconds) {
      const defaultSeconds = 120;
      this.seconds = _seconds ? _seconds : defaultSeconds;
      this.renderTimer();
    },

    renderTimer() {
      const secondsPerMin = 60,
            minsToRender = Math.floor(this.seconds / secondsPerMin),
            secondsLeft = this.seconds % secondsPerMin,
            secondsToRender = `${secondsLeft}`.length === 2 ? `${secondsLeft}`
                                                          : `0${secondsLeft}`;

      this.countdownVal = '0' + minsToRender + ':' + secondsToRender;
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
