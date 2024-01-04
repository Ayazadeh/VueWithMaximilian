<template>
  <p>Counter is: {{ counter }}</p>
</template>

<script>
export default {
    // props: ['counter']
    // using $store instead up code
    computed:{
        counter(){
            return this.$store.state.counter * 2;
        }
    }
}
</script>
