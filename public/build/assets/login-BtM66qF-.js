import{m as Q,V as M,_ as X}from"./VCheckboxBtn-TH8BI-UW.js";import{a8 as G,a9 as Z,aa as H,ab as K,ac as ee,a4 as C,ad as ae,aw as te,b as a,s as A,aj as se,ag as le,aC as oe,aD as ne,aE as re,ak as ie,aF as ue,al as de,ah as ce,am as me,aG as fe,aH as ve,aI as pe,aJ as be,aK as Ve,aL as ge,as as ye,aM as he,ao as ke,aq as _e,$ as xe,ap as Ce,aN as Pe,a0 as we,aO as U,a6 as J,d as Ie,k as Le,j as Se,r as _,w as Re,o as z,c as Te,f as n,e as c,n as s,I as R,x as T,a2 as Be,v as k,a3 as De,a5 as Ae,g as Fe,z as $e,F as je,a as Me,ai as B,au as Ue}from"./main-DsXvv9LY.js";import{u as E,a as ze,b as Ee}from"./misc-mask-light-CqG8erYH.js";import{V as Ne}from"./VNodeRenderer-BCDSVE3n.js";import{u as qe}from"./useAbility-BI6r1fpR.js";import{$ as Oe}from"./api-B1Wj60p3.js";import{V as Ge}from"./VDialog-BJBY6I1Z.js";import{V as N}from"./VCard-byonNdpc.js";import{V as D}from"./VCardText-HpyO8w19.js";import{a as x,V as q}from"./VRow-FPPq6f4-.js";import{V as He}from"./VImg-Ccfp_Jzr.js";import{V as Ke}from"./VForm-Cho-3-iN.js";import{m as Je,u as We,V as O}from"./VTextField-BFDN0ddG.js";import{c as Ye}from"./VAvatar-BfskAj_j.js";import"./index-BYrzgnBV.js";import"./VOverlay-B73x5_p_.js";/* empty css              */import"./index-UEwQrg4V.js";const Qe=G({...Je(),...Z(Q(),["inline"])},"VCheckbox"),Xe=H()({name:"VCheckbox",inheritAttrs:!1,props:Qe(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,p){let{attrs:b,slots:t}=p;const l=K(e,"modelValue"),{isFocused:d,focus:i,blur:V}=We(e),m=ee(),g=C(()=>e.id||`checkbox-${m}`);return ae(()=>{const[y,f]=te(b),o=O.filterProps(e),v=M.filterProps(e);return a(O,A({class:["v-checkbox",e.class]},y,o,{modelValue:l.value,"onUpdate:modelValue":u=>l.value=u,id:g.value,focused:d.value,style:e.style}),{...t,default:u=>{let{id:r,messagesId:P,isDisabled:w,isReadonly:I}=u;return a(M,A(v,{id:r.value,"aria-describedby":P.value,disabled:w.value,readonly:I.value},f,{modelValue:l.value,"onUpdate:modelValue":L=>l.value=L,onFocus:i,onBlur:V}),t)}})}),{}}}),Ze="/build/assets/auth-v2-login-illustration-bordered-dark-cDkPk8mY.png",ea="/build/assets/auth-v2-login-illustration-bordered-light-CIHqcIVA.png",aa="/build/assets/auth-v2-login-illustration-dark-ClExSVqL.png",ta="/build/assets/auth-v2-login-illustration-light-C4sKfRS1.png",sa=Ye("v-alert-title"),la=["success","info","warning","error"],oa=G({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:se,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>la.includes(e)},...le(),...oe(),...ne(),...re(),...ie(),...ue(),...de(),...ce(),...me(),...fe({variant:"flat"})},"VAlert"),na=H()({name:"VAlert",props:oa(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,p){let{emit:b,slots:t}=p;const l=K(e,"modelValue"),d=C(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),i=C(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:V}=ve(e),{colorClasses:m,colorStyles:g,variantClasses:y}=pe(i),{densityClasses:f}=be(e),{dimensionStyles:o}=Ve(e),{elevationClasses:v}=ge(e),{locationStyles:u}=ye(e),{positionClasses:r}=he(e),{roundedClasses:P}=ke(e),{textColorClasses:w,textColorStyles:I}=_e(xe(e,"borderColor")),{t:L}=Ce(),F=C(()=>({"aria-label":L(e.closeLabel),onClick(S){l.value=!1,b("click:close",S)}}));return()=>{const S=!!(t.prepend||d.value),W=!!(t.title||e.title),Y=!!(t.close||e.closable);return l.value&&a(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},V.value,m.value,f.value,v.value,r.value,P.value,y.value,e.class],style:[g.value,o.value,u.value,e.style],role:"alert"},{default:()=>{var $,j;return[Pe(!1,"v-alert"),e.border&&a("div",{key:"border",class:["v-alert__border",w.value],style:I.value},null),S&&a("div",{key:"prepend",class:"v-alert__prepend"},[t.prepend?a(U,{key:"prepend-defaults",disabled:!d.value,defaults:{VIcon:{density:e.density,icon:d.value,size:e.prominent?44:28}}},t.prepend):a(we,{key:"prepend-icon",density:e.density,icon:d.value,size:e.prominent?44:28},null)]),a("div",{class:"v-alert__content"},[W&&a(sa,{key:"title"},{default:()=>{var h;return[((h=t.title)==null?void 0:h.call(t))??e.title]}}),(($=t.text)==null?void 0:$.call(t))??e.text,(j=t.default)==null?void 0:j.call(t)]),t.append&&a("div",{key:"append",class:"v-alert__append"},[t.append()]),Y&&a("div",{key:"close",class:"v-alert__close"},[t.close?a(U,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var h;return[(h=t.close)==null?void 0:h.call(t,{props:F.value})]}}):a(J,A({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},F.value),null)])]}})}}}),ra={class:"auth-logo d-flex align-center gap-x-3"},ia={class:"auth-title"},ua={class:"position-relative bg-background w-100 me-0"},da={class:"d-flex align-center justify-center w-100 h-100",style:{"padding-inline":"6.25rem"}},ca=["src"],ma={class:"text-h4 mb-1"},fa={class:"text-capitalize"},va={class:"d-flex align-center flex-wrap justify-space-between mt-2 mb-4"},pa=c("a",{class:"text-primary ms-2 mb-1",href:"#"}," Forgot Password? ",-1),Aa=Ie({__name:"login",setup(e){const p=Le(),b=qe(),t=Se(),l=_({username:"",password:"",remember:!1}),d=_(""),i=_(!1);Re(i,f=>{f&&setTimeout(()=>{i.value=!1},4e3)});const V=async()=>{i.value=!0;const f=await Oe("/auth/login",{method:"POST",body:{username:l.value.username,password:l.value.password},onResponseError({response:r}){i.value=!1,d.value=r._data.message}}),{accessToken:o,userData:v,userAbilityRules:u}=f;console.log(v),B("userAbilityRules").value=u,b.update(u),B("userData").value=v,B("accessToken").value=o,await Ue(()=>{p.replace(t.query.to?String(t.query.to):"/")})},m=_(!1),g=E(ta,aa,ea,Ze,!0),y=E(Ee,ze);return(f,o)=>{const v=Me("RouterLink"),u=X;return z(),Te(je,null,[a(v,{to:"/"},{default:n(()=>[c("div",ra,[a(s(Ne),{nodes:s(R).app.logo},null,8,["nodes"]),c("h1",ia,T(s(R).app.title),1)])]),_:1}),a(q,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:n(()=>[a(Ge,{modelValue:s(i),"onUpdate:modelValue":o[0]||(o[0]=r=>Be(i)?i.value=r:null),width:"300"},{default:n(()=>[a(N,{color:"primary",width:"300"},{default:n(()=>[a(D,{class:"pt-3"},{default:n(()=>[k(" Please stand by "),a(De,{indeterminate:"","bg-color":"rgba(var(--v-theme-surface), 0.1)",height:8,class:"mb-0 mt-4"})]),_:1})]),_:1})]),_:1},8,["modelValue"]),a(x,{md:"8",class:"d-none d-md-flex"},{default:n(()=>[c("div",ua,[c("div",da,[a(He,{"max-width":"613",src:s(g),class:"auth-illustration mt-16 mb-2"},null,8,["src"])]),c("img",{class:"auth-footer-mask",src:s(y),alt:"auth-footer-mask",height:"280",width:"100"},null,8,ca)])]),_:1}),a(x,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:n(()=>[a(N,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-4"},{default:n(()=>[a(D,null,{default:n(()=>[c("h4",ma,[k(" Welcome to "),c("span",fa,T(s(R).app.title),1),k("! 👋🏻 ")])]),_:1}),a(D,null,{default:n(()=>[a(s(Ke),{onSubmit:Ae(V,["prevent"])},{default:n(()=>[a(q,null,{default:n(()=>[a(x,{cols:"12"},{default:n(()=>[a(u,{modelValue:s(l).username,"onUpdate:modelValue":o[1]||(o[1]=r=>s(l).username=r),autofocus:"",label:"username",type:"text",placeholder:"johndoe@username.com"},null,8,["modelValue"])]),_:1}),a(x,{cols:"12"},{default:n(()=>[a(u,{modelValue:s(l).password,"onUpdate:modelValue":o[2]||(o[2]=r=>s(l).password=r),label:"Password",placeholder:"············",type:s(m)?"text":"password","append-inner-icon":s(m)?"tabler-eye-off":"tabler-eye","onClick:appendInner":o[3]||(o[3]=r=>m.value=!s(m))},null,8,["modelValue","type","append-inner-icon"]),c("div",va,[a(Xe,{modelValue:s(l).remember,"onUpdate:modelValue":o[4]||(o[4]=r=>s(l).remember=r),label:"Remember me"},null,8,["modelValue"]),pa]),a(J,{block:"",type:"submit"},{default:n(()=>[k(" Login ")]),_:1}),s(d)?(z(),Fe(na,{key:0,type:"error",variant:"outlined",class:"my-4"},{default:n(()=>[k(T(s(d)),1)]),_:1})):$e("",!0)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}});export{Aa as default};
