import{r as t,j as o}from"./index-CtW-qsqI.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var a=function(){return a=Object.assign||function(i){for(var n,r=1,c=arguments.length;r<c;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(i[l]=n[l])}return i},a.apply(this,arguments)};function $(e,i){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&i.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]]);return n}var A=function(){return Math.random().toString(36).substring(6)},F=function(e){var i=e.animate,n=i===void 0?!0:i,r=e.backgroundColor,c=r===void 0?"#f5f6f7":r,l=e.backgroundOpacity,u=l===void 0?1:l,y=e.baseUrl,h=y===void 0?"":y,L=e.children,x=e.foregroundColor,P=x===void 0?"#eee":x,g=e.foregroundOpacity,R=g===void 0?1:g,p=e.gradientRatio,m=p===void 0?2:p,M=e.uniqueKey,v=e.rtl,T=v===void 0?!1:v,b=e.speed,q=b===void 0?1.2:b,j=e.style,B=j===void 0?{}:j,k=e.title,E=k===void 0?"Loading...":k,O=e.beforeMask,s=O===void 0?null:O,G=$(e,["animate","backgroundColor","backgroundOpacity","baseUrl","children","foregroundColor","foregroundOpacity","gradientRatio","uniqueKey","rtl","speed","style","title","beforeMask"]),d=M||A(),w="".concat(d,"-diff"),C="".concat(d,"-animated-diff"),_="".concat(d,"-aria"),K=T?{transform:"scaleX(-1)"}:null,N="".concat(q,"s"),S="".concat(m*-1," 0"),U="".concat(m," 0");return t.createElement("svg",a({"aria-labelledby":_,role:"img",style:a(a({},B),K)},G),E?t.createElement("title",{id:_},E):null,s&&t.isValidElement(s)?s:null,t.createElement("rect",{role:"presentation",x:"0",y:"0",width:"100%",height:"100%",clipPath:"url(".concat(h,"#").concat(w,")"),style:{fill:"url(".concat(h,"#").concat(C,")")}}),t.createElement("defs",null,t.createElement("clipPath",{id:w},L),t.createElement("linearGradient",{id:C,gradientTransform:"translate(".concat(S,")")},t.createElement("stop",{offset:"0%",stopColor:c,stopOpacity:u}),t.createElement("stop",{offset:"50%",stopColor:P,stopOpacity:R}),t.createElement("stop",{offset:"100%",stopColor:c,stopOpacity:u}),n&&t.createElement("animateTransform",{attributeName:"gradientTransform",type:"translate",values:"".concat(S,"; 0 0; ").concat(U),dur:N,repeatCount:"indefinite"}))))},f=function(e){return e.children?t.createElement(F,a({},e)):t.createElement(I,a({},e))},I=function(e){return t.createElement(f,a({viewBox:"0 0 476 124"},e),t.createElement("rect",{x:"48",y:"8",width:"88",height:"6",rx:"3"}),t.createElement("rect",{x:"48",y:"26",width:"52",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"56",width:"410",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"72",width:"380",height:"6",rx:"3"}),t.createElement("rect",{x:"0",y:"88",width:"178",height:"6",rx:"3"}),t.createElement("circle",{cx:"20",cy:"20",r:"20"}))};const V="_cat_sekelton_e6ou0_1",X={cat_sekelton:V},{cat_sekelton:z}=X;function D(){return o.jsx("div",{className:z,children:o.jsxs(f,{speed:2,width:546,height:124,viewBox:"0 0 546 124",backgroundColor:"#eee",foregroundColor:"#ffffff",children:[o.jsx("circle",{cx:"92",cy:"66",r:"45"}),o.jsx("circle",{cx:"211",cy:"66",r:"45"}),o.jsx("circle",{cx:"336",cy:"66",r:"45"}),o.jsx("circle",{cx:"465",cy:"66",r:"45"}),o.jsx("circle",{cx:"465",cy:"66",r:"45"}),o.jsx("circle",{cx:"465",cy:"66",r:"45"}),o.jsx("circle",{cx:"465",cy:"66",r:"45"}),o.jsx("circle",{cx:"465",cy:"66",r:"45"})]})})}const H="_product_sekelton_ohhnu_1",J={product_sekelton:H},{product_sekelton:Q}=J;function W(){const e=Array(12).fill(0).map((i,n)=>o.jsxs(f,{speed:2,width:400,height:460,viewBox:"0 0 400 460",backgroundColor:"#cbc8c8",foregroundColor:"#ffffff",children:[o.jsx("rect",{x:"4",y:"335",rx:"2",ry:"2",width:"183",height:"7"}),o.jsx("rect",{x:"7",y:"297",rx:"2",ry:"2",width:"66",height:"5"}),o.jsx("rect",{x:"5",y:"17",rx:"2",ry:"2",width:"342",height:"244"}),o.jsx("rect",{x:"6",y:"365",rx:"2",ry:"2",width:"17",height:"28"})]},n));return o.jsx("div",{className:Q,children:e})}const Y={categorie:D,foods:W};function ee({status:e,error:i,children:n,type:r="categorie"}){const c=Y[r];return console.log(e),o.jsx("div",{children:e==="pending"||e==="idle"?o.jsx(c,{}):i?o.jsx("p",{children:i}):n})}export{ee as L};