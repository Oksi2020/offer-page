(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{341:function(e,t,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(55).default)("a3f4d3f8",content,!0,{sourceMap:!1})},360:function(e,t,n){e.exports=n.p+"img/planetlearn-logo.4a6d75c.png"},361:function(e,t,n){e.exports=n.p+"img/asteroid.b150da3.png"},362:function(e,t,n){"use strict";n(341)},363:function(e,t,n){var o=n(54),r=n(135),c=n(136),l=n(137),d=n(138),f=n(139),_=n(364),m=o((function(i){return i[1]})),x=r(c),h=r(l),v=r(d),y=r(f),P=r(_);m.push([e.i,'@font-face{font-family:"Proxima Nova";src:url('+x+') format("truetype")}@font-face{font-family:"Proxima Nova Bold";src:url('+h+') format("truetype")}@font-face{font-family:"Proxima Nova Extrabold";src:url('+v+') format("truetype")}@font-face{font-family:"Intro";src:url('+y+') format("truetype")}body{color:#000;line-height:120%}.orange{color:#ff8d24}.blue{color:#4eaaff}.light-blue{color:#66edff}.bold{font-family:"Proxima Nova Extrabold",sans-serif;font-weight:800}.page-a{background-image:url('+P+');background-position:50%;background-repeat:no-repeat;background-size:cover;font-family:"Proxima Nova",sans-serif;min-height:100vh;overflow:hidden}.page-a__container{display:flex;gap:24px;justify-content:space-between;margin:0 auto;max-width:1010px;padding:65px 20px}@media screen and (max-width:576px){.page-a__container{flex-direction:column-reverse;padding:32px 20px 24px}}.page-a__content{max-width:474px;width:100%}.page-a__content__title{margin-bottom:24px}@media screen and (max-width:576px){.page-a__content__title{font-size:32px}}.page-a__content__text{font-size:24px;font-weight:600;line-height:120%;margin-bottom:32px;max-width:375px}@media screen and (max-width:576px){.page-a__content{padding-top:0}.page-a__content .base-button{margin-bottom:32px;max-width:none}}@media screen and (min-width:576px){.page-a__content .trial-content{display:none}}.page-a__card{display:flex;flex-direction:column;gap:26px;padding:24px}.page-a__card__container{max-width:474px;position:relative;width:100%}@media screen and (max-width:576px){.page-a__card{padding:12px 16px;width:100%}.page-a__card .trial-content{display:none}}.page-a__content{padding-top:15px}.page-a__content__title{font-family:"Proxima Nova Extrabold",sans-serif;font-size:48px;font-weight:800}.page-a__content__text{font-family:"Proxima Nova Bold",sans-serif}.page-a__card{background-color:#fff;border:1px solid #cdcdcd;border-radius:12px;box-shadow:0 4px 4px 0 rgba(0,0,0,.06)}.page-a__card__asteroid{position:absolute;right:20px;top:-58px}@media screen and (max-width:576px){.page-a__card__asteroid{display:none}}',""]),m.locals={},e.exports=m},364:function(e,t,n){e.exports=n.p+"img/planets-bg.b84b1bd.png"},372:function(e,t,n){"use strict";n.r(t);n(5),n(4),n(2),n(1),n(6),n(3),n(7);var o=n(0),r=n(86);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var l={name:"PageA",data:function(){return{isModalOpened:!1}},created:function(){this.setTheme("light")},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.c)(["setTheme"]))},d=l,f=(n(362),n(66)),component=Object(f.a)(d,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-a"},[t("CoreHeader",[t("img",{attrs:{src:n(360),alt:"PlanetLearn"}})]),e._v(" "),t("main",{staticClass:"page-a__container"},[t("div",{staticClass:"page-a__content"},[t("h1",{staticClass:"page-a__content__title"},[e._v("Start your learning journey now")]),e._v(" "),e._m(0),e._v(" "),t("BaseButton",{nativeOn:{click:function(t){e.isModalOpened=!0}}},[e._v("Get my plan")]),e._v(" "),t("TrialContent")],1),e._v(" "),t("div",{staticClass:"page-a__card__container"},[t("img",{staticClass:"page-a__card__asteroid",attrs:{src:n(361),alt:"Asteroid"}}),e._v(" "),t("div",{staticClass:"page-a__card"},[t("TrialTimer"),e._v(" "),t("TrialContent")],1)])]),e._v(" "),e.isModalOpened?t("TrialPayment",{on:{close:function(t){e.isModalOpened=!1}}}):e._e()],1)}),[function(){var e=this,t=e._self._c;return t("p",{staticClass:"page-a__content__text"},[e._v("Get a "),t("span",{staticClass:"orange bold"},[e._v("Planet")]),t("span",{staticClass:"bold"},[e._v("Learn")]),e._v(" plan to rock self-learning")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{CoreHeader:n(342).default,BaseButton:n(332).default,TrialContent:n(357).default,TrialTimer:n(358).default,TrialPayment:n(369).default})},387:function(e,t,n){"use strict";n.r(t);n(61),n(87);var o=n(333),r=n.n(o),c={name:"IndexPage",data:function(){return{pageVariants:["a","b"],selectedPage:"",pageLoaded:!1}},created:function(){this.initPage()},methods:{initPage:function(){var e=this.$route.query.abctest;if(e&&this.pageVariants.includes(e))this.selectedPage=e;else if(r.a.localStorage.getData("selectedPage"))this.selectedPage=r.a.localStorage.getData("selectedPage");else{var t=this.pageVariants[Math.floor(Math.random()*this.pageVariants.length)];this.selectedPage=t,r.a.localStorage.setData("selectedPage",t)}this.pageLoaded=!0}}},l=n(66),component=Object(l.a)(c,(function(){var e=this,t=e._self._c;return e.pageLoaded?t("div",["a"===e.selectedPage?t("PageA"):"b"===e.selectedPage?t("PageB"):e._e()],1):e._e()}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PageA:n(372).default,PageB:n(386).default})}}]);