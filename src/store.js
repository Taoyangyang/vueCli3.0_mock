import Vue from 'vue'
import Vuex from 'vuex'

/*模块*/
import LOGIN from 'store/login'
import INDEX from 'store/index'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        LOGIN,
        INDEX
    },
    //开启严格模式后，只能通过mutation来改变状态（不支持异步）否则会报错(注意：发布环境下不要开启严格模式,严格模式会深度监测状态树来检测不合规的状态变化，造成不必要的性能损失)
    strict: process.env.NODE_ENV !== 'production',  
})
