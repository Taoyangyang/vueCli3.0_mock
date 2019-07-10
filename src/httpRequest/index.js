import axios from 'axios';
import api from '@/mock/api'

/* 登录 */
export function Login(params) {
    return axios.post(api.Login, { params: params });
}
/* 获取project */
export function GetProject(params) {
    return axios.get(api.Projects, { params: params });
}
/* 获取test */
export function GetTest(params) {
    return axios.get(api.Test, { params: params });
}
/* 删除test */
export function GetTestDel(params) {
    return axios.get(api.TestDel, { params: params });
}