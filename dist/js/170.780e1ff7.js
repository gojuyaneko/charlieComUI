"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[170],{6170:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var i=function(){var t=this,n=t._self._c;return n("div",{staticClass:"video-detail"},[n("div",{ref:"videoBg",staticClass:"video-detail-bg",on:{click:function(n){return n.stopPropagation(),t.choiceChoose.apply(null,arguments)}}},[n("main",{staticClass:"vc-detail-main"},[n("a",{staticClass:"vc-detail-video",attrs:{target:"_blank",href:t.videoUrl}}),n("div",{staticClass:"detail-design"},[t._v(" Moments of Charlie")]),n("div",{staticClass:"vc-detail-box"},[t._m(0),n("div",{staticClass:"vc-content"},[n("span",{staticClass:"vc-content-name"},[t._v("查理苏")]),n("div",{staticClass:"vc-section"},[n("div",{staticClass:"dt-sec-main",attrs:{"data-person":"查理苏"}},t._l(t.chDetailData.content,(function(e,i){return n("div",{key:"con"+i,staticClass:"dt-normal-text"},[n("p",[t._v(t._s(e))])])})),0)])])])])])])},a=[function(){var t=this,n=t._self._c;return n("div",{staticClass:"vc-detail-left"},[n("img",{staticClass:"vc-detail-img",attrs:{src:e(3866),alt:""}}),n("div",{staticClass:"vc-border"})])}],r=e(5084),s={components:{},props:{},data(){return{chDetailData:[],entry:1,videoUrl:""}},mounted(){},activated(){this.getContent()},methods:{getContent(){this.entry=this.$route.query.name,this.chDetailData=[],this.videoUrl="",(0,r.DQ)({entry:this.entry}).then((t=>{this.chDetailData=t,this.videoUrl=t.videoLink}))}}},c=s,o=e(1001),u=(0,o.Z)(c,i,a,!1,null,"558bee07",null),l=u.exports},5084:function(t,n,e){e.d(n,{mb:function(){return l},bk:function(){return c},Pd:function(){return m},Nm:function(){return C},T8:function(){return f},Gj:function(){return g},vI:function(){return _},gt:function(){return p},ae:function(){return v},_C:function(){return s},Kg:function(){return h},g9:function(){return k},DQ:function(){return d},x1:function(){return u},qH:function(){return b},zc:function(){return o}});var i=e(6154);function a(t,n){return new Promise(((e,a)=>{i.Z.get(t,{params:n}).then((t=>{e(t.data)})).catch((t=>{a(t.data)}))}))}i.Z.defaults.baseURL="",i.Z.defaults.timeout=2e4,i.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const r="http://47.243.195.59:8080/",s=t=>a(r+"truthordare",t),c=t=>a(r+"dayandnight",t),o=t=>a(r+"moments",t),u=t=>a(r+"volumePage",t),l=t=>a(r+"chat",t),d=t=>a(r+"videocall",t),f=t=>a(r+"studio/furniture",t),v=t=>a(r+"rewinds",t),h=t=>a(r+"tracks",t),m=t=>a(r+"dreamweaving",t),p=t=>a(r+"profiledetail",t),C=t=>a(r+"charlie_details",t),g=t=>a(r+"guzi",t),_=t=>a(r+"memoriesAlbum",t),b=t=>a(r+"vinyl",t),k=t=>a(r+"talk",t)},3866:function(t,n,e){t.exports=e.p+"img/c-01.5245b539.png"}}]);