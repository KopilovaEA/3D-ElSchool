import { createStore } from "vuex";

export default createStore({
  state: {
    email: "",
    name: "",
    role: "",
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
    setRole(store, role) {
      store.role = role;
    },
  },
  actions: {},
  modules: {},
});
