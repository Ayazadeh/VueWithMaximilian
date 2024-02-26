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
import {mapGetters} from 'vuex'
import AppStock from './AppStock.vue';
export default{
    computed:{
       ...mapGetters({
        stocks: 'stockPortfolio'
       })
    },
    components:{
        AppStock
    }
}
</script>
