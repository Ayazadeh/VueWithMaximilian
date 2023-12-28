<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div
          class="
          col-sm-8 
          col-md-6 
          col-xs-12 
          col-md-offset-3
          col-sm-offset-2"
        >
          <h1>Vuex</h1>
          <app-result :counter="counter" />
          <hr />
          <app-counter @updated="counter += $event" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CounterNumber from "./components/CounterNumber.vue";
import ResultNumber from "./components/ResultNumber.vue";

export default {
  name: "App",
  components: {
    appCounter: CounterNumber,
    appResult: ResultNumber,
  },
  data() {
    return {
      counter: 0,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
