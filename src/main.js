import Vue from 'vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import store from "@/store";
Vue.config.productionTip = false;
Vue.use(Antd);


new Vue({
  router,
  render: (h) => h(App),
  store
}).$mount('#app')
