(function(t){function e(e){for(var o,a,u=e[0],i=e[1],p=e[2],d=0,s=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(s.length)s.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],o=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},a={app:0},c={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-011a7c09":"2c115dc0","chunk-0c485b24":"4404a2b9","chunk-15d26c4c":"a26cfd13","chunk-1e50b31d":"5ca8f557","chunk-2be3167a":"95b975aa"}[t]+".js"}function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-011a7c09":1,"chunk-0c485b24":1,"chunk-15d26c4c":1,"chunk-1e50b31d":1,"chunk-2be3167a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var o="css/"+({}[t]||t)+"."+{"chunk-011a7c09":"cca9da3e","chunk-0c485b24":"611da4c1","chunk-15d26c4c":"c90f501e","chunk-1e50b31d":"2e24fd28","chunk-2be3167a":"6030091a"}[t]+".css",c=i.p+o,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var p=r[u],d=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(d===o||d===c))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){p=s[u],d=p.getAttribute("data-href");if(d===o||d===c)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var o=e&&e.target&&e.target.src||c,r=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete a[t],l.parentNode.removeChild(l),n(r)},l.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(l)})).then((function(){a[t]=0})));var o=c[t];if(0!==o)if(o)e.push(o[2]);else{var r=new Promise((function(e,n){o=c[t]=[e,n]}));e.push(o[2]=r);var p,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var s=new Error;p=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=c[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}c[t]=void 0}};var l=setTimeout((function(){p({type:"timeout",target:d})}),12e4);d.onerror=d.onload=p,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/visual-drag-demo/",i.oe=function(t){throw console.error(t),t};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],d=p.push.bind(p);p.push=e,p=p.slice();for(var s=0;s<p.length;s++)e(p[s]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0d53":function(t,e,n){var o={"./":["9210"],"./Group":["736d","chunk-011a7c09"],"./Group.vue":["736d","chunk-011a7c09"],"./Picture":["ac55","chunk-15d26c4c"],"./Picture.vue":["ac55","chunk-15d26c4c"],"./VButton":["dcb2","chunk-0c485b24"],"./VButton.vue":["dcb2","chunk-0c485b24"],"./VText":["d02c","chunk-2be3167a"],"./VText.vue":["d02c","chunk-2be3167a"],"./component-list":["4e67"],"./component-list.js":["4e67"],"./index":["9210"],"./index.js":["9210"]};function a(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],a=e[0];return Promise.all(e.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(o)},a.id="0d53",t.exports=a},"4e67":function(t,e,n){"use strict";n.r(e),n.d(e,"commonStyle",(function(){return a})),n.d(e,"commonAttr",(function(){return c}));for(var o=n("5530"),a={rotate:0,opacity:1},c={animations:[],events:{},groupStyle:{}},r=[{component:"v-text",label:"文字",propValue:"文字",icon:"el-icon-edit",style:{width:200,height:33,fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:""}},{component:"v-button",label:"按钮",propValue:"按钮",icon:"el-icon-thumb",style:{width:100,height:34,borderWidth:"",borderColor:"",borderRadius:"",fontSize:14,fontWeight:500,lineHeight:"",letterSpacing:0,textAlign:"",color:"",backgroundColor:""}},{component:"Picture",label:"图片",icon:"el-icon-picture",propValue:n("b2e4"),style:{width:300,height:200,borderRadius:""}}],u=0,i=r.length;u<i;u++){var p=r[u];p.style=Object(o["a"])(Object(o["a"])({},a),p.style),r[u]=Object(o["a"])(Object(o["a"])({},c),p)}e["default"]=r},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=n("5c96"),c=n.n(a),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},u=[],i=(n("034f"),n("2877")),p={},d=Object(i["a"])(p,r,u,!1,null,null,null),s=d.exports,l=(n("4160"),n("fb6a"),n("a434"),n("159b"),n("2909")),f=n("5530"),h=n("2f62"),m=n("fa7d"),b=n("eae4"),v=n("ac24"),y=n("4e67"),g=n("986e"),C=n("a7f7");o["default"].use(h["a"]);var x=new h["a"].Store({state:{editMode:"edit",canvasStyleData:{width:1200,height:740},componentData:[],curComponent:null,curComponentIndex:null,snapshotData:[],snapshotIndex:-1,menuTop:0,menuLeft:0,menuShow:!1,copyData:null,areaData:{style:{top:0,left:0,width:0,height:0},components:[]},editor:null},mutations:{getEditor:function(t){t.editor=Object(m["a"])("#editor")},setAreaData:function(t,e){t.areaData=e},compose:function(t){var e=t.componentData,n=t.areaData,o=t.editor,a=[];n.components.forEach((function(t){if("Group"!=t.component)a.push(t);else{var e=Object(f["a"])({},t.style),n=t.propValue,c=o.getBoundingClientRect();x.commit("deleteComponent"),n.forEach((function(t){Object(C["a"])(t,c,e),x.commit("addComponent",{component:t})})),a.push.apply(a,Object(l["a"])(t.propValue)),x.commit("batchDeleteComponent",t.propValue)}})),x.commit("addComponent",{component:Object(f["a"])(Object(f["a"])({id:Object(v["a"])(),component:"Group"},y["commonAttr"]),{},{style:Object(f["a"])(Object(f["a"])({},y["commonStyle"]),n.style),propValue:a})}),g["a"].$emit("hideArea"),x.commit("batchDeleteComponent",n.components),x.commit("setCurComponent",{component:e[e.length-1],index:e.length-1}),n.components=[]},batchDeleteComponent:function(t,e){var n=t.componentData;e.forEach((function(t){for(var e=0,o=n.length;e<o;e++)if(t.id==n[e].id){n.splice(e,1);break}}))},decompose:function(t){var e=t.curComponent,n=t.editor,o=Object(f["a"])({},e.style),a=e.propValue,c=n.getBoundingClientRect();x.commit("deleteComponent"),a.forEach((function(t){Object(C["a"])(t,c,o),x.commit("addComponent",{component:t})}))},copy:function(t){t.copyData={data:Object(m["b"])(t.curComponent),index:t.curComponentIndex}},paste:function(t,e){if(t.copyData){var n=t.copyData.data;e?(n.style.top=t.menuTop,n.style.left=t.menuLeft):(n.style.top+=10,n.style.left+=10),n.id=Object(v["a"])(),x.commit("addComponent",{component:n}),x.commit("recordSnapshot"),t.copyData=null}else Object(b["a"])("请选择组件")},cut:function(t){t.curComponent?(t.copyData&&(x.commit("addComponent",{component:t.copyData.data,index:t.copyData.index}),t.curComponentIndex>=t.copyData.index&&t.curComponentIndex++),x.commit("copy"),x.commit("deleteComponent")):Object(b["a"])("请选择组件")},setEditMode:function(t,e){t.editMode=e},setCanvasStyle:function(t,e){t.canvasStyleData=e},addComponent:function(t,e){var n=e.component,o=e.index;void 0!==o?t.componentData.splice(o,0,n):t.componentData.push(n)},setCurComponent:function(t,e){var n=e.component,o=e.index;t.curComponent=n,t.curComponentIndex=o},setShapeStyle:function(t,e){var n=t.curComponent,o=e.top,a=e.left,c=e.width,r=e.height,u=e.rotate;o&&(n.style.top=o),a&&(n.style.left=a),c&&(n.style.width=c),r&&(n.style.height=r),u&&(n.style.rotate=u)},setShapePosStyle:function(t,e){var n=t.curComponent,o=e.key,a=e.value;n.style[o]=a},undo:function(t){t.snapshotIndex>=0&&(t.snapshotIndex--,x.commit("setComponentData",Object(m["b"])(t.snapshotData[t.snapshotIndex])))},redo:function(t){t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotIndex++,x.commit("setComponentData",Object(m["b"])(t.snapshotData[t.snapshotIndex])))},setComponentData:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];o["default"].set(t,"componentData",e)},recordSnapshot:function(t){t.snapshotData[++t.snapshotIndex]=Object(m["b"])(t.componentData),t.snapshotIndex<t.snapshotData.length-1&&(t.snapshotData=t.snapshotData.slice(0,t.snapshotIndex+1))},showContexeMenu:function(t,e){var n=e.top,o=e.left;t.menuShow=!0,t.menuTop=n,t.menuLeft=o},hideContexeMenu:function(t){t.menuShow=!1},deleteComponent:function(t,e){void 0===e&&(e=t.curComponentIndex),t.componentData.splice(e,1)},upComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n<e.length-1?Object(m["c"])(e,n,n+1):Object(b["a"])("已经到顶了")},downComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n>0?Object(m["c"])(e,n,n-1):Object(b["a"])("已经到底了")},topComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n<e.length-1?Object(m["c"])(e,n,e.length-1):Object(b["a"])("已经到顶了")},bottomComponent:function(t){var e=t.componentData,n=t.curComponentIndex;n>0?Object(m["c"])(e,n,0):Object(b["a"])("已经到底了")},addAnimation:function(t,e){var n=t.curComponent;n.animations.push(e)},removeAnimation:function(t,e){var n=t.curComponent;n.animations.splice(e,1)},addEvent:function(t,e){var n=t.curComponent,o=e.event,a=e.param;n.events[o]=a},removeEvent:function(t,e){var n=t.curComponent;delete n.events[e]}}}),j=x,O=(n("d3b7"),n("8c4f"));o["default"].use(O["a"]);var D=[{path:"/",name:"Home",component:function(){return n.e("chunk-1e50b31d").then(n.bind(null,"bb51"))}}],w=new O["a"]({routes:D});n("9210"),n("ab97"),n("0fae"),n("5a8b");o["default"].use(c.a,{size:"small"}),o["default"].config.productionTip=!1,new o["default"]({el:"#app",router:w,store:j,render:function(t){return t(s)}})},"5a8b":function(t,e,n){},"85ec":function(t,e,n){},9210:function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7");var o=n("2b0e"),a=["Picture","VText","VButton","Group"];a.forEach((function(t){o["default"].component(t,(function(){return n("0d53")("./".concat(t))}))}))},"986e":function(t,e,n){"use strict";var o=n("2b0e");e["a"]=new o["default"]},a2ba:function(t,e,n){"use strict";function o(t){return t*Math.PI/180}function a(t,e,n){return{x:(t.x-e.x)*Math.cos(o(n))-(t.y-e.y)*Math.sin(o(n))+e.x,y:(t.x-e.x)*Math.sin(o(n))+(t.y-e.y)*Math.cos(o(n))+e.y}}function c(t,e){return{x:t.x+(e.x-t.x)/2,y:t.y+(e.y-t.y)/2}}function r(t){return Math.abs(Math.sin(o(t)))}function u(t){return Math.abs(Math.cos(o(t)))}n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return u}))},a7f7:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return i}));n("4160"),n("caad"),n("b64b"),n("2532"),n("159b");var o=n("5530"),a=n("a2ba"),c=n("fa7d");function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=["fontSize","width","height","top","left","borderWidth","letterSpacing","borderRadius"],o={};return Object.keys(t).forEach((function(a){e.includes(a)||("rotate"!=a?(o[a]=t[a],n.includes(a)&&(o[a]+="px")):o.transform=a+"("+t[a]+"deg)")})),o}function u(t){if(t=Object(o["a"])({},t),0!=t.rotate){var e=t.width*Object(a["b"])(t.rotate)+t.height*Object(a["d"])(t.rotate),n=(t.width-e)/2;t.left+=n,t.right=t.left+e;var c=t.height*Object(a["b"])(t.rotate)+t.width*Object(a["d"])(t.rotate),r=(c-t.height)/2;t.top-=r,t.bottom=t.top+c,t.width=e,t.height=c}else t.bottom=t.top+t.height,t.right=t.left+t.width;return t}function i(t,e,n){var o=Object(c["a"])("#component".concat(t.id)).getBoundingClientRect(),a={x:o.left-e.left+o.width/2,y:o.top-e.top+o.height/2};t.style.left=a.x-t.style.width/2,t.style.top=a.y-t.style.height/2,t.style.rotate=(t.style.rotate+n.rotate+360)%360,t.groupStyle={}}},ab97:function(t,e,n){},ac24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=0;function a(){return o++}},b2e4:function(t,e,n){t.exports=n.p+"img/title.ac55a42f.jpg"},eae4:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("5c96");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"error",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1500;Object(o["Message"])({message:t,type:e,duration:n})}},fa7d:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return r}));var o=n("53ca");function a(t){if("object"==Object(o["a"])(t)){var e=Array.isArray(t)?[]:{};for(var n in t)"object"==Object(o["a"])(t[n])?e[n]=a(t[n]):e[n]=t[n];return e}return t}function c(t,e,n){var o=t[e];t[e]=t[n],t[n]=o}function r(t){return document.querySelector(t)}}});
//# sourceMappingURL=app.4ce903ab.js.map