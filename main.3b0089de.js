parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector(".spider"),t=document.querySelector(".wall"),l=t.offsetTop+t.clientTop,c=t.offsetLeft+t.clientLeft,i=parseFloat(getComputedStyle(e).width)/2,a=parseFloat(getComputedStyle(e).height)/2;document.addEventListener("click",function(r){var s=r.clientX,o=r.clientY;if(r.target!==document.querySelector(".wall"))return!1;switch(!0){case s<c+i:e.style.left="0px";break;case s>c+t.clientWidth-i:e.style.left=t.clientWidth-2*i+"px";break;default:e.style.left=s-c-i+"px"}switch(!0){case o<l+i:e.style.top="0px";break;case o>l+t.clientHeight-i:e.style.top=t.clientHeight-2*i+"px";break;default:e.style.top=o-l-a+"px"}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.3b0089de.js.map