import{bI as c,ai as o,aQ as n}from"./main-DsXvv9LY.js";const i=c({baseUrl:"http://192.168.100.29:8080/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const a=o("accessToken").value;return a&&(e.headers={...e.headers,Authorization:`Bearer ${a}`}),{options:e}},afterFetch(e){const{data:a,response:t}=e;let r=null;try{r=n(a)}catch(s){console.error(s)}return{data:r,response:t}}}});export{i as u};
