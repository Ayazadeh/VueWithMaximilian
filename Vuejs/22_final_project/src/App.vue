<template>
  <div class="container">
    <app-header />
    <div class="row">
      <div class="col-xs-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components:{
    AppHeader,
  }
}
</script>
<style>
body{
  padding: 30px;
}
</style>
