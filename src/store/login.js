import types from './mutations_types'
import * as HTTP from '@/httpRequest'

export default{
    state: {
        loginStatus: false,
        projectData: [],
        loadStatus : -1,
        testData   : []
    },
    mutations: {
        [types.LOGIN_DATA_CHANGE](state, payload){
            Object.assign(state, payload);
        }
    },
    actions: {
        [types.LOGIN]({commit, state}, payload){
            commit(types.LOGIN_DATA_CHANGE, { loginStatus: false });
            return new Promise((resolve, reject)=>{
                HTTP.Login(payload).then(res=>{
                    if(res.data.code=='200'){
                        commit(types.LOGIN_DATA_CHANGE, { loginStatus: true });
                        resolve(res)
                    }else{
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        [types.GETPROJECT]({commit, state}, payload){
            commit(types.LOGIN_DATA_CHANGE, { loadStatus: 0});
            return new Promise((resolve, reject)=>{
                HTTP.GetProject(payload).then(res=>{
                    if(res.data.code=='200'){
                        commit(types.LOGIN_DATA_CHANGE, { 
                            loadStatus : 1,
                            projectData: res.data.result.data 
                        });
                        resolve(res)
                    }else{
                        commit(types.LOGIN_DATA_CHANGE, { loadStatus: 4});
                        reject(res)
                    }
                }).catch(err=>{
                    commit(types.LOGIN_DATA_CHANGE, { loadStatus: 4});
                    reject(err)
                })
            })
        },
        [types.GETTEST]({commit, state}, payload){
            return new Promise((resolve, reject)=>{
                HTTP.GetTest(payload).then(res=>{
                    if(res.status=='200'){
                        commit(types.LOGIN_DATA_CHANGE, { testData: res.data.result});
                        resolve(res)
                    }else{
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        },
        [types.GETTESTDEL]({commit, state}, payload){
            return new Promise((resolve, reject)=>{
                HTTP.GetTestDel(payload).then(res=>{
                    if(res.status=='200'){
                        commit(types.LOGIN_DATA_CHANGE, { testData: res.data.result});
                        resolve(res)
                    }else{
                        reject(res)
                    }
                }).catch(err=>{
                    reject(err)
                })
            })
        }
    }
}