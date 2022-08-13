// create Vue instance
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Google</a>',
  },
  methods: {
    changeTitle(event) {
      // event: default parameter for func in vanilla js
      this.title = event.target.value;
    },
    sayHello() {
      this.title = "Hello!";
      return this.title;
    },
  },
});
