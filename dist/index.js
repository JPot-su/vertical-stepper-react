!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("react"));else if("function"==typeof define&&define.amd)define(["react"],n);else{var t="object"==typeof exports?n(require("react")):n(e.react);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(self,(function(e){return function(){"use strict";var n={482:function(e,n,t){var r=t(81),o=t.n(r),c=t(645),i=t.n(c)()(o());i.push([e.id,".EXMeocoPbyOBJrzxbg5f {\r\n    margin-left: 14px;\r\n    padding-left: 20px;\r\n    border-left: 2px solid #bdbdbd;\r\n    overflow: auto;\r\n}\r\n\r\n.UZnDVEBeD1d50oHNqihM {\r\n    margin-left: 14px;\r\n    padding-left: 20px;\r\n    border-left: 2px solid #7bfc7b;\r\n    overflow: auto;\r\n}\r\n\r\n.DzKg7r9gftxXQ4cbuOTA {\r\n    margin-left: 14px;\r\n    padding-left: 20px;\r\n    border-left: 2px solid #fa6b6b;\r\n    overflow: auto;\r\n}\r\n\r\n.LMTe16vMfoHGRH7HGT1Y {\r\n    height: 2rem;\r\n}\r\n\r\n.gq_k9i6qBuBpUlxNuelq {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.d4nEBLnN8U4pSk0G6HNR {\r\n    margin: 1rem;\r\n}\r\n\r\n.OHLS9pT6XRbEmIu9gf7a {\r\n    margin: 1rem;\r\n}",""]),i.locals={left_side_line:"EXMeocoPbyOBJrzxbg5f",left_side_line_success:"UZnDVEBeD1d50oHNqihM",left_side_line_error:"DzKg7r9gftxXQ4cbuOTA",spacer:"LMTe16vMfoHGRH7HGT1Y",label:"gq_k9i6qBuBpUlxNuelq",label_title:"d4nEBLnN8U4pSk0G6HNR",label_icon:"OHLS9pT6XRbEmIu9gf7a"},n.Z=i},645:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==c&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=c),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},i=[],a=0;a<e.length;a++){var s=e[a],u=r.base?s[0]+r.base:s[0],l=c[u]||0,f="".concat(u," ").concat(l);c[u]=l+1;var d=t(f),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(p);else{var m=o(p,r);r.byIndex=a,n.splice(a,0,{identifier:f,updater:m,references:1})}i.push(f)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var a=t(c[i]);n[a].references--}for(var s=r(e,o),u=0;u<c.length;u++){var l=t(c[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}c=s}}},569:function(e){var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},156:function(n){n.exports=e}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var c=t[e]={id:e,exports:{}};return n[e](c,c.exports,r),c.exports}r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,{a:n}),n},r.d=function(e,n){for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var o={};return function(){r.r(o),r.d(o,{default:function(){return M}});var e=r(156),n=r.n(e),t=r(379),c=r.n(t),i=r(795),a=r.n(i),s=r(569),u=r.n(s),l=r(565),f=r.n(l),d=r(216),p=r.n(d),m=r(589),v=r.n(m),g=r(482),b={};b.styleTagTransform=v(),b.setAttributes=f(),b.insert=u().bind(null,"head"),b.domAPI=a(),b.insertStyleElement=p(),c()(g.Z,b);var y=g.Z&&g.Z.locals?g.Z.locals:void 0;function h({isError:e,isSuccess:t,children:r}){return n().createElement(n().Fragment,null,n().createElement("div",{className:e?y.left_side_line_error:t?y.left_side_line_success:y.left_side_line},r))}function E({icon:e,title:t}){return n().createElement(n().Fragment,null,n().createElement("div",{className:y.label},n().createElement("span",{className:y.label_icon},e),n().createElement("span",{className:y.label_title},t)))}function x({isError:e,isSuccess:t}){return n().createElement(n().Fragment,null,n().createElement("div",{className:`${e?y.left_side_line_error:t?y.left_side_line_success:y.left_side_line} ${y.spacer}`}))}function _({step:t,_parentOptions:r}){const o=(0,e.useRef)(),c=Boolean(t.error),{successOnScrollEnable:i,isLastOne:a}=r,s=function(n,t){const[r,o]=(0,e.useState)(!1),[c,i]=(0,e.useState)(!1),[a,s]=(0,e.useState)(!1),u=(0,e.useCallback)((function(e){return{rect:e.getBoundingClientRect(),windowHeight:window.innerHeight||document.documentElement.clientHeight}}),[]),l=(0,e.useCallback)((function(){if(r)return;if(c&&a)return void o(!0);const e=n.current,{rect:t,windowHeight:l}=u(e);t.height<l?t.top>=0&&t.bottom<=l&&(i(!0),s(!0)):(e&&!c&&t.top<=0&&i(!0),e&&!a&&t.bottom<=l&&s(!0))}),[c,a,r]);return(0,e.useEffect)((()=>{if(console.log(t,!r),t&&!r)return l(),window.addEventListener("scroll",l),()=>window.removeEventListener("scroll",l)}),[n,r,l,t]),r}(o,i),[u,l]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{u!=Boolean(t.success)&&l(t.success)}),[t.success]),(0,e.useEffect)((()=>{l(s),console.log("isscrolled")}),[s]),(0,e.useEffect)((()=>{u&&"function"==typeof t.onSuccess&&t.onSuccess()}),[u]),n().createElement(n().Fragment,null,n().createElement("div",{ref:o},n().createElement(E,{icon:c?t.errorIcon:u?t.successIcon:t.icon,title:t.title}),n().createElement(h,{isError:c,isSuccess:u},t.content),a?null:n().createElement(x,{isError:c,isSuccess:u})))}var S={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let w;const O=new Uint8Array(16);function T(){if(!w&&(w="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!w))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return w(O)}const U=[];for(let e=0;e<256;++e)U.push((e+256).toString(16).slice(1));var H=function(e,n,t){if(S.randomUUID&&!n&&!e)return S.randomUUID();const r=(e=e||{}).random||(e.rng||T)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=r[e];return n}return function(e,n=0){return(U[e[n+0]]+U[e[n+1]]+U[e[n+2]]+U[e[n+3]]+"-"+U[e[n+4]]+U[e[n+5]]+"-"+U[e[n+6]]+U[e[n+7]]+"-"+U[e[n+8]]+U[e[n+9]]+"-"+U[e[n+10]]+U[e[n+11]]+U[e[n+12]]+U[e[n+13]]+U[e[n+14]]+U[e[n+15]]).toLowerCase()}(r)},M=function({steps:e,successOnScrollEnable:t=!0}){return n().createElement(n().Fragment,null,n().createElement("div",null,Array.isArray(e)&&e.map(((r,o)=>n().createElement(_,{key:H(),step:r,_parentOptions:{isLastOne:o===e.length-1,successOnScrollEnable:Boolean(t)}})))))}}(),o}()}));