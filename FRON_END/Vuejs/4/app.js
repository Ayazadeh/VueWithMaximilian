const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname() {
      console.log("fullname...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Ayazadeh";
    },
  },
  methods: {
    outputFullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Ayazadeh";
    },
    add(num) {
      // this.counter++;
      this.counter = this.counter + num;
    },
    reduce(num) {
      // this.counter--;
      this.counter = this.counter - num;
    },
    // setName(event) {
    //   this.name = event.target.value;
    // },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      console.log("modifier");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
