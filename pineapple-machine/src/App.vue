<template>
  <div id="app">
    <PineappleSelector/>
    <p class="credit-list">Photos by: Pineapple Supply Co., Aurélien Sinte and Bruno Nascimento on <a href="https://unsplash.com/">Unsplash</a>.</p>
  </div>
</template>

<script>
import PineappleSelector from "./components/PineappleSelector.vue";

export default {
  name: "app",
  components: {
    PineappleSelector
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.credit-list {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 12px
}
</style>
