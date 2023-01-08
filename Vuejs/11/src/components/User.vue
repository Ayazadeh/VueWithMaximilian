<!-- parent component -->
<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{ name }}</p>
    <p>User Age is {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :userAge="age"
          @ageWasEdited="age = $event"
          :userEditAge="editAge"
        />
      </div>
    </div>
  </div>
</template>
<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
  name: "User",
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  },
  data() {
    return {
      name: "data name",
      age: 27
    };
  },
  methods: {
    changeName() {
      this.name = "User changeName func";
    },
    resetName() {
      // callback func
      this.name = "User resetName func";
    },
    editAge() {
      // callback func
      this.age = 40;
    }
  }
};
</script>
<style scoped>
div {
  background-color: lightblue;
}
</style>
