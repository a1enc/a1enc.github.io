"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[620],{6373:function(e,n,t){var r=t(7313),a=t(8467);n.Z=function(e){var n=e.children,t=(0,a.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[t]),n||null}},8877:function(e,n,t){t.d(n,{F:function(){return r.Z}});t(7313),t(4121),t(6417);var r=t(6373)},9301:function(e,n,t){var r=t(5964),a=t(6417);n.Z=function(e){var n=e.title,t=void 0===n?"":n;return(0,a.jsxs)(r.ql,{children:[(0,a.jsx)("title",{children:"".concat(t," ").concat(t.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")}),(0,a.jsx)("meta",{name:"title",content:"".concat(t," ").concat(t.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")})]})}},6217:function(e,n,t){t.d(n,{r:function(){return o}});var r=t(1413),a=t(9439),s=t(7313),i=t(6417),o=function(e){var n=(0,s.useState)(!1),t=(0,a.Z)(n,2),o=t[0],c=t[1];return(0,i.jsx)("img",(0,r.Z)((0,r.Z)({},e),{},{alt:e.alt||"",className:"image ".concat(o?"loaded":"loading"),onLoad:function(){c(!0)}}))}},4387:function(e,n,t){var r=t(9439),a=t(7313),s=t(4248),i=t(1878),o=t(6417);n.Z=function(e){var n=e.articleId,t=(0,i.WT)(n).getContent,c=(0,s.Z)(),l=(0,r.Z)(c,2),u=l[0],d=l[1];return(0,a.useEffect)((function(){t()}),[d,t]),(0,o.jsx)("div",{ref:u,style:{width:"100%",height:"1px"}})}},4672:function(e,n,t){t.d(n,{Z:function(){return m}});var r=t(9439),a=t(7313),s=t(9284),i=t.n(s),o=t(367),c=t(190),l=t(5265),u=t(1878),d=t(6417),f=function(e){var n,t,s,i,o,c,f,h,m,v,x,p,j=e.boardId,g=(0,u.r0)((0,l.qx)(null!==j&&void 0!==j?j:"")).data,N=(0,a.useState)(0),_=(0,r.Z)(N,2),I=_[0],E=_[1],C=(0,a.useRef)(),y=null!==(n=null===g||void 0===g||null===(t=g.context)||void 0===t||null===(s=t.workphotos)||void 0===s?void 0:s.length)&&void 0!==n?n:0,R=(0,a.useCallback)((function(){C.current&&clearInterval(C.current),C.current=setInterval((function(){E((function(e){return(e+1)%y}))}),3e3)}),[y]);(0,a.useEffect)((function(){return R(),function(){return C.current&&clearInterval(C.current)}}),[R]);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"modal__header",children:(0,d.jsxs)("figure",{className:"slide__controls",children:[y>0?(0,d.jsx)("img",{src:(0,l.VP)(null!==(i=null===g||void 0===g||null===(o=g.context)||void 0===o||null===(c=o.workphotos)||void 0===c?void 0:c[I])&&void 0!==i?i:""),alt:""}):(0,d.jsx)("img",{src:l.pQ,alt:""}),(0,d.jsxs)("figcaption",{className:"slide__arrow-wrap",children:[(0,d.jsx)("div",{className:"slide__arrow prev",onClick:function(){R(),E((function(e){return e>0?e-1:y-1}))}}),(0,d.jsxs)("div",{className:"counter",children:[(0,d.jsx)("span",{className:"counter__num-current",children:I+1})," / ",(0,d.jsx)("span",{className:"counter__num-total",children:y})]}),(0,d.jsx)("div",{className:"slide__arrow next",onClick:function(){R(),E((function(e){return e<y-1?e+1:0}))}})]})]})}),(0,d.jsxs)("div",{className:"modal__body",children:[(0,d.jsx)("span",{className:"title",children:null===g||void 0===g?void 0:g.context.info}),(0,d.jsx)("strong",{children:null===g||void 0===g?void 0:g.context.title}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"\ubc1c \uc8fc \ucc98"})," : ",(0,d.jsx)("em",{children:null===g||void 0===g?void 0:g.context.client})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"\uacf5\uc0ac\uaddc\ubaa8"})," : ",(0,d.jsx)("em",{children:null===g||void 0===g?void 0:g.context.scale})]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("span",{children:"\uacf5\uc0ac\uae30\uac04"})," : ",(0,d.jsx)("em",{children:null===g||void 0===g?void 0:g.context.finished})]}),y>0&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("img",{src:(0,l.VP)(null!==(f=null===g||void 0===g||null===(h=g.context)||void 0===h||null===(m=h.workphotos)||void 0===m?void 0:m[(I+y-1)%y])&&void 0!==f?f:""),alt:"",style:{width:"1px",height:"1px"}}),(0,d.jsx)("img",{src:(0,l.VP)(null!==(v=null===g||void 0===g||null===(x=g.context)||void 0===x||null===(p=x.workphotos)||void 0===p?void 0:p[(I+1)%y])&&void 0!==v?v:""),alt:"",style:{width:"1px",height:"1px"}})]})]})]})},h=function(e,n){var t=e.boardId,s=(0,a.useState)(!1),l=(0,r.Z)(s,2),u=l[0],h=l[1],m=(0,c.N)(),v=m.enabled,x=m.disabled,p=function(){v(),h(!1)};(0,a.useImperativeHandle)(n,(function(){return{onCloseModal:function(){p()},onShowModal:function(){h(!0)}}}));return(0,d.jsxs)(i(),{isOpen:u,onAfterOpen:function(e){x()},onRequestClose:p,closeTimeoutMS:200,appElement:document.getElementById("root"),className:"modal-container gallery",overlayClassName:"modal-bkgnd",children:[(0,d.jsx)("button",{type:"button",className:"modal__close",onClick:function(e){p()}}),(0,d.jsx)(a.Suspense,{fallback:(0,d.jsx)(o.p,{}),children:(0,d.jsx)(f,{boardId:t})})]})},m=(0,a.forwardRef)(h)},3102:function(e,n,t){t.d(n,{F:function(){return a},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},a={CLEANROOM:"articles/cleanroom.json",CIVIL:"articles/civil.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://formspree.io/f/mlekwweo",SENDEMAIL_GOOGLE:"https://script.google.com/macros/s/AKfycbzqDNt4Rv_kU_0Y4oujSYPht0U031o6pWwQc_yt16EJqbCjWsFzT8bycUE_LbcRVv2i/exec"}},9620:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r=t(7313),a=t(8877),s=t(367),i=t(9301),o=t(9439),c=t(4146),l=t(658),u=t.n(l),d=t(6217),f=t(5265),h=t(1878),m=t(4672),v=t(4387),x=t(6417),p=function(){var e=(0,h.UN)().data,n=(0,r.useRef)(null),t=(0,r.useState)(),a=(0,o.Z)(t,2),s=a[0],i=a[1],l=(0,r.useState)(9),p=(0,o.Z)(l,2),j=p[0],g=p[1],N=null===e||void 0===e?void 0:e.slice(0,j);return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"gallery_list",children:[null===N||void 0===N?void 0:N.map((function(e){return(0,x.jsx)("div",{className:"item",children:(0,x.jsxs)("a",{href:"/",onClick:(t=(0,f.U6)(e.filename),function(e){var r;e.preventDefault(),i(t),null===(r=n.current)||void 0===r||r.onShowModal()}),children:[(0,x.jsx)(d.r,{src:(0,f.VP)(e.cover),alt:"",loading:"lazy"}),(0,x.jsxs)("div",{className:"text-wrap",children:[(0,x.jsx)("p",{className:"title",children:e.title}),(0,x.jsx)("p",{className:"date",children:u()(e.date).format("YYYY\ub144")}),(0,x.jsx)(v.Z,{articleId:e.filename})]})]})},e.filename);var t})),(0,x.jsx)("div",{className:"gallery_list_more",children:(0,x.jsx)("input",{value:"\ub354\ubcf4\uae30\xa0\xa0\u25bc",type:"button",className:(0,c.Z)({disabled:(null!==N&&void 0!==N?N:[]).length<j}),onClick:function(){g((function(e){return e+9}))}})})]}),(0,x.jsx)(m.Z,{boardId:s,ref:n})]})},j=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(i.Z,{title:"C/R \uac80\ucd95"}),(0,x.jsx)(a.F,{}),(0,x.jsx)("div",{id:"container",className:"container customer report",children:(0,x.jsxs)("div",{className:"content",children:[(0,x.jsx)("div",{className:"cont_tit_wrap",children:(0,x.jsxs)("h3",{className:"sub-tit",children:[(0,x.jsx)("span",{style:{animationDelay:"0.36s"},children:"C"}),(0,x.jsx)("span",{style:{animationDelay:"0.48s"},children:"/"}),(0,x.jsx)("span",{style:{animationDelay:"0.6s"},children:"R"}),(0,x.jsx)("span",{style:{animationDelay:"0.72s"},children:" "}),(0,x.jsx)("span",{style:{animationDelay:"0.84s"},children:"\uac74"}),(0,x.jsx)("span",{style:{animationDelay:"0.96s"},children:"\ucd95"})]})}),(0,x.jsx)("div",{className:"guide_wrap",children:(0,x.jsx)(r.Suspense,{fallback:(0,x.jsx)(s.p,{}),children:(0,x.jsx)(p,{})})})]})})]})}},2539:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(4165),a=t(5861),s=t(627),i=t(5265),o=t(3102),c=null,l=s.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var t=localStorage.getItem(i.zR);t&&t.length>0&&e.headers.set("Authorization","Bearer ".concat(t))}],afterResponse:[function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n,t,a){var l,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==a.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,s.ZP)(o.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return l=e.sent,u=l.result.accessToken,c=null,localStorage.setItem(i.zR,u),n.headers.set("Authorization","Bearer ".concat(u)),e.abrupt("return",(0,s.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(i.zR),localStorage.removeItem(i.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,t,r){return e.apply(this,arguments)}}()]}}),u=l,d=(new Date).getTime(),f={getCleanrooms:function(){return u.get(o.F.CLEANROOM,{searchParams:{_:d}}).json()},getCivils:function(){return u.get(o.F.CIVIL,{searchParams:{_:d}}).json()},getNews:function(){return u.get(o.F.NEWS,{searchParams:{_:d}}).json()},getNotices:function(){return u.get(o.F.NOTICE,{searchParams:{_:d}}).json()},getRenovatings:function(){return u.get(o.F.RENOVATING,{searchParams:{_:d}}).json()},getContent:function(e){return u.get(o.F.ARTICLE_PARAM(e),{searchParams:{_:d}}).json()},poseSendEmail:function(e){return u.post(o.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})},poseSendJson:function(e){return u.post(o.F.SENDEMAIL_GOOGLE,{prefixUrl:"",mode:"no-cors",json:e})}}},1878:function(e,n,t){t.d(n,{rV:function(){return o},UN:function(){return i},r0:function(){return d},WT:function(){return f},Kg:function(){return c},fx:function(){return l},UT:function(){return u}});var r=t(3926),a=t(3102),s=t(2539),i=function(){return{data:(0,r.a)([a.F.CLEANROOM],(function(){return s.Z.getCleanrooms()}),{staleTime:36e5,cacheTime:1/0}).data}},o=function(){return{data:(0,r.a)([a.F.CIVIL],(function(){return s.Z.getCivils()}),{staleTime:36e5,cacheTime:1/0}).data}},c=function(){return{data:(0,r.a)([a.F.NEWS],(function(){return s.Z.getNews()}),{staleTime:36e5,cacheTime:1/0}).data}},l=function(){return{data:(0,r.a)([a.F.NOTICE],(function(){return s.Z.getNotices()}),{staleTime:36e5,cacheTime:1/0}).data}},u=function(){return{data:(0,r.a)([a.F.RENOVATING],(function(){return s.Z.getRenovatings()}),{staleTime:36e5,cacheTime:1/0}).data}},d=function(e){return{data:(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:Boolean(e)}).data}},f=function(e){var n=(0,r.a)([a.F.CIVIL,e],(function(){return s.Z.getContent(null!==e&&void 0!==e?e:"")}),{staleTime:36e5,cacheTime:1/0,enabled:!1,retry:!1,suspense:!1,useErrorBoundary:!1});return{data:n.data,error:n.error,isError:n.isError,isLoading:n.isLoading,getContent:n.refetch}}}}]);