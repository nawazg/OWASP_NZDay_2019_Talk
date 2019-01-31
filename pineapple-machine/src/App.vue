<template>
  <div id="app">
    <PineappleSelector/>
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
</style>
