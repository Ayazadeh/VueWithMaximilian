<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote quote="A wonderful quote!">
          <h2>{{ quoteTitle }}</h2> 
          <p>A wonderful Quote</p></p>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "@/components/Quote.vue";

export default {
  components: {
    appQuote: Quote
  },
  data(){
    return{
      quoteTitle: 'The Quote'
    }
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
