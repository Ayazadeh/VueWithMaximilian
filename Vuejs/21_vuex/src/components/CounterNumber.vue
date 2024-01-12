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
import { mapMutations } from 'vuex';
export default {
  methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ])
  },
};
</script>
