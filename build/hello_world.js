!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("hello_world",[],n):"object"==typeof exports?exports.hello_world=n():e.hello_world=n()}(window,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=3)}([,,,function(e,n,t){e.exports=t(4)},function(e,n,t){"use strict";t.r(n);var o={options:{},create:function(e){e.innerHTML="\n      <style>\n      .hello_world_viz {\n          /* Vertical centering */\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          text-align: center;\n      }\n      </style>\n    ",e.appendChild(document.createElement("div")).className="hello_world_viz",this.container.innerHTML="Hello World"},updateAsync:function(e,n,t,o,r,i){this.clearErrors(),i()}};looker.plugins.visualizations.add(o)}])}));
//# sourceMappingURL=hello_world.js.map