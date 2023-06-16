<template>
  <div class="container">
    <div class="row">
      <div class="col-sx-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-sx-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <component
          :is="mode"
          @answered="answered($event)"
          @confirmed="mode = 'app-question'"
        ></component>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionPart from "./components/QuestionPart.vue";
import AnswerPart from "./components/AnswerPart.vue";

export default {
  name: "App",
  components: {
    appQuestion: QuestionPart,
    appAnswer: AnswerPart,
  },
  data() {
    return {
      mode: "app-question",
    };
  },
  methods: {
    answered(isCorrect) {
      if (isCorrect) {
        this.mode = "app-answer";
      } else {
        this.mode = "app-question";
        alert("Wrong, try again!");
      }
    },
  },
};
</script>
