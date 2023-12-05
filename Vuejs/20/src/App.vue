<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Routing</h1>
        <br />
        <!-- <app-header></app-header> -->
        <Transition name="header" mode="out-in">
          <router-view name="Header-top"></router-view>
        </Transition>
        <Transition name="slide" mode="out-in">
          <router-view></router-view>
        </Transition>
        <router-view name="Header-bottom"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import "animate.css";
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    appHeader: Header,
  },
};
</script>

<style>
/* using animation */
.header-enter-active {
  animation: flip 1s ease-out forwards;
  transition: opacity 0.5s;
}
.header-leave-active {
  animation: flip 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: fadeInUp 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-active {
  animation: fadeOutDown 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
