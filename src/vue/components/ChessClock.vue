<template>
  <section class="chess-clock">
    <div class="controls-buttons flex-around">
      <TogglerModeButton :id="firstControlID" v-on:control-pushed="controlPushed"/>
      <TogglerModeButton :id="secondControlID" v-on:control-pushed="controlPushed"/>
    </div>

    <div class="chess-clock__frame">
      <Timer ref="firstTimer" :id="firstTimerId" v-on:time-end="timeEnd"/>
      <Timer ref="secondTimer" :id="secondTimerId" v-on:time-end="timeEnd"/>
    </div>

    <div class="chess-clock__stand flex-around">
      <div class="chess-clock__stand-foot"></div>
      <div class="chess-clock__stand-foot"></div>
    </div>
  </section>
</template>

<script>
import TogglerModeButton from './TogglerModeButton.vue';
import Timer from './Timer.vue';
import Settings from '../../js/settings';
import $ from 'jquery';

export default {
  data() {
    return {
      firstControlID: Settings.firstPlayerId,
      secondControlID: Settings.secondPlayerId,
      currentTimer: undefined,
      firstTimerId: 'first-timer',
      secondTimerId: 'second-timer',
    }
  },

  mounted() {
    // Вызывается сразу после отрисовки всех компонентов
    this.$nextTick(function () {
      const currentPlayerID = $(this.$el).attr('player'),
            // aliases
            firstPlayerTimerVal = Settings.firstPlayerTimer,
            secondPlayerTimerVal = Settings.secondPlayerTimer;

      // Кнопка нажата
      $('#' + currentPlayerID).addClass('toggler-mode-button--pushed');

      // Инициализация таймеров
      this.$refs.firstTimer.setSeconds(firstPlayerTimerVal);
      this.$refs.secondTimer.setSeconds(secondPlayerTimerVal);

      // Определяем таймер
      if (+currentPlayerID === Settings.firstPlayerId) {
        this.currentTimer = this.$refs.firstTimer;
      } else {
        this.currentTimer = this.$refs.secondTimer;
      }

      // Начинаем отсчет
      this.currentTimer.tick();
    });
  },

  methods: {
    controlPushed($currentControl) {
      const pushedControlID = +$currentControl.attr('id'),
            currentPlayerID = +$(this.$el).attr('player');

      if (currentPlayerID !== pushedControlID) {
        const secondsLeft = this.currentTimer.getSeconds();

        // Сохраним оставшиеся значение секунд с таймера
        if (currentPlayerID === Settings.firstPlayerId) {
          Settings.firstPlayerTimer = secondsLeft;
        } else {
          Settings.secondPlayerTimer = secondsLeft;
        }

        this.$emit('toggle-player');
      } else {
        this.currentTimer.toggleTick();
      }
    },

    timeEnd(elem) {
      const elementId = $(elem).attr('id');

      if (elementId === this.firstTimerId) {
        $('#' + this.firstControlID).removeClass('toggler-mode-button--pushed');
      } else {
        $('#' + this.secondControlID).removeClass('toggler-mode-button--pushed');
      }
    }
  },

  components: {
    TogglerModeButton,
    Timer
  }
}
</script>

<style lang="scss" scoped>
  @import "../../styles/all";

  .chess-clock {
    max-height: 300px;
    max-width: 550px;

    @include centered();
  }

  .chess-clock__frame {
    border: 25px solid $dark-tan;
    border-radius: 15px;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    width: 100%;
  }

  .chess-clock__stand-foot {
    background-color: $dark-tan;
    border-radius: 3px;
    height: 15px;
    width: 58px;
  }
</style>
