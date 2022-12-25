<template>
  <div id="app">
    <div class="row">
      <div class="col-sx-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filtters & Mixins</h1>
        <!-- locally filter -->
        <p>{{ text | toUppercase }}</p>

        <!-- globally filter & chain them -->
        <p>{{ text | toUppercase | toLowercase }}</p>
        <hr />
        <input v-model="filterText" />
        <ul>
          <li v-for="fruit in filteredFruits">{{ fruit }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      text: "Hello there!",
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: "",
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    filteredFruits(list) {
      return list.filter((element) => {
        return element.toLowerCase().match(this.filterText)
      })
    },
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
