<template>
  <div class="toggler-mode-button">
    <div class="toggler-mode-button__part toggler-mode-button__part--head"></div>
    <div class="toggler-mode-button__part toggler-mode-button__part--trunc"></div>
  </div>
</template>

<style lang="scss">
  @import "../../styles/all";

  .toggler-mode-button {
    height: 37px;
    width: 65px;
  }

  .toggler-mode-button__part {
    border: 1px solid black;
  }

  .toggler-mode-button__part--head {
    background-color: $dark-tan;
    border-radius: 5px;
    height: 15px;
    width: 100%;
  }

  .toggler-mode-button__part--trunc {
    background-color: $silver-chalice;
    border-top: none;
    border-bottom: none;
    height: 20px;
    margin: auto;
    position: relative;
    width: 35px;
  }
</style>
