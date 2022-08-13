// create Vue instance
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: 'http://google.com'
  },
  methods: {
    changeTitle(event) {
      // event: default parameter for func in vanilla js
      this.title = event.target.value;
    },
  },
});
