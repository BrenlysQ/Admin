export const modSatellite = {
  namespaced: true,
  state: {
    satellites: [], 
    satellitesLoaded: false,
    currencies:[],
    currenciesLoaded: false,
    se: [], //search_engines
    seLoaded: false,
  },
  mutations: {
    set_satellites (state, satellites) {
      state.satellites = satellites;
      state.satellitesLoaded = true;
    },
     set_currencies (state, currencies) {
      state.currencies = currencies;
      state.currenciesLoaded = true;
    },
     set_se (state, se) {
      state.se = se;
      state.seLoaded = true;
    },
    // loaded_debts(state, debts){
    //   state.data_debt = debts;
    //   state.data_loaded = true;
    // }
  }
}
