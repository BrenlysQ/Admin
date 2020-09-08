export const modLogin = {
  namespaced: true,
  state: {
    roles: [],
  },
  mutations: {
      set_rol (state, roles) {
      state.roles = roles;
    },
    // loaded_debts(state, debts){
    //   state.data_debt = debts;
    //   state.data_loaded = true;
    // }
  }
}
