<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
    // props: ['counter']
    // using $store instead up code
    computed:{
        counter(){

            // using state
            // return this.$store.state.counter

            // using getters
            return this.$store.getters.doubleCounter;
        }
    }
}
</script>
