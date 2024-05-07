<template>
  <the-header title="RememberMe" />
  <the-resources />
</template>
<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    TheHeader,
    TheResources,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: auto;
}
</style>
