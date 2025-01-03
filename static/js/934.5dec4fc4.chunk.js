"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[934],{6373:function(e,n,t){var r=t(7313),a=t(8467);n.Z=function(e){var n=e.children,t=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null}},9301:function(e,n,t){var r=t(5964),a=t(6417);n.Z=function(e){var n=e.title,t=void 0===n?"":n;return(0,a.jsxs)(r.ql,{children:[(0,a.jsx)("title",{children:"".concat(t," ").concat(t.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")}),(0,a.jsx)("meta",{name:"title",content:"".concat(t," ").concat(t.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")})]})}},3102:function(e,n,t){t.d(n,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",CIVIL:"articles/civil.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://script.google.com/macros/s/AKfycby7fw28CzPHJTN2Oh6NKM-7xlomA2TVN86m2dc_pXfH4NsnNrdq6zH8j6ccwrUaFYCC/exec"}},8934:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(7313),a=t(6373),s=t(8251),i=t(9301),c=t(658),o=t.n(c),l=t(4862),u=t(5265),d=t(9592),h=t(1878),f=t(6417),m=function(){var e=(0,h.fx)().data;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"notice_list",children:(0,f.jsx)("div",{className:"board_list",children:(0,f.jsxs)("table",{children:[(0,f.jsxs)("colgroup",{children:[(0,f.jsx)("col",{}),(0,f.jsx)("col",{style:{width:l.jU?"240px":"80px"}})]}),(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{scope:"col",children:"\uc81c\ubaa9"}),(0,f.jsx)("th",{scope:"col",children:"\ub4f1\ub85d\uc77c"})]})}),(0,f.jsxs)("tbody",{children:[null===e||void 0===e?void 0:e.map((function(e){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:(0,f.jsx)(d.H,{to:"/brand/notice-detail/:board_id",params:{board_id:(0,u.U6)(e.filename)},children:e.title})}),(0,f.jsx)("td",{children:o()(e.date).format("YYYY.MM.DD")})]},e.filename)})),!e&&(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:"\ub4f1\ub85d\ub41c \uac8c\uc2dc\uae00\uc774 \uc5c6\uc2b5\ub2c8\ub2e4."}),(0,f.jsx)("td",{})]})]})]})})}),(0,f.jsxs)("div",{className:"list-page",children:[(0,f.jsx)("button",{type:"button",className:"btn-prev",children:"\uc774\uc804"}),(0,f.jsx)("ul",{children:(0,f.jsx)("li",{className:"on",children:(0,f.jsx)("a",{href:"/",onClick:function(e){e.preventDefault()},children:"1"})})}),(0,f.jsx)("button",{type:"button",className:"btn-next",children:"\ub2e4\uc74c"})]})]})},j=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(i.Z,{title:"\uacf5\uc9c0\uc0ac\ud56d"}),(0,f.jsx)(a.Z,{}),(0,f.jsx)("div",{id:"container",className:"container wrapper",children:(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("div",{className:"cont_tit_wrap",children:(0,f.jsxs)("h3",{className:"sub-tit",children:[(0,f.jsx)("span",{style:{animationDelay:"0.36s"},children:"\uacf5"}),(0,f.jsx)("span",{style:{animationDelay:"0.48s"},children:"\uc9c0"}),(0,f.jsx)("span",{style:{animationDelay:"0.6s"},children:"\uc0ac"}),(0,f.jsx)("span",{style:{animationDelay:"0.72s"},children:"\ud56d"})]})}),(0,f.jsx)("div",{className:"guide_wrap",children:(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(s.Z,{}),children:(0,f.jsx)(m,{})})})]})})]})}},2539:function(e,n,t){t.d(n,{Z:function(){return h}});var r=t(4165),a=t(5861),s=t(627),i=t(5265),c=t(3102),o=null,l=s.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var t=localStorage.getItem(i.zR);t&&t.length>0&&e.headers.set("Authorization","Bearer ".concat(t))}],afterResponse:[function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==a.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,o=o||(console.info("Refreshing access token"),(0,s.ZP)(c.e.FRESH_TOKEN).json()),e.next=6,o;case 6:return l=e.sent,u=l.result.accessToken,o=null,localStorage.setItem(i.zR,u),n.headers.set("Authorization","Bearer ".concat(u)),e.abrupt("return",(0,s.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(i.zR),localStorage.removeItem(i.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r){return e.apply(this,arguments)}}()]}}),u=l,d=(new Date).getTime(),h={getCleanrooms:function(){return u.get(c.F.CLEANROOM,{searchParams:{_:d}}).json()},getCivils:function(){return u.get(c.F.CIVIL,{searchParams:{_:d}}).json()},getNews:function(){return u.get(c.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return u.get(c.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return u.get(c.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return u.get(c.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return u.post(c.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})}}},1878:function(e,n,t){t.d(n,{rV:function(){return c},UN:function(){return i},r0:function(){return d},WT:function(){return h},Kg:function(){return o},fx:function(){return l},UT:function(){return u}});var r=t(3926),a=t(3102),s=t(2539),i=function(){return{data:(0,r.a)([a.F.CLEANROOM],(function(){return s.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,r.a)([a.F.CIVIL],(function(){return s.Z.getCivils()}),{staleTime:36e5,cacheTime:1/0}).data}},o=function(){return{data:(0,r.a)([a.F.NEWS],(function(){return s.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,r.a)([a.F.NOTICE],(function(){return s.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,r.a)([a.F.RENOVATING],(function(){return s.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},h=function(e){var n=(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:n.data,error:n.error,isError:n.isError,isLoading:n.isLoading,getContent:n.refetch}}}}]);