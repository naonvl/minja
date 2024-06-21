import{d as Ve,e as be,g as se}from"./VTextField-BFDN0ddG.js";import{a8 as $,ag as ve,aa as ne,b5 as me,w as M,ad as ae,b as c,F as z,s as L,b4 as we,aY as F,b8 as re,r as K,a4 as A,bn as he,ba as te,bo as Se,au as ke,bp as pe,aD as Pe,b9 as Te,aK as xe,$ as Ce,bq as Ie,aU as J,H as Re,aj as De,a9 as Ae,ap as Be,ab as ie,a0 as ce,br as Fe,aO as Oe,v as _e,bf as Le,bs as de}from"./main-DsXvv9LY.js";import{g as Me,d as He,f as Ee}from"./VOverlay-B73x5_p_.js";import{m as Ue,e as Ne,V as Ke,a as fe}from"./VList-5AWwNCMz.js";import{m as qe}from"./VImg-Ccfp_Jzr.js";import{V as ze}from"./VMenu-CQf-s9lF.js";import{V as $e}from"./VCheckboxBtn-TH8BI-UW.js";import{V as je}from"./VAvatar-BfskAj_j.js";import{V as We}from"./VChip-CZ6EnSVH.js";const Ye=$({renderless:Boolean,...ve()},"VVirtualScrollItem"),Xe=ne()({name:"VVirtualScrollItem",inheritAttrs:!1,props:Ye(),emits:{"update:height":e=>!0},setup(e,d){let{attrs:n,emit:f,slots:u}=d;const{resizeRef:v,contentRect:y}=me(void 0,"border");M(()=>{var o;return(o=y.value)==null?void 0:o.height},o=>{o!=null&&f("update:height",o)}),ae(()=>{var o,a;return e.renderless?c(z,null,[(o=u.default)==null?void 0:o.call(u,{itemRef:v})]):c("div",L({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},n),[(a=u.default)==null?void 0:a.call(u)])})}}),Ge=-1,Je=1,le=100,Qe=$({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Ze(e,d){const n=we(),f=F(0);re(()=>{f.value=parseFloat(e.itemHeight||0)});const u=F(0),v=F(Math.ceil((parseInt(e.height)||n.height.value)/(f.value||16))||1),y=F(0),o=F(0),a=K(),g=K();let D=0;const{resizeRef:B,contentRect:r}=me();re(()=>{B.value=a.value});const b=A(()=>{var t;return a.value===document.documentElement?n.height.value:((t=r.value)==null?void 0:t.height)||parseInt(e.height)||0}),w=A(()=>!!(a.value&&g.value&&b.value&&f.value));let T=Array.from({length:d.value.length}),m=Array.from({length:d.value.length});const x=F(0);let C=-1;function j(t){return T[t]||f.value}const I=Se(()=>{const t=performance.now();m[0]=0;const s=d.value.length;for(let V=1;V<=s-1;V++)m[V]=(m[V-1]||0)+j(V-1);x.value=Math.max(x.value,performance.now()-t)},x),W=M(w,t=>{t&&(W(),D=g.value.offsetTop,I.immediate(),O(),~C&&ke(()=>{pe&&window.requestAnimationFrame(()=>{G(C),C=-1})}))});M(b,(t,s)=>{s&&O()}),he(()=>{I.clear()});function Q(t,s){const V=T[t],k=f.value;f.value=k?Math.min(f.value,s):s,(V!==s||k!==f.value)&&(T[t]=s,I())}function S(t){return t=te(t,0,d.value.length-1),m[t]||0}function Y(t){return et(m,t)}let H=0,E=0,q=0;function Z(){if(!a.value||!g.value)return;const t=a.value.scrollTop,s=performance.now();s-q>500?(E=Math.sign(t-H),D=g.value.offsetTop):E=t-H,H=t,q=s,O()}function U(){!a.value||!g.value||(E=0,q=0,O())}let X=-1;function O(){cancelAnimationFrame(X),X=requestAnimationFrame(ee)}function ee(){if(!a.value||!b.value)return;const t=H-D,s=Math.sign(E),V=Math.max(0,t-le),k=te(Y(V),0,d.value.length),i=t+b.value+le,h=te(Y(i)+1,k+1,d.value.length);if((s!==Ge||k<u.value)&&(s!==Je||h>v.value)){const p=S(u.value)-S(k),R=S(h)-S(v.value);Math.max(p,R)>le?(u.value=k,v.value=h):(k<=0&&(u.value=k),h>=d.value.length&&(v.value=h))}y.value=S(u.value),o.value=S(d.value.length)-S(v.value)}function G(t){const s=S(t);!a.value||t&&!s?C=t:a.value.scrollTop=s}const l=A(()=>d.value.slice(u.value,v.value).map((t,s)=>({raw:t,index:s+u.value})));return M(d,()=>{T=Array.from({length:d.value.length}),m=Array.from({length:d.value.length}),I.immediate(),O()},{deep:!0}),{containerRef:a,markerRef:g,computedItems:l,paddingTop:y,paddingBottom:o,scrollToIndex:G,handleScroll:Z,handleScrollend:U,handleItemResize:Q}}function et(e,d){let n=e.length-1,f=0,u=0,v=null,y=-1;if(e[n]<d)return n;for(;f<=n;)if(u=f+n>>1,v=e[u],v>d)n=u-1;else if(v<d)y=u,f=u+1;else return v===d?u:f;return y}const tt=$({items:{type:Array,default:()=>[]},renderless:Boolean,...Qe(),...ve(),...Pe()},"VVirtualScroll"),lt=ne()({name:"VVirtualScroll",props:tt(),setup(e,d){let{slots:n}=d;const f=Te("VVirtualScroll"),{dimensionStyles:u}=xe(e),{containerRef:v,markerRef:y,handleScroll:o,handleScrollend:a,handleItemResize:g,scrollToIndex:D,paddingTop:B,paddingBottom:r,computedItems:b}=Ze(e,Ce(e,"items"));return Ie(()=>e.renderless,()=>{function w(){var x,C;const m=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";v.value===document.documentElement?(document[m]("scroll",o,{passive:!0}),document[m]("scrollend",a)):((x=v.value)==null||x[m]("scroll",o,{passive:!0}),(C=v.value)==null||C[m]("scrollend",a))}Re(()=>{v.value=Me(f.vnode.el,!0),w(!0)}),he(w)}),ae(()=>{const w=b.value.map(T=>c(Xe,{key:T.index,renderless:e.renderless,"onUpdate:height":m=>g(T.index,m)},{default:m=>{var x;return(x=n.default)==null?void 0:x.call(n,{item:T.raw,index:T.index,...m})}}));return e.renderless?c(z,null,[c("div",{ref:y,class:"v-virtual-scroll__spacer",style:{paddingTop:J(B.value)}},null),w,c("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:J(r.value)}},null)]):c("div",{ref:v,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:a,style:[u.value,e.style]},[c("div",{ref:y,class:"v-virtual-scroll__container",style:{paddingTop:J(B.value),paddingBottom:J(r.value)}},[w])])}),{scrollToIndex:D}}});function nt(e,d){const n=F(!1);let f;function u(o){cancelAnimationFrame(f),n.value=!0,f=requestAnimationFrame(()=>{f=requestAnimationFrame(()=>{n.value=!1})})}async function v(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(n.value){const a=M(n,()=>{a(),o()})}else o()})}async function y(o){var D,B;if(o.key==="Tab"&&((D=d.value)==null||D.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const a=(B=e.value)==null?void 0:B.$el;if(!a)return;(o.key==="Home"||o.key==="End")&&a.scrollTo({top:o.key==="Home"?0:a.scrollHeight,behavior:"smooth"}),await v();const g=a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const r=a.getBoundingClientRect().top;for(const b of g)if(b.getBoundingClientRect().top>=r){b.focus();break}}else{const r=a.getBoundingClientRect().bottom;for(const b of[...g].reverse())if(b.getBoundingClientRect().bottom<=r){b.focus();break}}}return{onListScroll:u,onListKeydown:y}}const at=$({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:De,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Ue({itemChildren:!1})},"Select"),ot=$({...at(),...Ae(Ve({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...qe({transition:{component:He}})},"VSelect"),ht=ne()({name:"VSelect",props:ot(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,d){let{slots:n}=d;const{t:f}=Be(),u=K(),v=K(),y=K(),o=ie(e,"menu"),a=A({get:()=>o.value,set:l=>{var t;o.value&&!l&&((t=v.value)!=null&&t.ΨopenChildren)||(o.value=l)}}),{items:g,transformIn:D,transformOut:B}=Ne(e),r=ie(e,"modelValue",[],l=>D(l===null?[null]:Le(l)),l=>{const t=B(l);return e.multiple?t:t[0]??null}),b=A(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),w=be(),T=A(()=>r.value.map(l=>l.value)),m=F(!1),x=A(()=>a.value?e.closeText:e.openText);let C="",j;const I=A(()=>e.hideSelected?g.value.filter(l=>!r.value.some(t=>t===l)):g.value),W=A(()=>e.hideNoData&&!I.value.length||e.readonly||(w==null?void 0:w.isReadonly.value)),Q=A(()=>{var l;return{...e.menuProps,activatorProps:{...((l=e.menuProps)==null?void 0:l.activatorProps)||{},"aria-haspopup":"listbox"}}}),S=K(),{onListScroll:Y,onListKeydown:H}=nt(S,u);function E(l){e.openOnClear&&(a.value=!0)}function q(){W.value||(a.value=!a.value)}function Z(l){var i,h;if(!l.key||e.readonly||w!=null&&w.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(l.key)&&l.preventDefault(),["Enter","ArrowDown"," "].includes(l.key)&&(a.value=!0),["Escape","Tab"].includes(l.key)&&(a.value=!1),l.key==="Home"?(i=S.value)==null||i.focus("first"):l.key==="End"&&((h=S.value)==null||h.focus("last"));const t=1e3;function s(p){const R=p.key.length===1,P=!p.ctrlKey&&!p.metaKey&&!p.altKey;return R&&P}if(e.multiple||!s(l))return;const V=performance.now();V-j>t&&(C=""),C+=l.key.toLowerCase(),j=V;const k=g.value.find(p=>p.title.toLowerCase().startsWith(C));k!==void 0&&(r.value=[k])}function U(l){if(e.multiple){const t=r.value.findIndex(s=>e.valueComparator(s.value,l.value));if(t===-1)r.value=[...r.value,l];else{const s=[...r.value];s.splice(t,1),r.value=s}}else r.value=[l],a.value=!1}function X(l){var t;(t=S.value)!=null&&t.$el.contains(l.relatedTarget)||(a.value=!1)}function O(){var l;m.value&&((l=u.value)==null||l.focus())}function ee(l){m.value=!0}function G(l){if(l==null)r.value=[];else if(de(u.value,":autofill")||de(u.value,":-webkit-autofill")){const t=g.value.find(s=>s.title===l);t&&U(t)}else u.value&&(u.value.value="")}return M(a,()=>{if(!e.hideSelected&&a.value&&r.value.length){const l=I.value.findIndex(t=>r.value.some(s=>e.valueComparator(s.value,t.value)));pe&&window.requestAnimationFrame(()=>{var t;l>=0&&((t=y.value)==null||t.scrollToIndex(l))})}}),M(I,(l,t)=>{m.value&&(!l.length&&e.hideNoData&&(a.value=!1),!t.length&&l.length&&(a.value=!0))}),ae(()=>{const l=!!(e.chips||n.chip),t=!!(!e.hideNoData||I.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),s=r.value.length>0,V=se.filterProps(e),k=s||!m.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return c(se,L({ref:u},V,{modelValue:r.value.map(i=>i.props.value).join(", "),"onUpdate:modelValue":G,focused:m.value,"onUpdate:focused":i=>m.value=i,validationValue:r.externalValue,counterValue:b.value,dirty:s,class:["v-select",{"v-select--active-menu":a.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!n.selection},e.class],style:e.style,inputmode:"none",placeholder:k,"onClick:clear":E,"onMousedown:control":q,onBlur:X,onKeydown:Z,"aria-label":f(x.value),title:f(x.value)}),{...n,default:()=>c(z,null,[c(ze,L({ref:v,modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,activator:"parent",contentClass:"v-select__content",disabled:W.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:O},Q.value),{default:()=>[t&&c(Ke,L({ref:S,selected:T.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:i=>i.preventDefault(),onKeydown:H,onFocusin:ee,onScrollPassive:Y,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var i,h,p;return[(i=n["prepend-item"])==null?void 0:i.call(n),!I.value.length&&!e.hideNoData&&(((h=n["no-data"])==null?void 0:h.call(n))??c(fe,{title:f(e.noDataText)},null)),c(lt,{ref:y,renderless:!0,items:I.value},{default:R=>{var ue;let{item:P,index:N,itemRef:_}=R;const oe=L(P.props,{ref:_,key:N,onClick:()=>U(P)});return((ue=n.item)==null?void 0:ue.call(n,{item:P,index:N,props:oe}))??c(fe,L(oe,{role:"option"}),{prepend:ge=>{let{isSelected:ye}=ge;return c(z,null,[e.multiple&&!e.hideSelected?c($e,{key:P.value,modelValue:ye,ripple:!1,tabindex:"-1"},null):void 0,P.props.prependAvatar&&c(je,{image:P.props.prependAvatar},null),P.props.prependIcon&&c(ce,{icon:P.props.prependIcon},null)])}})}}),(p=n["append-item"])==null?void 0:p.call(n)]}})]}),r.value.map((i,h)=>{function p(_){_.stopPropagation(),_.preventDefault(),U(i)}const R={"onClick:close":p,onMousedown(_){_.preventDefault(),_.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},P=l?!!n.chip:!!n.selection,N=P?Fe(l?n.chip({item:i,index:h,props:R}):n.selection({item:i,index:h})):void 0;if(!(P&&!N))return c("div",{key:i.value,class:"v-select__selection"},[l?n.chip?c(Oe,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:i.title}}},{default:()=>[N]}):c(We,L({key:"chip",closable:e.closableChips,size:"small",text:i.title,disabled:i.props.disabled},R),null):N??c("span",{class:"v-select__selection-text"},[i.title,e.multiple&&h<r.value.length-1&&c("span",{class:"v-select__selection-comma"},[_e(",")])])])})]),"append-inner":function(){var R;for(var i=arguments.length,h=new Array(i),p=0;p<i;p++)h[p]=arguments[p];return c(z,null,[(R=n["append-inner"])==null?void 0:R.call(n,...h),e.menuIcon?c(ce,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Ee({isFocused:m,menu:a,select:U},u)}});export{ht as V};
