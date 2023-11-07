<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Mail</label>
          <input type="text" class="form-control" v-model="user.email" />
        </div>
        <div class="form-group">
          <label>password</label>
          <input type="text" class="form-control" v-model="user.password" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button><br />
        <hr />
        <button class="btn btn-primary" @click="fetchData">Get Data</button><br><br>
        <h4>Users:</h4>
        <ul class="list-group">
          <li class="list-group-item" v-for="u in users">
            {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/runtime-dom";
import { supabase, adminAuthClient } from "./lib/supabaseClient";
export default defineComponent({
  name: "App",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      users: [],
    };
  },
  methods: {
    async submit() {
      // signUp User in Supabase alternative Firebase
      const { data, error } = await supabase.auth.signUp({
        email: this.user.email,
        password: this.user.password,
      });
      console.log("data:  ", data);
    },
    async fetchData() {

      const {
        data: { users },
        error,
      } = await adminAuthClient.listUsers();

      const temp = [];
      for (let key in users) {
        temp.push(users[key]);
      }
      this.users = temp
    },
  },
});
</script>
