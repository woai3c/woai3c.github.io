(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{360:function(t,e,n){var i=n(0),o=n(3),d=n(68),a=[].slice,c=function(t){return function(e,n){var i=arguments.length>2,o=i?a.call(arguments,2):void 0;return t(i?function(){("function"==typeof e?e:Function(e)).apply(this,o)}:e,n)}};i({global:!0,bind:!0,forced:/MSIE .\./.test(d)},{setTimeout:c(o.setTimeout),setInterval:c(o.setInterval)})},366:function(t,e,n){"use strict";n.r(e);n(360);var i={mounted:function(){if(!document.querySelector("#ad-script")){var t=document.createElement("script");t.id="ad-script",t.async=!0,t.src="https://cdn.wwads.cn/js/makemoney.js",document.head.appendChild(t);var e=document.createElement("style");e.type="text/css",e.id="ad-style",e.textContent="\n                #ad-div {\n                    z-index: 1000;\n                    max-width: 154px !important;\n                    position: fixed;\n                    right: 10px;\n                    bottom: 10px;\n                    text-align: center\n                }\n            ",document.head.appendChild(e);var n,i=document.querySelector("#ad-div");window.onresize=function(){clearTimeout(n),n=setTimeout((function(){window.innerWidth>=1470?(i.style.display="block",console.log("show")):(i.style.display="none",console.log("hidden"))}),500)}}}},o=n(42),d=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"wwads-cn wwads-vertical wwads-sticky",staticStyle:{"max-width":"154px"},attrs:{id:"ad-div","data-id":"204"}})}),[],!1,null,null,null);e.default=d.exports}}]);