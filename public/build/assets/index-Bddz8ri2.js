import{_ as N}from"./TablePagination.vue_vue_type_script_setup_true_lang-BXam6J-a.js";import{_ as S}from"./VCheckboxBtn-D9mjtALT.js";import{_ as z}from"./AppSelect.vue_vue_type_script_setup_true_lang-C-gl0wT8.js";import{d as E,ai as F,k as M,r as o,o as l,c as u,b as t,f as i,v as _,e as s,n as w,g as A,z as k,a6 as O,x as f,F as j,i as G,a0 as b,a as K}from"./main-C-l2AGoX.js";import{u as L}from"./useApi-M7oXekIv.js";import{a as Q,b as R,V as q}from"./VCard-C4i2wLSr.js";import{V as B}from"./VDivider-C7ffe7WZ.js";import{V as H}from"./VCardText-DI7lRVzX.js";import{V as J}from"./VDataTableServer-me_FaVZU.js";import{V as W}from"./VSpacer-ehN6z7f4.js";import"./VTextField-BdYNq2Jn.js";import"./index-C6JvnfNe.js";import"./VImg-C2m6tAYr.js";import"./VOverlay-CT2niqbF.js";import"./VSelect-B8kgqgU7.js";import"./VList-Bgui-lQm.js";import"./VAvatar-BhdplKKa.js";import"./VMenu-CLr0DCll.js";import"./VChip-C0Qr8yaT.js";/* empty css              */const X={class:"me-3 d-flex gap-3"},Y={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},Z={style:{"inline-size":"15.625rem"}},ee={class:"d-flex align-center gap-x-4"},te={class:"d-flex flex-column"},ae={class:"text-base"},se={class:"font-weight-medium text-link"},ie={class:"d-flex align-center gap-x-4"},oe={class:"d-flex flex-column"},le={class:"text-base"},ne={class:"font-weight-medium text-link mb-0 pa-2"},re={key:0},ce={class:"d-flex align-center gap-x-4"},de={class:"d-flex flex-column"},me={class:"text-base"},pe={class:"font-weight-medium text-link"},Se=E({__name:"index",setup(ue){const v=F("userData"),D=M(),n=o(10),c=o(1);o();const V=o(""),y=o([]),I=[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],C=o(5),P=[{title:"#",key:"number",width:"5%"},{title:"Nama",key:"fullname"},{title:"Nama",key:"activities"},{title:"Tanggal",key:"date"},{title:"Aksi",key:"actions",sortable:!1,width:"10%"}];function g(r){console.log(`Delete user with ID ${r}`)}const T=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),$=()=>{D.replace("/apps/activities/create")};return(async()=>{var r;try{let a="/activities";v.value.user_type==="client"&&(a+=`?user_id=${(r=v.value)==null?void 0:r.employee.id}`);const d=await L(a,{method:"GET"});if(d.data.value){const m=await d.data.value;console.log(m),y.value=m.data}}catch(a){console.error(a)}})(),(r,a)=>{const d=z,m=S,h=K("IconBtn"),U=N;return l(),u("div",null,[t(q,{class:"mb-6"},{default:i(()=>[t(Q,{class:"pb-4"},{default:i(()=>[t(R,null,{default:i(()=>[_("Daftar Aktifitas Karyawan")]),_:1})]),_:1}),t(B),t(H,{class:"d-flex flex-wrap justify-space-between gap-4"},{default:i(()=>[s("div",X,[t(d,{"model-value":n.value,items:I,style:{"inline-size":"6.25rem"},"onUpdate:modelValue":a[0]||(a[0]=e=>n.value=parseInt(e,10))},null,8,["model-value"])]),w(T)?k("",!0):(l(),A(W,{key:0})),s("div",Y,[s("div",Z,[t(m,{modelValue:V.value,"onUpdate:modelValue":a[1]||(a[1]=e=>V.value=e),placeholder:"Search Aktifitas"},null,8,["modelValue"])]),w(v).role_id==1?(l(),A(O,{key:0,onClick:$,"prepend-icon":"tabler-plus"},{default:i(()=>[_(" Input Aktifitas ")]),_:1})):k("",!0)])]),_:1}),t(B),t(J,{"items-per-page":n.value,"onUpdate:itemsPerPage":a[3]||(a[3]=e=>n.value=e),page:c.value,"onUpdate:page":a[4]||(a[4]=e=>c.value=e),items:y.value,"items-length":C.value,headers:P,class:"text-no-wrap"},{"item.number":i(({index:e})=>[_(f(e+1),1)]),"item.user":i(({item:e})=>[s("div",ee,[s("div",te,[s("h6",ae,[s("p",se,f(e.fullname),1)])])])]),"item.activities":i(({item:e})=>[s("div",ie,[s("div",oe,[s("h6",le,[s("p",ne,[(l(!0),u(j,null,G(e.activities,(p,x)=>(l(),u("span",{key:x},[x>0&&x!=e.activities.length?(l(),u("br",re)):k("",!0),_(" "+f(p),1)]))),128))])])])])]),"item.date":i(({item:e})=>[s("div",ce,[s("div",de,[s("h6",me,[s("p",pe,f(e.date),1)])])])]),"item.actions":i(({item:e})=>[t(h,{onClick:p=>g(e.id)},{default:i(()=>[t(b,{icon:"tabler-eye"})]),_:2},1032,["onClick"]),t(h,{onClick:p=>g(e.id)},{default:i(()=>[t(b,{icon:"tabler-edit"})]),_:2},1032,["onClick"]),t(h,{onClick:p=>g(e.id)},{default:i(()=>[t(b,{icon:"tabler-trash"})]),_:2},1032,["onClick"])]),bottom:i(()=>[t(U,{page:c.value,"onUpdate:page":a[2]||(a[2]=e=>c.value=e),"items-per-page":n.value,"total-items":C.value},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1})])}}});export{Se as default};
