<template>
  <section class="chess-clock">
    <div class="controls-buttons flex-around">
      <TogglerModeButton :id="firstControlID" v-on:control-pushed="controlPushed"/>
      <TogglerModeButton :id="secondControlID" v-on:control-pushed="controlPushed"/>
    </div>

    <div class="chess-clock__frame">
      <Watch/>
      <Watch/>
    </div>

    <div class="chess-clock__stand flex-around">
      <div class="chess-clock__stand-foot"></div>
      <div class="chess-clock__stand-foot"></div>
    </div>
  </section>
</template>

<script>
import TogglerModeButton from './TogglerModeButton.vue';
import Watch from './Watch.vue';
import Settings from '../../js/settings';

export default {
  data() {
    return {
      firstControlID: Settings.firstPlayerId,
      secondControlID: Settings.secondPlayerId
    }
  },

  methods: {
    controlPushed: function(currentControl) {
      const pushedControlID = +currentControl.getAttribute('id'),
            currentPlayerID = +this.$el.getAttribute('player');

      if (currentPlayerID !== pushedControlID) {
        this.$emit('toggle-player');
      }
    }
  },

  components: {
    TogglerModeButton,
    Watch
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
