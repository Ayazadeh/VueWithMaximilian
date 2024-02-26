import stocks from "@/data/stocks";

const state = {
  stocks: [],
};

const mutations = {
  SET_STOCKS(state, stocks) {
    state.stocks = stocks;
  },
  RND_STOCKS() {},
};

const actions = {
  buyStock: ({ commit }) => {
    commit();
  },
  initStocks: ({ commit }) => {
    commit("SET_STOCKS", stocks);
  },
  randomizeStocks: ({ commit }) => {
    commit("RND_STOCKS");
  },
};

const getters = {
  stocks: (state) => state.stocks,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
