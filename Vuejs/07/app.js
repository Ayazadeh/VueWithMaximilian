// create Vue instance
new Vue({
  el: "#app",
  data: {
    title: "Hello World!",
    link: "http://google.com",
    finishedLink: '<a href="http://google.com">Google</a>',
    x: 0,
    y: 0,
    counter: 0,
    message: "",
    color: "",
    attachRed: false,
    width: 5,
    persons:[
      {name: 'Max', age: 23, color: 'blue'},
      {name: 'Anna', age: 20, color: 'green'},
    ]
  },
  computed: {
    divClasses() {
      return {
        red: this.attachRed,
        blue: !this.attachRed,
      };
    },
    myStyle() {
      return{
        backgroundColor: this.color,
        width: this.width + 'rem'
      }
    },
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
    updateCoordinates(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
    alertMe(event) {
      alert(this.message + "\n\n" + event.key);
    },
  },
});
