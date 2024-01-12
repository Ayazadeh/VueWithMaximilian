<template>
  <div>
    <br>
    <h4> -- Counter Number -- </h4>
    <button
      @click="increment"
      class="btn btn-primary"
      style="margin-right: 1rem"
    >
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      // this.$emit("updated", 1);

      // using store instead up code
      this.$store.state.counter++;
    },
    decrement() {
      // this.$emit("updated", -1);
      this.$store.state.counter--;
    },
  },
};
</script>
