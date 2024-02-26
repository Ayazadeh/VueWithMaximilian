<template>
  <div>
    <app-stock
      :stock="stock"
      :key="stock.id"
      v-for="stock in stocks"
    />
  </div>
</template>
<script>
import AppStock from './AppStock.vue';
export default{
    components:{
        AppStock,
    },
    computed:{
      stocks(){
        return this.$store.getters.stocks;
      }
    }
}
</script>
