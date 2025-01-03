"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[639],{6373:function(e,n,t){var r=t(7313),a=t(8467);n.Z=function(e){var n=e.children,t=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null}},3102:function(e,n,t){t.d(n,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",CIVIL:"articles/civil.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://script.google.com/macros/s/AKfycby7fw28CzPHJTN2Oh6NKM-7xlomA2TVN86m2dc_pXfH4NsnNrdq6zH8j6ccwrUaFYCC/exec"}},6621:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7313),a=t(6373),s=t(8251),i=t(658),o=t.n(i),c=t(5265),u=t(9105),l=t(1878),d=t(6417),f=function(){var e=(0,u.fE)("/brand/notice-detail/:board_id"),n=(0,l.r0)((0,c.qx)(null===e||void 0===e?void 0:e.board_id)).data;return(0,d.jsxs)("section",{className:"notice_detail",children:[(0,d.jsxs)("div",{className:"title",children:[(0,d.jsx)("h4",{children:null===n||void 0===n?void 0:n.context.title}),(0,d.jsx)("div",{className:"sub-info",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:"\ub0a0\uc9dc"}),(0,d.jsx)("dd",{children:o()(null===n||void 0===n?void 0:n.context.date).format("YYYY.MM.DD")})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("dl",{children:[(0,d.jsx)("dt",{children:"\ucd94\ucc9c\uc218"}),(0,d.jsx)("dd",{children:"0"})]})})]})})]}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("p",{children:null===n||void 0===n?void 0:n.content}),(0,d.jsx)("div",{})]}),(0,d.jsx)("div",{className:"reply-board-view"})]})},h=t(7994),m=function(){var e=(0,h.W)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Z,{}),(0,d.jsx)("div",{id:"container",className:"container wrapper notice",children:(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(s.Z,{}),children:(0,d.jsx)(f,{})}),(0,d.jsx)("div",{className:"btn_wrap bottom-btn",children:(0,d.jsx)("a",{href:"/",className:"btn_m2 btn_right",onClick:function(n){n.preventDefault(),e(-1)},children:"\ubaa9\ub85d"})})]})})]})}},2539:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),a=t(5861),s=t(627),i=t(5265),o=t(3102),c=null,u=s.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var t=localStorage.getItem(i.zR);t&&t.length>0&&e.headers.set("Authorization","Bearer ".concat(t))}],afterResponse:[function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==a.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,s.ZP)(o.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return u=e.sent,l=u.result.accessToken,c=null,localStorage.setItem(i.zR,l),n.headers.set("Authorization","Bearer ".concat(l)),e.abrupt("return",(0,s.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(i.zR),localStorage.removeItem(i.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r){return e.apply(this,arguments)}}()]}}),l=u,d=(new Date).getTime(),f={getCleanrooms:function(){return l.get(o.F.CLEANROOM,{searchParams:{_:d}}).json()},getCivils:function(){return l.get(o.F.CIVIL,{searchParams:{_:d}}).json()},getNews:function(){return l.get(o.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return l.get(o.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return l.get(o.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return l.get(o.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return l.post(o.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})}}},1878:function(e,n,t){t.d(n,{rV:function(){return o},UN:function(){return i},r0:function(){return d},WT:function(){return f},Kg:function(){return c},fx:function(){return u},UT:function(){return l}});var r=t(3926),a=t(3102),s=t(2539),i=function(){return{data:(0,r.a)([a.F.CLEANROOM],(function(){return s.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},o=function(){return{data:(0,r.a)([a.F.CIVIL],(function(){return s.Z.getCivils()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,r.a)([a.F.NEWS],(function(){return s.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,r.a)([a.F.NOTICE],(function(){return s.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,r.a)([a.F.RENOVATING],(function(){return s.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},f=function(e){var n=(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:n.data,error:n.error,isError:n.isError,isLoading:n.isLoading,getContent:n.refetch}}}}]);