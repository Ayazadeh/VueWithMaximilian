<template>
  <div>
    <br />
    <h4>-- Another Counter --</h4>
    <button
      @click="increment(100)"
      class="btn btn-primary"
      style="margin-right: 1rem"
    >
      Increment
    </button>
    <button class="btn btn-primary" @click="decrement(50)">Decrement</button>

    <h6>-- async mutations (actions) --</h6>
    <button
      @click="asyncIncrement({ by: 100, duration: 500 })"
      class="btn btn-primary"
      style="margin-right: 1rem"
    >
      Increment
    </button>
    <button
      class="btn btn-primary"
      @click="asyncDecrement({ by: 50, duration: 1500 })"
    >
      Decrement
    </button>
  </div>
</template>

<script>
// import { mapMutations } from 'vuex';
import { mapActions } from "vuex";
import * as types from "../store/types";

export default {
  name: "AnotherCounter",
  // using Store Mutations
  // using Store Actions

  // methods: {
  //   increment() {
  //     // this.$emit("updated", 1);

  //     /*
  //       using store instead up code
  //       this.$store.state.counter++;
  //     */

  //     // using mutations
  //     this.$store.commit('increment')

  //   },
  //   decrement() {
  //     // this.$emit("updated", -1);

  //     /*
  //       using store instead up code
  //       this.$store.state.counter--;
  //     */

  //     // using mutations
  //     this.$store.commit('decrement')

  //   },
  // },

  /*
  // Using mapMutations instead of the code above
  methods:{
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
*/
  methods: {
    ...mapActions({
      increment: types.COUNTER_INCREMENT,
      decrement: types.COUNTER_DECREMENT,
      asyncIncrement: types.COUNTER_INCREMENT_ASYNC,
      asyncDecrement: types.COUNTER_DECREMENT_ASYNC,
    }),
  },
};
</script>
