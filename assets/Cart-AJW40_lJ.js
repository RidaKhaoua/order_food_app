import{j as t,a as l,s as u,r as _,t as m,v as h,u as i,w as x,x as j,y as b,z as f,p as y}from"./index-CbT-tO2b.js";import"./index-CXgxTxOv.js";import{a as v}from"./singInShema-BCX8JN01.js";import{L as F}from"./Loading-BcOMVfjL.js";import"./FoodAddQuantity-D1YZp-yF.js";import{W as $,C}from"./CartTotal-k2hzAfai.js";import{B as g}from"./Button-Cd3s39V2.js";function T({headers:r}){return t.jsx("thead",{children:t.jsx("tr",{children:r.map(s=>t.jsx("th",{children:s}))})})}const N="_table_10ko1_1",k="_tbody_price_10ko1_38",P="_tbody_remove_10ko1_48",p={table:N,tbody_price:k,tbody_remove:P},{tbody_remove:R,tbody_price:A}=p;function E({data:r,handleRemoveFood:s}){return t.jsx("tbody",{children:r.map(o=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("img",{src:o.image,alt:o.name})}),t.jsx("td",{children:o.name}),t.jsx("td",{className:A,children:t.jsxs("span",{children:[o.price.toFixed(2),"$"]})}),t.jsx("td",{children:o.quantity}),t.jsxs("td",{children:[(o.price*(o.quantity||1)).toFixed(2),"$"]}),t.jsx("td",{className:R,onClick:()=>s(o.id),children:t.jsx("img",{src:v.cross_icon,alt:"cross icon"})})]},o.id))})}const{table:L}=p;function q({headers:r,data:s}){const o=l(),n=a=>{o(u(a))};return t.jsxs("table",{className:L,children:[t.jsx(T,{headers:r}),t.jsx(E,{data:s,handleRemoveFood:n})]})}const D="_cart_promo_5u8mb_1",I="_cart_promo_title_5u8mb_13",w="_cart_promo_input_5u8mb_17",B="_cart_promo_input_button_5u8mb_22",M={cart_promo:D,cart_promo_title:I,cart_promo_input:w,cart_promo_input_button:B},{cart_promo:S,cart_promo_title:W,cart_promo_input_button:z,cart_promo_input:G}=M;function H({discountVal:r}){var a;const s=_.useRef(null),o=l(),n=()=>{r===-1&&o(m());const c=setTimeout(()=>{var d;o(h((d=s.current)==null?void 0:d.value))},1e3);return()=>clearTimeout(c)};return t.jsxs("div",{className:S,children:[t.jsx("h5",{className:W,children:"if you have promos code Enter it."}),t.jsxs("div",{className:z,children:[t.jsx("div",{className:G,children:t.jsx("input",{type:"text",ref:s,placeholder:"Enter your code",onChange:c=>{s.current&&(s.current.value=c.target.value)}})}),t.jsx(g,{type:"button",style:{backgroundColor:"black",padding:"4px 22px",borderRadius:"4px",color:"white",border:"none"},onClick:n,children:"Submit"})]}),r===-1&&t.jsx($,{text:`${(a=s.current)==null?void 0:a.value} is not available`})]})}const O=()=>{const r=l(),{status:s,error:o,foodIdAndQuantity:n,foods:a}=i(e=>e.cart),c=i(e=>e.foodList.discountPrice),d=a.map(e=>({...e,quantity:n[e.id]||0}));return _.useEffect(()=>{const e=r(x());return()=>{e.abort()}},[r]),{status:s,error:o,foodIdAndQuantity:n,fullfoodInfo:d,discountPrice:c,handleRemoveFood:e=>{r(u(e))},handleAddFood:e=>{r(j(e))},handleMinusFood:e=>{r(b(e))}}},Q="_cart_y6of0_1",V="_cart_total_promo_y6of0_5",J={cart:Q,cart_total_promo:V},{cart:K,cart_total_promo:U}=J;function ct(){const{status:r,error:s,fullfoodInfo:o}=O(),n=i(a=>a.foodList.discountPrice);return t.jsx("div",{className:K,children:t.jsx(F,{status:r,error:s,children:o.length>0?t.jsxs(t.Fragment,{children:[t.jsx(q,{data:o,headers:f}),t.jsxs("div",{className:U,children:[t.jsx(C,{foods:o,discountVal:n}),t.jsx(H,{discountVal:n})]})]}):t.jsx(y,{type:"empty",message:"There are no products"})})})}export{ct as default};
