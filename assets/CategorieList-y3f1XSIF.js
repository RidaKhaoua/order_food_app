import{r,j as e}from"./index-kczTQTv2.js";import{G as p}from"./FoodAddQuantity-DJDYubg7.js";import"./singInShema-ZTJNy8zx.js";import"./index-CfzgaTqb.js";import{I as j}from"./Img-CV_NwacL.js";const M="_categories_ek5iw_1",$="_categories_heading_ek5iw_5",L="_categorie_list_ek5iw_9",C="_categorie_list_active_ek5iw_26",g={categories:M,categories_heading:$,categorie_list:L,categorie_list_active:C};function D(){return e.jsxs("div",{className:g.categories_heading,children:[e.jsx("h2",{children:"Explore menu"}),e.jsx("p",{children:"Chose from a diverse menu featuring a dlectable array of dishes."})]})}const F=r.memo(D),w="_category_6v4bm_1",b="_category_img_6v4bm_8",S="_category_img_active_6v4bm_26",k="_category_title_6v4bm_31",E={category:w,category_img:b,category_img_active:S,category_title:k},{category:I,category_img:X,category_title:P,category_img_active:R}=E;function G({catName:o,img:i,activeLink:a,handleActiveLink:c,handleGetFoodByCat:t}){return e.jsxs("div",{className:I,onClick:()=>{c(o),t(o)},children:[e.jsx("div",{className:`${X} ${a===o?R:""}`,children:e.jsx(j,{imgName:i,title:o})}),e.jsx("div",{className:P,children:e.jsx("h4",{children:o})})]})}function H({data:o,activeLink:i,handleActiveLink:a,handleGetFoodByCat:c}){const t=r.useRef(null),[l,n]=r.useState(!1),[_,d]=r.useState(0),[u,m]=r.useState(0),f=s=>{t.current&&(n(!0),d(s.pageX-t.current.offsetLeft),m(t.current.scrollLeft))},v=()=>{n(!1)},y=()=>{n(!1)},h=s=>{if(l&&(s.preventDefault(),t.current)){const x=(s.clientX-t.current.offsetLeft-_)*2;t.current.scrollLeft=u-x,console.log(Math.floor(t.current.scrollLeft))}};return e.jsx("div",{className:`${g.categorie_list} ${l?g.categorie_list_active:""}`,ref:t,onMouseDown:f,onMouseLeave:v,onMouseUp:y,onMouseMove:h,onDragStart:s=>s.preventDefault(),children:e.jsx(p,{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},data:o,renderData:s=>e.jsx(G,{...s,activeLink:i,handleActiveLink:a,handleGetFoodByCat:c}),message:"there are no Product"})})}const J=r.memo(H);export{F as C,J as a,g as s};
