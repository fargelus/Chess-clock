<template lang="html">
  <div class="chess-clock__watch">00:00</div>
</template>

<script>
export default {
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
