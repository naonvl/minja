import{d as w,k as $,ai as H,r as v,o as s,c as p,e as a,b as r,f as o,v as m,a6 as I,n as y,g as h,F as g,i as M,z as _,J as B,a0 as S,x as l}from"./main-BTg9bMtt.js";import{u as b}from"./useApi-BLOb0wok.js";import{V as A,a as N}from"./VRow-Cm2weuok.js";import{V as R}from"./VCard-Bek_KHji.js";import{V as T}from"./VCardText-D38AISll.js";import{V as j}from"./VAvatar-JfF8YMoq.js";/* empty css              */import"./VImg-glX9ijsE.js";const z={class:"mb-6"},E={class:"d-flex align-center gap-x-4 mb-1"},L={key:0,class:"text-h4"},P={class:"text-sm"},F={key:1,class:"text-h4"},G={class:"text-sm"},J={class:"text-sm mb-1"},ee=w({__name:"dashboard",setup(q){var f;const k=$(),n=H("userData");console.log(n.value);const V=v({}),x=v({}),C=d=>{k.replace(d)},i=v([{icon:"tabler-rosette-discount-check",color:"primary",title:"Dikerjakan Minggu Ini",value:"0",currency:null,unit:"Pcs",change:18.2,isHover:!1},{icon:"tabler-decimal",color:"warning",title:"Estimasi Gaji Minggu Ini",value:"0",currency:"Rp.",unit:null,change:-8.7,isHover:!1},{icon:"tabler-file-dollar",color:"success",title:"Total Gaji",value:"0",currency:"Rp. ",unit:null,change:4.3,isHover:!1}]),D=async()=>{var u;const t=await(await b("/employees/"+((u=n.value)==null?void 0:u.employee.id))).data.value;V.value=t.data;const c=await(await b("/payslips/user/"+t.data.id)).data.value;x.value=c,i.value[0].value=t.data.totalActivities,i.value[1].value=`${t.data.estSalary.toLocaleString("id-ID")}`,i.value[2].value=`${c.data.total_amount.toLocaleString("id-ID")}`};return((f=n.value)==null?void 0:f.user_type)=="client"&&D(),(d,t)=>(s(),p(g,null,[a("div",z,[r(I,{onClick:t[0]||(t[0]=e=>C("/apps/activities/create")),"prepend-icon":"tabler-plus"},{default:o(()=>[m(" Input Aktifitas ")]),_:1})]),y(n).user_type=="client"?(s(),h(A,{key:0},{default:o(()=>[(s(!0),p(g,null,M(y(i),(e,c)=>(s(),h(N,{key:c,cols:"12",md:"3",sm:"6"},{default:o(()=>[a("div",null,[r(R,{class:"logistics-card-statistics cursor-pointer",style:B(e.isHover?`border-block-end-color: rgb(var(--v-theme-${e.color}))`:`border-block-end-color: rgba(var(--v-theme-${e.color}),0.38)`),onMouseenter:u=>e.isHover=!0,onMouseleave:u=>e.isHover=!1},{default:o(()=>[r(T,null,{default:o(()=>[a("div",E,[r(j,{variant:"tonal",color:e.color,rounded:""},{default:o(()=>[r(S,{icon:e.icon,size:"28"},null,8,["icon"])]),_:2},1032,["color"]),e.currency?(s(),p("h4",L,[a("span",P,l(e.currency),1),m(" "+l(e.value),1)])):_("",!0),e.unit?(s(),p("h4",F,[m(l(e.value)+" ",1),a("span",G,l(e.unit),1)])):_("",!0)]),a("div",J,l(e.title),1)]),_:2},1024)]),_:2},1032,["style","onMouseenter","onMouseleave"])])]),_:2},1024))),128))]),_:1})):_("",!0)],64))}});export{ee as default};