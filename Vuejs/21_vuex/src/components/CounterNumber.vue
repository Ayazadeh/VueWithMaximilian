<template>
  <div>
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
      this.$emit("updated", 1);
    },
    decrement() {
      this.$emit("updated", -1);
    },
  },
};
</script>
