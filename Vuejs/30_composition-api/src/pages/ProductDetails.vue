<template>
  <section>
    <h2>{{ title }}</h2>
    <h3>${{ price }}</h3>
    <p>{{ description }}</p>
    <router-link to="/products/p2">detail p2</router-link>
    <div style="margin-top: 3rem; text-align: center;">
      <p>Vuex</p>
      <p>{{ counter }}</p>
      <button @click="increase">add</button>
    </div>
  </section>
</template>

<script>
import { inject, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const products = inject("products");

    const route = useRoute();

    const selectedProduct = computed(() => products.value.find((product) => product.id === route.params.pid));
    const title = computed(() => selectedProduct.value.title);
    const price = computed(() => selectedProduct.value.price);
    const description = computed(() => selectedProduct.value.description);

    const store = useStore();
    const increase = () => {
      store.dispatch("increment");
    };

    const counter = computed(() => store.getters.counter);

    return { title, price, description, increase, counter };
  },
};
</script>

<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>
