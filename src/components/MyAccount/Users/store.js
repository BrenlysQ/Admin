export const modUsers = {
  namespaced: true,
  state: {
    users: [],
    usersLoaded: false,
  },
  mutations: {
      set_users (state, users) {
      state.users = users;
      state.usersLoaded = true;
    },
    // loaded_debts(state, debts){
    //   state.data_debt = debts;
    //   state.data_loaded = true;
    // }
  }
}
