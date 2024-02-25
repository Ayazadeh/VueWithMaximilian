import Home from "./components/AppHome.vue";
import Portfolio from "./components/portfolio/AppPortfolio.vue";
import Stocks from "./components/stocks/AppStocks.vue";

export const routes = [
  { path: "/", component: Home },
  { path: "/portfolio", component: Portfolio },
  { path: "/stocks", component: Stocks },
];
