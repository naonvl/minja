import{_ as ee}from"./AppLoadingIndicator.vue_vue_type_script_setup_true_lang-CdyrMcfm.js";import{d as K,o as v,c as z,F as $t,i as Dt,g as _,h as S,j as Bt,k as ne,l as vt,r as M,w as ot,m as oe,n as u,p as ie,f as R,e as x,q as $,s as j,t as Vt,v as It,x as yt,y as Z,z as wt,A as H,b as E,B as se,C as re,D as le,E as ae,G as ce,H as fe,I as O,J as dt,K as Lt,L as kt,T as ue,a as St,S as pe}from"./main-DsXvv9LY.js";import de from"./Footer-D3OO42YK.js";import{_ as me}from"./NavbarThemeSwitcher.vue_vue_type_script_setup_true_lang-BXlMPf8K.js";import{_ as ge}from"./UserProfile.vue_vue_type_script_setup_true_lang-DMqb6QEl.js";import{_ as he}from"./I18n.vue_vue_type_script_setup_true_lang-D6b8Iaid.js";import{V as ve}from"./VNodeRenderer-BCDSVE3n.js";import{V as ye}from"./VSpacer-Cq3bB0K4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VTooltip-Cr_5M3YS.js";import"./VOverlay-B73x5_p_.js";import"./VImg-Ccfp_Jzr.js";import"./VMenu-CQf-s9lF.js";import"./VList-5AWwNCMz.js";import"./index-UEwQrg4V.js";import"./VAvatar-BfskAj_j.js";import"./VDivider-8jh_zNU8.js";import"./useAbility-BI6r1fpR.js";import"./api-B1Wj60p3.js";import"./index-BYrzgnBV.js";import"./VBadge-BVdccktu.js";/* empty css              */const we={class:"nav-items"},xe=K({__name:"HorizontalNav",props:{navItems:{}},setup(t){const e=n=>"children"in n?Ce:Mt;return(n,o)=>(v(),z("ul",we,[(v(!0),z($t,null,Dt(n.navItems,(i,r)=>(v(),_(S(e(i)),{key:r,item:i},null,8,["item"]))),128))]))}}),be={class:"nav-group-label"},Ce=K({name:"HorizontalNavGroup",__name:"HorizontalNavGroup",props:{item:{},childrenAtEnd:{type:Boolean,default:!1},isSubItem:{type:Boolean,default:!1}},setup(t){const e=t,n=Bt(),o=ne(),i=vt(),r=M(!1);return ot(()=>n.path,()=>{const s=oe(e.item.children,o);r.value=s},{immediate:!0}),(s,l)=>u(ie)(s.item)?(v(),_(u(fn),{key:0,"is-rtl":u(i).isAppRTL,class:Z(["nav-group",[{active:u(r),"children-at-end":s.childrenAtEnd,"sub-item":s.isSubItem,disabled:s.item.disable}]]),tag:"li","content-container-tag":"ul","popper-inline-end":s.childrenAtEnd},{content:R(()=>[(v(!0),z($t,null,Dt(s.item.children,a=>(v(),_(S("children"in a?"HorizontalNavGroup":u(Mt)),{key:a.title,item:a,"children-at-end":"","is-sub-item":""},null,8,["item"]))),128))]),default:R(()=>[x("div",be,[(v(),_(S(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},s.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),_(S(u($).app.i18n.enable?"i18n-t":"span"),j(u(Vt)(s.item.title,"span"),{class:"nav-item-title"}),{default:R(()=>[It(yt(s.item.title),1)]),_:1},16)),(v(),_(S(u($).app.iconRenderer||"div"),j(u($).icons.chevronDown,{class:"nav-group-arrow"}),null,16))])]),_:1},8,["is-rtl","class","popper-inline-end"])):wt("",!0)}}),_e={class:"layout-navbar"},Ae={class:"navbar-content-container"},Re={class:"layout-horizontal-nav"},Le={class:"horizontal-nav-content-container"},ke={class:"layout-page-content"},Se={class:"layout-footer"},Ne={class:"footer-content-container"},Te=K({__name:"HorizontalNavLayout",props:{navItems:{}},setup(t){const e=vt();return(n,o)=>(v(),z("div",{class:Z(["layout-wrapper",u(e)._layoutClasses])},[x("div",{class:Z(["layout-navbar-and-nav-container",u(e).isNavbarBlurEnabled&&"header-blur"])},[x("div",_e,[x("div",Ae,[H(n.$slots,"navbar")])]),x("div",Re,[x("div",Le,[E(u(xe),{"nav-items":n.navItems},null,8,["nav-items"])])])],2),x("main",ke,[H(n.$slots,"default")]),x("footer",Se,[x("div",Ne,[H(n.$slots,"footer")])])],2))}}),Mt=K({__name:"HorizontalNavLink",props:{item:{},isSubItem:{type:Boolean,default:!1}},setup(t){const e=t;return(n,o)=>u(se)(n.item.action,n.item.subject)?(v(),z("li",{key:0,class:Z(["nav-link",[{"sub-item":e.isSubItem,disabled:n.item.disable}]])},[(v(),_(S(n.item.to?"RouterLink":"a"),j(u(le)(n.item),{class:{"router-link-active router-link-exact-active":u(re)(n.item,n.$router)}}),{default:R(()=>[(v(),_(S(u($).app.iconRenderer||"div"),j({class:"nav-item-icon"},n.item.icon||u($).verticalNav.defaultNavItemIconProps),null,16)),(v(),_(S(u($).app.i18n.enable?"i18n-t":"span"),j({class:"nav-item-title"},u(Vt)(n.item.title,"span")),{default:R(()=>[It(yt(n.item.title),1)]),_:1},16))]),_:1},16,["class"]))],2)):wt("",!0)}}),mt=Math.min,X=Math.max,it=Math.round,D=t=>({x:t,y:t}),Ee={left:"right",right:"left",bottom:"top",top:"bottom"},Oe={start:"end",end:"start"};function Nt(t,e,n){return X(t,mt(e,n))}function lt(t,e){return typeof t=="function"?t(e):t}function F(t){return t.split("-")[0]}function at(t){return t.split("-")[1]}function Ht(t){return t==="x"?"y":"x"}function zt(t){return t==="y"?"height":"width"}function ct(t){return["top","bottom"].includes(F(t))?"y":"x"}function Ft(t){return Ht(ct(t))}function Pe(t,e,n){n===void 0&&(n=!1);const o=at(t),i=Ft(t),r=zt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=st(s)),[s,st(s)]}function $e(t){const e=st(t);return[gt(t),e,gt(e)]}function gt(t){return t.replace(/start|end/g,e=>Oe[e])}function De(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function Be(t,e,n,o){const i=at(t);let r=De(F(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(gt)))),r}function st(t){return t.replace(/left|right|bottom|top/g,e=>Ee[e])}function Ve(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ie(t){return typeof t!="number"?Ve(t):{top:t,right:t,bottom:t,left:t}}function rt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Tt(t,e,n){let{reference:o,floating:i}=t;const r=ct(e),s=Ft(e),l=zt(s),a=F(e),c=r==="y",p=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,g=o[l]/2-i[l]/2;let d;switch(a){case"top":d={x:p,y:o.y-i.height};break;case"bottom":d={x:p,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:f};break;case"left":d={x:o.x-i.width,y:f};break;default:d={x:o.x,y:o.y}}switch(at(e)){case"start":d[s]-=g*(n&&c?-1:1);break;case"end":d[s]+=g*(n&&c?-1:1);break}return d}const Me=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,l=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let c=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:p,y:f}=Tt(c,o,a),g=o,d={},m=0;for(let h=0;h<l.length;h++){const{name:y,fn:w}=l[h],{x:b,y:C,data:T,reset:A}=await w({x:p,y:f,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:c,platform:s,elements:{reference:t,floating:e}});p=b??p,f=C??f,d={...d,[y]:{...d[y],...T}},A&&m<=50&&(m++,typeof A=="object"&&(A.placement&&(g=A.placement),A.rects&&(c=A.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):A.rects),{x:p,y:f}=Tt(c,g,a)),h=-1)}return{x:p,y:f,placement:g,strategy:i,middlewareData:d}};async function Wt(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:l,strategy:a}=t,{boundary:c="clippingAncestors",rootBoundary:p="viewport",elementContext:f="floating",altBoundary:g=!1,padding:d=0}=lt(e,t),m=Ie(d),y=l[g?f==="floating"?"reference":"floating":f],w=rt(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(y)))==null||n?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:p,strategy:a})),b=f==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),T=await(r.isElement==null?void 0:r.isElement(C))?await(r.getScale==null?void 0:r.getScale(C))||{x:1,y:1}:{x:1,y:1},A=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:C,strategy:a}):b);return{top:(w.top-A.top+m.top)/T.y,bottom:(A.bottom-w.bottom+m.bottom)/T.y,left:(w.left-A.left+m.left)/T.x,right:(A.right-w.right+m.right)/T.x}}const He=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:a,elements:c}=e,{mainAxis:p=!0,crossAxis:f=!0,fallbackPlacements:g,fallbackStrategy:d="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...y}=lt(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const w=F(i),b=F(l)===l,C=await(a.isRTL==null?void 0:a.isRTL(c.floating)),T=g||(b||!h?[st(l)]:$e(l));!g&&m!=="none"&&T.push(...Be(l,h,m,C));const A=[l,...T],pt=await Wt(e,y),nt=[];let J=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&nt.push(pt[w]),f){const I=Pe(i,s,C);nt.push(pt[I[0]],pt[I[1]])}if(J=[...J,{placement:i,overflows:nt}],!nt.every(I=>I<=0)){var Ct,_t;const I=(((Ct=r.flip)==null?void 0:Ct.index)||0)+1,Rt=A[I];if(Rt)return{data:{index:I,overflows:J},reset:{placement:Rt}};let Q=(_t=J.filter(W=>W.overflows[0]<=0).sort((W,G)=>W.overflows[1]-G.overflows[1])[0])==null?void 0:_t.placement;if(!Q)switch(d){case"bestFit":{var At;const W=(At=J.map(G=>[G.placement,G.overflows.filter(U=>U>0).reduce((U,te)=>U+te,0)]).sort((G,U)=>G[1]-U[1])[0])==null?void 0:At[0];W&&(Q=W);break}case"initialPlacement":Q=l;break}if(i!==Q)return{reset:{placement:Q}}}return{}}}};async function ze(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=F(n),l=at(n),a=ct(n)==="y",c=["left","top"].includes(s)?-1:1,p=r&&a?-1:1,f=lt(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:m}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...f};return l&&typeof m=="number"&&(d=l==="end"?m*-1:m),a?{x:d*p,y:g*c}:{x:g*c,y:d*p}}const Fe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:l}=e,a=await ze(e,t);return s===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}},We=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:y=>{let{x:w,y:b}=y;return{x:w,y:b}}},...a}=lt(t,e),c={x:n,y:o},p=await Wt(e,a),f=ct(F(i)),g=Ht(f);let d=c[g],m=c[f];if(r){const y=g==="y"?"top":"left",w=g==="y"?"bottom":"right",b=d+p[y],C=d-p[w];d=Nt(b,d,C)}if(s){const y=f==="y"?"top":"left",w=f==="y"?"bottom":"right",b=m+p[y],C=m-p[w];m=Nt(b,m,C)}const h=l.fn({...e,[g]:d,[f]:m});return{...h,data:{x:h.x-n,y:h.y-o}}}}};function B(t){return Gt(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function V(t){var e;return(e=(Gt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Gt(t){return t instanceof Node||t instanceof L(t).Node}function P(t){return t instanceof Element||t instanceof L(t).Element}function N(t){return t instanceof HTMLElement||t instanceof L(t).HTMLElement}function Et(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=k(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Ge(t){return["table","td","th"].includes(B(t))}function xt(t){const e=bt(),n=k(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function jt(t){let e=q(t);for(;N(e)&&!ft(e);){if(xt(e))return e;e=q(e)}return null}function bt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ft(t){return["html","body","#document"].includes(B(t))}function k(t){return L(t).getComputedStyle(t)}function ut(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function q(t){if(B(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Et(t)&&t.host||V(t);return Et(e)?e.host:e}function Xt(t){const e=q(t);return ft(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&et(e)?e:Xt(e)}function ht(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Xt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=L(i);return r?e.concat(s,s.visualViewport||[],et(i)?i:[],s.frameElement&&n?ht(s.frameElement):[]):e.concat(i,ht(i,[],n))}function Yt(t){const e=k(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,l=it(n)!==r||it(o)!==s;return l&&(n=r,o=s),{width:n,height:o,$:l}}function qt(t){return P(t)?t:t.contextElement}function Y(t){const e=qt(t);if(!N(e))return D(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=Yt(e);let s=(r?it(n.width):n.width)/o,l=(r?it(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const je=D(0);function Kt(t){const e=L(t);return!bt()||!e.visualViewport?je:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Xe(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==L(t)?!1:e}function tt(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=qt(t);let s=D(1);e&&(o?P(o)&&(s=Y(o)):s=Y(t));const l=Xe(r,n,o)?Kt(r):D(0);let a=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,p=i.width/s.x,f=i.height/s.y;if(r){const g=L(r),d=o&&P(o)?L(o):o;let m=g.frameElement;for(;m&&o&&d!==g;){const h=Y(m),y=m.getBoundingClientRect(),w=k(m),b=y.left+(m.clientLeft+parseFloat(w.paddingLeft))*h.x,C=y.top+(m.clientTop+parseFloat(w.paddingTop))*h.y;a*=h.x,c*=h.y,p*=h.x,f*=h.y,a+=b,c+=C,m=L(m).frameElement}}return rt({width:p,height:f,x:a,y:c})}const Ye=[":popover-open",":modal"];function Jt(t){let e=!1,n=0,o=0;function i(r){try{e=e||t.matches(r)}catch{}}if(Ye.forEach(r=>{i(r)}),e){const r=jt(t);if(r){const s=r.getBoundingClientRect();n=s.x,o=s.y}}return[e,n,o]}function qe(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=V(o),[s]=e?Jt(e.floating):[!1];if(o===r||s)return n;let l={scrollLeft:0,scrollTop:0},a=D(1);const c=D(0),p=N(o);if((p||!p&&i!=="fixed")&&((B(o)!=="body"||et(r))&&(l=ut(o)),N(o))){const f=tt(o);a=Y(o),c.x=f.x+o.clientLeft,c.y=f.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+c.x,y:n.y*a.y-l.scrollTop*a.y+c.y}}function Ke(t){return Array.from(t.getClientRects())}function Qt(t){return tt(V(t)).left+ut(t).scrollLeft}function Je(t){const e=V(t),n=ut(t),o=t.ownerDocument.body,i=X(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=X(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Qt(t);const l=-n.scrollTop;return k(o).direction==="rtl"&&(s+=X(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:l}}function Qe(t,e){const n=L(t),o=V(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,l=0,a=0;if(i){r=i.width,s=i.height;const c=bt();(!c||c&&e==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:l,y:a}}function Ue(t,e){const n=tt(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?Y(t):D(1),s=t.clientWidth*r.x,l=t.clientHeight*r.y,a=i*r.x,c=o*r.y;return{width:s,height:l,x:a,y:c}}function Ot(t,e,n){let o;if(e==="viewport")o=Qe(t,n);else if(e==="document")o=Je(V(t));else if(P(e))o=Ue(e,n);else{const i=Kt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return rt(o)}function Ut(t,e){const n=q(t);return n===e||!P(n)||ft(n)?!1:k(n).position==="fixed"||Ut(n,e)}function Ze(t,e){const n=e.get(t);if(n)return n;let o=ht(t,[],!1).filter(l=>P(l)&&B(l)!=="body"),i=null;const r=k(t).position==="fixed";let s=r?q(t):t;for(;P(s)&&!ft(s);){const l=k(s),a=xt(s);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||et(s)&&!a&&Ut(t,s))?o=o.filter(p=>p!==s):i=l,s=q(s)}return e.set(t,o),o}function tn(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?Ze(e,this._c):[].concat(n),o],l=s[0],a=s.reduce((c,p)=>{const f=Ot(e,p,i);return c.top=X(f.top,c.top),c.right=mt(f.right,c.right),c.bottom=mt(f.bottom,c.bottom),c.left=X(f.left,c.left),c},Ot(e,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function en(t){const{width:e,height:n}=Yt(t);return{width:e,height:n}}function nn(t,e,n,o){const i=N(e),r=V(e),s=n==="fixed",l=tt(t,!0,s,e);let a={scrollLeft:0,scrollTop:0};const c=D(0);if(i||!i&&!s)if((B(e)!=="body"||et(r))&&(a=ut(e)),i){const h=tt(e,!0,s,e);c.x=h.x+e.clientLeft,c.y=h.y+e.clientTop}else r&&(c.x=Qt(r));let p=l.left+a.scrollLeft-c.x,f=l.top+a.scrollTop-c.y;const[g,d,m]=Jt(o);return g&&(p+=d,f+=m,i&&(p+=e.clientLeft,f+=e.clientTop)),{x:p,y:f,width:l.width,height:l.height}}function Pt(t,e){return!N(t)||k(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zt(t,e){const n=L(t);if(!N(t))return n;let o=Pt(t,e);for(;o&&Ge(o)&&k(o).position==="static";)o=Pt(o,e);return o&&(B(o)==="html"||B(o)==="body"&&k(o).position==="static"&&!xt(o))?n:o||jt(t)||n}const on=async function(t){const e=this.getOffsetParent||Zt,n=this.getDimensions;return{reference:nn(t.reference,await e(t.floating),t.strategy,t.floating),floating:{x:0,y:0,...await n(t.floating)}}};function sn(t){return k(t).direction==="rtl"}const rn={convertOffsetParentRelativeRectToViewportRelativeRect:qe,getDocumentElement:V,getClippingRect:tn,getOffsetParent:Zt,getElementRects:on,getClientRects:Ke,getDimensions:en,getScale:Y,isElement:P,isRTL:sn},ln=We,an=He,cn=(t,e,n)=>{const o=new Map,i={platform:rn,...n},r={...i.platform,_c:o};return Me(t,e,{...i,platform:r})},fn=K({__name:"HorizontalNavPopper",props:{popperInlineEnd:{type:Boolean,default:!1},tag:{default:"div"},contentContainerTag:{default:"div"},isRtl:{type:Boolean}},setup(t){const e=t,n=vt(),o=M(),i=M(),r=M({left:"0px",top:"0px"}),s=async()=>{if(o.value!==void 0&&i.value!==void 0){const{x:f,y:g}=await cn(o.value,i.value,{placement:e.popperInlineEnd?e.isRtl?"left-start":"right-start":"bottom-start",middleware:[...n.horizontalNavPopoverOffset?[Fe(n.horizontalNavPopoverOffset)]:[],an({boundary:document.querySelector("body"),padding:{bottom:16}}),ln({boundary:document.querySelector("body"),padding:{bottom:16}})]});r.value.left=`${f}px`,r.value.top=`${g}px`}};ae(()=>n.horizontalNavType).toMatch(f=>f==="static").then(()=>{ce("scroll",s)});const l=M(!1),a=()=>{l.value=!0,s()},c=()=>{l.value=!1};fe(s),ot([()=>n.isAppRTL,()=>n.appContentWidth],s);const p=Bt();return ot(()=>p.fullPath,c),(f,g)=>(v(),z("div",{class:Z(["nav-popper",[{"popper-inline-end":f.popperInlineEnd,"show-content":u(l)}]])},[x("div",{ref_key:"refPopperContainer",ref:o,class:"popper-triggerer",onMouseenter:a,onMouseleave:c},[H(f.$slots,"default")],544),u(O).horizontalNav.transition?typeof u(O).horizontalNav.transition=="string"?(v(),_(ue,{key:1,name:u(O).horizontalNav.transition},{default:R(()=>[Lt(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36),[[kt,u(l)]])]),_:3},8,["name"])):(v(),_(S(u(O).horizontalNav.transition),{key:2},{default:R(()=>[Lt(x("div",{ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36),[[kt,u(l)]])]),_:3})):(v(),z("div",{key:0,ref_key:"refPopper",ref:i,class:"popper-content",style:dt(u(r)),onMouseenter:a,onMouseleave:c},[x("div",null,[H(f.$slots,"content")])],36))],2))}}),un=[{title:"Home",to:{name:"root"},icon:{icon:"tabler-smart-home"}},{title:"Second page",to:{name:"second-page"},icon:{icon:"tabler-file"}}],pn={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},Dn=K({__name:"DefaultLayoutWithHorizontalNav",setup(t){const e=M(!1),n=M(null);return ot([e,n],()=>{e.value&&n.value&&n.value.fallbackHandle(),!e.value&&n.value&&n.value.resolveHandle()},{immediate:!0}),(o,i)=>{const r=St("RouterLink"),s=ee,l=St("RouterView");return v(),_(u(Te),{"nav-items":u(un)},{navbar:R(()=>{var a;return[E(r,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:R(()=>[E(u(ve),{nodes:u(O).app.logo},null,8,["nodes"]),x("h1",pn,yt(u(O).app.title),1)]),_:1}),E(ye),u(O).app.i18n.enable&&((a=u(O).app.i18n.langConfig)!=null&&a.length)?(v(),_(he,{key:0,languages:u(O).app.i18n.langConfig},null,8,["languages"])):wt("",!0),E(me,{class:"me-2"}),E(ge)]}),footer:R(()=>[E(de)]),default:R(()=>[E(s,{ref_key:"refLoadingIndicator",ref:n},null,512),E(l,null,{default:R(({Component:a})=>[(v(),_(pe,{timeout:0,onFallback:i[0]||(i[0]=c=>e.value=!0),onResolve:i[1]||(i[1]=c=>e.value=!1)},{default:R(()=>[(v(),_(S(a)))]),_:2},1024))]),_:1})]),_:1},8,["nav-items"])}}});export{Dn as default};
