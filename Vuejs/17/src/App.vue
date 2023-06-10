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
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br /><br />
        <!-- only may use <transition> for a single element -->
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <br />
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is some Info</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__swing"
          leave-active-class="animate__animated animate__wobble"
        >
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
      show: true,
      alertAnimation: "fade",
    };
  },
};
</script>

<style>
/* using transition */

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

/* using animation */

.slide-enter {
  /* transform: translateY(20px); */
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
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
