"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[552],{9552:function(t,e,s){s.r(e),s.d(e,{default:function(){return o}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"all_goods"},[e("div",{staticClass:"subTitle_search_subNav"},[e("span",{staticClass:"subTitle"},[t._v("官方周边 > 总览")]),e("div",{staticClass:"rightSection"},[e("span",{staticClass:"search_btn"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchValue,expression:"searchValue"}],staticClass:"search",attrs:{type:"text"},domProps:{value:t.searchValue},on:{input:function(e){e.target.composing||(t.searchValue=e.target.value)}}}),e("input",{staticClass:"btn",attrs:{type:"button"},on:{click:t.search}})]),e("div",{staticClass:"subNav"},[e("span",{staticClass:"subNav_title"},[e("a",{attrs:{href:"#"}},[t._v(t._s(t.sortType.label))])]),e("div",{staticClass:"subNavContent"},t._l(t.sortList,(function(s){return e("li",{key:s.value},[e("span",{attrs:{href:"#"},on:{click:function(e){return t.getSortList(s)}}},[t._v(t._s(s.label))])])})),0)])])]),e("div",{attrs:{id:"goods"}},[e("ul",{staticClass:"goods_contents"},t._l(t.items,(function(s){return e("li",{key:s.id,staticClass:"item-container"},[e("div",{staticClass:"image-wrapper"},[e("el-image",{attrs:{src:s.file_path,alt:"商品图片"}})],1),e("div",{staticClass:"details"},[e("p",{staticClass:"item-name"},[t._v("名称："+t._s(s.name))]),e("p",{staticClass:"item-price"},[t._v("售价："+t._s(s.price?s.price:0))])])])})),0)])])},n=[],i=s(5084),r={props:{msg:String},el:"#all_goods",data(){return{fits:["fill","contain","cover","none","scale-down"],items:[],searchValue:"",sortList:[{value:"timeASC",label:"时间升序"},{value:"timeDESC",label:"时间降序"},{value:"priceASC",label:"价格升序"},{value:"priceDESC",label:"价格降序"}],sortType:{value:"timeASC",label:"时间升序"}}},mounted(){this.getAllGoodsList()},methods:{getAllGoodsList(t){(0,i.Gj)(t).then((t=>{this.items=t}))},search(){this.getAllGoodsList({name:this.searchValue,sign:this.sortType?.value})},getSortList(t){this.sortType=t,this.getAllGoodsList({name:this.searchValue,sign:t.value})}}},l=r,u=s(1001),c=(0,u.Z)(l,a,n,!1,null,"ea60a6b4",null),o=c.exports},5084:function(t,e,s){s.d(e,{mb:function(){return o},bk:function(){return l},Pd:function(){return v},_3:function(){return y},SG:function(){return S},Nm:function(){return C},_s:function(){return p},T8:function(){return f},Gj:function(){return _},vI:function(){return b},gt:function(){return g},ae:function(){return m},_C:function(){return r},Kg:function(){return h},g9:function(){return k},DQ:function(){return d},x1:function(){return c},qH:function(){return w},zc:function(){return u}});var a=s(6154);function n(t,e){return new Promise(((s,n)=>{a.Z.get(t,{params:e}).then((t=>{s(t.data)})).catch((t=>{n(t.data)}))}))}a.Z.defaults.baseURL="",a.Z.defaults.timeout=2e4,a.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const i="http://47.243.195.59:8080/",r=t=>n(i+"truthordare",t),l=t=>n(i+"dayandnight",t),u=t=>n(i+"moments",t),c=t=>n(i+"volumePage",t),o=t=>n(i+"chat",t),d=t=>n(i+"videocall",t),f=t=>n(i+"studio/furniture",t),m=t=>n(i+"rewinds",t),h=t=>n(i+"tracks",t),v=t=>n(i+"dreamweaving",t),p=t=>n(i+"film",t),g=t=>n(i+"profiledetail",t),C=t=>n(i+"charlie_details",t),_=t=>n(i+"guzi",t),b=t=>n(i+"memoriesAlbum",t),w=t=>n(i+"vinyl",t),k=t=>n(i+"talk",t),y=t=>n(i+"dateOverview",t),S=t=>n(i+"date_details",t)}}]);