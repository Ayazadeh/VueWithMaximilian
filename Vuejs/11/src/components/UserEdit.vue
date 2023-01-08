<template>
  <div class="component">
    <h1 style="text-align: center">UserEdit</h1>
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>َUser Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age by custom event</button>
    <button @click="userEditAge">Edit Age by callback func</button>
  </div>
</template>
<script>
import { eventBus } from "../main";

export default {
  props: ["userAge", "userEditAge"],
  methods: {
    editAge() {
      this.userAge = 24;
      // custome event
      // this.$emit("ageWasEdited", this.userAge);
      // eventBus.$emit("ageWasEdited", this.userAge);
      eventBus.changeAge(this.userAge);
    }
  }
};
</script>
<style scoped>
div {
  background-color: lightgreen;
}
</style>
