import { get,post } from './http'
//get和post请求发送例子，第一个参数为url，第二个参数为url所带参数
const bdUrl= 'www.baidu.com'
export const getBD = p=>get(bdUrl,p)
export const postBD =  p => post(bdUrl,p)