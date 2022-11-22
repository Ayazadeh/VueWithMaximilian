// create Vue instance
new Vue({
  el: "#app",
  data: {
    title: "The VueJS Instance",
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeDestroy() {
    console.log("beforeDestroy()");
  },
  destroyed() {
    console.log("destroyed()");
  },
  methods: {
    destroy() {
      // this will destroy this instance
      this.$destroy();
    },
  },
});
