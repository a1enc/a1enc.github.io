"use strict";(self.webpackChunkstay_part_app=self.webpackChunkstay_part_app||[]).push([[942],{6373:function(e,n,s){var r=s(7313),l=s(8467);n.Z=function(e){var n=e.children,s=(0,l.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo({top:0,left:0,behavior:"smooth"})}),[s]),n||null}},9301:function(e,n,s){var r=s(5964),l=s(6417);n.Z=function(e){var n=e.title,s=void 0===n?"":n;return(0,l.jsxs)(r.ql,{children:[(0,l.jsx)("title",{children:"".concat(s," ").concat(s.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")}),(0,l.jsx)("meta",{name:"title",content:"".concat(s," ").concat(s.length>0?"|":""," \u321c\uc5d0\uc774\uc6d0\uc774\uc5d4\uc528 \uc885\ud569\uac74\uc124")})]})}},3102:function(e,n,s){s.d(n,{F:function(){return l},e:function(){return r}});var r={SIGNIN:"api/auth/sessions",SIGNOUT:"api/auth/sessions",SIGNUP:"api/auth/users",PROFILE:"api/auth/users",FRESH_TOKEN:"api/auth/sessions"},l={CLEANROOM:"articles/cleanroom.json",CIVIL:"articles/civil.json",NEWS:"articles/news.json",NOTICE:"articles/notice.json",RENOVATING:"articles/renovating.json",ARTICLE_PARAM:function(e){return"articles/".concat(e)},SENDEMAIL:"https://formspree.io/f/mlekwweo",SENDEMAIL_GOOGLE:"https://script.google.com/macros/s/AKfycbzqDNt4Rv_kU_0Y4oujSYPht0U031o6pWwQc_yt16EJqbCjWsFzT8bycUE_LbcRVv2i/exec"}},5942:function(e,n,s){s.r(n),s.d(n,{default:function(){return N}});var r=s(9439),l=s(7313),a=s(6373),t=s(9301),i=s(4862),c=s(3937),o=s(2036),d=(s(8282),s(5265)),u=s(7032),m=s(2539),h=function(e){return m.Z.poseSendJson(e)},x=function(){var e=(0,u.D)(h,{useErrorBoundary:!1}),n=e.mutate,s=e.data,r=e.error,l=e.isSuccess;return{contact:s,error:r,isError:e.isError,isSuccess:l,sendEmail:n}},p=s(6417),j=function(e){var n=e.onSuccess,s=x(),r=s.sendEmail,a=s.error;(0,l.useEffect)((function(){a instanceof c.B&&(a.response.status<400?n():a.response.status>=400&&o.Am.error("\uc804\uc1a1\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT}))}),[a,n]);return(0,p.jsxs)("section",{className:"inquiry_detail inquiry",children:[(0,p.jsxs)("h4",{className:"tit",children:["\ubb38\uc758 \ub0b4\uc6a9 ",(0,p.jsx)("span",{className:"required2",children:"\ud45c\uc2dc\ub294 \ud544\uc218 \uc785\ub825 \ud56d\ubaa9\uc785\ub2c8\ub2e4."})]}),(0,p.jsx)("div",{className:"insert_wrap",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\ubb38\uc758 \ubd84\ub958"})}),(0,p.jsx)("dd",{className:"radio_wrap type2",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uacf5\uc0ac(\ud604\uc7a5)"}),(0,p.jsx)("b",{children:"\uacf5\uc0ac(\ud604\uc7a5)"})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uc0ac\uc5c5\u2219\uc601\uc5c5\u2219\uc81c\uc548"}),(0,p.jsx)("b",{children:"\uc0ac\uc5c5 \u2219 \uc601\uc5c5 \u2219 \uc81c\uc548"})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uacc4\uc57d"}),(0,p.jsx)("b",{children:"\uacc4\uc57d"})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uae30\ud0c0"}),(0,p.jsx)("b",{children:"\uae30\ud0c0"})]})})]})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{children:"\uc774\ub984"})}),(0,p.jsx)("dd",{className:"sc",children:(0,p.jsx)("span",{className:"f1",children:(0,p.jsx)("input",{type:"text",name:"user_name"})})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\ud734\ub300\uc804\ud654"})}),(0,p.jsxs)("dd",{className:"sc",children:[(0,p.jsx)("span",{className:"f1",children:(0,p.jsxs)("select",{name:"user_phone_1",children:[(0,p.jsx)("option",{value:"010",selected:!0,children:"010"}),(0,p.jsx)("option",{value:"016",children:"016"}),(0,p.jsx)("option",{value:"017",children:"017"}),(0,p.jsx)("option",{value:"018",children:"018"}),(0,p.jsx)("option",{value:"019",children:"019"})]})}),(0,p.jsx)("span",{className:"f2",children:(0,p.jsx)("input",{type:"number",name:"user_phone_2",maxLength:8})})]})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{children:"\uc774\uba54\uc77c"})}),(0,p.jsxs)("dd",{children:[(0,p.jsx)("span",{className:"f1",children:(0,p.jsx)("input",{type:"text",name:"user_email_1"})}),(0,p.jsxs)("span",{className:"f1_1",children:[(0,p.jsx)("b",{children:"@"}),(0,p.jsx)("input",{type:"text",name:"user_email_2"})]}),(0,p.jsx)("span",{className:"f1",children:(0,p.jsxs)("select",{title:"E-mail \uc120\ud0dd",onChange:function(e){var n=document.querySelector('input[name="user_email_2"]');n&&/\.(com|net|co\.kr)$/.test(e.currentTarget.value)?n.value=e.currentTarget.value:n&&(n.value="")},children:[(0,p.jsx)("option",{value:"naver.com",children:"naver.com"}),(0,p.jsx)("option",{value:"hanmail.net",children:"hanmail.net"}),(0,p.jsx)("option",{value:"gmail.com",children:"gmail.com"}),(0,p.jsx)("option",{value:"nate.com",children:"nate.com"}),(0,p.jsx)("option",{value:"daum.net",children:"daum.net"}),(0,p.jsx)("option",{selected:!0,children:"\uc9c1\uc811\uc785\ub825"})]})})]})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\uc81c\ubaa9"})}),(0,p.jsx)("dd",{children:(0,p.jsx)("span",{className:"f3",children:(0,p.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",name:"title"})})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\ub0b4\uc6a9"})}),(0,p.jsx)("dd",{children:(0,p.jsx)("span",{className:"f3 txtar",children:(0,p.jsx)("textarea",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",name:"content"})})})]})})]})}),(0,p.jsx)("div",{className:"warn mt10",children:(0,p.jsx)("p",{children:"- \ubb38\uc758\uc5d0 \ub300\ud55c \ub2f5\ubcc0\uc740 \uc804\ud654 \ub610\ub294 \uba54\uc77c\uc744 \ud1b5\ud574 \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4."})}),(0,p.jsxs)("div",{className:"btit",children:[(0,p.jsx)("em",{className:"red",children:"(\ud544\uc218)"})," \uac1c\uc778\uc815\ubcf4\uc218\uc9d1 \ubc0f \uc774\uc6a9\ub3d9\uc758"]}),(0,p.jsxs)("div",{className:"yak_box",children:["\ud68c\uc0ac\ub294 \ube44\ud68c\uc6d0\uc758 \uac8c\uc2dc\uae00 \ub4f1\ub85d \uc2dc \ucf58\ud150\uce20 \ub4f1\ub85d \ubc0f \uace0\uac1d \ubb38\uc758 \uc751\ub300 \ub4f1\uc744 \uc6d0\ud65c\ud558\uac8c \uc9c4\ud589\ud558\uae30 \uc704\ud574 \uc544\ub798\uc640 \uac19\uc740 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"- \uc218\uc9d1\ud56d\ubaa9: \uc774\ub984, \ube44\ubc00\ubc88\ud638, \ub2c9\ub124\uc784,\ud734\ub300\ud3f0\ubc88\ud638,\uc774\uba54\uc77c",(0,p.jsx)("br",{}),"- \uc218\uc9d1/\uc774\uc6a9\ubaa9\uc801: \uac8c\uc2dc\uae00 \uc811\uc218 \ubc0f \uacb0\uacfc \ud68c\uc2e0",(0,p.jsx)("br",{}),"- \uc774\uc6a9\uae30\uac04: \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801 \ub2ec\uc131 \uc2dc \uae4c\uc9c0"]}),(0,p.jsx)("div",{className:"checkbox_wrap type2 mt10",children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"checkbox",name:"ty_ipju"}),(0,p.jsx)("b",{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."})]})}),(0,p.jsx)("div",{className:"btn_wrap content",children:(0,p.jsx)("a",{className:"btn_p2 btn_pop",href:"/",onClick:function(e){e.preventDefault();var n=document.querySelector('input[type="checkbox"][name="ty_ipju"]');if(null!==n&&void 0!==n&&n.checked){var s=document.querySelectorAll('input[type=radio][name="qna_type"]'),l="";if(s.forEach((function(e){e.checked&&(l=e.value)})),l){var a=document.querySelector('input[type=text][name="user_name"]'),t=null===a||void 0===a?void 0:a.value.trim(),i=document.querySelector('select[name="user_phone_1"]'),c=null===i||void 0===i?void 0:i.value,u=document.querySelector('input[name="user_phone_2"]'),m=null===u||void 0===u?void 0:u.value.replace(/\D/g,""),h="".concat(c,"-").concat(m);if(/^01[016789]-\d{8}$/.test(h)){var x=h.replace(/^(\d{3})-(\d{4})(\d{4})$/,"$1-$2-$3"),p=document.querySelector('input[name="user_email_1"]'),j=document.querySelector('input[name="user_email_2"]'),v=null===p||void 0===p?void 0:p.value.replace(/[\n\t]/g,""),_=null===j||void 0===j?void 0:j.value.replace(/[\n\t]/g,""),N="";if(!v&&!_||(N="".concat(null===p||void 0===p?void 0:p.value,"@").concat(null===j||void 0===j?void 0:j.value),d.iN.test(N))){var y=document.querySelector('input[type=text][name="title"]'),f=null===y||void 0===y?void 0:y.value.replace(/[\n\t]/g,"");if(!f||f.length<4)o.Am.error("\uc81c\ubaa9\uc744 4\uc790 \uc774\uc0c1 \uc791\uc131\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT});else{var I=document.querySelector('textarea[name="content"]'),b=null===I||void 0===I?void 0:I.value.replace(/[\n\t]/g,"");!b||b.length<4?o.Am.error("\ub0b4\uc6a9\uc744 4\uc790 \uc774\uc0c1 \uc791\uc131\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT}):r({name:t,email:N,phone:x,category:l,subject:f,content:b})}}else o.Am.error("\uc774\uba54\uc77c\uc8fc\uc18c\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\ud734\ub300\ud3f0 \ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\uc9c8\ubb38\uc758 \ubd84\ub958\ub97c \uc120\ud0dd\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})},children:"\ubb38\uc758\ud558\uae30"})}),(0,p.jsx)(o.Ix,{})]})},v=function(e){var n=e.onSuccess,s=x(),r=s.sendEmail,a=s.error;(0,l.useEffect)((function(){a instanceof c.B&&(a.response.status<400?n():a.response.status>=400&&o.Am.error("\uc804\uc1a1\uc5d0 \uc2e4\ud328 \ud558\uc600\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT}))}),[a,n]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("section",{className:"my-info ",children:[(0,p.jsxs)("h4",{className:"tit",children:["\ubb38\uc758 \ub0b4\uc6a9 ",(0,p.jsx)("span",{className:"required2",children:"\ud45c\uc2dc\ub294 \ud544\uc218 \uc785\ub825 \ud56d\ubaa9\uc785\ub2c8\ub2e4."})]}),(0,p.jsx)("div",{className:"insert_wrap",children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\ubb38\uc758 \ubd84\ub958"})}),(0,p.jsx)("dd",{className:"column",children:(0,p.jsxs)("div",{className:"radio_wrap sp-btw",children:[(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uacf5\uc0ac(\ud604\uc7a5)"}),(0,p.jsx)("b",{children:"\uacf5\uc0ac(\ud604\uc7a5)"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uc0ac\uc5c5\u2219\uc601\uc5c5\u2219\uc81c\uc548"}),(0,p.jsx)("b",{children:"\uc0ac\uc5c5 \u2219 \uc601\uc5c5 \u2219 \uc81c\uc548"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uacc4\uc57d"}),(0,p.jsx)("b",{children:"\uacc4\uc57d"})]}),(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"radio",name:"qna_type",value:"\uae30\ud0c0"}),(0,p.jsx)("b",{children:"\uae30\ud0c0"})]})]})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{children:"\uc774\ub984"})}),(0,p.jsx)("dd",{children:(0,p.jsx)("input",{type:"text",name:"user_name"})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsxs)("dt",{className:"dtw",children:[(0,p.jsx)("span",{className:"required",children:"\ud734\ub300\uc804\ud654"}),(0,p.jsx)("span",{className:"ex",children:"(-)\uc81c\uc678"})]}),(0,p.jsxs)("dd",{className:"btw_tel",children:[(0,p.jsxs)("select",{className:"rd2_dis",name:"user_phone_1",children:[(0,p.jsx)("option",{value:"010",selected:!0,children:"010"}),(0,p.jsx)("option",{value:"016",children:"016"}),(0,p.jsx)("option",{value:"017",children:"017"}),(0,p.jsx)("option",{value:"018",children:"018"}),(0,p.jsx)("option",{value:"019",children:"019"})]}),(0,p.jsx)("input",{type:"number",className:"rd2_dis",name:"user_phone_2",maxLength:8})]})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{children:"\uc774\uba54\uc77c"})}),(0,p.jsxs)("dd",{children:[(0,p.jsxs)("div",{className:"email_wrap",children:[(0,p.jsx)("input",{type:"email",name:"user_email_1"}),(0,p.jsx)("span",{children:"@"}),(0,p.jsx)("input",{type:"email",name:"user_email_2"})]}),(0,p.jsxs)("select",{title:"E-mail \uc120\ud0dd",onChange:function(e){var n=document.querySelector('input[name="user_email_2"]');n&&/\.(com|net|co\.kr)$/.test(e.currentTarget.value)?n.value=e.currentTarget.value:n&&(n.value="")},children:[(0,p.jsx)("option",{value:"naver.com",children:"naver.com"}),(0,p.jsx)("option",{value:"hanmail.net",children:"hanmail.net"}),(0,p.jsx)("option",{value:"gmail.com",children:"gmail.com"}),(0,p.jsx)("option",{value:"nate.com",children:"nate.com"}),(0,p.jsx)("option",{value:"daum.net",children:"daum.net"}),(0,p.jsx)("option",{selected:!0,children:"\uc9c1\uc811\uc785\ub825"})]})]})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\uc81c\ubaa9"})}),(0,p.jsx)("dd",{children:(0,p.jsx)("input",{type:"text",placeholder:"\uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694",name:"title"})})]})}),(0,p.jsx)("li",{children:(0,p.jsxs)("dl",{className:"col",children:[(0,p.jsx)("dt",{children:(0,p.jsx)("span",{className:"required",children:"\ub0b4\uc6a9"})}),(0,p.jsx)("dd",{className:"flexbox",children:(0,p.jsx)("div",{className:"f1 txtar",children:(0,p.jsx)("textarea",{placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",name:"content"})})})]})})]})})]}),(0,p.jsxs)("div",{className:"yak_wrap",children:[(0,p.jsxs)("div",{className:"btit",children:[(0,p.jsx)("em",{className:"red",children:"(\ud544\uc218)"}),"\uac1c\uc778\uc815\ubcf4\uc218\uc9d1 \ubc0f \uc774\uc6a9\ub3d9\uc758"]}),(0,p.jsxs)("div",{className:"yak_box",children:["\ud68c\uc0ac\ub294 \ube44\ud68c\uc6d0\uc758 \uac8c\uc2dc\uae00 \ub4f1\ub85d \uc2dc \ucf58\ud150\uce20 \ub4f1\ub85d \ubc0f \uace0\uac1d \ubb38\uc758 \uc751\ub300 \ub4f1\uc744 \uc6d0\ud65c\ud558\uac8c \uc9c4\ud589\ud558\uae30 \uc704\ud574 \uc544\ub798\uc640 \uac19\uc740 \uac1c\uc778\uc815\ubcf4\ub97c \uc218\uc9d1\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),"- \uc218\uc9d1\ud56d\ubaa9: \uc774\ub984, \ube44\ubc00\ubc88\ud638, \ub2c9\ub124\uc784,\ud734\ub300\ud3f0\ubc88\ud638,\uc774\uba54\uc77c",(0,p.jsx)("br",{}),"- \uc218\uc9d1/\uc774\uc6a9\ubaa9\uc801: \uac8c\uc2dc\uae00 \uc811\uc218 \ubc0f \uacb0\uacfc \ud68c\uc2e0",(0,p.jsx)("br",{}),"- \uc774\uc6a9\uae30\uac04: \uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\ubaa9\uc801 \ub2ec\uc131 \uc2dc \uae4c\uc9c0"]}),(0,p.jsx)("div",{className:"checkbox_wrap type2 mt10",children:(0,p.jsxs)("label",{children:[(0,p.jsx)("input",{type:"checkbox",name:"ty_ipju"}),(0,p.jsx)("b",{children:"\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4."})]})}),(0,p.jsx)("div",{className:"btn_wrap content mt30",children:(0,p.jsx)("a",{className:"btn_p2 btn_pop",href:"/",onClick:function(e){e.preventDefault();var n=document.querySelector('input[type="checkbox"][name="ty_ipju"]');if(null!==n&&void 0!==n&&n.checked){var s=document.querySelectorAll('input[type=radio][name="qna_type"]'),l="";if(s.forEach((function(e){e.checked&&(l=e.value)})),l){var a=document.querySelector('input[type=text][name="user_name"]'),t=null===a||void 0===a?void 0:a.value.trim(),i=document.querySelector('select[name="user_phone_1"]'),c=null===i||void 0===i?void 0:i.value,u=document.querySelector('input[name="user_phone_2"]'),m=null===u||void 0===u?void 0:u.value.replace(/\D/g,""),h="".concat(c,"-").concat(m);if(/^01[016789]-\d{8}$/.test(h)){var x=h.replace(/^(\d{3})-(\d{4})(\d{4})$/,"$1-$2-$3"),p=document.querySelector('input[name="user_email_1"]'),j=document.querySelector('input[name="user_email_2"]'),v=null===p||void 0===p?void 0:p.value.replace(/[\n\t]/g,""),_=null===j||void 0===j?void 0:j.value.replace(/[\n\t]/g,""),N="";if(!v&&!_||(N="".concat(null===p||void 0===p?void 0:p.value,"@").concat(null===j||void 0===j?void 0:j.value),d.iN.test(N))){var y=document.querySelector('input[type=text][name="title"]'),f=null===y||void 0===y?void 0:y.value.replace(/[\n\t]/g,"");if(!f||f.length<4)o.Am.error("\uc81c\ubaa9\uc744 4\uc790 \uc774\uc0c1 \uc791\uc131\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT});else{var I=document.querySelector('textarea[name="content"]'),b=null===I||void 0===I?void 0:I.value.replace(/[\n\t]/g,"");!b||b.length<4?o.Am.error("\ub0b4\uc6a9\uc744 4\uc790 \uc774\uc0c1 \uc791\uc131\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT}):r({name:t,email:N,phone:x,category:l,subject:f,content:b})}}else o.Am.error("\uc774\uba54\uc77c\uc8fc\uc18c\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\ud734\ub300\ud3f0 \ubc88\ud638\uac00 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\uc9c8\ubb38\uc758 \ubd84\ub958\ub97c \uc120\ud0dd\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})}else o.Am.error("\uac1c\uc778\uc815\ubcf4 \uc218\uc9d1 \ubc0f \uc774\uc6a9\uc5d0 \ub3d9\uc758\ud574 \uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",{position:o.Am.POSITION.TOP_RIGHT})},children:"\ubb38\uc758\ud558\uae30"})})]}),(0,p.jsx)(o.Ix,{})]})},_=function(e){var n=e.onSuccess;return(0,p.jsx)(p.Fragment,{children:i.jU?(0,p.jsx)(j,{onSuccess:n}):(0,p.jsx)(v,{onSuccess:n})})},N=function(){var e=(0,l.useState)(!1),n=(0,r.Z)(e,2),s=n[0],i=n[1];return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.Z,{title:"\uace0\uac1d\uc9c0\uc6d0"}),(0,p.jsx)(a.Z,{}),(0,p.jsxs)("div",{id:"container",className:"container customer report",children:[!s&&(0,p.jsxs)("div",{className:"content",children:[(0,p.jsx)("div",{className:"cont_tit_wrap",children:(0,p.jsxs)("h3",{className:"sub-tit",children:[(0,p.jsx)("span",{style:{animationDelay:"0.36s"},children:"\uace0"}),(0,p.jsx)("span",{style:{animationDelay:"0.48s"},children:"\uac1d"}),(0,p.jsx)("span",{style:{animationDelay:"0.6s"},children:"\uc9c0"}),(0,p.jsx)("span",{style:{animationDelay:"0.72s"},children:"\uc6d0"})]})}),(0,p.jsxs)("div",{className:"guide_wrap",children:[(0,p.jsx)("h5",{children:"\uc774\uc6a9\uc548\ub0b4"}),(0,p.jsxs)("p",{children:["\uad81\uae08\ud558\uc2e0 \uc0ac\ud56d\uc744 \uc0c1\ub2f4 \uc2e0\uccad\ud574 \uc8fc\uc138\uc694! ",(0,p.jsx)("span",{style:{color:"#014498"},children:"\ucd5c\uc120\uc758 \ub178\ub825\uc73c\ub85c \uc815\uc131\uaecf \ucc98\ub9ac\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."})]}),(0,p.jsx)("p",{children:"\ubcf4\ub2e4 \ube60\ub978 \uc0c1\ub2f4\uc744 \uc6d0\ud558\uc2dc\uba74 \uc720\uc120\uc73c\ub85c \ubb38\uc758\ubc14\ub78d\ub2c8\ub2e4."})]}),(0,p.jsx)("div",{className:"tip_wrap",children:(0,p.jsx)(_,{onSuccess:function(){i(!0)}})}),(0,p.jsxs)("div",{className:"policy_wrap",children:[(0,p.jsx)("h5",{children:"\uc804\ud654\uc0c1\ub2f4 \uc548\ub0b4"}),(0,p.jsx)("p",{children:"\uace0\uac1d\uc0c1\ub2f4 : 054-463-8856"}),(0,p.jsx)("p",{children:"E-mail : cs@a1enc.com"}),(0,p.jsx)("p",{children:"FAX : 054-463-8857"})]})]}),s&&(0,p.jsx)("div",{className:"content",children:(0,p.jsxs)("div",{className:"guide_wrap",style:{textAlign:"center"},children:[(0,p.jsx)("h5",{children:"\ubb38\uc758 \uc811\uc218\uc644\ub8cc"}),(0,p.jsxs)("p",{children:["\ubb38\uc758\ud558\uc2e0 \ub0b4\uc6a9\uc774",(0,p.jsx)("span",{style:{color:"#014498"},children:"\uc815\uc0c1\uc801\uc73c\ub85c \uc811\uc218\ub418\uc5c8\uc2b5\ub2c8\ub2e4."})]}),(0,p.jsx)("p",{children:"\ub2f4\ub2f9\uc790\uac00 \ube60\ub978 \uc2dc\uc77c\ub0b4\uc5d0 \uc5f0\ub77d\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."})]})})]})]})}},2539:function(e,n,s){s.d(n,{Z:function(){return m}});var r=s(4165),l=s(5861),a=s(627),t=s(5265),i=s(3102),c=null,o=a.ZP.extend({prefixUrl:"./",timeout:6e4,hooks:{beforeRequest:[function(e,n){var s=localStorage.getItem(t.zR);s&&s.length>0&&e.headers.set("Authorization","Bearer ".concat(s))}],afterResponse:[function(){var e=(0,l.Z)((0,r.Z)().mark((function e(n,s,l){var o,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(401!==l.status||n.headers.has("__isRetryRequest")){e.next=19;break}return n.headers.set("__isRetryRequest","true"),e.prev=2,c=c||(console.info("Refreshing access token"),(0,a.ZP)(i.e.FRESH_TOKEN).json()),e.next=6,c;case 6:return o=e.sent,d=o.result.accessToken,c=null,localStorage.setItem(t.zR,d),n.headers.set("Authorization","Bearer ".concat(d)),e.abrupt("return",(0,a.ZP)(n));case 14:e.prev=14,e.t0=e.catch(2),localStorage.removeItem(t.zR),localStorage.removeItem(t.Rp),window.location.replace("/");case 19:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(n,s,r){return e.apply(this,arguments)}}()]}}),d=o,u=(new Date).getTime(),m={getCleanrooms:function(){return d.get(i.F.CLEANROOM,{searchParams:{_:u}}).json()},getCivils:function(){return d.get(i.F.CIVIL,{searchParams:{_:u}}).json()},getNews:function(){return d.get(i.F.NEWS,{searchParams:{_:u}}).json()},getNotices:function(){return d.get(i.F.NOTICE,{searchParams:{_:u}}).json()},getRenovatings:function(){return d.get(i.F.RENOVATING,{searchParams:{_:u}}).json()},getContent:function(e){return d.get(i.F.ARTICLE_PARAM(e),{searchParams:{_:u}}).json()},poseSendEmail:function(e){return d.post(i.F.SENDEMAIL,{prefixUrl:"",mode:"no-cors",body:e})},poseSendJson:function(e){return d.post(i.F.SENDEMAIL_GOOGLE,{prefixUrl:"",mode:"no-cors",json:e})}}}}]);