import{j as s,r}from"./index-CtW-qsqI.js";import{G as x}from"./FoodAddQuantity-CBx_45ww.js";import"./singInShema-BjrU100E.js";import"./index-DazXHbHc.js";import{I as j}from"./Img-Be-Acse8.js";const M="_categories_ek5iw_1",L="_categories_heading_ek5iw_5",$="_categorie_list_ek5iw_9",D="_categorie_list_active_ek5iw_26",_={categories:M,categories_heading:L,categorie_list:$,categorie_list_active:D},w="_category_6v4bm_1",C="_category_img_6v4bm_8",S="_category_img_active_6v4bm_26",b="_category_title_6v4bm_31",k={category:w,category_img:C,category_img_active:S,category_title:b},{category:E,category_img:I,category_title:X,category_img_active:P}=k;function R({catName:o,img:i,activeLink:c,handleActiveLink:a,handleGetFoodByCat:e}){return s.jsxs("div",{className:E,onClick:()=>{a(o),e(o)},children:[s.jsx("div",{className:`${I} ${c===o?P:""}`,children:s.jsx(j,{imgName:i,title:o})}),s.jsx("div",{className:X,children:s.jsx("h4",{children:o})})]})}function G({data:o,activeLink:i,handleActiveLink:c,handleGetFoodByCat:a}){const e=r.useRef(null),[g,n]=r.useState(!1),[l,u]=r.useState(0),[f,m]=r.useState(0),d=t=>{e.current&&(n(!0),u(t.pageX-e.current.offsetLeft),m(e.current.scrollLeft))},v=()=>{n(!1)},y=()=>{n(!1)},h=t=>{if(g&&(t.preventDefault(),e.current)){const p=(t.clientX-e.current.offsetLeft-l)*2;e.current.scrollLeft=f-p,console.log(Math.floor(e.current.scrollLeft))}};return s.jsx("div",{className:`${_.categorie_list} ${g?_.categorie_list_active:""}`,ref:e,onMouseDown:d,onMouseLeave:v,onMouseUp:y,onMouseMove:h,onDragStart:t=>t.preventDefault(),children:s.jsx(x,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},data:o,renderData:t=>s.jsx(R,{...t,activeLink:i,handleActiveLink:c,handleGetFoodByCat:a}),message:"there are no Product"})})}const F=r.memo(G);export{F as C,_ as s};
