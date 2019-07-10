import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//自定义事件引入
import './directive'
// mock 接口数据模拟
import './mock'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
