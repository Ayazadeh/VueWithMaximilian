<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-dom";

export default defineComponent({
  name: "App",
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
    };
  },
  methods: {
    submit() {
      console.log(this.user);
    },
  },
});
</script>
