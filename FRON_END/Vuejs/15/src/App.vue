<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-affset-2 col-md-6 col-md-offset-3"
        >
          <h1>Built-in Directives</h1>
          <!-- Directives are v-text, v-html, v-if, v-for,... ( v- everything ) -->
          <p v-text="'Some Text'"></p>
          <p v-html="'<strong>Some strong Text</strong>'"></p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-affset-2 col-md-6 col-md-offset-3"
        >
          <!---- ----- using global directive ----- ---->
          <h4 v-highlight:background.delayed="'lightblue'">
            Custom Global Directives (v-highlight)
          </h4>
          <!-- an argument passed with a colon ( v-highlight:arg="") -->
          <!-- Created Global Directive in main.js -->
          <!--
            whatever we enter here ( v-highlight="''" )
            between the quotation marks is the value of the binding 
           -->

          <!---- ----- using local directive ----- ---->
          <h4 v-local-highlight:delayed.blink="'red'">
            Custom Local Directives (v-local-highlight)
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  // Registering a Local Directive
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;

        if (binding.modifiers["delayed"]) {
          // set modifier to v-local-highlight => v-local-highlight:background.delayed(modifier)
          delay = 3000;
        }

        if (binding.modifiers["blink"]) {
          let mainColor = binding.value;
          let secondColor = "blue";
          let currentColor = mainColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              if (binding.arg == "background") {
                // set argument to v-local-highlight => v-local-highlight:background(argument)
                el.style.backgroundColor = currentColor;
              } else {
                // fetch String value from binding object => v-local-highlight="'value'"
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              // set argument to v-local-highlight => v-local-highlight:background(argument)
              el.style.backgroundColor = binding.value;
            } else {
              // fetch String value from binding object => v-local-highlight="'value'"
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
