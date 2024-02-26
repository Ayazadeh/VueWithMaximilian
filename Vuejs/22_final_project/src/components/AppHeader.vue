<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link tag="li" to="/portfolio" activeClass="active">
            <a>Portfolio</a>
          </router-link>
          <router-link tag="li" to="/stocks" activeClass="active">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">
          Founds: {{ funds | currency }}
        </strong>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#" @click="endDay">End Day</a></li>
          <li
            class="dropdown"
            :class="{open: isDropdownOpen}"
            @click="isDropdownOpen = !isDropdownOpen"
          >
            <a
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              data-toggle="dropdown"
              class="dropdown-toggle"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="#" @click="saveData">Save Data</a></li>
              <li><a href="#">Load Data</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
import {mapActions} from 'vuex'
import {createClient} from '@supabase/supabase-js';
const supabase = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_KEY)

export default{
  data(){
    return{
      isDropdownOpen: false,
    }
  },
  computed:{
    funds(){
      return this.$store.getters.funds;
    }
  },
  methods:{
    ...mapActions([
      'randomizeStocks'
    ]),
    endDay(){
      this.randomizeStocks()
    },
   async saveData(){
      const myData = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks
      };

    const { data, error } = await supabase
      .from('stocks')
      .insert([
        myData
      ]).select()
      console.log('test ', data);
      console.log('error ', error)
    }
  }

}
</script>
