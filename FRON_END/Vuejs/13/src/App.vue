<template>
  <!-- <div id="app"> -->
  <div class="container">
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes"></app-quote-grid>
  </div>
  <!-- </div> -->
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
export default {
  name: "App",
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
  },
  data() {
    return {
      quotes: ["Just a Quote to see something"],
      maxQuotes: 10,
    };
  },
  methods: {
    newQuote(quote) {
      this.quotes.push(quote);
    },
  },
};
</script>

<style></style>
