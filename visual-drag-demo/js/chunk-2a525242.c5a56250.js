(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a525242"],{2213:function(e,t,n){},"2c7d":function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return T}));var o,a,i=n("5530"),c=n("ade3"),r=n("4360"),s=n("986e"),d=17,l=86,u=67,m=88,p=89,f=90,h=71,b=66,y=76,v=85,k=83,w=80,C=68,j=46,O=69,g=[66,67,68,69,71,76,80,83,85,86,88,89,90],x=(o={},Object(c["a"])(o,l,S),Object(c["a"])(o,p,H),Object(c["a"])(o,f,K),Object(c["a"])(o,k,P),Object(c["a"])(o,w,_),Object(c["a"])(o,O,B),o),E=Object(i["a"])(Object(i["a"])({},x),{},Object(c["a"])({},v,J)),L=Object(i["a"])(Object(i["a"])({},x),{},(a={},Object(c["a"])(a,u,D),Object(c["a"])(a,m,$),Object(c["a"])(a,h,V),Object(c["a"])(a,b,A),Object(c["a"])(a,C,R),Object(c["a"])(a,j,R),Object(c["a"])(a,y,I),a)),M=!1;function T(){window.onkeydown=function(e){var t=r["a"].state.curComponent;e.keyCode==d?M=!0:e.keyCode==j&&t?(r["a"].commit("deleteComponent"),r["a"].commit("recordSnapshot")):M&&(t&&t.isLock?t&&t.isLock&&(e.preventDefault(),E[e.keyCode]&&E[e.keyCode]()):(e.preventDefault(),L[e.keyCode]&&L[e.keyCode]()))},window.onkeyup=function(e){e.keyCode==d&&(M=!1)}}function D(){r["a"].commit("copy")}function S(){r["a"].commit("paste"),r["a"].commit("recordSnapshot")}function $(){r["a"].commit("cut")}function H(){r["a"].commit("redo")}function K(){r["a"].commit("undo")}function V(){r["a"].state.areaData.components.length&&(r["a"].commit("compose"),r["a"].commit("recordSnapshot"))}function A(){var e=r["a"].state.curComponent;e&&!e.isLock&&"Group"==e.component&&(r["a"].commit("decompose"),r["a"].commit("recordSnapshot"))}function P(){s["a"].$emit("save")}function _(){s["a"].$emit("preview")}function R(){r["a"].state.curComponent&&(r["a"].commit("deleteComponent"),r["a"].commit("recordSnapshot"))}function B(){s["a"].$emit("clearCanvas")}function I(){r["a"].commit("lock")}function J(){r["a"].commit("unlock")}},a80f:function(e,t,n){"use strict";n("2213")},d02c:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return"edit"==e.editMode?n("div",{staticClass:"v-text",on:{keydown:e.handleKeydown,keyup:e.handleKeyup}},[n("div",{ref:"text",class:{canEdit:e.canEdit},style:{verticalAlign:e.element.style.verticalAlign},attrs:{contenteditable:e.canEdit,tabindex:e.element.id},domProps:{innerHTML:e._s(e.element.propValue)},on:{dblclick:e.setEdit,paste:e.clearStyle,mousedown:e.handleMousedown,blur:e.handleBlur,input:e.handleInput}})]):n("div",{staticClass:"v-text preview"},[n("div",{style:{verticalAlign:e.element.style.verticalAlign},domProps:{innerHTML:e._s(e.element.propValue)}})])},a=[],i=n("5530"),c=(n("caad"),n("2532"),n("2f62")),r=n("2c7d"),s={props:{propValue:{type:String,require:!0},element:{type:Object}},data:function(){return{canEdit:!1,ctrlKey:17,isCtrlDown:!1}},computed:Object(i["a"])({},Object(c["b"])(["editMode"])),methods:{handleInput:function(e){this.$emit("input",this.element,e.target.innerHTML)},handleKeydown:function(e){e.keyCode==this.ctrlKey?this.isCtrlDown=!0:(this.isCtrlDown&&this.canEdit&&r["a"].includes(e.keyCode)||46==e.keyCode)&&e.stopPropagation()},handleKeyup:function(e){e.keyCode==this.ctrlKey&&(this.isCtrlDown=!1)},handleMousedown:function(e){this.canEdit&&e.stopPropagation()},clearStyle:function(e){e.preventDefault();var t=e.clipboardData,n=t.getData("text/plain")||"";""!==n&&document.execCommand("insertText",!1,n),this.$emit("input",this.element,e.target.innerHTML)},handleBlur:function(e){var t=this;this.element.propValue=e.target.innerHTML||"&nbsp;";var n=e.target.innerHTML;""!==n?this.element.propValue=e.target.innerHTML:(this.element.propValue="",this.$nextTick((function(){t.element.propValue="&nbsp;"}))),this.canEdit=!1},setEdit:function(){this.element.isLock||(this.canEdit=!0,this.selectText(this.$refs.text))},selectText:function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e),t.removeAllRanges(),t.addRange(n)}}},d=s,l=(n("a80f"),n("2877")),u=Object(l["a"])(d,o,a,!1,null,"fc007228",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2a525242.c5a56250.js.map