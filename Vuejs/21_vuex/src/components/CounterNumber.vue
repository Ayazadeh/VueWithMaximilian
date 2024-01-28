<template>
  <div>
    <br />
    <h4>-- Counter Number --</h4>
    <button
      @click="increment(1)"
      class="btn btn-primary"
      style="margin-right: 1rem"
    >
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import * as types from "../store/types";

export default {
  methods: {
    ...mapMutations({
      increment: types.MUTATE_INCREMENT_COUNTER,
      decrement: types.MUTATE_DECREMENT_COUNTER,
    }),
  },
};
</script>
