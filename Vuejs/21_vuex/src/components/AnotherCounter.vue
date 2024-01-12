<template>
  <div>
    <br />
    <br />
    <h4>-- Another Counter --</h4>
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
import { mapMutations } from 'vuex';

export default {
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


  // Using mapMutations instead of the code above
  methods:{
    ...mapMutations([
      'increment',
      'decrement'
    ])
  },
};
</script>
