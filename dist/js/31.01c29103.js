"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[31],{1031:function(t,s,a){a.r(s),a.d(s,{default:function(){return o}});var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"all_goods"},[t._m(0),s("div",{attrs:{id:"goods"}},[s("ul",{staticClass:"goods_contents"},t._l(t.items,(function(a){return s("li",{key:a.id,staticClass:"item-container"},[s("div",{staticClass:"image-wrapper"},[s("el-image",{attrs:{src:a.file_path,alt:"商品图片"}})],1),s("div",{staticClass:"details"},[s("p",{staticClass:"item-name"},[t._v("名称："+t._s(a.name))]),s("p",{staticClass:"item-price"},[t._v("售价："+t._s(a.price))])])])})),0)])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"subTitle_search_subNav"},[s("span",{staticClass:"subTitle"},[t._v("官方周边 > 总览")]),s("div",{staticClass:"rightSection"},[s("span",{staticClass:"search_btn"},[s("input",{staticClass:"search",attrs:{type:"text"}}),s("input",{staticClass:"btn",attrs:{type:"button"}})]),s("div",{staticClass:"subNav"},[s("span",{staticClass:"subNav_title"},[s("a",{attrs:{href:"#"}},[t._v("时间顺序")])]),s("div",{staticClass:"subNavContent"},[s("li",[s("a",{attrs:{href:"#"}},[t._v("时间顺序")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("时间倒序")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("价格升序")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("价格降序")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("名称")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("种类")])])])])])])}],n=(a(5084),{props:{msg:String},el:"#all_goods",data(){return{fits:["fill","contain","cover","none","scale-down"],items:[]}},mounted(){this.getAllGoodsList()},methods:{getAllGoodsList(){fetch("http://47.243.195.59:8080/guzi").then((t=>t.json())).then((t=>{this.items=t})).catch((t=>console.error("获取数据时出错：",t)))}}}),r=n,c=a(1001),l=(0,c.Z)(r,e,i,!1,null,"11c8da5e",null),o=l.exports},5084:function(t,s,a){a.d(s,{mb:function(){return u},bk:function(){return c},Nm:function(){return p},od:function(){return v},gt:function(){return h},ae:function(){return d},_C:function(){return r},Kg:function(){return f},x1:function(){return o},zc:function(){return l}});var e=a(6154);function i(t,s){return new Promise(((a,i)=>{e.Z.get(t,{params:s}).then((t=>{a(t.data)})).catch((t=>{i(t.data)}))}))}e.Z.defaults.baseURL="",e.Z.defaults.timeout=2e4,e.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const n="http://47.243.195.59:8080/",r=t=>i(n+"truthordare",t),c=t=>i(n+"dayandnight",t),l=t=>i(n+"moments",t),o=t=>i(n+"volumePage",t),u=t=>i(n+"chat",t),d=t=>i(n+"rewinds",t),f=t=>i(n+"tracks",t),h=t=>i(n+"profiledetail",t),p=t=>i(n+"charlie_details",t),v=t=>i(n+"guzi",t)}}]);