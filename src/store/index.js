import Vue from "vue";
import Vuex from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import probatio from './probatio';

const state = probatio.create();
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
});
