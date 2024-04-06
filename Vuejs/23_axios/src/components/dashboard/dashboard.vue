<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your Email Address: {{ email }}</p>
  </div>
</template>
<script>
export default {
  computed: {
    email() {
      return this.$store.getters.getUser.email;
    },
  },
  created(){
    this.$store.dispatch('fetchUser')
  }
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
