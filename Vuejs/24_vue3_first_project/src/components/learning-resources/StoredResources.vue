<template>
  <ul>
    <learning-resource
      v-for="res in resources"
      :key="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>
<script>
import LearningResource from './LearningResource.vue';

export default {
  components: {
    LearningResource,
  },
  props: ['resources'],
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: auto;
  padding: 0;
  max-width: 40rem;
}
</style>
