import{bI as c,ai as o,aQ as n}from"./main-B2WEe81J.js";const h=c({baseUrl:"http://minja.natestudio.my.id/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const a=o("accessToken").value;return a&&(e.headers={...e.headers,Authorization:`Bearer ${a}`}),{options:e}},afterFetch(e){const{data:a,response:r}=e;let t=null;try{t=n(a)}catch(s){console.error(s)}return{data:t,response:r}}}});export{h as u};
