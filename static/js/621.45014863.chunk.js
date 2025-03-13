"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[621],{6373:function(e,n,t){var r=t(7313),a=t(8467);n.Z=function(e){var n=e.children,t=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null}},3102:function(e,n,t){t.d(n,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",CIVIL:"articles/civil.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://formspree.io/f/mlekwweo",SENDEMAIL_GOOGLE:"https://script.google.com/macros/s/AKfycbzqDNt4Rv_kU_0Y4oujSYPht0U031o6pWwQc_yt16EJqbCjWsFzT8bycUE_LbcRVv2i/exec"}},442:function(e,n,t){t.d(n,{Z:function(){return r}});var r=function(e){if(!e)return"";var n=e.trim();return n=(n=(n=(n=n.replace(/\n/g,"<br>")).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")).replace(/\*([^\\*]+)\*/g,"<em>$1</em>")).replace(/!\[\]\((.*?)\)/g,'<img src="$1">')}},6621:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(7313),a=t(6373),s=t(8251),o=t(658),i=t.n(o),c=t(5265),u=t(442),l=t(9105),d=t(1878),f=t(6417),h=function(){var e=(0,l.fE)("/brand/notice-detail/:board_id"),n=(0,d.r0)((0,c.qx)(null===e||void 0===e?void 0:e.board_id)).data;return(0,f.jsxs)("section",{className:"notice_detail",children:[(0,f.jsxs)("div",{className:"title",children:[(0,f.jsx)("h4",{children:null===n||void 0===n?void 0:n.context.title}),(0,f.jsx)("div",{className:"sub-info",children:(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsxs)("dl",{children:[(0,f.jsx)("dt",{children:"\ub0a0\uc9dc"}),(0,f.jsx)("dd",{children:i()(null===n||void 0===n?void 0:n.context.date).format("YYYY.MM.DD")})]})}),(0,f.jsx)("li",{children:(0,f.jsxs)("dl",{children:[(0,f.jsx)("dt",{children:"\ucd94\ucc9c\uc218"}),(0,f.jsx)("dd",{children:"0"})]})})]})})]}),(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:(0,u.Z)(null===n||void 0===n?void 0:n.content)}}),(0,f.jsx)("div",{})]}),(0,f.jsx)("div",{className:"reply-board-view"})]})},m=t(7994),p=function(){var e=(0,m.W)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.Z,{}),(0,f.jsx)("div",{id:"container",className:"container wrapper notice",children:(0,f.jsxs)("div",{className:"content",children:[(0,f.jsx)(r.Suspense,{fallback:(0,f.jsx)(s.Z,{}),children:(0,f.jsx)(h,{})}),(0,f.jsx)("div",{className:"btn_wrap bottom-btn",children:(0,f.jsx)("a",{href:"/",className:"btn_m2 btn_right",onClick:function(n){n.preventDefault(),e(-1)},children:"\ubaa9\ub85d"})})]})})]})}},2539:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),a=t(5861),s=t(627),o=t(5265),i=t(3102),c=null,u=s.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var t=localStorage.getItem(o.zR);t&&t.length>0&&e.headers.set("Authorization","Bearer ".concat(t))}],afterResponse:[function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var u,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==a.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,s.ZP)(i.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return u=e.sent,l=u.result.accessToken,c=null,localStorage.setItem(o.zR,l),n.headers.set("Authorization","Bearer ".concat(l)),e.abrupt("return",(0,s.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(o.zR),localStorage.removeItem(o.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r){return e.apply(this,arguments)}}()]}}),l=u,d=(new Date).getTime(),f={getCleanrooms:function(){return l.get(i.F.CLEANROOM,{searchParams:{_:d}}).json()},getCivils:function(){return l.get(i.F.CIVIL,{searchParams:{_:d}}).json()},getNews:function(){return l.get(i.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return l.get(i.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return l.get(i.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return l.get(i.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return l.post(i.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})},poseSendJson:function(e){return l.post(i.F.SENDEMAIL_GOOGLE,{prefixUrl:"",mode:"no-cors",json:e})}}},1878:function(e,n,t){t.d(n,{rV:function(){return i},UN:function(){return o},r0:function(){return d},WT:function(){return f},Kg:function(){return c},fx:function(){return u},UT:function(){return l}});var r=t(3926),a=t(3102),s=t(2539),o=function(){return{data:(0,r.a)([a.F.CLEANROOM],(function(){return s.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},i=function(){return{data:(0,r.a)([a.F.CIVIL],(function(){return s.Z.getCivils()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,r.a)([a.F.NEWS],(function(){return s.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,r.a)([a.F.NOTICE],(function(){return s.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,r.a)([a.F.RENOVATING],(function(){return s.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},f=function(e){var n=(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:n.data,error:n.error,isError:n.isError,isLoading:n.isLoading,getContent:n.refetch}}}}]);