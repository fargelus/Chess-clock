<template>
  <div class="toggler-mode-button">
    <div class="toggler-mode-button__part toggler-mode-button__part-head" @click="controlClick"></div>
    <div class="toggler-mode-button__part toggler-mode-button__part-trunc"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      controlClick: function(evt) {
        const parentElem = evt.currentTarget.parentNode;
        parentElem.classList.toggle('toggler-mode-button--pushed');

        // Передаем обработку события родительскому компоненту
        this.$emit('control-pushed');
      }
    }
  }
</script>

<style lang="scss">
  @import "../../styles/all";

  .toggler-mode-button {
    height: 37px;
    width: 65px;
  }

  .toggler-mode-button--pushed {
    transform: translateY(10px);

    .toggler-mode-button__part-trunc {
      height: 10px
    }
  }

  .toggler-mode-button__part {
    border: 1px solid black;
  }

  .toggler-mode-button__part-head {
    background-color: $dark-tan;
    border-radius: 5px;
    cursor: pointer;
    height: 15px;
    width: 100%;
  }

  .toggler-mode-button__part-trunc {
    background-color: $silver-chalice;
    border-top: none;
    border-bottom: none;
    height: 20px;
    margin: auto;
    position: relative;
    width: 35px;
  }
</style>
