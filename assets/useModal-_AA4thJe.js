import{j as o,r as t,p as $,a as v,x as F,y,B as C}from"./index-CbT-tO2b.js";import{a as r}from"./singInShema-BCX8JN01.js";import{F as N}from"./FoodAddQuantity-D1YZp-yF.js";import"./index-CXgxTxOv.js";const b="_spinner_1dvmv_1",L={spinner:b},{spinner:S}=L;function I(){return o.jsx("div",{className:S})}const M={},{grid_list:T}=M;function ao({data:s,renderData:e,message:d,style:n}){const l=s.length>0?s.map(a=>o.jsx(t.Fragment,{children:e(a)},a.id)):o.jsx($,{type:"empty",message:d});return o.jsx("div",{className:T,style:s.length>0?n:{},children:l})}const B="_food_img_x4ld2_1",w={food_img:B},{food_img:A}=w;function D({img:s}){return o.jsx("div",{className:A,children:o.jsx("img",{src:s,alt:""})})}const E="_food_info_1dboe_1",G="_food_name_rating_1dboe_6",H="_food_desc_1dboe_22",P="_food_price_1dboe_28",Q="_food_cat_1dboe_33",R={food_info:E,food_name_rating:G,food_desc:H,food_price:P,food_cat:Q},{food_info:q,food_name_rating:z,food_desc:J,food_price:K,food_cat:O}=R;function U({name:s,description:e,price:d,category:n}){return o.jsxs("div",{className:q,children:[o.jsx("div",{className:O,children:n}),o.jsxs("div",{className:z,children:[o.jsx("p",{children:s}),o.jsx("img",{src:r.rating_starts,alt:"rating"})]}),o.jsx("p",{className:J,children:e}),o.jsxs("div",{className:K,children:["$",d]})]})}const V="_food_item_3vjs3_1",W="_topToBottom_3vjs3_1",X="_food_item_clicked_3vjs3_13",Y="_food_like_3vjs3_20",Z={food_item:V,topToBottom:W,food_item_clicked:X,food_like:Y},{food_item:oo,food_like:so,food_item_clicked:eo}=Z;function lo({id:s,name:e,image:d,price:n,description:l,category:a,isLiked:p,isAuthenticated:f,handleShowModal:m}){const[j,_]=t.useState(!1),i=v(),[u,x]=t.useState(!1),h=t.useCallback(c=>{i(F(c))},[i]),g=t.useCallback(c=>{i(y(c))},[i]),k=t.useCallback(c=>{c?(_(!0),i(C(s)).then(()=>{_(!1)}).catch(()=>{_(!1)})):m()},[i,f,m]);return o.jsxs("div",{className:`${oo} ${u?eo:""}`,children:[o.jsx("div",{className:so,onClick:()=>k(f),children:j?o.jsx(I,{}):p?o.jsx("img",{src:r.like_fill,alt:"like fill"}):o.jsx("img",{src:r.like,alt:"like"})}),o.jsx(D,{img:d}),o.jsx(N,{id:s,handleAddFood:h,handleMinusFood:g,setIsClicked:x}),o.jsx(U,{name:e,description:l,price:n,category:a})]})}const _o=()=>{const[s,e]=t.useState(!1);return{showModal:s,handleClose:()=>{e(!1)},handleShowModal:()=>{e(!0)}}};export{lo as F,ao as G,_o as u};
