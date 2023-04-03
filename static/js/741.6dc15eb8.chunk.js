"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[741],{6373:function(e,n,t){var r=t(7313),a=t(8467);n.Z=function(e){var n=e.children,t=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null}},6669:function(e,n,t){t.d(n,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",FACTORY:"articles/factory.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://formspree.io/f/mlekwweo"}},2741:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(7313),a=t(7994),o=t(6373),s=t(6233),i=t(9105),c=t(7095),u=t(658),l=t.n(u),d=t(6417),f=function(){var e,n=(0,i.fE)("/brand/news-detail/:board_id"),t=(0,c.r0)((0,s.qx)(null!==(e=null===n||void 0===n?void 0:n.board_id)&&void 0!==e?e:"")).data;return(0,d.jsxs)("section",{className:"notice_detail",children:[(0,d.jsxs)("div",{className:"top",children:[(0,d.jsx)("h4",{children:null===t||void 0===t?void 0:t.context.title}),(0,d.jsx)("p",{className:"date",children:l()(null===t||void 0===t?void 0:t.context.date).format("YYYY.MM.DD")})]}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)("p",{children:null===t||void 0===t?void 0:t.content}),(0,d.jsx)("div",{})]})]})},h=t(8251),m=function(){var e=(0,a.W)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Z,{}),(0,d.jsx)("div",{id:"container",className:"container wrapper notice",children:(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(h.Z,{}),children:(0,d.jsx)(f,{})}),(0,d.jsx)("div",{className:"btn_wrap",children:(0,d.jsx)("a",{href:"/",className:"btn_m2",onClick:function(n){n.preventDefault(),e(-1)},children:"\ubaa9\ub85d"})})]})})]})}},168:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(6669),a=t(4165),o=t(5861),s=t(627),i=t(6233),c=null,u=s.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var t=localStorage.getItem(i.zR);t&&t.length>0&&e.headers.set("Authorization","Bearer ".concat(t))}],afterResponse:[function(){var e=(0,o.Z)((0,a.Z)().mark((function e(n,t,o){var u,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==o.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,s.ZP)(r.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return u=e.sent,l=u.result.accessToken,c=null,localStorage.setItem(i.zR,l),n.headers.set("Authorization","Bearer ".concat(l)),e.abrupt("return",(0,s.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(i.zR),localStorage.removeItem(i.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r){return e.apply(this,arguments)}}()]}}),l=u,d=(new Date).getTime(),f={getCleanrooms:function(){return l.get(r.F.CLEANROOM,{searchParams:{_:d}}).json()},getFactorys:function(){return l.get(r.F.FACTORY,{searchParams:{_:d}}).json()},getNews:function(){return l.get(r.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return l.get(r.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return l.get(r.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return l.get(r.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return l.post(r.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})}}},7095:function(e,n,t){t.d(n,{UN:function(){return s},r0:function(){return d},WT:function(){return f},_Q:function(){return i},Kg:function(){return c},fx:function(){return u},UT:function(){return l}});var r=t(6669),a=t(3926),o=t(168),s=function(){return{data:(0,a.a)([r.F.CLEANROOM],(function(){return o.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},i=function(){return{data:(0,a.a)([r.F.FACTORY],(function(){return o.Z.getFactorys()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,a.a)([r.F.NEWS],(function(){return o.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,a.a)([r.F.NOTICE],(function(){return o.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,a.a)([r.F.RENOVATING],(function(){return o.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,a.a)([r.F.FACTORY,e],(function(){return o.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},f=function(e){var n=(0,a.a)([r.F.FACTORY,e],(function(){return o.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:n.data,error:n.error,isError:n.isError,isLoading:n.isLoading,getContent:n.refetch}}}}]);