import Vue from 'vue'
import App from './App.vue'
import router from './router'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


import 'lib-flexible/flexible'

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

// 引入echart
import echarts from 'echarts'
import 'echarts/map/js/china.js';
Vue.prototype.$echarts = echarts 

import './assets/fonticon/iconfont.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
