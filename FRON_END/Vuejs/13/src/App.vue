<template>
  <div id="app">
    <h1>Mohammad Ayazadeh</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10,
    };
  },
};
</script>

<style>
#app {
  font-family: Arizonia;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
