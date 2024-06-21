import{_ as te}from"./AppLoadingIndicator.vue_vue_type_script_setup_true_lang-BqNFTyZi.js";import{d as R,M as b,T as H,r as A,N as ie,O as ne,P as Y,l as M,j as Q,w,a as F,o,g as v,f as d,e as $,A as D,b as N,n as e,q as c,K as k,x as O,L as V,h as f,s as _,c as P,F as X,i as Z,y as W,Q as se,R as oe,k as re,U as le,m as U,V as S,W as ce,p as ve,t as B,v as G,z as L,X as J,Y as pe,Z as ue,_ as de,$ as me,B as x,C as fe,D as ge,a0 as he,I as E,S as ye}from"./main-B2WEe81J.js";import{_ as be}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-wU0LJc8n.js";import{_ as Ne}from"./UserProfile.vue_vue_type_script_setup_true_lang-BoCC4gl4.js";import{_ as _e}from"./I18n.vue_vue_type_script_setup_true_lang-DUSC1es5.js";import{P as Ce}from"./vue3-perfect-scrollbar.esm-DnXQZaIy.js";import{V as ke}from"./VNodeRenderer-D_Gnf65r.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as Ve}from"./VSpacer-Cug3-14K.js";import"./VTooltip-D6LPo65m.js";import"./VOverlay-ERQIqi3h.js";import"./VImg-BOzXS1DE.js";import"./VMenu-BcbDcJR3.js";import"./VList-BONENLCo.js";import"./index-DGoEMpsi.js";import"./VAvatar-BXms5E61.js";import"./VDivider-Dt6kjG2N.js";import"./useAbility-DYHri9nM.js";import"./api-D7Sbza_t.js";import"./index-BYrzgnBV.js";import"./VBadge-CKJxUNeA.js";/* empty css              */const Ae=R({name:"TransitionExpand",setup(g,{slots:a}){const r=t=>{const y=getComputedStyle(t).width;t.style.width=y,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";const h=getComputedStyle(t).height;t.style.width="",t.style.position="",t.style.visibility="",t.style.height="0px",getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height=h})},i=t=>{t.style.height="auto"},s=t=>{const y=getComputedStyle(t).height;t.style.height=y,getComputedStyle(t).height,requestAnimationFrame(()=>{t.style.height="0px"})};return()=>b(b(H),{name:"expand",onEnter:r,onAfterEnter:i,onLeave:s},()=>{var t;return(t=a.default)==null?void 0:t.call(a)})}}),Ie=ee(Ae,[["__scopeId","data-v-bc460233"]]),Se=g=>(se("data-v-7efbee64"),g=g(),oe(),g),we={class:"nav-header"},$e=Se(()=>$("div",{class:"vertical-nav-items-shadow"},null,-1)),Re=R({__name:"VerticalNav",props:{tag:{default:"aside"},navItems:{},isOverlayNavActive:{type:Boolean},toggleIsOverlayNavActive:{}},setup(g){const a=g,r=A(),i=ie(r);ne(Y,i);const s=M(),t=p=>"heading"in p?Me:"children"in p?Te:ae,y=Q();w(()=>y.name,()=>{a.toggleIsOverlayNavActive(!1)});const h=A(!1),m=p=>h.value=p,C=p=>{h.value=p.target.scrollTop>0},I=s.isVerticalNavMini(i);return(p,n)=>{const u=F("RouterLink");return o(),v(f(a.tag),{ref_key:"refNav",ref:r,class:W(["layout-vertical-nav",[{"overlay-nav":e(s).isLessThanOverlayNavBreakpoint,hovered:e(i),visible:p.isOverlayNavActive,scrolled:e(h)}]])},{default:d(()=>[$("div",we,[D(p.$slots,"nav-header",{},()=>[N(u,{to:"/",class:"app-logo app-title-wrapper"},{default:d(()=>[N(e(ke),{nodes:e(c).app.logo},null,8,["nodes"]),N(H,{name:"vertical-nav-app-title"},{default:d(()=>[k($("h1",{class:"app-logo-title"},O(e(c).app.title),513),[[V,!e(I)]])]),_:1})]),_:1}),k((o(),v(f(e(c).app.iconRenderer||"div"),_({class:["header-action d-none nav-unpin",e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(c).icons.verticalNavUnPinned,{onClick:n[0]||(n[0]=l=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[V,e(s).isVerticalNavCollapsed]]),k((o(),v(f(e(c).app.iconRenderer||"div"),_({class:["header-action d-none nav-pin",!e(s).isVerticalNavCollapsed&&"d-lg-block"]},e(c).icons.verticalNavPinned,{onClick:n[1]||(n[1]=l=>e(s).isVerticalNavCollapsed=!e(s).isVerticalNavCollapsed)}),null,16,["class"])),[[V,!e(s).isVerticalNavCollapsed]]),(o(),v(f(e(c).app.iconRenderer||"div"),_({class:"header-action d-lg-none"},e(c).icons.close,{onClick:n[2]||(n[2]=l=>p.toggleIsOverlayNavActive(!1))}),null,16))],!0)]),D(p.$slots,"before-nav-items",{},()=>[$e],!0),D(p.$slots,"nav-items",{updateIsVerticalNavScrolled:m},()=>[(o(),v(e(Ce),{key:e(s).isAppRTL,tag:"ul",class:"nav-items",options:{wheelPropagation:!1},onPsScrollY:C},{default:d(()=>[(o(!0),P(X,null,Z(p.navItems,(l,j)=>(o(),v(f(t(l)),{key:j,item:l},null,8,["item"]))),128))]),_:1}))],!0)]),_:3},8,["class"])}}}),Oe=ee(Re,[["__scopeId","data-v-7efbee64"]]),Le={class:"nav-group-children"},Te=R({name:"VerticalNavGroup",__name:"VerticalNavGroup",props:{item:{}},setup(g){const a=g,r=Q(),i=re(),s=M(),t=s.isVerticalNavMini(),y=le(Y,A(!1)),h=A(!1),m=A(!1),C=n=>n.some(u=>{let l=S.value.includes(u.title);return"children"in u&&(l=C(u.children)||l),l}),I=n=>{n.forEach(u=>{"children"in u&&I(u.children),S.value=S.value.filter(l=>l!==u.title)})};w(()=>r.path,()=>{const n=U(a.item.children,i);m.value=n&&!s.isVerticalNavMini(y).value,h.value=n},{immediate:!0}),w(m,n=>{const u=S.value.indexOf(a.item.title);n&&u===-1?S.value.push(a.item.title):!n&&u!==-1&&(S.value.splice(u,1),I(a.item.children))},{immediate:!0}),w(S,n=>{if(n.at(-1)===a.item.title)return;const l=U(a.item.children,i);l||C(a.item.children)||(m.value=l,h.value=l)},{deep:!0}),w(s.isVerticalNavMini(y),n=>{m.value=n?!1:h.value});const p=ce();return(n,u)=>e(ve)(n.item)?(o(),P("li",{key:0,class:W(["nav-group",[{active:e(h),open:e(m),disabled:n.item.disable}]])},[$("div",{class:"nav-group-label",onClick:u[0]||(u[0]=l=>m.value=!e(m))},[(o(),v(f(e(c).app.iconRenderer||"div"),_(n.item.icon||e(c).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),(o(),v(f(e(p)?J:"div"),_({name:"transition-slide-x"},e(p)?void 0:{class:"d-flex align-center flex-grow-1"}),{default:d(()=>[k((o(),v(f(e(c).app.i18n.enable?"i18n-t":"span"),_(e(B)(n.item.title,"span"),{key:"title",class:"nav-item-title"}),{default:d(()=>[G(O(n.item.title),1)]),_:1},16)),[[V,!e(t)]]),n.item.badgeContent?k((o(),v(f(e(c).app.i18n.enable?"i18n-t":"span"),_({key:0},e(B)(n.item.badgeContent,"span"),{key:"badge",class:["nav-item-badge",n.item.badgeClass]}),{default:d(()=>[G(O(n.item.badgeContent),1)]),_:1},16,["class"])),[[V,!e(t)]]):L("",!0),k((o(),v(f(e(c).app.iconRenderer||"div"),_(e(c).icons.chevronRight,{key:"arrow",class:"nav-group-arrow"}),null,16)),[[V,!e(t)]])]),_:1},16))]),N(e(Ie),null,{default:d(()=>[k($("ul",Le,[(o(!0),P(X,null,Z(n.item.children,l=>(o(),v(f("children"in l?"VerticalNavGroup":e(ae)),{key:l.title,item:l},null,8,["item"]))),128))],512),[[V,e(m)]])]),_:1})],2)):L("",!0)}}),Pe=R({props:{navItems:{type:Array,required:!0},verticalNavAttrs:{type:Object,default:()=>({})}},setup(g,{slots:a}){const{width:r}=pe(),i=M(),s=A(!1),t=A(!1),y=ue(s);return de(s,t),w(r,()=>{!i.isLessThanOverlayNavBreakpoint&&t.value&&(t.value=!1)}),()=>{var q,z,K;const h=me(g,"verticalNavAttrs"),{wrapper:m,wrapperProps:C,...I}=h.value,p=b(Oe,{isOverlayNavActive:s.value,toggleIsOverlayNavActive:y,navItems:g.navItems,...I},{"nav-header":()=>{var T;return(T=a["vertical-nav-header"])==null?void 0:T.call(a)},"before-nav-items":()=>{var T;return(T=a["before-vertical-nav-items"])==null?void 0:T.call(a)}}),n=b("header",{class:["layout-navbar",{"navbar-blur":i.isNavbarBlurEnabled}]},[b("div",{class:"navbar-content-container"},(q=a.navbar)==null?void 0:q.call(a,{toggleVerticalOverlayNavActive:y}))]),u=b("main",{class:"layout-page-content"},b("div",{class:"page-content-container"},(z=a.default)==null?void 0:z.call(a))),l=b("footer",{class:"layout-footer"},[b("div",{class:"footer-content-container"},(K=a.footer)==null?void 0:K.call(a))]),j=b("div",{class:["layout-overlay",{visible:t.value}],onClick:()=>{t.value=!t.value}});return b("div",{class:["layout-wrapper",...i._layoutClasses]},[m?b(m,C,{default:()=>p}):p,b("div",{class:"layout-content-wrapper"},[n,u,l]),j])}}}),ae=R({__name:"VerticalNavLink",props:{item:{}},setup(g){const r=M().isVerticalNavMini();return(i,s)=>e(x)(i.item.action,i.item.subject)?(o(),P("li",{key:0,class:W(["nav-link",{disabled:i.item.disable}])},[(o(),v(f(i.item.to?"RouterLink":"a"),_(e(ge)(i.item),{class:{"router-link-active router-link-exact-active":e(fe)(i.item,i.$router)}}),{default:d(()=>[(o(),v(f(e(c).app.iconRenderer||"div"),_(i.item.icon||e(c).verticalNav.defaultNavItemIconProps,{class:"nav-item-icon"}),null,16)),N(J,{name:"transition-slide-x"},{default:d(()=>[k((o(),v(f(e(c).app.i18n.enable?"i18n-t":"span"),_({key:"title",class:"nav-item-title"},e(B)(i.item.title,"span")),{default:d(()=>[G(O(i.item.title),1)]),_:1},16)),[[V,!e(r)]]),i.item.badgeContent?k((o(),v(f(e(c).app.i18n.enable?"i18n-t":"span"),_({key:"badge",class:["nav-item-badge",i.item.badgeClass]},e(B)(i.item.badgeContent,"span")),{default:d(()=>[G(O(i.item.badgeContent),1)]),_:1},16,["class"])),[[V,!e(r)]]):L("",!0)]),_:1})]),_:1},16,["class"]))],2)):L("",!0)}}),Be={key:0,class:"nav-section-title"},Ge={class:"title-wrapper"},Me=R({__name:"VerticalNavSectionTitle",props:{item:{}},setup(g){const r=M().isVerticalNavMini();return(i,s)=>e(x)(i.item.action,i.item.subject)?(o(),P("li",Be,[$("div",Ge,[N(H,{name:"vertical-nav-section-title",mode:"out-in"},{default:d(()=>[(o(),v(f(e(r)?e(c).app.iconRenderer:e(c).app.i18n.enable?"i18n-t":"span"),_({key:e(r),class:e(r)?"placeholder-icon":"title-text"},{...e(c).icons.sectionTitlePlaceholder,...e(B)(i.item.heading,"span")}),{default:d(()=>[G(O(e(r)?null:i.item.heading),1)]),_:1},16,["class"]))]),_:1})])])):L("",!0)}}),je=[{title:"Dasbor",to:{name:"dashboard"},icon:{icon:"tabler-smart-home"},action:"read",subject:"AclDemo"},{heading:"Manajemen"},{title:"Karyawan",to:{name:"apps-user-list"},icon:{icon:"tabler-users-group"}},{title:"Aktifitas",to:{name:"apps-activities-list"},icon:{icon:"tabler-activity"},action:"read",subject:"AclDemo"},{title:"Slip Gaji",to:{name:"apps-payslip-list"},icon:{icon:"tabler-briefcase"}},{heading:"Pengaturan"},{title:"Master Data",to:{name:"data-master-list"},icon:{icon:"tabler-database"},action:"read",subject:"AclDemo"}],De={class:"d-flex h-100 align-center"},la=R({__name:"DefaultLayoutWithVerticalNav",setup(g){const a=A(!1),r=A(null);return w([a,r],()=>{a.value&&r.value&&r.value.fallbackHandle(),!a.value&&r.value&&r.value.resolveHandle()},{immediate:!0}),(i,s)=>{const t=F("IconBtn"),y=te,h=F("RouterView");return o(),v(e(Pe),{"nav-items":e(je)},{navbar:d(({toggleVerticalOverlayNavActive:m})=>{var C;return[$("div",De,[N(t,{id:"vertical-nav-toggle-btn",class:"ms-n3 d-lg-none",onClick:I=>m(!0)},{default:d(()=>[N(he,{size:"26",icon:"tabler-menu-2"})]),_:2},1032,["onClick"]),N(be),N(Ve),e(E).app.i18n.enable&&((C=e(E).app.i18n.langConfig)!=null&&C.length)?(o(),v(_e,{key:0,languages:e(E).app.i18n.langConfig},null,8,["languages"])):L("",!0),N(Ne)])]}),default:d(()=>[N(y,{ref_key:"refLoadingIndicator",ref:r},null,512),N(h,null,{default:d(({Component:m})=>[(o(),v(ye,{timeout:0,onFallback:s[0]||(s[0]=C=>a.value=!0),onResolve:s[1]||(s[1]=C=>a.value=!1)},{default:d(()=>[(o(),v(f(m)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}});export{la as default};