import{d as e,A as a,o as s,c as t,w as l,h as r,g as c,b as o,l as h,e as i,f as u,t as n,F as d,k as p,m as _,z as f,V as m,am as g,aN as x,aO as y,aP as v,aA as b,r as w,a as k}from"./index.79254360.js";import{_ as j}from"./u-search.a4cf8475.js";import{_ as C}from"./news-card.4d31f362.js";import{_ as V}from"./z-paging.9f79cd17.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{b as I}from"./shop.5c0dbd15.js";import{g as S}from"./news.b74e8e56.js";import"./u-icon.d0b3143a.js";import"./u-image.2ac5798f.js";import"./icon_visit.21b6ed3b.js";var A=z(e({__name:"suggest",props:{hot_search:{default:()=>[]},his_search:{default:()=>[]}},emits:["search","clear"],setup(e,{emit:_}){const f=e,m=a((()=>f.hot_search.filter((e=>e)))),g=e=>{_("search",e)};return(a,f)=>{const x=p;return s(),t(x,{class:"suggest bg-white"},{default:l((()=>[r(" 热门搜索 "),c(m).length?(s(),t(x,{key:0,class:"hot"},{default:l((()=>[o(x,{class:"font-medium pl-[24rpx] pt-[26rpx] pb-[6rpx] text-lg"},{default:l((()=>[h("热门搜索")])),_:1}),o(x,{class:"w-full px-[24rpx]"},{default:l((()=>[(s(!0),i(d,null,u(c(m),((e,a)=>(s(),t(x,{key:a,class:"keyword truncate max-w-full",onClick:a=>g(e)},{default:l((()=>[h(n(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):r("v-if",!0),c(m).length&&e.his_search.length?(s(),t(x,{key:1,class:"mx-[24rpx] my-[40rpx] border-b border-solid border-0 border-light"})):r("v-if",!0),r(" 历史搜索 "),e.his_search.length?(s(),t(x,{key:2,class:"history"},{default:l((()=>[o(x,{class:"flex justify-between px-[24rpx] pb-[6rpx] pt-[26rpx]"},{default:l((()=>[o(x,{class:"text-lg font-medium"},{default:l((()=>[h("历史搜索")])),_:1}),o(x,{class:"text-xs text-muted",onClick:f[0]||(f[0]=()=>_("clear"))},{default:l((()=>[h("清空")])),_:1})])),_:1}),o(x,{class:"w-full px-[24rpx]"},{default:l((()=>[(s(!0),i(d,null,u(e.his_search,((e,a)=>(s(),t(x,{key:a,class:"keyword truncate",onClick:a=>g(e)},{default:l((()=>[h(n(e),1)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})):r("v-if",!0)])),_:1})}}}),[["__scopeId","data-v-47780dd2"]]);var N=z(e({__name:"search",setup(e){const a=_({hot_search:[],his_search:[],result:[],searching:!1}),c=f(""),h=m(),n=e=>{c.value=e,c.value&&(a.his_search.includes(c.value)||(a.his_search.unshift(c.value),g.set(x,a.his_search))),h.value.reload(),a.searching=!0},z=async()=>{(await b({title:"温馨提示",content:"是否清空历史记录？"})).confirm&&(g.set(x,""),a.his_search=[])},N=async(e,a)=>{try{const{lists:s}=await S({keyword:c.value,pageNo:e,pageSize:a});h.value.complete(s)}catch(s){console.log("报错=>",s),h.value.complete(!1)}};return(async()=>{try{a.hot_search=await I()}catch(e){console.log("获取热门搜索失败=>",e)}})(),a.his_search=g.get(x)||[],(e,_)=>{const f=w(k("u-search"),j),m=p,g=w(k("news-card"),C),x=w(k("z-paging"),V);return s(),t(m,{class:"search"},{default:l((()=>[r(" 搜索框 "),o(m,{class:"px-[24rpx] py-[14rpx] bg-white"},{default:l((()=>[o(f,{modelValue:c.value,"onUpdate:modelValue":_[0]||(_[0]=e=>c.value=e),placeholder:"请输入关键词搜索",height:"72",onSearch:n,onCustom:n,onClear:_[1]||(_[1]=e=>a.searching=!1)},null,8,["modelValue"])])),_:1}),r(" 搜索 "),o(m,{class:"search-content"},{default:l((()=>[r("  "),y(o(A,{onSearch:n,onClear:z,hot_search:a.hot_search,his_search:a.his_search},null,8,["hot_search","his_search"]),[[v,!a.searching]]),r("  "),y(o(m,{class:"search-content-s pt-[20rpx]"},{default:l((()=>[o(x,{ref_key:"paging",ref:h,modelValue:a.result,"onUpdate:modelValue":_[2]||(_[2]=e=>a.result=e),onQuery:N,fixed:!1,height:"100%"},{default:l((()=>[(s(!0),i(d,null,u(a.result,((e,a)=>(s(),t(g,{key:e.id,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["modelValue"])])),_:1},512),[[v,a.searching]])])),_:1})])),_:1})}}}),[["__scopeId","data-v-7de06bc9"]]);export{N as default};
