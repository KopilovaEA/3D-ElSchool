import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    name: "",
    id: null,
  },
  getters: {},
  mutations: {
    setEmail(store, email) {
      store.email = email;
    },
    setName(store, name) {
      store.name = name;
    },
    setId(store, id) {
      store.id = id;
    },
  },
  actions: {},
  modules: {},
});
