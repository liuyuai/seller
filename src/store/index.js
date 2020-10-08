import Vue from "vue";
import Vuex from "vuex";
import user from "./moudles/user";
import app from "./moudles/app"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    app
  }
});
