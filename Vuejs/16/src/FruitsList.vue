<template>
  <div>
    <h1>Filters & Mixins</h1>
    <input v-model="filterText" />
    <ul>
      <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>
<script>
import { fruitMixin } from "./fruitMixin";
export default {
  mixins: [fruitMixin],
  created() {
    // this hook execute after created hook in Mixin file
    console.log("FruitList Created Hook");
  },
};
</script>
