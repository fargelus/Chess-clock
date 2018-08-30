<template>
  <section class="chess-clock">
    <div class="controls-buttons flex-around">
      <TogglerModeButton/>
      <TogglerModeButton/>
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

export default {
  components: {
    TogglerModeButton,
    Watch
  }
}
</script>

<style lang="scss">
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
