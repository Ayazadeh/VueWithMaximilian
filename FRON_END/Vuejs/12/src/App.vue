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
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";
import Author from "@/components/Author.vue";
import New from "@/components/New.vue";
export default {
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  },
  data() {
    return {
      quoteTitle: "The Quote",
      selectedComponent: "appQuote"
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
