(function(t){function e(e){for(var o,c,u=e[0],i=e[1],s=e[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function c(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1b614897"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"50fd":function(t,e,n){},5460:function(t,e,n){"use strict";n("dc65")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("span",{staticClass:"title"},[t._v("XAROCA.trade")]),n("router-link",{attrs:{to:"/"}},[t._v("All")]),t._v(" | "),n("router-link",{attrs:{to:"/"}},[t._v("Crypto")])],1),n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),u={},i=Object(c["a"])(u,r,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.stocks,(function(t){return n("div",{key:t.id,staticClass:"stock"},[n("Stock",{attrs:{stock:t}})],1)})),0)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stock-content",on:{click:function(e){return t.link(t.stock.url)}}},[n("div",{staticClass:"market-code"},[t._v(" "+t._s(t.stock.code)+" ")]),n("div",{staticClass:"market-name"},[t._v(" "+t._s(t.stock.name)+" ")]),n("div",{staticClass:"value"},[t._v(t._s(t.stock.value))])])},m=[],v={name:"Stock",props:{stock:Object},methods:{link:function(t){window.location=t}}},h=v,b=(n("5460"),Object(c["a"])(h,p,m,!1,null,"5385d2ab",null)),y=b.exports,k={name:"Home",components:{Stock:y},data:function(){return{stocks:[{id:1,code:"👆GSPC ",name:"S&P 500",value:1234567.5,url:"https://finance.yahoo.com/quote/AAPL"},{id:2,code:"🔥DJI",name:"Dow Jones Industrial Average",value:1234567.5,url:"https://finance.yahoo.com/quote/GSPC"},{id:3,code:"IXIC",name:"NASDAQ Composite",value:1234567.5,url:"https://finance.yahoo.com/quote/IXIC"},{id:4,code:"RUT",name:"Russell 2000",value:1234567.5,url:"https://finance.yahoo.com/quote/RUT"},{id:5,code:"BTC-USD",name:"Bitcoin USD",value:1234567.5,url:"https://finance.yahoo.com/quote/BTC-USD"},{id:6,code:"AMZN",name:"Amazon.com, Inc.",value:1234567.5,url:"https://finance.yahoo.com/quote/AMZN"},{id:7,code:"FB",name:"Facebook, Inc.",value:1234567.5,url:"https://finance.yahoo.com/quote/FB"},{id:8,code:"GOOG",name:"Alphabet Inc.",value:1234567.5,url:"https://finance.yahoo.com/quote/GOOG"},{id:9,code:"TSLA",name:"Tesla, Inc.",value:1234567.5,url:"https://finance.yahoo.com/quote/TSLA"},{id:10,code:"NFLX",name:"Netflix, Inc.",value:1234567.5,url:"https://finance.yahoo.com/quote/NFLX"}]}}},_=k,w=(n("774f"),Object(c["a"])(_,f,d,!1,null,"5ad69579",null)),O=w.exports;o["a"].use(l["a"]);var g=[{path:"/",name:"Home",component:O},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],C=new l["a"]({routes:g}),S=C,A=n("2f62");o["a"].use(A["a"]);var j=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:S,store:j,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"774f":function(t,e,n){"use strict";n("50fd")},"9c0c":function(t,e,n){},dc65:function(t,e,n){}});
//# sourceMappingURL=app.0a23506d.js.map