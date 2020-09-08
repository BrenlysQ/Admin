export const modFreelance = {
  namespaced: true,
  state: {
    freelances: [], 
    freelancesLoaded: false,
    
  },
  mutations: {
    set_freelances (state, freelances) {
      state.freelances = freelances;
      state.freelancesLoaded = true;
    },
    //  set_currencies (state, currencies) {
    //   state.currencies = currencies;
    //   state.currenciesLoaded = true;
    // },
    //  set_se (state, se) {
    //   state.se = se;
    //   state.seLoaded = true;
    // },
    // loaded_debts(state, debts){
    //   state.data_debt = debts;
    //   state.data_loaded = true;
    // }
  }
}
