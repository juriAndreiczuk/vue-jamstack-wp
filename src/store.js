import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentPath: '',
    currentPage: '',
    appLoaded: false
  },
  mutations: {
    setState(state, [name, data]) {
      state[name] = data
    }
  }
});

export default store
