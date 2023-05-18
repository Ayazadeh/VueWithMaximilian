<!-- parent component -->
<template>
  <div>
    <div class="title">
      <!-- Use of slot with name -->
      <slot name="title"></slot>
      <span style="color: #ccc">
        <!-- we can define a default value for slot -->
        <slot name="subtitle">The Subtitle</slot>
      </span>
    </div>
    <hr class="hr" />
    <div>
      <!-- Use of slot with name -->
      <slot name="content"></slot>
    </div>
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

h2 {
  color: green;
}

.title {
  font-style: italic;
}
.hr {
  border-color: gray;
}
</style>
