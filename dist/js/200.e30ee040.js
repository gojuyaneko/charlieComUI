"use strict";(self["webpackChunkcharliecom"]=self["webpackChunkcharliecom"]||[]).push([[200],{5200:function(t,e,n){n.r(e),n.d(e,{default:function(){return G}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume"},[e("div",{staticClass:"guide"}),e("div",{staticClass:"next",class:{active:t.Index},on:{click:function(e){return t.change()}}}),e("ul",t._l(t.ChapList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:s},["dream"===n.chap?e("volumeDream"):t._e(),"control"===n.chap?e("volumeControl"):t._e(),"garden"===n.chap?e("volumeGarden"):t._e()],1)})),0)])},i=[],a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dream"},[t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("a",{staticClass:"video-btn",attrs:{target:"_blank",href:n.videoUrl}})])})),e("div",{staticClass:"title"}),e("div",{staticClass:"text-bg"},[e("div",{staticClass:"text"},[e("ul",t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("volumeContent",{attrs:{sendName:t.subContent}})],1)})),0)])]),e("ul",{staticClass:"btns"},[e("li",{staticClass:"btn1",class:0===t.Index?"active":"",attrs:{tabindex:"0"},on:{click:function(e){return t.show(0)}}}),e("li",{staticClass:"btn2",class:1===t.Index?"active":"",attrs:{tabindex:"1"},on:{click:function(e){return t.show(1)}}}),e("li",{staticClass:"btn3",class:2===t.Index?"active":"",attrs:{tabindex:"2"},on:{click:function(e){return t.show(2)}}}),e("li",{staticClass:"btn4",class:3===t.Index?"active":"",attrs:{tabindex:"3"},on:{click:function(e){return t.show(3)}}})])],2)},o=[],c=(n(7658),function(){var t=this,e=t._self._c;return e("div",t._l(t.sendName,(function(n,s){return e("div",{key:s,staticClass:"text-div"},[e("p",{staticClass:"dialog-p",attrs:{datatype:n.type}},[t._v(t._s(n.content))])])})),0)}),r=[],l={props:["sendName"],methods:{}},d=l,u=n(1001),h=(0,u.Z)(d,c,r,!1,null,"27089030",null),x=h.exports,v=n(5084),m={components:{volumeContent:x},data(){return{Index:0,contentDataList:[],subContent:[]}},mounted(){this.getPara()},methods:{show(t){this.Index===t?this.isShow=!this.isShow:this.isShow=!0,this.Index=t,console.log(this.Index),this.getPara()},getPara(){(0,v.x1)({cardindex:0,sessionIndex:this.Index}).then((t=>{this.subContent=[],this.contentDataList=[];for(let n in t.subContent){let e=t.subContent[n]["type"]?"content":"title",s={type:t.subContent[n]["type"],content:t.subContent[n][e]};this.subContent.push(s)}let e={sessionIndex:this.Index,videoUrl:t.videoUrl};this.contentDataList.push(e)}))}}},I=m,C=(0,u.Z)(I,a,o,!1,null,"f936c600",null),b=C.exports,p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dream"},[t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("a",{staticClass:"video-btn",attrs:{target:"_blank",href:n.videoUrl}})])})),e("div",{staticClass:"title"}),e("div",{staticClass:"text-bg"},[e("div",{staticClass:"text"},[e("ul",t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("volumeContent",{attrs:{sendName:t.subContent}})],1)})),0)])]),e("ul",{staticClass:"btns"},[e("li",{staticClass:"btn1",class:0===t.Index?"active":"",attrs:{tabindex:"0"},on:{click:function(e){return t.show(0)}}}),e("li",{staticClass:"btn2",class:1===t.Index?"active":"",attrs:{tabindex:"1"},on:{click:function(e){return t.show(1)}}}),e("li",{staticClass:"btn3",class:2===t.Index?"active":"",attrs:{tabindex:"2"},on:{click:function(e){return t.show(2)}}}),e("li",{staticClass:"btn4",class:3===t.Index?"active":"",attrs:{tabindex:"3"},on:{click:function(e){return t.show(3)}}})])],2)},f=[],w={components:{volumeContent:x},data(){return{Index:0,contentDataList:[]}},mounted(){this.getPara()},methods:{show(t){this.Index===t?this.isShow=!this.isShow:this.isShow=!0,this.Index=t,console.log(this.Index),this.getPara()},getPara(){(0,v.x1)({cardindex:1,sessionIndex:this.Index}).then((t=>{this.subContent=[],this.contentDataList=[];for(let n in t.subContent){let e=t.subContent[n]["type"]?"content":"title",s={type:t.subContent[n]["type"],content:t.subContent[n][e]};this.subContent.push(s)}let e={sessionIndex:this.Index,videoUrl:t.videoUrl};this.contentDataList.push(e)}))}}},g=w,k=(0,u.Z)(g,p,f,!1,null,"7b8b2596",null),_=k.exports,y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"garden"},[t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("a",{staticClass:"video-btn",attrs:{target:"_blank",href:n.videoUrl}})])})),e("div",{staticClass:"title"}),e("div",{staticClass:"change",on:{mouseenter:function(e){return t.changeImg(!0)},mouseleave:function(e){return t.changeImg(!1)}}},[e("div",{class:t.isUp?"border":"border-cover"},[e("img",{staticClass:"itemImg",attrs:{src:t.card1}})]),e("div",{class:t.isUp?"border-cover":"border"},[e("img",{staticClass:"itemImg",attrs:{src:t.card2}})])]),e("div",{staticClass:"text-bg"},[e("div",{staticClass:"text"},[e("ul",t._l(t.contentDataList,(function(n,s){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.Index===n.sessionIndex,expression:"Index===item.sessionIndex"}],key:"content"+s},[e("volumeContent",{attrs:{sendName:t.subContent}})],1)})),0)])]),e("ul",{staticClass:"btns"},[e("li",{staticClass:"btn1",class:0===t.Index?"active":"",attrs:{tabindex:"0"},on:{click:function(e){return t.show(0)}}}),e("li",{staticClass:"btn2",class:1===t.Index?"active":"",attrs:{tabindex:"1"},on:{click:function(e){return t.show(1)}}}),e("li",{staticClass:"btn3",class:2===t.Index?"active":"",attrs:{tabindex:"2"},on:{click:function(e){return t.show(2)}}}),e("li",{staticClass:"btn4",class:3===t.Index?"active":"",attrs:{tabindex:"3"},on:{click:function(e){return t.show(3)}}})])],2)},L=[],D={components:{volumeContent:x},data(){return{card1:n(3241),card2:n(8494),temp:1,Index:0,isUp:!0,contentDataList:[],subContent:[]}},mounted(){this.getPara()},methods:{show(t){this.Index===t?this.isShow=!this.isShow:this.isShow=!0,this.Index=t,console.log(this.Index),this.getPara()},change(){0===this.temp?this.temp=1:this.temp=0,this.getPara()},changeImg(t){this.isUp=t,this.getPara()},getPara(){(0,v.x1)({cardindex:2,sessionIndex:this.Index}).then((t=>{this.subContent=[],this.contentDataList=[];for(let n in t.subContent){let e=t.subContent[n]["type"]?"content":"title",s={type:t.subContent[n]["type"],content:t.subContent[n][e]};this.subContent.push(s)}let e={sessionIndex:this.Index,videoUrl:t.videoUrl};this.contentDataList.push(e)}))}}},U=D,N=(0,u.Z)(U,y,L,!1,null,"133b9419",null),P=N.exports,S={components:{volumeDream:b,volumeControl:_,volumeGarden:P},data(){return{Index:0,ChapList:[{chap:"dream",sessionIndex:0},{chap:"control",sessionIndex:1},{chap:"garden",sessionIndex:2}]}},methods:{change(){this.Index>=2?this.Index=0:this.Index++,console.log(this.Index)}}},Z=S,z=(0,u.Z)(Z,s,i,!1,null,"790e8e66",null),G=z.exports},5084:function(t,e,n){n.d(e,{mb:function(){return d},bk:function(){return c},Nm:function(){return v},od:function(){return m},gt:function(){return x},ae:function(){return u},_C:function(){return o},Kg:function(){return h},x1:function(){return l},zc:function(){return r}});var s=n(6154);function i(t,e){return new Promise(((n,i)=>{s.Z.get(t,{params:e}).then((t=>{n(t.data)})).catch((t=>{i(t.data)}))}))}s.Z.defaults.baseURL="",s.Z.defaults.timeout=2e4,s.Z.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8;multipart/form-data";const a="http://47.243.195.59:8080/",o=t=>i(a+"truthordare",t),c=t=>i(a+"dayandnight",t),r=t=>i(a+"moments",t),l=t=>i(a+"volumePage",t),d=t=>i(a+"chat",t),u=t=>i(a+"rewinds",t),h=t=>i(a+"tracks",t),x=t=>i(a+"profiledetail",t),v=t=>i(a+"charlie_details",t),m=t=>i(a+"guzi",t)},3241:function(t,e,n){t.exports=n.p+"img/card1.bbd3edc1.png"},8494:function(t,e,n){t.exports=n.p+"img/card2.f7e398bf.png"}}]);