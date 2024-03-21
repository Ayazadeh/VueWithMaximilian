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
          <li>
            <a href="#" @click="endDay">End Day</a>
          </li>
          <li
            class="dropdown"
            :class="{ open: isDropdownOpen }"
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
              <li>
                <a href="#" @click="saveData">Save Data</a>
              </li>
              <li><a href="#" @click="loadData">Load Data</a></li>
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
import { supabase } from "@/lib/supabase";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
  },
  methods: {
    ...mapActions({
      randomizeStocks: "randomizeStocks",
      fetchData: "loadData",
    }),
    endDay() {
      this.randomizeStocks();
    },
    async saveData() {
      const myData = {
        funds: this.$store.getters.funds,
        stockPortfolio: this.$store.getters.stockPortfolio,
        stocks: this.$store.getters.stocks,
      };
      try {
        const { data, error } = await supabase
          .from("stocks")
          .insert([myData])
          .select();

        if (error) {
          alert(error.message);
          console.error("There was an error inserting", error);
          return null;
        }

        console.log("created a new record");
        return data;
      } catch (err) {
        alert("Error");
        console.error("Unknown problem inserting to db", err);
        return null;
      }
    },
    async loadData() {
      this.fetchData();
    },
  },
};
</script>
