<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr />

        <!-- dynamic compponent -->
        <!-- Keeping Dynamic Components Alive -->
        <!-- keep-alive: prevent from  components destroy when we navigate in those -->
        <keep-alive>
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>

        <!-- <app-quote quote="A wonderful quote!">
          <h2 slot="title">{{ quoteTitle }}</h2> 
          <p slot="content">A wonderful Quote</p></p>
          <p slot="subtitle">subtitle from parent</p>
        </app-quote> -->

        <br />
        <button class="btn btn-primary" @click="selectedComponent2 = 'appBlue'">
          Load Blue Template
        </button>
        <button class="btn btn-success" @click="selectedComponent2 = 'appGreen'">
          Load Green Template
        </button>
        <button class="btn btn-danger" @click="selectedComponent2 = 'appRed'">
          Load Red Template
        </button>
        <hr />
        <component :is="selectedComponent2">
          <p>This is the Content</p>
        </component>
        <!--<app-blue>-->
        <!--<p>This is the Content</p>-->
        <!--</app-blue>-->
        <!--<app-green>-->
        <!--<p>This is the Content</p>-->
        <!--</app-green>-->
        <!--<app-red>-->
        <!--<p>This is the Content</p>-->
        <!--</app-red>-->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";
import Author from "@/components/Author.vue";
import New from "@/components/New.vue";
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New,
    appBlue: Blue,
    appGreen: Green,
    appRed: Red
  },
  data() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote",
      selectedComponent2: "appBlue"
    };
  }
};
</script>

<style scoped>
/* style for content of slot must be in child component,
below style not working for content of slot if style be scoped
*/

h2 {
  color: red;
}
</style>
