"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[478],{7478:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profileDetail"},[e("div",{staticClass:"guide"}),e("div",{staticClass:"line"}),e("div",{staticClass:"next",class:{active:t.Index},on:{click:function(e){return t.change()}}}),e("ul",t._l(t.ChapList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:s},["night"===n.chap?e("profileNight"):t._e(),"attract"===n.chap?e("profileAttract"):t._e()],1)})),0)])},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile_attract"},[t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("a",{staticClass:"video-btn",attrs:{target:"_blank",href:n.videoUrl}})])})),e("div",{staticClass:"title"}),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.Index||0===t.Index,expression:"Index===1 || Index===0"}],staticClass:"night2",on:{click:function(e){return t.show(2)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.Index||0===t.Index,expression:"Index===1 || Index===0"}],staticClass:"light1"}),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.Index,expression:"Index===2"}],staticClass:"night1",on:{click:function(e){return t.show(1)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.Index,expression:"Index===2"}],staticClass:"light2"}),e("ul",{staticClass:"btns"},[e("li",{staticClass:"origin",class:0===t.Index?"active":"",attrs:{tabindex:"0"},on:{click:function(e){return t.show(0)}}}),e("li",{staticClass:"light",class:1===t.Index?"active":"",attrs:{tabindex:"1"},on:{click:function(e){return t.show(1)}}}),e("li",{staticClass:"night",class:2===t.Index?"active":"",attrs:{tabindex:"2"},on:{click:function(e){return t.show(2)}}})]),e("div",{staticClass:"text-bg"},[e("div",{staticClass:"text"},[e("ul",t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("profileContent",{attrs:{sendName:t.subContent}})],1)})),0)])])],2)},o=[],r=(n(7658),function(){var t=this,e=t._self._c;return e("div",t._l(t.sendName,(function(n,s){return e("div",{key:s,staticClass:"text-div"},[e("span",{staticClass:"dialog-span"},["我"!==n.name&&"查理苏"!==n.name?e("span",{staticStyle:{color:"#b99e63",position:"relative",left:"-12px",top:"2px"},attrs:{"data-person":n.name}},[t._v(" "+t._s(n.name))]):t._e(),"查理苏"===n.name?e("span",{attrs:{"data-person":n.name}},[t._v(t._s(n.name))]):t._e()]),"我"!==n.name&&"旁白"!==n.name?e("p",{staticClass:"dialog-p",staticStyle:{"text-align":"left"},attrs:{"data-person-p":n.name}},[t._v(t._s(n.content))]):t._e(),"我"===n.name||"旁白"===n.name?e("p",{staticClass:"dialog-p",attrs:{"data-person-p":n.name}},[t._v(t._s(n.content))]):t._e(),e("span",{staticClass:"dialog-span"},["我"===n.name?e("span",{attrs:{"data-person":n.name}},[t._v(t._s(n.name))]):t._e()])])})),0)}),c=[],l={props:["sendName"],methods:{}},d=l,u=n(1001),h=(0,u.Z)(d,r,c,!1,null,"299e3926",null),x=h.exports,v=n(5084),m={components:{profileContent:x},data(){return{Index:0,contentDataList:[],subContent:[]}},mounted(){this.getPara()},methods:{show(t){this.Index===t?this.isShow=!this.isShow:this.isShow=!0,this.Index=t,console.log(this.Index),this.getPara()},getPara(){(0,v.gt)({cardindex:1,sessionIndex:this.Index}).then((t=>{this.subContent=[],this.contentDataList=[];for(let n in t.subContent){let e={name:t.subContent[n]["name"],content:t.subContent[n]["content"]};this.subContent.push(e)}let e={sessionIndex:this.Index,videoUrl:t.videoUrl};this.contentDataList.push(e)}))}}},p=m,I=(0,u.Z)(p,a,o,!1,null,"00b288da",null),f=I.exports,w=function(){var t=this,e=t._self._c;return e("div",{staticClass:"profile_night"},[t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("a",{staticClass:"video-btn",attrs:{target:"_blank",href:n.videoUrl}})])})),e("div",{staticClass:"title"}),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.Index||0===t.Index,expression:"Index===1 || Index===0"}],staticClass:"night2",on:{click:function(e){return t.show(2)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:1===t.Index||0===t.Index,expression:"Index===1 || Index===0"}],staticClass:"light1"}),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.Index,expression:"Index===2"}],staticClass:"night1",on:{click:function(e){return t.show(1)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:2===t.Index,expression:"Index===2"}],staticClass:"light2"}),e("ul",{staticClass:"btns"},[e("span",{staticClass:"origin",class:0===t.Index?"active":"",attrs:{tabindex:"0"},on:{click:function(e){return t.show(0)}}}),e("span",{staticClass:"light",class:1===t.Index?"active":"",attrs:{tabindex:"1"},on:{click:function(e){return t.show(1)}}}),e("span",{staticClass:"night",class:2===t.Index?"active":"",attrs:{tabindex:"2"},on:{click:function(e){return t.show(2)}}})]),e("div",{staticClass:"text-bg"},[e("div",{staticClass:"text"},[e("ul",t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("profileContent",{attrs:{sendName:t.subContent}})],1)})),0)])])],2)},C=[],g={components:{profileContent:x},data(){return{Index:0,contentDataList:[],subContent:[]}},mounted(){this.getPara()},methods:{show(t){this.Index===t?this.isShow=!this.isShow:this.isShow=!0,this.Index=t,console.log(this.Index),this.getPara()},getPara(){(0,v.gt)({cardindex:0,sessionIndex:this.Index}).then((t=>{this.subContent=[],this.contentDataList=[];for(let n in t.subContent){let e={name:t.subContent[n]["name"],content:t.subContent[n]["content"]};this.subContent.push(e)}let e={sessionIndex:this.Index,videoUrl:t.videoUrl};this.contentDataList.push(e)}))}}},_=g,b=(0,u.Z)(_,w,C,!1,null,"5c59006d",null),k=b.exports,N={components:{profileAttract:f,profileNight:k},data(){return{Index:0,ChapList:[{chap:"night",sessionIndex:0},{chap:"attract",sessionIndex:1}]}},methods:{change(){this.Index>=1?this.Index=0:this.Index++,console.log(this.Index)}}},L=N,D=(0,u.Z)(L,s,i,!1,null,"a6d15e60",null),y=D.exports},5084:function(t,e,n){n.d(e,{mb:function(){return d},bk:function(){return r},Pd:function(){return m},Nm:function(){return f},_s:function(){return p},T8:function(){return h},Gj:function(){return w},vI:function(){return C},gt:function(){return I},ae:function(){return x},_C:function(){return o},Kg:function(){return v},g9:function(){return _},DQ:function(){return u},x1:function(){return l},qH:function(){return g},zc:function(){return c}});var s=n(6154);function i(t,e){return new Promise(((n,i)=>{s.Z.get(t,{params:e}).then((t=>{n(t.data)})).catch((t=>{i(t.data)}))}))}s.Z.defaults.baseURL="",s.Z.defaults.timeout=2e4,s.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const a="http://47.243.195.59:8080/",o=t=>i(a+"truthordare",t),r=t=>i(a+"dayandnight",t),c=t=>i(a+"moments",t),l=t=>i(a+"volumePage",t),d=t=>i(a+"chat",t),u=t=>i(a+"videocall",t),h=t=>i(a+"studio/furniture",t),x=t=>i(a+"rewinds",t),v=t=>i(a+"tracks",t),m=t=>i(a+"dreamweaving",t),p=t=>i(a+"film",t),I=t=>i(a+"profiledetail",t),f=t=>i(a+"charlie_details",t),w=t=>i(a+"guzi",t),C=t=>i(a+"memoriesAlbum",t),g=t=>i(a+"vinyl",t),_=t=>i(a+"talk",t)}}]);