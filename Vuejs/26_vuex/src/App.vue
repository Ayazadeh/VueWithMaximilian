<template>
  <base-container title="Vuex">
    <the-counter/>
    <button @click="addOne">add 1</button>
    <button @click="addFive">add 5</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';

export default {
  components: {
    BaseContainer,
    TheCounter
  },
  methods: {
    addOne() {
      this.$store.commit('increment')
    },
    addFive(){
      this.$store.commit('increse', {value: 5})
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
