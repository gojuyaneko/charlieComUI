import { get } from "./http";
//get和post请求发送例子，第一个参数为url，第二个参数为url所带参数
const baseUrl = "http://47.243.195.59:8080/";
export const getTOD = (p) => get(baseUrl + "truthordare", p); // 真心话大冒险接口
export const getDNMenu = (p) => get(baseUrl + "dayandnight", p); // 主线菜单接口
export const getWmAll = (p) => get(baseUrl + "moments", p); // 朋友圈总览接口
export const getVP = (p) => get(baseUrl + "volumePage", p);
export const getRP = (p) => get(baseUrl + "rewinds", p);
export const getTP = (p) => get(baseUrl + "tracks", p);
export const getPP = (p) => get(baseUrl + "profiledetail", p);
export const getDetail = (p) => get(baseUrl + "charlie_details", p); // 更多细节
export const getGoodsList = (p) => get(baseUrl + "guzi", p); //周边
export const getMemoriesAlbum = (p) => get(baseUrl + "memoriesAlbum", p); // 灵犀相册
