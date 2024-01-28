<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  // props: ['counter']
  // using $store instead up code
  computed: {
    // counter() {
    // using state
    // return this.$store.state.counter

    // using getters
    //   return this.$store.getters.doubleCounter;
    // },

    // using types
    ...mapGetters({
      counter: types.DOUBLE_COUNTER,
    }),
  },
};
</script>
