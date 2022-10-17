<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ myName }}</p>
    <p>User Name Reverse: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetName">Reset Name by custom event</button>
    <button @click="resetFn()">Reset Name by callback func</button>
    <div >{{ Function }}</div>
  </div>
</template>
<script>
export default {
  name: "UserDetail",
  props: {
    myName: {
      type: String,
      default: "Max"
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "black cat";
      // custome event
      this.$emit("nameWasReset", this.myName);
    }
  }

  //   props: ["myName"],

  //   props can have multiple types
  //   props: {
  //     myName: [String, Array]
  //   },

  // props can be an object like myName
  // props: {
  //   myName:{
  //     type: String,
  //     required: true
  //   }
  // },

  // if we use Object type or Array type, default value will be like this
  // props: {
  //   myName: {
  //     type: Object,
  //     default: () => {
  //       return {
  //         name: "Max"
  //       };
  //     }
  //   }
  // },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
