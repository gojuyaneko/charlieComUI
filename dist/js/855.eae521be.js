"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[855],{6511:function(t,e,a){a.d(e,{Z:function(){return s}});var n=function(){var t=this,e=t._self._c;return e("div",[e("el-pagination",{staticClass:"td-pagi",attrs:{"hide-on-single-page":t.hide,layout:"prev, pager, next",total:t.itemCnt,"current-page":t.currenPage,"page-size":t.pagesize},on:{"current-change":t.curChange}})],1)},r=[],u={components:{},props:{currenPage:Number,pagesize:Number,itemCnt:Number},data(){return{hide:this.itemCnt-1!=0}},mounted(){},methods:{curChange(t){this.$emit("changeCurPa",t)}}},i=u,c=a(1001),o=(0,c.Z)(i,n,r,!1,null,"10bc9fff",null),s=o.exports},5855:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"video-call"},[e("div",{staticClass:"vc-l-n"},[t._v("LIGHT AND NIGHT")]),e("div",{staticClass:"video-call-bg"},[e("main",{staticClass:"vc-main"},[e("div",{staticClass:"vc-layout"},[e("vc-layout",{ref:"vclayout",attrs:{layoutData:t.layoutData}})],1)])])])},r=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"video-call-layout"},[e("div",[e("ul",{staticClass:"vc-layout-ul"},t._l(t.layoutData.data.slice((t.currentPage-1)*t.pagesize,t.currentPage*t.pagesize),(function(a,n){return e("li",{key:n,staticClass:"vc-layout-li",on:{click:function(e){return t.goToNext(a.entry)}}},[e("div",{staticClass:"vc-layout-name"},[t._v(t._s(a.name))]),e("div",{staticClass:"vc-layout-content"},[t._v(t._s(a.content))])])})),0),e("div",{staticClass:"vc-layout-box"},[e("charlie-pagination",{staticClass:"vc-layout-pagi",attrs:{currenPage:t.currentPage,pagesize:t.pagesize,itemCnt:t.layoutData.data.length},on:{changeCurPa:t.changeCurPage}})],1)])])},i=[],c=(a(7658),a(6511)),o={components:{charliePagination:c.Z},props:{layoutData:{type:Object}},data(){return{currentPage:1,pagesize:8}},mounted(){},methods:{changeCurPage(t){this.currentPage=t},freshPage(){this.currentPage=1},goToNext(t){console.log(t),this.$router.push({path:"/videocallcollection/vcdetail",query:{name:t}})}}},s=o,l=a(1001),d=(0,l.Z)(s,u,i,!1,null,"022a7d7c",null),g=d.exports,f=a(5084),h={components:{vcLayout:g},props:{},data(){return{layoutData:{}}},activated(){this.getLayoutData()},methods:{getLayoutData(){this.layoutData=[],(0,f.DQ)().then((t=>{this.pageSize=t.totalNum,this.layoutData=t}))}},beforeRouteEnter(t,e,a){"vcdetail"!==e.name?a((t=>{t.$refs["vclayout"].freshPage()})):a()}},v=h,p=(0,l.Z)(v,n,r,!1,null,"4248c435",null),m=p.exports},5084:function(t,e,a){a.d(e,{mb:function(){return l},bk:function(){return c},Pd:function(){return v},_3:function(){return D},SG:function(){return z},Nm:function(){return y},_s:function(){return p},T8:function(){return g},Gj:function(){return C},vI:function(){return P},gt:function(){return m},ae:function(){return f},_C:function(){return i},Kg:function(){return h},g9:function(){return b},DQ:function(){return d},x1:function(){return s},qH:function(){return _},zc:function(){return o}});var n=a(6154);function r(t,e){return new Promise(((a,r)=>{n.Z.get(t,{params:e}).then((t=>{a(t.data)})).catch((t=>{r(t.data)}))}))}n.Z.defaults.baseURL="",n.Z.defaults.timeout=2e4,n.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const u="http://47.243.195.59:8080/",i=t=>r(u+"truthordare",t),c=t=>r(u+"dayandnight",t),o=t=>r(u+"moments",t),s=t=>r(u+"volumePage",t),l=t=>r(u+"chat",t),d=t=>r(u+"videocall",t),g=t=>r(u+"studio/furniture",t),f=t=>r(u+"rewinds",t),h=t=>r(u+"tracks",t),v=t=>r(u+"dreamweaving",t),p=t=>r(u+"film",t),m=t=>r(u+"profiledetail",t),y=t=>r(u+"charlie_details",t),C=t=>r(u+"guzi",t),P=t=>r(u+"memoriesAlbum",t),_=t=>r(u+"vinyl",t),b=t=>r(u+"talk",t),D=t=>r(u+"dateOverview",t),z=t=>r(u+"date_details",t)}}]);