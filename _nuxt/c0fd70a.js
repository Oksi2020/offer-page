(window.webpackJsonp=window.webpackJsonp||[]).push([[9,7,8,11],{329:function(t,e,n){"use strict";n.r(e);var r=n(330),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},330:function(t,e){},331:function(t,e,n){var content=n(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("7081dbce",content,!0,{sourceMap:!1})},333:function(t,e){t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c}));var r=function(t){return null!=t},o=function(t,e){try{var n=t.getItem(e);if(r(n)){var o=JSON.parse(n);if(r(o)){var u=(new Date).getTime(),i=o.created,c=6e4;o.unit&&"s"===o.unit?c=1e3:o.unit&&"m"===o.unit?c=6e4:o.unit&&"h"===o.unit?c=36e5:o.unit&&"d"===o.unit&&(c=864e5);var a=parseInt(o.expiry,10)*c;if(parseInt(i,10)+a>u)return o.value;console.warn("storage is expired")}}}catch(t){console.warn("failed parse JSON")}return null},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"m";try{var u=t,i={created:(new Date).getTime(),value:n,expiry:r,unit:o};return u.setItem(e,JSON.stringify(i)),i}catch(t){}return null},i=function(t,e){try{t.removeItem(e)}catch(t){}},c=function(t){try{t.clear()}catch(t){}}},function(t,e,n){"use strict";n.r(e),n.d(e,"getData",(function(){return u})),n.d(e,"setData",(function(){return i})),n.d(e,"removeItem",(function(){return c})),n.d(e,"clear",(function(){return a}));var r=n(0);function o(){return"localStorage"in window&&window.localStorage?window.localStorage:null}var u=function(t){try{var e=o();return Object(r.b)(e,t)}catch(t){}return null},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"m";try{var i=o();return Object(r.d)(i,t,e,n,u)}catch(t){}return null},c=function(t){try{var e=o();Object(r.c)(e,t)}catch(t){}},a=function(){try{var t=o();Object(r.a)(t)}catch(t){}}},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"getData",(function(){return u})),n.d(e,"setData",(function(){return i})),n.d(e,"removeItem",(function(){return c})),n.d(e,"clear",(function(){return a}));var r=n(0);function o(){return"sessionStorage"in window&&window.sessionStorage?window.sessionStorage:null}var u=function(e){if(t.client)try{var n=o();return Object(r.b)(n,e)}catch(t){}return null},i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"m";if(t.client)try{var c=o();return Object(r.d)(c,e,n,u,i)}catch(t){}return null},c=function(t){try{var e=o();Object(r.c)(e,t)}catch(t){}},a=function(){try{var t=o();Object(r.a)(t)}catch(t){}}}.call(this,n(3))},function(t,e){var n,r,o=t.exports={};function u(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(t){n=u}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var a,l=[],f=!1,s=-1;function d(){f&&a&&(f=!1,a.length?l=a.concat(l):s=-1,l.length&&m())}function m(){if(!f){var t=c(d);f=!0;for(var e=l.length;e;){for(a=l,l=[];++s<e;)a&&a[s].run();s=-1,e=l.length}a=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function _(t,e){this.fun=t,this.array=e}function x(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new _(t,e)),1!==l.length||f||c(m)},_.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=x,o.addListener=x,o.once=x,o.off=x,o.removeListener=x,o.removeAllListeners=x,o.emit=x,o.prependListener=x,o.prependOnceListener=x,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2);e.default={localStorage:{getData:r.getData,setData:r.setData,removeItem:r.removeItem,clear:r.clear},sessionStorage:{getData:o.getData,setData:o.setData,removeItem:o.removeItem,clear:o.clear}}}])},334:function(t,e,n){var content=n(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("68695830",content,!0,{sourceMap:!1})},336:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("80b11468",content,!0,{sourceMap:!1})},337:function(t,e,n){var content=n(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("73f12b0e",content,!0,{sourceMap:!1})},338:function(t,e,n){"use strict";n(331)},339:function(t,e,n){var r=n(54),o=n(135),c=n(136),l=n(137),f=n(138),d=n(139),m=r((function(i){return i[1]})),_=o(c),x=o(l),y=o(f),h=o(d);m.push([t.i,'@font-face{font-family:"Proxima Nova";src:url('+_+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+x+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+y+') format("truetype")}@font-face{font-family:"Intro";src:url('+h+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.countdown{align-items:center;background-color:#000;border-radius:10px;display:flex;height:60px;justify-content:center;overflow:hidden;position:relative;transition:box-shadow .3s ease;width:160px}.countdown.warn{box-shadow:0 0 6px 0 rgba(255,0,0,.8)}.countdown__progress{background-color:#00ca14;border-radius:10px;display:block;height:100%;left:0;position:absolute;top:0;transition:all .3s ease;width:100%}.countdown__progress.dark{background-color:#4eaaff}.countdown__text{color:#fff;font-size:24px;font-weight:600;position:static;z-index:99}@media screen and (max-width:576px){.countdown{height:47px;width:110px}}',""]),m.locals={},t.exports=m},340:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=(n(14),n(36),n(86)),c=n(333),l=n.n(c);function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var m={data:function(){return{fullTime:0,timer:null}},computed:d(d({},Object(o.b)(["countdown","theme"])),{},{timerOutput:function(){var t=Math.floor(this.countdown/60),e=this.countdown-60*t;return"".concat(t,":").concat(e<10?"0"+e:e)},timerProgress:function(){return this.countdown/this.fullTime*100+"%"}}),created:function(){this.fullTime=this.countdown,this.startTimer();var t=l.a.localStorage.getData("countdown");(t||0===t)&&this.setCountdown(t)},methods:d(d({},Object(o.c)(["decreaseCountdown","setCountdown"])),{},{startTimer:function(){var t=this;this.timer=setInterval((function(){t.countdown>0&&(t.decreaseCountdown(),l.a.localStorage.setData("countdown",t.countdown))}),1e3)}})},_=(n(338),n(66)),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"countdown",class:{warn:t.countdown<=10}},[e("span",{staticClass:"countdown__progress",class:t.theme,style:{width:t.timerProgress}}),t._v(" "),e("span",{staticClass:"countdown__text"},[t._v(t._s(t.timerOutput))])])}),[],!1,null,null,null);e.default=component.exports},341:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("a3f4d3f8",content,!0,{sourceMap:!1})},342:function(t,e,n){"use strict";n.r(e);var r=n(359),o=n(329);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(343);var l=n(66),component=Object(l.a)(o.default,r.a,r.b,!1,null,null,null);e.default=component.exports},343:function(t,e,n){"use strict";n(334)},344:function(t,e,n){var r=n(54),o=n(135),c=n(136),l=n(137),f=n(138),d=n(139),m=r((function(i){return i[1]})),_=o(c),x=o(l),y=o(f),h=o(d);m.push([t.i,'@font-face{font-family:"Proxima Nova";src:url('+_+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+x+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+y+') format("truetype")}@font-face{font-family:"Intro";src:url('+h+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.header{width:100%}.header__container{margin:0 auto;max-width:1210px;padding:8px 20px}',""]),m.locals={},t.exports=m},347:function(t,e,n){t.exports=n.p+"img/lock.0c6a02f.svg"},348:function(t,e,n){t.exports=n.p+"img/lock-blue.1cfc803.svg"},349:function(t,e,n){"use strict";n(336)},350:function(t,e,n){var r=n(54),o=n(135),c=n(136),l=n(137),f=n(138),d=n(139),m=n(351),_=n(352),x=r((function(i){return i[1]})),y=o(c),h=o(l),M=o(f),v=o(d),j=o(m),w=o(_);x.push([t.i,'@font-face{font-family:"Proxima Nova";src:url('+y+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+h+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+M+') format("truetype")}@font-face{font-family:"Intro";src:url('+v+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.trial-content__list{display:flex;flex-direction:column;gap:16px;list-style:none}.trial-content__list__item{font-family:"Proxima Nova",sans-serif;font-size:16px}.trial-content__list__item:before{margin-right:10px;vertical-align:middle}.trial-content__list__item.dark:before{content:url('+j+")}.trial-content__list__item.light:before{content:url("+w+")}.trial-content__note{font-size:12px;margin:24px 0 0;opacity:.5;text-align:center}",""]),x.locals={},t.exports=x},351:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE1MzEgMS4zNDg5QzExLjU0NTEgMC43MjQ1NDggMTIuNDU0OSAwLjcyNDU0OCAxMi44NDY5IDEuMzQ4OUwxNS44MjgxIDYuMDk3MTNDMTUuOTY1MSA2LjMxNTM4IDE2LjE4MTEgNi40NzIzIDE2LjQzMSA2LjUzNTE3TDIxLjg2ODEgNy45MDMxN0MyMi41ODMgOC4wODMwNSAyMi44NjQyIDguOTQ4MzQgMjIuMzkxNSA5LjUxNDA5TDE4Ljc5NjkgMTMuODE2N0MxOC42MzE3IDE0LjAxNDQgMTguNTQ5MiAxNC4yNjgzIDE4LjU2NjYgMTQuNTI1NEwxOC45NDU3IDIwLjExOTFDMTguOTk1NiAyMC44NTQ2IDE4LjI1OTUgMjEuMzg5NCAxNy41NzU0IDIxLjExNDdMMTIuMzcyNiAxOS4wMjU2QzEyLjEzMzUgMTguOTI5NiAxMS44NjY1IDE4LjkyOTYgMTEuNjI3NCAxOS4wMjU2TDYuNDI0NjEgMjEuMTE0N0M1Ljc0MDQ4IDIxLjM4OTQgNS4wMDQ0MyAyMC44NTQ2IDUuMDU0MjggMjAuMTE5MUw1LjQzMzM4IDE0LjUyNTRDNS40NTA4MSAxNC4yNjgzIDUuMzY4MzEgMTQuMDE0NCA1LjIwMzA5IDEzLjgxNjdMMS42MDg0OSA5LjUxNDA5QzEuMTM1ODMgOC45NDgzNCAxLjQxNjk4IDguMDgzMDUgMi4xMzE5MSA3LjkwMzE3TDcuNTY4OTkgNi41MzUxN0M3LjgxODg5IDYuNDcyMyA4LjAzNDg4IDYuMzE1MzggOC4xNzE5IDYuMDk3MTNMMTEuMTUzMSAxLjM0ODlaIiBmaWxsPSIjNjZFREZGIi8+Cjwvc3ZnPgo="},352:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE1MzEgMS4zNDg5QzExLjU0NTEgMC43MjQ1NDggMTIuNDU0OSAwLjcyNDU0OCAxMi44NDY5IDEuMzQ4OUwxNS44MjgxIDYuMDk3MTNDMTUuOTY1MSA2LjMxNTM4IDE2LjE4MTEgNi40NzIzIDE2LjQzMSA2LjUzNTE3TDIxLjg2ODEgNy45MDMxN0MyMi41ODMgOC4wODMwNSAyMi44NjQyIDguOTQ4MzQgMjIuMzkxNSA5LjUxNDA5TDE4Ljc5NjkgMTMuODE2N0MxOC42MzE3IDE0LjAxNDQgMTguNTQ5MiAxNC4yNjgzIDE4LjU2NjYgMTQuNTI1NEwxOC45NDU3IDIwLjExOTFDMTguOTk1NiAyMC44NTQ2IDE4LjI1OTUgMjEuMzg5NCAxNy41NzU0IDIxLjExNDdMMTIuMzcyNiAxOS4wMjU2QzEyLjEzMzUgMTguOTI5NiAxMS44NjY1IDE4LjkyOTYgMTEuNjI3NCAxOS4wMjU2TDYuNDI0NjEgMjEuMTE0N0M1Ljc0MDQ4IDIxLjM4OTQgNS4wMDQ0MyAyMC44NTQ2IDUuMDU0MjggMjAuMTE5MUw1LjQzMzM4IDE0LjUyNTRDNS40NTA4MSAxNC4yNjgzIDUuMzY4MzEgMTQuMDE0NCA1LjIwMzA5IDEzLjgxNjdMMS42MDg0OSA5LjUxNDA5QzEuMTM1ODMgOC45NDgzNCAxLjQxNjk4IDguMDgzMDUgMi4xMzE5MSA3LjkwMzE3TDcuNTY4OTkgNi41MzUxN0M3LjgxODg5IDYuNDcyMyA4LjAzNDg4IDYuMzE1MzggOC4xNzE5IDYuMDk3MTNMMTEuMTUzMSAxLjM0ODlaIiBmaWxsPSIjRkY4RDI0Ii8+Cjwvc3ZnPgo="},353:function(t,e,n){"use strict";n(337)},354:function(t,e,n){var r=n(54),o=n(135),c=n(136),l=n(137),f=n(138),d=n(139),m=r((function(i){return i[1]})),_=o(c),x=o(l),y=o(f),h=o(d);m.push([t.i,'@font-face{font-family:"Proxima Nova";src:url('+_+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+x+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+y+') format("truetype")}@font-face{font-family:"Intro";src:url('+h+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.timer{align-items:center;display:flex;gap:20px;justify-content:space-between}.timer.expired{text-align:center}@media screen and (max-width:576px){.timer.expired{justify-content:center}}.timer__content__title{font-family:"Proxima Nova Bold",sans-serif;font-size:24px;font-weight:800;margin-bottom:8px}@media screen and (max-width:576px){.timer__content__title{font-size:18px}}.timer__content__subtitle{font-size:20px;font-weight:600}@media screen and (max-width:576px){.timer__content__subtitle{font-size:16px}}.timer__content__text_crossed{font-size:16px;font-weight:600;margin-bottom:0;opacity:.4;-webkit-text-decoration:line-through;text-decoration:line-through}@media screen and (max-width:576px){.timer__content__text_crossed{font-size:14px}}',""]),m.locals={},t.exports=m},357:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(86);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"TrialList",computed:l(l({},Object(o.b)(["theme"])),{},{buttonType:function(){return"light"===this.theme?"white-green":"gray-blue"}})},d=(n(349),n(66)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"trial-content"},[e("ul",{staticClass:"trial-content__list"},[e("li",{staticClass:"trial-content__list__item",class:[t.theme,{"light-blue":"dark"===t.theme}]},[t._v("\n      Exclusive access to "),e("span",{class:[{orange:"light"===t.theme},"bold"]},[t._v("350+")]),t._v(" learning programs\n    ")]),t._v(" "),e("li",{staticClass:"trial-content__list__item",class:[t.theme]},[t._v("\n      Personalized course plan\n    ")]),t._v(" "),e("li",{staticClass:"trial-content__list__item",class:[t.theme]},[t._v("\n      Comfy learning schedule made by you\n    ")]),t._v(" "),e("li",{staticClass:"trial-content__list__item",class:[t.theme,{"light-blue":"dark"===t.theme}]},[e("span",{class:[{orange:"light"===t.theme},"bold"]},[t._v("24/7")]),t._v(" tutor support in a secure chat\n    ")]),t._v(" "),e("li",{staticClass:"trial-content__list__item",class:[t.theme]},[t._v("\n      Lifetime access to materials\n    ")])]),t._v(" "),e("BaseButton",{staticClass:"full-width",attrs:{type:t.buttonType}},[e("img",{attrs:{src:n("light"===t.theme?347:348)}}),t._v("Safe & secure payment\n  ")]),t._v(" "),e("p",{staticClass:"trial-content__note"},[t._v("\n    $0.99 charged today. If you don't cancel at least 24 hours before the end of the 3-day trial period, you will\n    automatically be charged the full price of $19.99/Month . You can cancel your subscription at any time. By continuing,\n    you indicate that you've read and agree to our Terms & Conditions, Privacy Policy , Money Back , and Subscription Terms.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:n(332).default})},358:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(86);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l={name:"Timer",computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.b)(["theme","countdown"]))},f=l,d=(n(353),n(66)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"timer",class:{expired:!t.countdown}},[e("div",{staticClass:"timer__content"},[e("h3",{staticClass:"timer__content__title",class:{"light-blue":"dark"===t.theme}},[t._v("\n      3-day trial for "),e("span",{class:["bold",{orange:"light"===t.theme}]},[t._v("$0.99")])]),t._v(" "),t.countdown?[e("h4",{staticClass:"timer__content__subtitle"},[t._v("Then $9.99")]),t._v(" "),e("p",{staticClass:"timer__content__text_crossed"},[t._v("$39.99/week")])]:[e("h4",{staticClass:"timer__content__subtitle"},[t._v("Then $39.99/week")])]],2),t._v(" "),t.countdown?e("div",{staticClass:"timer__item"},[e("BaseTimer")],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseTimer:n(340).default})},359:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__container"},[t._t("default")],2)])},o=[]},360:function(t,e,n){t.exports=n.p+"img/planetlearn-logo.4a6d75c.png"},361:function(t,e,n){t.exports=n.p+"img/asteroid.b150da3.png"},362:function(t,e,n){"use strict";n(341)},363:function(t,e,n){var r=n(54),o=n(135),c=n(136),l=n(137),f=n(138),d=n(139),m=n(364),_=r((function(i){return i[1]})),x=o(c),y=o(l),h=o(f),M=o(d),v=o(m);_.push([t.i,'@font-face{font-family:"Proxima Nova";src:url('+x+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+y+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+h+') format("truetype")}@font-face{font-family:"Intro";src:url('+M+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.page-a{background-image:url('+v+');background-position:50%;background-repeat:no-repeat;background-size:cover;font-family:"Proxima Nova",sans-serif;min-height:100vh;overflow:hidden}.page-a__container{display:flex;gap:24px;justify-content:space-between;margin:0 auto;max-width:1010px;padding:65px 20px}@media screen and (max-width:576px){.page-a__container{flex-direction:column-reverse;padding:32px 20px 24px}}.page-a__content{max-width:474px;width:100%}.page-a__content__title{margin-bottom:24px}@media screen and (max-width:576px){.page-a__content__title{font-size:32px}}.page-a__content__text{font-size:24px;font-weight:600;line-height:120%;margin-bottom:32px;max-width:375px}@media screen and (max-width:576px){.page-a__content{padding-top:0}.page-a__content .base-button{margin-bottom:32px;max-width:none}}@media screen and (min-width:576px){.page-a__content .trial-content{display:none}}.page-a__card{display:flex;flex-direction:column;gap:26px;padding:24px}.page-a__card__container{max-width:474px;position:relative;width:100%}@media screen and (max-width:576px){.page-a__card{padding:12px 16px;width:100%}.page-a__card .trial-content{display:none}}.page-a__content{padding-top:15px}.page-a__content__title{font-family:"Proxima Nova Extrabold",sans-serif;font-size:48px;font-weight:800}.page-a__content__text{font-family:"Proxima Nova Bold",sans-serif}.page-a__card{background-color:#fff;border:1px solid #cdcdcd;border-radius:12px;box-shadow:0 4px 4px 0 rgba(0,0,0,.06)}.page-a__card__asteroid{position:absolute;right:20px;top:-58px}@media screen and (max-width:576px){.page-a__card__asteroid{display:none}}',""]),_.locals={},t.exports=_},364:function(t,e,n){t.exports=n.p+"img/planets-bg.b84b1bd.png"},372:function(t,e,n){"use strict";n.r(e);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var r=n(0),o=n(86);function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var l={name:"PageA",data:function(){return{isModalOpened:!1}},created:function(){this.setTheme("light")},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(o.c)(["setTheme"]))},f=l,d=(n(362),n(66)),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-a"},[e("CoreHeader",[e("img",{attrs:{src:n(360),alt:"PlanetLearn"}})]),t._v(" "),e("main",{staticClass:"page-a__container"},[e("div",{staticClass:"page-a__content"},[e("h1",{staticClass:"page-a__content__title"},[t._v("Start your learning journey now")]),t._v(" "),t._m(0),t._v(" "),e("BaseButton",{nativeOn:{click:function(e){t.isModalOpened=!0}}},[t._v("Get my plan")]),t._v(" "),e("TrialContent")],1),t._v(" "),e("div",{staticClass:"page-a__card__container"},[e("img",{staticClass:"page-a__card__asteroid",attrs:{src:n(361),alt:"Asteroid"}}),t._v(" "),e("div",{staticClass:"page-a__card"},[e("TrialTimer"),t._v(" "),e("TrialContent")],1)])]),t._v(" "),t.isModalOpened?e("TrialPayment",{on:{close:function(e){t.isModalOpened=!1}}}):t._e()],1)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"page-a__content__text"},[t._v("Get a "),e("span",{staticClass:"orange bold"},[t._v("Planet")]),e("span",{staticClass:"bold"},[t._v("Learn")]),t._v(" plan to rock self-learning")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CoreHeader:n(342).default,BaseButton:n(332).default,TrialContent:n(357).default,TrialTimer:n(358).default,TrialPayment:n(369).default})}}]);