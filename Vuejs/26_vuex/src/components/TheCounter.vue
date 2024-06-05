<template>
  <h3>{{ counter }}</h3>
  <h3>{{ normalizedCounter }}</h3>
</template>
<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['number/finalCounter'];
    },
    normalizedCounter() {
      return this.$store.getters['number/normalizedCounter'];
    },
  },
};
</script>
