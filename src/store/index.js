import Vue from 'vue';
import Vuex from 'vuex';
// https://v3.vuex.vuejs.org/

import moduleMenu from './modules/moduleMenu';
import moduleTest from './modules/moduleTest';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        moduleMenu,
        moduleTest
    }
})
