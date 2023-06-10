<template>
  <div class="container">
    <div class="row">
      <div class="col-sx-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">
          show Alert
        </button>
        <br /><br />
        <!-- only may use <transition> for a single element -->
        <transition name="fade">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 2s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 2s;
  opacity: 0;
}
</style>
