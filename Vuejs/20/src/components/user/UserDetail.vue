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
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="{
        name: 'userEdit',
        params: { id: $route.params.id },
        query: { locale: 'en', q: 100 },
      }"
    >
      user edit
    </router-link>
  </div>
</template>
