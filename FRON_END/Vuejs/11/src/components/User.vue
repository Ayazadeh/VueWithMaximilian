<!-- parent component -->
<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my Name</button>
    <p>Name is {{ name }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
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
      name: "Mohammad"
    };
  },
  methods: {
    changeName() {
      this.name = "Ayazadeh";
    },
    resetName(){
      this.name = 'Mohammad';
    }
  }
};
</script>
