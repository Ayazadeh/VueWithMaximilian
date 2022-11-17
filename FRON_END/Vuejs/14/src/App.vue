<template>
  <div class="container">
    <form action="">
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3"
        >
          <h1>File a Complaint</h1>
          <hr />
          <div class="form-group">
            <label for="email">Mail</label>

            <!-- <input
              type="text"
              id="email"
              class="form-control"
              v-model="userData.email" 
            /> -->

            <!-- The following code showing us, how work 'v-model' behind the scene -->

            <input
              type="text"
              id="email"
              class="form-control"
              :value="userData.email"
              @input="userData.email = $event.target.value"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="passsword"
              class="form-control"
              v-model.lazy="userData.password"
            />
            {{ userData.password }}
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model="userData.age"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3 form-group"
        >
          <label for="message">Message</label>
          <!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work! -->
          <textarea
            id="message"
            rows="5"
            class="form-control"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3"
        >
          <div class="form-group">
            <label for="sendmail">
              <input
                type="checkbox"
                id="sendmail"
                value="SendMail"
                v-model="sendMail"
              />
              Send Mail
            </label>
            <label for="sendInfomail">
              <input
                type="checkbox"
                id="sendInfomail"
                value="SendInfoMail"
                v-model="sendMail"
              />
              Send Infomail
            </label>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3 form-group"
        >
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" />
            Male
          </label>
          <label for="female">
            <input type="radio" id="femail" value="Female" v-model="gender" />
            Female
          </label>
        </div>
      </div>
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3 form-group"
        >
          <label for="priority">Priority</label>
          <select id="priority" class="form-control" v-model="selectedPriority">
            <option v-for="priority in priorities">{{ priority }}</option>
            <!-- :selected="priority == 'Medium' => just work if we don't use v-model" -->
          </select>
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3 form-group"
        >
          <button class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <hr />
    <div class="row">
      <div
        class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-affset-3 form-group"
      >
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Mail:{{ userData.email }}</p>
            <p>Password: {{ userData.password }}</p>
            <p>Age:{{ userData.age }}</p>
            <p style="white-space: pre">Message: {{ message }}</p>
            <p><strong>Send Mail?</strong></p>
            <ul>
              <li v-for="item in sendMail">{{ item }}</li>
            </ul>
            <p>Gender: {{ gender }}</p>
            <p>Priority: {{ selectedPriority }}</p>
            <p>Switched:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userData: {
        email: "",
        password: "",
        age: 22
      },
      message: "A Text Message",
      sendMail: [],
      gender: "Male",
      selectedPriority: "High",
      priorities: ["High", "Medium", "Low"]
    };
  }
};
</script>

<style></style>
