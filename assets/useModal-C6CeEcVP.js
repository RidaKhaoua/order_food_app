import{r as e,a as g,w as S,x as v,B as I,j as o}from"./index-CtW-qsqI.js";import{F as M,a as T,b as $}from"./FoodAddQuantity-CBx_45ww.js";import{a as _}from"./singInShema-BjrU100E.js";import{S as b}from"./index-DazXHbHc.js";const w="_food_item_3vjs3_1",B="_topToBottom_3vjs3_1",L="_food_item_clicked_3vjs3_13",A="_food_like_3vjs3_20",y={food_item:w,topToBottom:B,food_item_clicked:L,food_like:A},{food_item:E,food_like:N,food_item_clicked:D}=y;function z({id:t,name:l,documentId:i,image:c,price:m,description:f,category:r,isLiked:k,isAuthenticated:u,handleShowModal:n}){const[h,d]=e.useState(!1),s=g(),[p,j]=e.useState(!1),x=e.useCallback(a=>{s(S(a))},[s]),F=e.useCallback(a=>{s(v(a))},[s]),C=e.useCallback(a=>{a?(d(!0),console.log(t),s(I(t)).then(()=>{d(!1)}).catch(()=>{d(!1)})):n()},[s,n,t]);return o.jsxs("div",{className:`${E} ${p?D:""}`,children:[o.jsx("div",{className:N,onClick:()=>C(u),children:h?o.jsx(b,{}):k?o.jsx("img",{src:_.like_fill,alt:"like fill"}):o.jsx("img",{src:_.like,alt:"like"})}),o.jsx(M,{img:c}),o.jsx(T,{documentId:i,handleAddFood:x,handleMinusFood:F,setIsClicked:j}),o.jsx($,{name:l,description:f,price:m,category:r})]})}const G=()=>{const[t,l]=e.useState(!1);return{showModal:t,handleClose:()=>{l(!1)},handleShowModal:()=>{l(!0)}}};export{z as F,G as u};