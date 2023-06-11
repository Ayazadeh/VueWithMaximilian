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
          <div class="alert alert-info" v-if="show">This is some Info 1</div>
        </transition>
        <br />
        <transition name="slide" type="animation">
          <div class="alert alert-info" v-if="show">This is some Info 2</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-info" v-if="show">This is some Info 3</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__swing"
          leave-active-class="animate__animated animate__wobble"
        >
          <div class="alert alert-info" v-if="show">This is some Info 4</div>
        </transition>
        <br />
        <transition :name="alertAnimation" mode="out-in">
          <!-- v-show not working here -->
          <div class="alert alert-info" v-if="show" key="info">
            This is some Info 5
          </div>
          <div class="alert alert-warning" v-else key="warning">
            This is some Warning
          </div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element
        </button>
        <br /><br />
        <Transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <!-- :css="false" means don't look for css classes -->
          <div
            style="width: 300px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </Transition>
        <hr />
        <button
          class="btn btn-primary"
          @click="
            selectedComponent == 'app-success-alert'
              ? (selectedComponent = 'app-danger-alert')
              : (selectedComponent = 'app-success-alert')
          "
        >
          Toogle Components
        </button>
        <br /><br />
        <Transition name="fade" mode="out-in">
          <component :is="selectedComponent"></component>
        </Transition>
        <hr />
        <button class="btn btn-primary" @click="addItem">Add Item</button>
        <br /><br />
        <ul class="list-group">
          <transition-group name="slide">
            <li
              class="list-group-item"
              v-for="(number, index) in numbers"
              :key="number"
              @click="removeItem(index)"
              style="cursor: pointer"
            >
              {{ number }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import DangerAlert from "@/components/DangerAlert.vue";
import SuccessAlert from "@/components/SuccessAlert.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
      load: true,
      alertAnimation: "fade",
      elementWidth: 100,
      selectedComponent: "app-success-alert",
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
      // you need to call done to really tell vuejs when you are done
      // you don't need to call done if you do use css animations
      done();
    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    enterCancelled(el) {
      console.log("enterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    leaveCancelled(el) {
      console.log("leaveCancelled");
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert,
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
