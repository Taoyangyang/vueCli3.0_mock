import types from './mutations_types'

export default{
    state: {
        showDialog: false,
    },
    mutations: {
        [types.INDEX_DATA_CHANGE](state, payload){
            Object.assign(state, payload);
        }
    },
    actions: {
        [types.CLICK_DIALOG_TOGGLE]({commit, state}, payload){
            let params = payload.state ? {showDialog: !state.showDialog}:{}
            commit(types.INDEX_DATA_CHANGE, params)
        }
    }
}