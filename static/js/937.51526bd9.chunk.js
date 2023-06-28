/*! For license information please see 937.51526bd9.chunk.js.LICENSE.txt */
(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[937],{6373:function(e,t,n){"use strict";var r=n(7313),a=n(8467);t.Z=function(e){var t=e.children,n=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[n]),t||null}},3102:function(e,t,n){"use strict";n.d(t,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",FACTORY:"articles/factory.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://formspree.io/f/mlekwweo"}},2937:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(7313),a=n(4862),s=n(9439),i=n(7095),o=n(658),c=n.n(o),l=n(5265),u=n(9592),d=n(6123),f=n.n(d),m=n(6417),h=function(){var e=(0,i.Kg)().data,t=(0,r.useState)(10),n=(0,s.Z)(t,2),a=n[0],o=n[1],d=null===e||void 0===e?void 0:e.slice(0,a);return(0,m.jsxs)("div",{className:"gallery_list",children:[null===d||void 0===d?void 0:d.map((function(e){return(0,m.jsx)("ul",{className:"list",children:(0,m.jsxs)(u.H,{to:"/brand/news-detail/:board_id",params:{board_id:(0,l.U6)(e.filename)},children:[(0,m.jsx)("li",{children:(0,m.jsx)("img",{src:(0,l.VP)(e.cover),alt:"",loading:"lazy"})}),(0,m.jsx)("li",{children:(0,m.jsxs)("div",{className:"wrap",children:[(0,m.jsx)("p",{className:"txt",children:e.title}),(0,m.jsx)("p",{className:"date",children:c()(e.date).format("YYYY.MM.DD")})]})})]})},e.filename)})),(0,m.jsx)("div",{className:"gallery_list_more",children:(0,m.jsx)("input",{value:"\ub354\ubcf4\uae30\xa0\xa0\u25bc",type:"button",className:f()({disabled:(null!==d&&void 0!==d?d:[]).length<=a}),onClick:function(){o((function(e){return e+10}))}})})]})},p=function(){var e=(0,i.Kg)().data,t=(0,r.useState)(10),n=(0,s.Z)(t,2),a=n[0],o=n[1],d=null===e||void 0===e?void 0:e.slice(0,a);return(0,m.jsxs)("div",{className:"gallery_list",children:[null===d||void 0===d?void 0:d.map((function(e){return(0,m.jsx)("div",{className:"item news",children:(0,m.jsxs)(u.H,{to:"/brand/news-detail/:board_id",params:{board_id:(0,l.U6)(e.filename)},children:[(0,m.jsx)("img",{src:(0,l.VP)(e.cover),alt:"",loading:"lazy"}),(0,m.jsxs)("div",{className:"text-wrap",children:[(0,m.jsx)("p",{className:"title",children:e.title}),(0,m.jsx)("p",{className:"text",children:e.summary}),(0,m.jsx)("p",{className:"date",children:c()(e.date).format("YYYY.MM.DD")})]})]})},e.filename)})),(0,m.jsx)("div",{className:"gallery_list_more",children:(0,m.jsx)("input",{value:"\ub354\ubcf4\uae30\xa0\xa0\u25bc",type:"button",className:f()({disabled:(null!==d&&void 0!==d?d:[]).length<=a}),onClick:function(){o((function(e){return e+10}))}})})]})},g=function(){return(0,m.jsx)(m.Fragment,{children:a.jU?(0,m.jsx)(p,{}):(0,m.jsx)(h,{})})},v=n(6373),j=n(367),x=function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(v.Z,{}),(0,m.jsx)("div",{id:"container",className:"container wrapper ",children:(0,m.jsxs)("div",{className:"content",children:[(0,m.jsx)("div",{className:"cont_tit_wrap",children:(0,m.jsxs)("h3",{className:"sub-tit",children:[(0,m.jsx)("span",{style:{animationDelay:"0.36s"},children:"\ub274"}),(0,m.jsx)("span",{style:{animationDelay:"0.48s"},children:"\uc2a4"}),(0,m.jsx)("span",{style:{animationDelay:"0.6s"},children:"\ub8f8"})]})}),(0,m.jsx)("div",{className:"guide_wrap",children:(0,m.jsx)(r.Suspense,{fallback:(0,m.jsx)(j.p,{}),children:(0,m.jsx)(g,{})})})]})})]})}},2539:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(3102),a=n(4165),s=n(5861),i=n(627),o=n(5265),c=null,l=i.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,t){var n=localStorage.getItem(o.zR);n&&n.length>0&&e.headers.set("Authorization","Bearer ".concat(n))}],afterResponse:[function(){var e=(0,s.Z)((0,a.Z)().mark((function e(t,n,s){var l,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==s.status||t.headers.has("__isRetryRequest")){e.next=19;break}return t.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,i.ZP)(r.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return l=e.sent,u=l.result.accessToken,c=null,localStorage.setItem(o.zR,u),t.headers.set("Authorization","Bearer ".concat(u)),e.abrupt("return",(0,i.ZP)(t));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(o.zR),localStorage.removeItem(o.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,r){return e.apply(this,arguments)}}()]}}),u=l,d=(new Date).getTime(),f={getCleanrooms:function(){return u.get(r.F.CLEANROOM,{searchParams:{_:d}}).json()},getFactorys:function(){return u.get(r.F.FACTORY,{searchParams:{_:d}}).json()},getNews:function(){return u.get(r.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return u.get(r.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return u.get(r.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return u.get(r.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return u.post(r.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})}}},7095:function(e,t,n){"use strict";n.d(t,{UN:function(){return i},r0:function(){return d},WT:function(){return f},_Q:function(){return o},Kg:function(){return c},fx:function(){return l},UT:function(){return u}});var r=n(3102),a=n(3926),s=n(2539),i=function(){return{data:(0,a.a)([r.F.CLEANROOM],(function(){return s.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},o=function(){return{data:(0,a.a)([r.F.FACTORY],(function(){return s.Z.getFactorys()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,a.a)([r.F.NEWS],(function(){return s.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,a.a)([r.F.NOTICE],(function(){return s.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,a.a)([r.F.RENOVATING],(function(){return s.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,a.a)([r.F.FACTORY,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},f=function(e){var t=(0,a.a)([r.F.FACTORY,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:t.data,error:t.error,isError:t.isError,isLoading:t.isLoading,getContent:t.refetch}}},6123:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=a.apply(null,n);i&&e.push(i)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var o in n)r.call(n,o)&&n[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);