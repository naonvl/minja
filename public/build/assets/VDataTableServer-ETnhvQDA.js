import{b0 as Vt,r as $,b1 as Dt,a8 as F,aj as W,b2 as Ft,ag as Me,aC as Ne,aE as _t,al as Bt,b3 as Ct,ah as Re,am as Ge,aG as Lt,aa as E,ab as K,ap as ve,aW as At,aH as He,b4 as Ot,aY as $t,aS as se,b5 as Et,a4 as k,b6 as re,$ as T,ad as M,b as d,a6 as H,s as B,b7 as Ce,au as Le,b8 as Se,O as z,U as q,b9 as je,w as Ke,ba as Pe,bb as Mt,aU as j,bc as Nt,bd as Rt,be as ze,bf as Z,bg as oe,bh as ue,bi as Gt,bj as Ht,an as jt,bk as Kt,F as U,a0 as zt,v as Ae,a5 as Oe,x as Wt,bl as xe,aJ as Ut,bm as Y,n as X}from"./main-BQVYuAgi.js";import{V as qt}from"./VSelect-BOjk7R06.js";import{V as ke}from"./VCheckboxBtn-CUNW0s1A.js";import{V as Qt}from"./VDivider-CSlCpYqE.js";function $e(e,l,a){return Object.keys(e).filter(t=>Vt(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Jt(){const e=$([]);Dt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Xt=F({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:W,default:"$first"},prevIcon:{type:W,default:"$prev"},nextIcon:{type:W,default:"$next"},lastIcon:{type:W,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...Ft(),...Me(),...Ne(),..._t(),...Bt(),...Ct(),...Re({tag:"nav"}),...Ge(),...Lt({variant:"text"})},"VPagination"),Ee=E()({name:"VPagination",props:Xt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=K(e,"modelValue"),{t:r,n:c}=ve(),{isRtl:s}=At(),{themeClasses:u}=He(e),{width:i}=Ot(),f=$t(-1);se(void 0,{scoped:!0});const{resizeRef:g}=Et(x=>{if(!x.length)return;const{target:S,contentRect:w}=x[0],V=S.querySelector(".v-pagination__list > *");if(!V)return;const _=w.width,O=V.offsetWidth+parseFloat(getComputedStyle(V).marginRight)*2;f.value=m(_,O)}),o=k(()=>parseInt(e.length,10)),v=k(()=>parseInt(e.start,10)),b=k(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):f.value>=0?f.value:m(i.value,58));function m(x,S){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((x-S*w)/S).toFixed(2)))}const y=k(()=>{if(o.value<=0||isNaN(o.value)||o.value>Number.MAX_SAFE_INTEGER)return[];if(b.value<=0)return[];if(b.value===1)return[n.value];if(o.value<=b.value)return re(o.value,v.value);const x=b.value%2===0,S=x?b.value/2:Math.floor(b.value/2),w=x?S:S+1,V=o.value-S;if(w-n.value>=0)return[...re(Math.max(1,b.value-1),v.value),e.ellipsis,o.value];if(n.value-V>=(x?1:0)){const _=b.value-1,O=o.value-_+v.value;return[v.value,e.ellipsis,...re(_,O)]}else{const _=Math.max(1,b.value-3),O=_===1?n.value:n.value-Math.ceil(_/2)+v.value;return[v.value,e.ellipsis,...re(_,O),e.ellipsis,o.value]}});function h(x,S,w){x.preventDefault(),n.value=S,w&&t(w,S)}const{refs:p,updateRef:I}=Jt();se({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const P=k(()=>y.value.map((x,S)=>{const w=V=>I(V,S);if(typeof x=="string")return{isActive:!1,key:`ellipsis-${S}`,page:x,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const V=x===n.value;return{isActive:V,key:x,page:c(x),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:V?e.activeColor:e.color,"aria-current":V,"aria-label":r(V?e.currentPageAriaLabel:e.pageAriaLabel,x),onClick:_=>h(_,x)}}}})),D=k(()=>{const x=!!e.disabled||n.value<=v.value,S=!!e.disabled||n.value>=v.value+o.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:w=>h(w,v.value,"first"),disabled:x,"aria-label":r(e.firstAriaLabel),"aria-disabled":x}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:w=>h(w,n.value-1,"prev"),disabled:x,"aria-label":r(e.previousAriaLabel),"aria-disabled":x},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:w=>h(w,n.value+1,"next"),disabled:S,"aria-label":r(e.nextAriaLabel),"aria-disabled":S},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:w=>h(w,v.value+o.value-1,"last"),disabled:S,"aria-label":r(e.lastAriaLabel),"aria-disabled":S}:void 0}});function A(){var S;const x=n.value-v.value;(S=p.value[x])==null||S.$el.focus()}function N(x){x.key===Ce.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,Le(A)):x.key===Ce.right&&!e.disabled&&n.value<v.value+o.value-1&&(n.value=n.value+1,Le(A))}return M(()=>d(e.tag,{ref:g,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[d("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&d("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(D.value.first):d(H,B({_as:"VPaginationBtn"},D.value.first),null)]),d("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(D.value.prev):d(H,B({_as:"VPaginationBtn"},D.value.prev),null)]),P.value.map((x,S)=>d("li",{key:x.key,class:["v-pagination__item",{"v-pagination__item--is-active":x.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(x):d(H,B({_as:"VPaginationBtn"},x.props),{default:()=>[x.page]})])),d("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(D.value.next):d(H,B({_as:"VPaginationBtn"},D.value.next),null)]),e.showFirstLastPage&&d("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(D.value.last):d(H,B({_as:"VPaginationBtn"},D.value.last),null)])])]})),{}}}),We=F({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ue=Symbol.for("vuetify:data-table-pagination");function qe(e){const l=K(e,"page",void 0,t=>+(t??1)),a=K(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function Qe(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=k(()=>a.value===-1?0:a.value*(l.value-1)),r=k(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),c=k(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Se(()=>{l.value>c.value&&(l.value=c.value)});function s(o){a.value=o,l.value=1}function u(){l.value=Pe(l.value+1,1,c.value)}function i(){l.value=Pe(l.value-1,1,c.value)}function f(o){l.value=Pe(o,1,c.value)}const g={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:c,itemsLength:t,nextPage:u,prevPage:i,setPage:f,setItemsPerPage:s};return z(Ue,g),g}function Yt(){const e=q(Ue);if(!e)throw new Error("Missing pagination!");return e}function Zt(e){const l=je("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,c=k(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return Ke(c,s=>{l.emit("update:currentItems",s)}),{paginatedItems:c}}const we=F({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),ie=E()({name:"VDataTableFooter",props:we(),setup(e,l){let{slots:a}=l;const{t}=ve(),{page:n,pageCount:r,startIndex:c,stopIndex:s,itemsLength:u,itemsPerPage:i,setItemsPerPage:f}=Yt(),g=k(()=>e.itemsPerPageOptions.map(o=>typeof o=="number"?{value:o,title:o===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(o)}:{...o,title:t(o.title)}));return M(()=>{var v;const o=Ee.filterProps(e);return d("div",{class:"v-data-table-footer"},[(v=a.prepend)==null?void 0:v.call(a),d("div",{class:"v-data-table-footer__items-per-page"},[d("span",null,[t(e.itemsPerPageText)]),d(qt,{items:g.value,modelValue:i.value,"onUpdate:modelValue":b=>f(Number(b)),density:"compact",variant:"outlined","hide-details":!0},null)]),d("div",{class:"v-data-table-footer__info"},[d("div",null,[t(e.pageText,u.value?c.value+1:0,s.value,u.value)])]),d("div",{class:"v-data-table-footer__pagination"},[d(Ee,B({modelValue:n.value,"onUpdate:modelValue":b=>n.value=b,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},o),null)])])}),{}}}),Ie=Mt({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return d(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:j(e.height),width:j(e.width),left:j(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),ea=F({headers:Array},"DataTable-header"),Je=Symbol.for("vuetify:data-table-headers"),Xe={title:"",sortable:!1},ta={...Xe,width:48};function aa(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function pe(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)pe(a,l);return l}function Ye(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&Ye(a.children,l);return l}function la(e){if(e.key){if(e.key==="data-table-group")return Xe;if(["data-table-expand","data-table-select"].includes(e.key))return ta}}function Te(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>Te(a,l+1))):l}function na(e){let l=!1;function a(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(c&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&Rt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return c;if(r.children){r.fixedOffset=c;for(const s of r.children)c=t(s,c)}else r.fixed&&(r.fixedOffset=c,c+=parseFloat(r.width||"0")||0);return c}let n=0;for(const r of e)n=t(r,n)}function ra(e,l){const a=[];let t=0;const n=aa(e);for(;n.size()>0;){let c=n.count();const s=[];let u=1;for(;c>0;){const{element:i,priority:f}=n.dequeue(),g=l-t-Te(i);if(s.push({...i,rowspan:g??1,colspan:i.children?pe(i).length:1}),i.children)for(const o of i.children){const v=f%1+u/Math.pow(10,t+2);n.enqueue(o,t+g+v)}u+=1,c-=1}t+=1,a.push(s)}return{columns:e.map(c=>pe(c)).flat(),headers:a}}function Ze(e){const l=[];for(const a of e){const t={...la(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,c={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?Ze(t.children):void 0};l.push(c)}return l}function et(e,l){const a=$([]),t=$([]),n=$({}),r=$({}),c=$({});Se(()=>{var m,y,h;const i=(e.headers||Object.keys(e.items[0]??{}).map(p=>({key:p,title:Nt(p)}))).slice(),f=Ye(i);(m=l==null?void 0:l.groupBy)!=null&&m.value.length&&!f.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(y=l==null?void 0:l.showSelect)!=null&&y.value&&!f.has("data-table-select")&&i.unshift({key:"data-table-select"}),(h=l==null?void 0:l.showExpand)!=null&&h.value&&!f.has("data-table-expand")&&i.push({key:"data-table-expand"});const g=Ze(i);na(g);const o=Math.max(...g.map(p=>Te(p)))+1,v=ra(g,o);a.value=v.headers,t.value=v.columns;const b=v.headers.flat(1);for(const p of b)p.key&&(p.sortable&&(p.sort&&(n.value[p.key]=p.sort),p.sortRaw&&(r.value[p.key]=p.sortRaw)),p.filter&&(c.value[p.key]=p.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:c};return z(Je,s),s}function ge(){const e=q(Je);if(!e)throw new Error("Missing headers!");return e}const ua={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},tt={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return tt.select({items:a,value:l,selected:t})}},at={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return at.select({items:a,value:l,selected:t})}},sa=F({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:ze}},"DataTable-select"),lt=Symbol.for("vuetify:data-table-selection");function nt(e,l){let{allItems:a,currentPage:t}=l;const n=K(e,"modelValue",e.modelValue,y=>new Set(Z(y).map(h=>{var p;return((p=a.value.find(I=>e.valueComparator(h,I.value)))==null?void 0:p.value)??h})),y=>[...y.values()]),r=k(()=>a.value.filter(y=>y.selectable)),c=k(()=>t.value.filter(y=>y.selectable)),s=k(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ua;case"all":return at;case"page":default:return tt}});function u(y){return Z(y).every(h=>n.value.has(h.value))}function i(y){return Z(y).some(h=>n.value.has(h.value))}function f(y,h){const p=s.value.select({items:y,value:h,selected:new Set(n.value)});n.value=p}function g(y){f([y],!u([y]))}function o(y){const h=s.value.selectAll({value:y,allItems:r.value,currentPage:c.value,selected:new Set(n.value)});n.value=h}const v=k(()=>n.value.size>0),b=k(()=>{const y=s.value.allSelected({allItems:r.value,currentPage:c.value});return!!y.length&&u(y)}),m={toggleSelect:g,select:f,selectAll:o,isSelected:u,isSomeSelected:i,someSelected:v,allSelected:b,showSelectAll:s.value.showSelectAll};return z(lt,m),m}function me(){const e=q(lt);if(!e)throw new Error("Missing selection!");return e}const oa=F({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),rt=Symbol.for("vuetify:data-table-sort");function ut(e){const l=K(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function st(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=u=>{if(u.key==null)return;let i=l.value.map(g=>({...g}))??[];const f=i.find(g=>g.key===u.key);f?f.order==="desc"?a.value?f.order="asc":i=i.filter(g=>g.key!==u.key):f.order="desc":t.value?i=[...i,{key:u.key,order:"asc"}]:i=[{key:u.key,order:"asc"}],l.value=i,n&&(n.value=1)};function c(u){return!!l.value.find(i=>i.key===u.key)}const s={sortBy:l,toggleSort:r,isSorted:c};return z(rt,s),s}function ia(){const e=q(rt);if(!e)throw new Error("Missing sort!");return e}function ca(e,l,a,t,n){const r=ve();return{sortedItems:k(()=>a.value.length?da(l.value,a.value,r.current.value,{...e.customKeySort,...t==null?void 0:t.value},n==null?void 0:n.value):l.value)}}function da(e,l,a,t,n){const r=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return[...e].sort((c,s)=>{for(let u=0;u<l.length;u++){const i=l[u].key,f=l[u].order??"asc";if(f===!1)continue;let g=oe(c.raw,i),o=oe(s.raw,i),v=c.raw,b=s.raw;if(f==="desc"&&([g,o]=[o,g],[v,b]=[b,v]),n!=null&&n[i]){const m=n[i](v,b);if(!m)continue;return m}if(t!=null&&t[i]){const m=t[i](g,o);if(!m)continue;return m}if(g instanceof Date&&o instanceof Date)return g.getTime()-o.getTime();if([g,o]=[g,o].map(m=>m!=null?m.toString().toLocaleLowerCase():m),g!==o)return ue(g)&&ue(o)?0:ue(g)?-1:ue(o)?1:!isNaN(g)&&!isNaN(o)?Number(g)-Number(o):r.compare(g,o)}return 0})}const ot=F({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:W,default:"$sortAsc"},sortDescIcon:{type:W,default:"$sortDesc"},headerProps:{type:Object},...Gt()},"VDataTableHeaders"),ce=E()({name:"VDataTableHeaders",props:ot(),setup(e,l){let{slots:a}=l;const{toggleSort:t,sortBy:n,isSorted:r}=ia(),{someSelected:c,allSelected:s,selectAll:u,showSelectAll:i}=me(),{columns:f,headers:g}=ge(),{loaderClasses:o}=Ht(e);function v(I,P){if(!(!e.sticky&&!I.fixed))return{position:"sticky",left:I.fixed?j(I.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${P})`:void 0}}function b(I){const P=n.value.find(D=>D.key===I.key);return P?P.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:m,backgroundColorStyles:y}=jt(e,"color"),h=k(()=>({headers:g.value,columns:f.value,toggleSort:t,isSorted:r,sortBy:n.value,someSelected:c.value,allSelected:s.value,selectAll:u,getSortIcon:b})),p=I=>{let{column:P,x:D,y:A}=I;const N=P.key==="data-table-select"||P.key==="data-table-expand",x=B(e.headerProps??{},P.headerProps??{});return d(Ie,B({tag:"th",align:P.align,class:["v-data-table__th",{"v-data-table__th--sortable":P.sortable,"v-data-table__th--sorted":r(P),"v-data-table__th--fixed":P.fixed,"v-data-table__th--sticky":e.sticky},o.value],style:{width:j(P.width),minWidth:j(P.minWidth),...v(P,A)},colspan:P.colspan,rowspan:P.rowspan,onClick:P.sortable?()=>t(P):void 0,fixed:P.fixed,lastFixed:P.lastFixed,noPadding:N},x),{default:()=>{var V;const S=`header.${P.key}`,w={column:P,selectAll:u,isSorted:r,toggleSort:t,sortBy:n.value,someSelected:c.value,allSelected:s.value,getSortIcon:b};return a[S]?a[S](w):P.key==="data-table-select"?((V=a["header.data-table-select"])==null?void 0:V.call(a,w))??(i&&d(ke,{modelValue:s.value,indeterminate:c.value&&!s.value,"onUpdate:modelValue":u},null)):d("div",{class:"v-data-table-header__content"},[d("span",null,[P.title]),P.sortable&&d(zt,{key:"icon",class:"v-data-table-header__sort-icon",icon:b(P)},null),e.multiSort&&r(P)&&d("div",{key:"badge",class:["v-data-table-header__sort-badge",...m.value],style:y.value},[n.value.findIndex(_=>_.key===P.key)+1])])}})};M(()=>d(U,null,[a.headers?a.headers(h.value):g.value.map((I,P)=>d("tr",null,[I.map((D,A)=>d(p,{column:D,x:A,y:P},null))])),e.loading&&d("tr",{class:"v-data-table-progress"},[d("th",{colspan:f.value.length},[d(Kt,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),fa=F({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),it=Symbol.for("vuetify:data-table-group");function ct(e){return{groupBy:K(e,"groupBy")}}function dt(e){const{groupBy:l,sortBy:a}=e,t=$(new Set),n=k(()=>l.value.map(i=>({...i,order:i.order??!1})).concat(a.value));function r(i){return t.value.has(i.id)}function c(i){const f=new Set(t.value);r(i)?f.delete(i.id):f.add(i.id),t.value=f}function s(i){function f(g){const o=[];for(const v of g.items)"type"in v&&v.type==="group"?o.push(...f(v)):o.push(v);return o}return f({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const u={sortByWithGroups:n,toggleGroup:c,opened:t,groupBy:l,extractRows:s,isGroupOpen:r};return z(it,u),u}function ft(){const e=q(it);if(!e)throw new Error("Missing group!");return e}function va(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=oe(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function vt(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=va(e,l[0]),r=[],c=l.slice(1);return n.forEach((s,u)=>{const i=l[0],f=`${t}_${i}_${u}`;r.push({depth:a,id:f,key:i,value:u,items:c.length?vt(s,c,a+1,f):s,type:"group"})}),r}function gt(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...gt(t.items,l))):a.push(t);return a}function mt(e,l,a){return{flatItems:k(()=>{if(!l.value.length)return e.value;const n=vt(e.value,l.value.map(r=>r.key));return gt(n,a.value)})}}const ga=F({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ma=E()({name:"VDataTableGroupHeaderRow",props:ga(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=ft(),{isSelected:c,isSomeSelected:s,select:u}=me(),{columns:i}=ge(),f=k(()=>r([e.item]));return()=>d("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(g=>{var o,v;if(g.key==="data-table-group"){const b=t(e.item)?"$expand":"$next",m=()=>n(e.item);return((o=a["data-table-group"])==null?void 0:o.call(a,{item:e.item,count:f.value.length,props:{icon:b,onClick:m}}))??d(Ie,{class:"v-data-table-group-header-row__column"},{default:()=>[d(H,{size:"small",variant:"text",icon:b,onClick:m},null),d("span",null,[e.item.value]),d("span",null,[Ae("("),f.value.length,Ae(")")])]})}if(g.key==="data-table-select"){const b=c(f.value),m=s(f.value)&&!b,y=h=>u(f.value,h);return((v=a["data-table-select"])==null?void 0:v.call(a,{props:{modelValue:b,indeterminate:m,"onUpdate:modelValue":y}}))??d("td",null,[d(ke,{modelValue:b,indeterminate:m,"onUpdate:modelValue":y},null)])}return d("td",null,null)})])}}),ba=F({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),bt=Symbol.for("vuetify:datatable:expanded");function yt(e){const l=T(e,"expandOnClick"),a=K(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,u){const i=new Set(a.value);u?i.add(s.value):i.delete(s.value),a.value=i}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const c={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return z(bt,c),c}function ht(){const e=q(bt);if(!e)throw new Error("foo");return e}const ya=F({index:Number,item:Object,cellProps:[Object,Function],onClick:xe(),onContextmenu:xe(),onDblclick:xe()},"VDataTableRow"),ha=E()({name:"VDataTableRow",props:ya(),setup(e,l){let{slots:a}=l;const{isSelected:t,toggleSelect:n}=me(),{isExpanded:r,toggleExpand:c}=ht(),{columns:s}=ge();M(()=>d("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&s.value.map((u,i)=>{const f=e.item,g=`item.${u.key}`,o={index:e.index,item:f.raw,internalItem:f,value:oe(f.columns,u.key),column:u,isSelected:t,toggleSelect:n,isExpanded:r,toggleExpand:c},v=typeof e.cellProps=="function"?e.cellProps({index:o.index,item:o.item,internalItem:o.internalItem,value:o.value,column:u}):e.cellProps,b=typeof u.cellProps=="function"?u.cellProps({index:o.index,item:o.item,internalItem:o.internalItem,value:o.value}):u.cellProps;return d(Ie,B({align:u.align,fixed:u.fixed,fixedOffset:u.fixedOffset,lastFixed:u.lastFixed,noPadding:u.key==="data-table-select"||u.key==="data-table-expand",width:u.width},v,b),{default:()=>{var m,y;return a[g]?a[g](o):u.key==="data-table-select"?((m=a["item.data-table-select"])==null?void 0:m.call(a,o))??d(ke,{disabled:!f.selectable,modelValue:t([f]),onClick:Oe(()=>n(f),["stop"])},null):u.key==="data-table-expand"?((y=a["item.data-table-expand"])==null?void 0:y.call(a,o))??d(H,{icon:r(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:Oe(()=>c(f),["stop"])},null):Wt(o.value)}})})]))}}),Pt=F({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),de=E()({name:"VDataTableRows",inheritAttrs:!1,props:Pt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=ge(),{expandOnClick:r,toggleExpand:c,isExpanded:s}=ht(),{isSelected:u,toggleSelect:i}=me(),{toggleGroup:f,isGroupOpen:g}=ft(),{t:o}=ve();return M(()=>{var v,b;return e.loading&&(!e.items.length||t.loading)?d("tr",{class:"v-data-table-rows-loading",key:"loading"},[d("td",{colspan:n.value.length},[((v=t.loading)==null?void 0:v.call(t))??o(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?d("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[d("td",{colspan:n.value.length},[((b=t["no-data"])==null?void 0:b.call(t))??o(e.noDataText)])]):d(U,null,[e.items.map((m,y)=>{var I;if(m.type==="group"){const P={index:y,item:m,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:u,toggleSelect:i,toggleGroup:f,isGroupOpen:g};return t["group-header"]?t["group-header"](P):d(ma,B({key:`group-header_${m.id}`,item:m},$e(a,":group-header",()=>P)),t)}const h={index:y,item:m.raw,internalItem:m,columns:n.value,isExpanded:s,toggleExpand:c,isSelected:u,toggleSelect:i},p={...h,props:B({key:`item_${m.key??m.index}`,onClick:r.value?()=>{c(m)}:void 0,index:y,item:m,cellProps:e.cellProps},$e(a,":row",()=>h),typeof e.rowProps=="function"?e.rowProps({item:h.item,index:h.index,internalItem:h.internalItem}):e.rowProps)};return d(U,{key:p.props.key},[t.item?t.item(p):d(ha,p.props,t),s(m)&&((I=t["expanded-row"])==null?void 0:I.call(t,h))])})])}),{}}}),xt=F({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Me(),...Ne(),...Re(),...Ge()},"VTable"),fe=E()({name:"VTable",props:xt(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=He(e),{densityClasses:r}=Ut(e);return M(()=>d(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var c,s,u;return[(c=a.top)==null?void 0:c.call(a),a.default?d("div",{class:"v-table__wrapper",style:{height:j(e.height)}},[d("table",null,[a.default()])]):(s=a.wrapper)==null?void 0:s.call(a),(u=a.bottom)==null?void 0:u.call(a)]}})),{}}}),Pa=F({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function xa(e,l,a,t){const n=e.returnObject?l:Y(l,e.itemValue),r=Y(l,e.itemSelectable,!0),c=t.reduce((s,u)=>(u.key!=null&&(s[u.key]=Y(l,u.value)),s),{});return{type:"item",key:e.returnObject?Y(l,e.itemValue):n,index:a,value:n,selectable:r,columns:c,raw:l}}function pa(e,l,a){return l.map((t,n)=>xa(e,t,n,a))}function pt(e,l){return{items:k(()=>pa(e,e.items,l.value))}}function St(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const c=je("VDataTable"),s=k(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let u=null;Ke(s,()=>{ze(u,s.value)||((u==null?void 0:u.search)!==s.value.search&&(l.value=1),c.emit("update:options",s.value),u=s.value)},{deep:!0,immediate:!0})}const Sa=(e,l,a)=>e==null||l==null?-1:e.toString().toLocaleLowerCase().indexOf(l.toString().toLocaleLowerCase()),ka=F({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function wa(e,l,a){var s;const t=[],n=(a==null?void 0:a.default)??Sa,r=a!=null&&a.filterKeys?Z(a.filterKeys):!1,c=Object.keys((a==null?void 0:a.customKeyFilter)??{}).length;if(!(e!=null&&e.length))return t;e:for(let u=0;u<e.length;u++){const[i,f=i]=Z(e[u]),g={},o={};let v=-1;if(l&&!(a!=null&&a.noFilter)){if(typeof i=="object"){const y=r||Object.keys(f);for(const h of y){const p=Y(f,h,f),I=(s=a==null?void 0:a.customKeyFilter)==null?void 0:s[h];if(v=I?I(p,l,i):n(p,l,i),v!==-1&&v!==!1)I?g[h]=v:o[h]=v;else if((a==null?void 0:a.filterMode)==="every")continue e}}else v=n(i,l,i),v!==-1&&v!==!1&&(o.title=v);const b=Object.keys(o).length,m=Object.keys(g).length;if(!b&&!m||(a==null?void 0:a.filterMode)==="union"&&m!==c&&!b||(a==null?void 0:a.filterMode)==="intersection"&&(m!==c||!b))continue}t.push({index:u,matches:{...o,...g}})}return t}function Ia(e,l,a,t){const n=$([]),r=$(new Map),c=k(()=>t!=null&&t.transform?X(l).map(u=>[u,t.transform(u)]):X(l));Se(()=>{const u=typeof a=="function"?a():X(a),i=typeof u!="string"&&typeof u!="number"?"":String(u),f=wa(c.value,i,{customKeyFilter:{...e.customKeyFilter,...X(t==null?void 0:t.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),g=X(l),o=[],v=new Map;f.forEach(b=>{let{index:m,matches:y}=b;const h=g[m];o.push(h),v.set(h.value,y)}),n.value=o,r.value=v});function s(u){return r.value.get(u.value)}return{filteredItems:n,filteredMatches:r,getMatches:s}}const kt=F({...Pt(),width:[String,Number],search:String,...ba(),...fa(),...ea(),...Pa(),...sa(),...oa(),...ot(),...xt()},"DataTable"),Ta=F({...We(),...kt(),...ka(),...we()},"VDataTable");E()({name:"VDataTable",props:Ta(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ct(e),{sortBy:r,multiSort:c,mustSort:s}=ut(e),{page:u,itemsPerPage:i}=qe(e),{columns:f,headers:g,sortFunctions:o,sortRawFunctions:v,filterFunctions:b}=et(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:m}=pt(e,f),y=T(e,"search"),{filteredItems:h}=Ia(e,m,y,{transform:Q=>Q.columns,customKeyFilter:b}),{toggleSort:p}=st({sortBy:r,multiSort:c,mustSort:s,page:u}),{sortByWithGroups:I,opened:P,extractRows:D,isGroupOpen:A,toggleGroup:N}=dt({groupBy:n,sortBy:r}),{sortedItems:x}=ca(e,h,I,o,v),{flatItems:S}=mt(x,n,P),w=k(()=>S.value.length),{startIndex:V,stopIndex:_,pageCount:O,setItemsPerPage:ee}=Qe({page:u,itemsPerPage:i,itemsLength:w}),{paginatedItems:C}=Zt({items:S,startIndex:V,stopIndex:_,itemsPerPage:i}),R=k(()=>D(C.value)),{isSelected:be,select:ye,selectAll:he,toggleSelect:G,someSelected:te,allSelected:ae}=nt(e,{allItems:m,currentPage:R}),{isExpanded:le,toggleExpand:ne}=yt(e);St({page:u,itemsPerPage:i,sortBy:r,groupBy:n,search:y}),se({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const L=k(()=>({page:u.value,itemsPerPage:i.value,sortBy:r.value,pageCount:O.value,toggleSort:p,setItemsPerPage:ee,someSelected:te.value,allSelected:ae.value,isSelected:be,select:ye,selectAll:he,toggleSelect:G,isExpanded:le,toggleExpand:ne,isGroupOpen:A,toggleGroup:N,items:R.value.map(Q=>Q.raw),internalItems:R.value,groupedItems:C.value,columns:f.value,headers:g.value}));return M(()=>{const Q=ie.filterProps(e),wt=ce.filterProps(e),It=de.filterProps(e),Tt=fe.filterProps(e);return d(fe,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},Tt),{top:()=>{var J;return(J=t.top)==null?void 0:J.call(t,L.value)},default:()=>{var J,Ve,De,Fe,_e,Be;return t.default?t.default(L.value):d(U,null,[(J=t.colgroup)==null?void 0:J.call(t,L.value),d("thead",null,[d(ce,wt,t)]),(Ve=t.thead)==null?void 0:Ve.call(t,L.value),d("tbody",null,[(De=t["body.prepend"])==null?void 0:De.call(t,L.value),t.body?t.body(L.value):d(de,B(a,It,{items:C.value}),t),(Fe=t["body.append"])==null?void 0:Fe.call(t,L.value)]),(_e=t.tbody)==null?void 0:_e.call(t,L.value),(Be=t.tfoot)==null?void 0:Be.call(t,L.value)])},bottom:()=>t.bottom?t.bottom(L.value):d(U,null,[d(Qt,null,null),d(ie,Q,{prepend:t["footer.prepend"]})])})}),{}}});const Va=F({itemsLength:{type:[Number,String],required:!0},...We(),...kt(),...we()},"VDataTableServer"),Ca=E()({name:"VDataTableServer",props:Va(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ct(e),{sortBy:r,multiSort:c,mustSort:s}=ut(e),{page:u,itemsPerPage:i}=qe(e),f=k(()=>parseInt(e.itemsLength,10)),{columns:g,headers:o}=et(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:v}=pt(e,g),{toggleSort:b}=st({sortBy:r,multiSort:c,mustSort:s,page:u}),{opened:m,isGroupOpen:y,toggleGroup:h,extractRows:p}=dt({groupBy:n,sortBy:r}),{pageCount:I,setItemsPerPage:P}=Qe({page:u,itemsPerPage:i,itemsLength:f}),{flatItems:D}=mt(v,n,m),{isSelected:A,select:N,selectAll:x,toggleSelect:S,someSelected:w,allSelected:V}=nt(e,{allItems:v,currentPage:v}),{isExpanded:_,toggleExpand:O}=yt(e),ee=k(()=>p(v.value));St({page:u,itemsPerPage:i,sortBy:r,groupBy:n,search:T(e,"search")}),z("v-data-table",{toggleSort:b,sortBy:r}),se({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const C=k(()=>({page:u.value,itemsPerPage:i.value,sortBy:r.value,pageCount:I.value,toggleSort:b,setItemsPerPage:P,someSelected:w.value,allSelected:V.value,isSelected:A,select:N,selectAll:x,toggleSelect:S,isExpanded:_,toggleExpand:O,isGroupOpen:y,toggleGroup:h,items:ee.value.map(R=>R.raw),internalItems:ee.value,groupedItems:D.value,columns:g.value,headers:o.value}));M(()=>{const R=ie.filterProps(e),be=ce.filterProps(e),ye=de.filterProps(e),he=fe.filterProps(e);return d(fe,B({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},he),{top:()=>{var G;return(G=t.top)==null?void 0:G.call(t,C.value)},default:()=>{var G,te,ae,le,ne,L;return t.default?t.default(C.value):d(U,null,[(G=t.colgroup)==null?void 0:G.call(t,C.value),d("thead",{class:"v-data-table__thead",role:"rowgroup"},[d(ce,B(be,{sticky:e.fixedHeader}),t)]),(te=t.thead)==null?void 0:te.call(t,C.value),d("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(ae=t["body.prepend"])==null?void 0:ae.call(t,C.value),t.body?t.body(C.value):d(de,B(a,ye,{items:D.value}),t),(le=t["body.append"])==null?void 0:le.call(t,C.value)]),(ne=t.tbody)==null?void 0:ne.call(t,C.value),(L=t.tfoot)==null?void 0:L.call(t,C.value)])},bottom:()=>t.bottom?t.bottom(C.value):d(ie,R,{prepend:t["footer.prepend"]})})})}});export{Ca as V,fe as a,Ee as b};