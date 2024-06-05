<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter />
    <button @click="addOne">add 1</button>
    <button @click="addFive">add 5</button>
  </base-container>
  <base-container title="Auth">
    <user-auth/>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: { 
    BaseContainer,
    TheCounter,
    UserAuth
  },
  methods: {
    addOne() {
      this.$store.dispatch('number/incrementAsync');
    },
    addFive() {
      this.$store.dispatch('number/increaseAsync', { value: 5 });
    },
  },
  computed:{
    isAuth(){
      return this.$store.getters.userIsAuthenticated
    }
  }
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
