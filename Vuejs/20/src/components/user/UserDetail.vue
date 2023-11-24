<template>
  <div>
    <h1>Some User Details</h1>
    <p>User Loaded has ID: {{ $route.params.id }}</p>
    <router-link
      tag="button"
      class="btn btn-primary"
      :to="'/user/' + $route.params.id + '/edit'"
    >
      user edit
    </router-link>
  </div>
</template>
