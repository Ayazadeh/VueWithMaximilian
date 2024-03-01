import { supabase } from "@/lib/supabase";

export const loadData = async ({ commit }) => {
  let { data, error } = await supabase.from("stocks").select("*");

  if (data) {
    console.log("data: ", data);
    const stocks = data[0].stocks;
    const funds = data[0].funds;
    const stockPortfolio = data[0].stockPortfolio;

    const portfolio = {
      funds,
      stockPortfolio,
    };
    
    commit("SET_STOCKS", stocks);
    commit("SET_PORTFOLIO", portfolio);
  }
  if (error) {
    console.log("error: ", error);
  }
};
