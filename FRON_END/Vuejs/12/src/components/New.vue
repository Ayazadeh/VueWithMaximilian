<!-- parent component -->
<template>
  <div>
    <h3>The New</h3>

    <!-- Understanding Dynamic Component Behavior -->
    <button @click="counter++">Increase!</button>
    <p>{{ counter }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0
    };
  },
  destroyed() {
    // Understanding Dynamic Component Behavior
    // when we change component, component will be destroyed & recreated
    console.log("Destroyed!");
  }
};
</script>
<style scoped></style>
