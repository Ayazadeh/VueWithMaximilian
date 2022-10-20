<!-- parent component -->
<template>
  <div>
    <p>{{ quote }}</p>

    <!-- Use of slots -->
    <slot></slot>
    
  </div>
</template>
<script>
export default {
  name: "Quote",
  props: ["quote"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
</style>
