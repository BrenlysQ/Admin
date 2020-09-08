export const modCollection = {
  namespaced: true,
  state: {
    customer: [],
    data_loaded: false,
    data_debt: {}
  },
  mutations: {
    set_customer (state, customer) {
      state.customer = customer;
    },
    loaded_debts(state, debts){
      state.data_debt = debts;
      state.data_loaded = true;
    }
  }
}
