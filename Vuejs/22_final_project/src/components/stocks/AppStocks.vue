<template>
  <div>
    <app-stock :key="stock" v-for="stock in stocks" />
  </div>
</template>
<script>
import AppStock from './AppStock.vue';
export default{
    components:{
        AppStock,
    },
    data(){
        return{
            stocks:[
                {id: 1, name: "BMW", price: 110},
                {id: 2, name: "Google", price: 200},
                {id: 3, name: "Apple", price: 220},
                {id: 4, name: "Twitter", price: 100},
                {id: 5, name: "Telegram", price: 130},
            ]
        }
    }
}
</script>
