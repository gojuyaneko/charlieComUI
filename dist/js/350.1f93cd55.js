"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[350],{2350:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"badgeDetails"},[e("div",{staticClass:"contentWrapper"},[e("div",{staticClass:"subTitle"},[t._v("徽章类 > 谷子详情")]),e("div",{staticClass:"productDetails"},[e("div",{staticClass:"productPic"},[e("div",{staticClass:"productImage"},[e("div",{staticClass:"badgeImage"},[e("img",{attrs:{src:t.goodsContent[t.index].file_path,alt:""}})])]),e("div",{staticClass:"productSlider"},[e("div",{staticClass:"slider-container"},t._l(t.goodsContent,(function(s,n){return e("img",{key:s.id,attrs:{src:s.file_path,alt:s.name},on:{click:function(e){return t.handle(n)}}})})),0)])]),e("div",{staticClass:"productInfo"},[e("h2",[t._v(t._s(t.goodsContent[t.index].name))]),e("div",{staticClass:"details"},[e("div",{staticClass:"leftColumn"},[e("p",[t._v("售价: "+t._s(t.goodsContent[t.index].price)+"元")]),e("p",[t._v("名称: "+t._s(t.goodsContent[t.index].name))]),e("p",[t._v("系列: "+t._s(t.goodsContent[t.index].series))]),e("p",[t._v("尺寸: "+t._s(t.goodsContent[t.index].size))])]),e("div",{staticClass:"rightColumn"},[e("p",[t._v("材质: "+t._s(t.goodsContent[t.index].texture))]),e("p",[t._v("工艺: "+t._s(t.goodsContent[t.index].craft))]),e("p",[t._v("发售时间: "+t._s(t.goodsContent[t.index].release_time))]),e("p",[t._v("获取方式: "+t._s(t.goodsContent[t.index].access))])])])])])])])},i=[],a=s(5084),o={el:"#bagdeDetails",data(){return{index:0,goodsContent:[{src:"./images/goods/长梦烬余痕徽章.png",name:"长梦烬余痕徽章",price:15,series:"长梦烬余痕系列",size:"40*70mm",material:"马口铁",craft:"拉丝银葱底",time:"2022/08/10",resource:"淘宝"}]}},watch:{$route:{handler(t,e){this.getList(t.query.type)},deep:!0,immediate:!0}},methods:{getList(t){(0,a.Gj)({type:t}).then((t=>{this.goodsContent=t,this.index=0}))},handle(t){this.index=t}}},d=o,r=s(1001),c=(0,r.Z)(d,n,i,!1,null,"fb4c9bf0",null),l=c.exports},5084:function(t,e,s){s.d(e,{bk:function(){return r},Gj:function(){return l},_C:function(){return d},zc:function(){return c}});var n=s(7467),i=s.n(n);function a(t,e){return new Promise(((s,n)=>{i().get(t,{params:e}).then((t=>{s(t.data)})).catch((t=>{n(t.data)}))}))}i().defaults.baseURL="",i().defaults.timeout=2e4,i().defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const o="http://47.243.195.59:8080/",d=t=>a(o+"truthordare",t),r=t=>a(o+"dayandnight",t),c=t=>a(o+"moments",t),l=t=>a(o+"guzi",t)}}]);