<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-affset-2 col-md-6 col-md-offset-3"
        >
          <h1>Built-in Directives</h1>
          <!-- Directives are v-text, v-html, v-if, v-for, ... ( v- everything ) -->
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some strong Text</strong>'"></p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-affset-2 col-md-6 col-md-offset-3"
        >
          <h1 v-highlight="'lightblue'">Custom Directives</h1>
          <!-- Created Global Directive in main.js -->
          <!-- whatever we enter here ( v-highlight="''" )
             between the quotation marks is the value of the binding  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
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
