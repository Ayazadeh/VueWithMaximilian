<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your Email Address: {{ email }}</p>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
    };
  },
  created() {
    axios
      .get("/users.json")
      .then((res) => {
        console.log("dashboard response: ", res);
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          user.id = key;
          users.push(user);
        }
        console.log("dashboard users: ", users);
        this.email = users[0].email;
      })
      .catch((error) => console.log("dashboard error: ", error));
  },
};
</script>

<style scoped>
h1,
p {
  text-align: center;
}

p {
  color: red;
}
</style>
