import{u as n,a as d,r as p,k as u,e as h,j as t}from"./index-B-iDZvjo.js";import{u as m,G as f,F as x}from"./useModal-Chqta7Qg.js";import"./singInShema-BZ4Gr-hJ.js";import{L as w}from"./Loading-C1uUme5r.js";import"./FoodAddQuantity-DfGqd3nf.js";const F=()=>{const o=n(s=>s.auth.accessToken),{status:i,error:e,foodIds:a,wishlistFoods:r}=n(s=>s.wishlist),c=r.map(s=>({...s,isLiked:!0,isAuthenticated:!0})),l=d();return p.useEffect(()=>{const s=l(u("wishlistFood"));return()=>{s.abort(),l(h())}},[l]),{status:i,error:e,foodIds:a,accessToken:o,fullWishlistFood:c}},j="_wishlist_qlbbi_1",g={wishlist:j},k={display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"40px",rowGap:"30px"},{wishlist:L}=g;function A(){const{status:o,error:i,fullWishlistFood:e}=F(),{handleShowModal:a}=m();return t.jsx("div",{className:L,children:t.jsx(w,{status:o,error:i,children:t.jsx(f,{data:e,renderData:r=>t.jsx(x,{...r,handleShowModal:a}),message:"There are no Favorite Food",style:k})})})}export{A as default};