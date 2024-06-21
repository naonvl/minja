import{aQ as g,ai as T}from"./main-DsXvv9LY.js";import{a as q,w as E}from"./index-BYrzgnBV.js";class R extends Error{constructor(s,n){super(s,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function S(o){var c,a,e,u,f;const s=((c=o.error)==null?void 0:c.message)||((a=o.error)==null?void 0:a.toString())||"",n=((e=o.request)==null?void 0:e.method)||((u=o.options)==null?void 0:u.method)||"GET",i=((f=o.request)==null?void 0:f.url)||String(o.request)||"/",h=`[${n}] ${JSON.stringify(i)}`,p=o.response?`${o.response.status} ${o.response.statusText}`:"<no response>",y=`${h}: ${p}${s?` ${s}`:""}`,r=new R(y,o.error?{cause:o.error}:void 0);for(const t of["request","options","response"])Object.defineProperty(r,t,{get(){return o[t]}});for(const[t,d]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(r,t,{get(){return o.response&&o.response[d]}});return r}const $=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function m(o="GET"){return $.has(o.toUpperCase())}function j(o){if(o===void 0)return!1;const s=typeof o;return s==="string"||s==="number"||s==="boolean"||s===null?!0:s!=="object"?!1:Array.isArray(o)?!0:o.buffer?!1:o.constructor&&o.constructor.name==="Object"||typeof o.toJSON=="function"}const A=new Set(["image/svg","application/xml","application/xhtml","application/html"]),C=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function k(o=""){if(!o)return"json";const s=o.split(";").shift()||"";return C.test(s)?"json":A.has(s)||s.startsWith("text/")?"text":"blob"}function O(o,s,n=globalThis.Headers){const i={...s,...o};if(s!=null&&s.params&&(o!=null&&o.params)&&(i.params={...s==null?void 0:s.params,...o==null?void 0:o.params}),s!=null&&s.query&&(o!=null&&o.query)&&(i.query={...s==null?void 0:s.query,...o==null?void 0:o.query}),s!=null&&s.headers&&(o!=null&&o.headers)){i.headers=new n((s==null?void 0:s.headers)||{});for(const[h,p]of new n((o==null?void 0:o.headers)||{}))i.headers.set(h,p)}return i}const P=new Set([408,409,425,429,500,502,503,504]),F=new Set([101,204,205,304]);function l(o={}){const{fetch:s=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=o;async function h(r){const c=r.error&&r.error.name==="AbortError"&&!r.options.timeout||!1;if(r.options.retry!==!1&&!c){let e;typeof r.options.retry=="number"?e=r.options.retry:e=m(r.options.method)?0:1;const u=r.response&&r.response.status||500;if(e>0&&(Array.isArray(r.options.retryStatusCodes)?r.options.retryStatusCodes.includes(u):P.has(u))){const f=r.options.retryDelay||0;return f>0&&await new Promise(t=>setTimeout(t,f)),p(r.request,{...r.options,retry:e-1,timeout:r.options.timeout})}}const a=S(r);throw Error.captureStackTrace&&Error.captureStackTrace(a,p),a}const p=async function(c,a={}){var f;const e={request:c,options:O(a,o.defaults,n),response:void 0,error:void 0};if(e.options.method=(f=e.options.method)==null?void 0:f.toUpperCase(),e.options.onRequest&&await e.options.onRequest(e),typeof e.request=="string"&&(e.options.baseURL&&(e.request=q(e.request,e.options.baseURL)),(e.options.query||e.options.params)&&(e.request=E(e.request,{...e.options.params,...e.options.query}))),e.options.body&&m(e.options.method)&&(j(e.options.body)?(e.options.body=typeof e.options.body=="string"?e.options.body:JSON.stringify(e.options.body),e.options.headers=new n(e.options.headers||{}),e.options.headers.has("content-type")||e.options.headers.set("content-type","application/json"),e.options.headers.has("accept")||e.options.headers.set("accept","application/json")):("pipeTo"in e.options.body&&typeof e.options.body.pipeTo=="function"||typeof e.options.body.pipe=="function")&&("duplex"in e.options||(e.options.duplex="half"))),!e.options.signal&&e.options.timeout){const t=new i;setTimeout(()=>t.abort(),e.options.timeout),e.options.signal=t.signal}try{e.response=await s(e.request,e.options)}catch(t){return e.error=t,e.options.onRequestError&&await e.options.onRequestError(e),await h(e)}if(e.response.body&&!F.has(e.response.status)&&e.options.method!=="HEAD"){const t=(e.options.parseResponse?"json":e.options.responseType)||k(e.response.headers.get("content-type")||"");switch(t){case"json":{const d=await e.response.text(),w=e.options.parseResponse||g;e.response._data=w(d);break}case"stream":{e.response._data=e.response.body;break}default:e.response._data=await e.response[t]()}}return e.options.onResponse&&await e.options.onResponse(e),!e.options.ignoreResponseError&&e.response.status>=400&&e.response.status<600?(e.options.onResponseError&&await e.options.onResponseError(e),await h(e)):e.response},y=async function(c,a){return(await p(c,a))._data};return y.raw=p,y.native=(...r)=>s(...r),y.create=(r={})=>l({...o,defaults:{...o.defaults,...r}}),y}const b=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),H=b.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),U=b.Headers,_=b.AbortController,B=l({fetch:H,Headers:U,AbortController:_}),D=B.create({baseURL:"http://192.168.100.29:8080/api",async onRequest({options:o}){const s=T("accessToken").value;s&&(o.headers={...o.headers,Authorization:`Bearer ${s}`})}});export{D as $};
