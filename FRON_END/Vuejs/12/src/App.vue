<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote quote="A wonderful quote!">
          <h2>The Quote</h2> 
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
  }
};
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
