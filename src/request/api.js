import { get,post } from './http'
//get和post请求发送例子，第一个参数为url，第二个参数为url所带参数
const baseUrl= 'http://47.243.195.59:8080/'
export const getTOD = p=>get(baseUrl + 'truthordare', p)
export const getVD = p=>get(baseUrl + 'volumeDream', p)
export const postBD =  p => post(bdUrl,p)
export const getGuziList = p => get(baseUrl + 'guzi', p) // 官谷列表