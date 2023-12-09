<template>
  <div>
    <h2>Some User Details</h2>
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <!-- <router-link
      tag="button"
      class="btn btn-primary"
      :to="'/user/' + $route.params.id + '/edit'"
    >
      user edit
    </router-link> -->
    <router-link tag="button" class="btn btn-primary" :to="link">
      user edit
    </router-link>
    <br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
      link: {
        name: "userEdit",
        params: {
          id: this.$route.params.id,
        },
        query: {
          locale: "en",
          q: 100,
        },
        hash: "#data",
      },
    };
  },
};
</script>
