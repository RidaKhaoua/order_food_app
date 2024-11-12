import{r as h,j as e,L as $,u as w,a as S,b as B,c as D,d as K,e as X,f as J,g as Z,h as I,i as ee,k as te,n as se,l as oe,O as ne}from"./index-CtW-qsqI.js";import{I as U}from"./Img-Be-Acse8.js";import{C as T}from"./index-DazXHbHc.js";import{a as b,_ as L,s as ae,b as re,I as ie}from"./singInShema-BjrU100E.js";import{B as N}from"./Button-DJ2GtvwA.js";import{u as ce}from"./useActiveLink-Dr0i1SxF.js";import{u as q,t as Q,I as k}from"./zod-BSt5awSN.js";import{F as H}from"./Form-xg8FxL62.js";function le(t,s=`expected a function, instead received ${typeof t}`){if(typeof t!="function")throw new TypeError(s)}function ue(t,s=`expected an object, instead received ${typeof t}`){if(typeof t!="object")throw new TypeError(s)}function de(t,s="expected all items to be functions, instead received the following types: "){if(!t.every(o=>typeof o=="function")){const o=t.map(r=>typeof r=="function"?`function ${r.name||"unnamed"}()`:typeof r).join(", ");throw new TypeError(`${s}[${o}]`)}}var M=t=>Array.isArray(t)?t:[t];function me(t){const s=Array.isArray(t[0])?t[0]:t;return de(s,"createSelector expects all input-selectors to be functions, but received the following types: "),s}function pe(t,s){const o=[],{length:r}=t;for(let n=0;n<r;n++)o.push(t[n].apply(null,s));return o}var _e=class{constructor(t){this.value=t}deref(){return this.value}},fe=typeof WeakRef<"u"?WeakRef:_e,he=0,O=1;function C(){return{s:he,v:void 0,o:null,p:null}}function W(t,s={}){let o=C();const{resultEqualityCheck:r}=s;let n,c=0;function i(){var m;let a=o;const{length:d}=arguments;for(let _=0,g=d;_<g;_++){const f=arguments[_];if(typeof f=="function"||typeof f=="object"&&f!==null){let p=a.o;p===null&&(a.o=p=new WeakMap);const x=p.get(f);x===void 0?(a=C(),p.set(f,a)):a=x}else{let p=a.p;p===null&&(a.p=p=new Map);const x=p.get(f);x===void 0?(a=C(),p.set(f,a)):a=x}}const l=a;let u;if(a.s===O)u=a.v;else if(u=t.apply(null,arguments),c++,r){const _=((m=n==null?void 0:n.deref)==null?void 0:m.call(n))??n;_!=null&&r(_,u)&&(u=_,c!==0&&c--),n=typeof u=="object"&&u!==null||typeof u=="function"?new fe(u):u}return l.s=O,l.v=u,u}return i.clearCache=()=>{o=C(),i.resetResultsCount()},i.resultsCount=()=>c,i.resetResultsCount=()=>{c=0},i}function ge(t,...s){const o=typeof t=="function"?{memoize:t,memoizeOptions:s}:t,r=(...n)=>{let c=0,i=0,a,d={},l=n.pop();typeof l=="object"&&(d=l,l=n.pop()),le(l,`createSelector expects an output function after the inputs, but received: [${typeof l}]`);const u={...o,...d},{memoize:m,memoizeOptions:_=[],argsMemoize:g=W,argsMemoizeOptions:f=[],devModeChecks:p={}}=u,x=M(_),F=M(f),v=me(n),j=m(function(){return c++,l.apply(null,arguments)},...x),y=g(function(){i++;const E=pe(v,arguments);return a=j.apply(null,E),a},...F);return Object.assign(y,{resultFunc:l,memoizedResultFunc:j,dependencies:v,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>a,recomputations:()=>c,resetRecomputations:()=>{c=0},memoize:m,argsMemoize:g})};return Object.assign(r,{withTypes:()=>r}),r}var V=ge(W),be=Object.assign((t,s=V)=>{ue(t,`createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof t}`);const o=Object.keys(t),r=o.map(c=>t[c]);return s(r,(...c)=>c.reduce((i,a,d)=>(i[o[d]]=a,i),{}))},{withTypes:()=>be});const ve="_navbar_owjid_1",xe="_navbar_logo_owjid_7",je="_navbar_content_owjid_12",ye="_navbar_links_icons_owjid_20",ke="_navbar_links_icons_visible_owjid_45",we="_navbar_close_owjid_50",Ne="_navbar_list_owjid_67",Ce="_navbar_right_owjid_113",$e="_navbar_right_basket_icon_owjid_125",Se="_navbar_right_login_owjid_131",Re="_navbar_menu_owjid_138",R={navbar:ve,navbar_logo:xe,navbar_content:je,navbar_links_icons:ye,navbar_links_icons_visible:ke,navbar_close:we,navbar_list:Ne,"active-link":"_active-link_owjid_107",navbar_right:Ce,navbar_right_basket_icon:$e,navbar_right_login:Se,navbar_menu:Re},{navbar_list:Ae}=R,Ee="home",Te=h.memo(({data:t,activeLink:s,handleActiveLink:o})=>{const r=t.map(n=>e.jsx("li",{onClick:()=>o(n),children:e.jsx($,{to:n===Ee?"/order_food_app":n,className:n===s?R["active-link"]:"",children:n},n)},n));return e.jsx("ul",{className:Ae,children:r})}),Le=h.memo(Te),Fe=V(t=>t.cart.foodIdAndQuantity,t=>Object.values(t).reduce((o,r)=>o+r,0)),Ie="_navbar_quantity_15u36_1",Me="_navbar_total_15u36_5",Oe={navbar_quantity:Ie,navbar_total:Me},{navbar_quantity:ze,navbar_total:Pe}=Oe;function z({TotalQuantity:t,icon:s,page:o}){return e.jsx($,{to:`${"/order_food_app/"+o}`,children:e.jsxs("div",{className:ze,children:[e.jsx("img",{src:s,alt:"icon"}),e.jsx("div",{className:Pe,children:t})]})})}const P={backgroundColor:"transparent",borderRadius:"50px",padding:"8px 16px",color:"black",cursor:"pointer",transition:"0.5s ease-in-out",border:"1px solid #ddd"},{navbar_right:Be,navbar_right_login:De}=R;function Ue({handleVisibleShowLoginPopUp:t}){const s=w(d=>d.auth.jwt),o=S(),r=B(),[n,c]=D(),i=w(Fe),a=w(d=>d.wishlist.foodIds.length);return e.jsxs("div",{className:Be,children:[e.jsx(U,{imgName:b.search_icon,title:"search_icon"}),e.jsx(z,{TotalQuantity:a,icon:b.favorite_icon,page:"wishlist"}),e.jsx(z,{TotalQuantity:i,icon:b.basket_icon,page:"cart"}),e.jsx("div",{className:De,children:s?e.jsx(N,{className:"logOut",type:"button",disabled:!1,style:P,onClick:()=>{o(K()),o(X()),n.get("message")&&c(""),r("/order_food_app/"),L("you are Loged out.",{icon:"✌️"})},children:"logOut"}):e.jsx(N,{className:"sing-in",type:"button",disabled:!1,style:P,onClick:t,children:"Sing In"})})]})}const qe=h.memo(Ue),Qe=()=>{const[t,s]=h.useState("idle"),[o,r]=h.useState(null);return{checkEmailAvailable:async i=>{s("checking"),r(i);try{(await J.get(`/users?filters[email][$eq]=${i}`)).data.length?s("notAvailable"):s("available")}catch(a){s("failed"),console.log(a)}},resetCheckEmailAvailable:()=>{s("idle"),r(null)},statusAvailableEmail:t,enterdEmail:o}},He=({closeLoginPopUp:t})=>{const{status:s,user:o,jwt:r,error:n}=w(v=>v.auth),c=B(),i=S(),{statusAvailableEmail:a,checkEmailAvailable:d,enterdEmail:l,resetCheckEmailAvailable:u}=Qe(),{handleSubmit:m,register:_,formState:{errors:g},trigger:f,getFieldState:p}=q({resolver:Q(ae),mode:"onBlur"});return{status:s,error:n,user:o,jwt:r,handleSubmit:m,register:_,errors:g,statusAvailableEmail:a,enterdEmail:l,submitFormRegister:async v=>{const{username:j,password:y,email:A}=v;i(Z({username:j,password:y,email:A})).unwrap().then(()=>{t(),L("You are Register with Success",{icon:"👌",style:{backgroundColor:"green",color:"white"}}),c("/order_food_app/")}).catch(E=>{console.log(E)})},checkEmailAvailable:d,resetCheckEmailAvailable:u,onBlurCheckEmailAvailable:async v=>{await f("email");const{isDirty:j,invalid:y}=p("email");j&&!y&&l!==v.target.value&&d(v.target.value),j&&y&&l&&u()}}},We="_title_8vo97_1",Ve="_title_close_8vo97_6",Ye={title:We,title_close:Ve},{title:Ge,title_close:Ke}=Ye;function Y({text:t,setIsVisibleShowLoginPopUp:s}){return e.jsxs("div",{className:Ge,children:[e.jsx("h3",{children:t}),e.jsx("div",{className:Ke,onClick:()=>s(!1),children:"X"})]})}function G({className:t,text:s}){return e.jsx("div",{className:`alert ${t}`,children:s})}function Xe({currentState:t,setCurrentState:s,setIsVisibleShowLoginPopUp:o}){var _,g,f,p;const r=()=>{o(!1)},{status:n,error:c,errors:i,statusAvailableEmail:a,handleSubmit:d,register:l,onBlurCheckEmailAvailable:u,submitFormRegister:m}=He({closeLoginPopUp:r});return e.jsxs(e.Fragment,{children:[c&&e.jsx(G,{className:"error",text:c}),e.jsxs(H,{onSubmit:d(m),children:[e.jsx(Y,{text:t,setIsVisibleShowLoginPopUp:o}),e.jsx(k,{type:"text",register:l,name:"username",placeHolder:"Username",error:(_=i.username)==null?void 0:_.message}),e.jsx(k,{type:"email",register:l,name:"email",placeHolder:"example@gmail.com",onBlur:u,formText:a==="checking"?"we are currently checking the availability of this email. Please wait...":"",success:a==="available"?"The Email is Available":"",disabled:a==="checking",error:(g=i.email)!=null&&g.message?i.email.message:a==="notAvailable"?"The Email ist not Available":a==="failed"?"Currently we can't checking the Email because The Server has a problem":""}),e.jsx(k,{type:"password",register:l,name:"password",placeHolder:"password",error:(f=i.password)==null?void 0:f.message}),e.jsx(k,{type:"password",register:l,name:"confirmPassword",placeHolder:"Confirmpassword",error:(p=i.confirmPassword)==null?void 0:p.message}),e.jsx(N,{type:"submit",disabled:n==="pending",style:{backgroundColor:"tomato",color:"white",borderRadius:"10px",border:"none",padding:"10px",width:"100%",marginBottom:"10px"},children:n==="pending"?"Loading...":"Register"}),e.jsxs("p",{children:["You have already an Account?",e.jsx(N,{type:"button",style:{textTransform:"capitalize",backgroundColor:"transparent",textDecoration:"underline",border:"none"},onClick:()=>s("sing in"),children:"sing In"})]})]})]})}const Je=({showLoginPopUp:t})=>{const{status:s,error:o,jwt:r}=w(m=>m.auth),[n,c]=D(),i=S(),{handleSubmit:a,register:d,formState:{errors:l}}=q({resolver:Q(re),mode:"onBlur"});return h.useEffect(()=>()=>{i(I())},[i]),h.useEffect(()=>{if(s==="fullfield"){const m=setTimeout(()=>{i(I())},1e3);return()=>{clearTimeout(m)}}},[i,s]),{handleSubmit:a,register:d,submitLoginForm:async m=>{i(ee(m)).unwrap().then(()=>{t&&t(),L("Login with Successfuly",{icon:"🥳",style:{backgroundColor:"green",color:"white"}})})},setSearchParams:c,dispatch:i,searchParams:n,errors:l,status:s,error:o,jwt:r}};function Ze({currentState:t,setCurrentState:s,setIsVisibleShowLoginPopUp:o}){var u,m;const r=()=>{o(!1)},{register:n,handleSubmit:c,submitLoginForm:i,errors:a,status:d,error:l}=Je({showLoginPopUp:r});return e.jsxs(e.Fragment,{children:[l&&e.jsx(G,{className:"error",text:l}),e.jsxs(H,{onSubmit:c(i),children:[e.jsx(Y,{text:t,setIsVisibleShowLoginPopUp:o}),e.jsx(k,{type:"text",placeHolder:"example@mail.com",register:n,name:"identifier",error:(u=a.identifier)==null?void 0:u.message}),e.jsx(k,{type:"password",placeHolder:"password",register:n,name:"password",error:(m=a.password)==null?void 0:m.message}),e.jsx(N,{type:"submit",disabled:d==="pending",style:{backgroundColor:"tomato",color:"white",borderRadius:"10px",border:"none",padding:"10px",width:"100%",marginBottom:"10px",opacity:`${d==="pending"?"0.5":""}`},children:d==="pending"?"Loading...":"Sing in"}),e.jsxs("p",{children:["You don't have Account?",e.jsx(N,{type:"button",style:{textTransform:"capitalize",backgroundColor:"transparent",textDecoration:"underline",border:"none"},onClick:()=>s("sing up"),children:"Sing up"})]})]})]})}const et="_login_popUp_1dzni_1",tt="_widthAnimation_1dzni_1",st={login_popUp:et,widthAnimation:tt},{login_popUp:ot}=st;function nt({isVisibleShowLoginPopUp:t,setIsVisibleShowLoginPopUp:s}){const[o,r]=h.useState("sing up");return e.jsx(e.Fragment,{children:t&&e.jsx("div",{className:ot,children:o==="sing up"?e.jsx(Xe,{currentState:o,setCurrentState:r,setIsVisibleShowLoginPopUp:s}):e.jsx(Ze,{currentState:o,setCurrentState:r,setIsVisibleShowLoginPopUp:s})})})}const{navbar:at,navbar_content:rt,navbar_logo:it,navbar_links_icons:ct,navbar_menu:lt,navbar_links_icons_visible:ut,navbar_close:dt}=R;function mt(){const t=w(u=>u.auth.jwt),{activeLink:s,handleActiveLink:o}=ce("home"),[r,n]=h.useState(!1),[c,i]=h.useState(!1),a=S(),d=h.useCallback(()=>{i(u=>!u)},[]),l=h.useCallback(()=>{n(!0)},[]);return h.useEffect(()=>{t&&a(te("foodIds"))},[a,t]),e.jsxs("nav",{className:at,children:[e.jsx(T,{children:e.jsxs("div",{className:rt,children:[e.jsx($,{to:"/order_food_app",children:e.jsx(U,{className:it,imgName:b.logo,title:"logo"})}),e.jsxs("div",{className:`${ct} ${c?ut:""}`,children:[e.jsx("div",{className:dt,onClick:d,children:e.jsx("img",{src:b.cross_icon,alt:"close icon"})}),e.jsx(Le,{data:se,activeLink:s,handleActiveLink:o}),e.jsx(qe,{handleVisibleShowLoginPopUp:l})]}),e.jsx("div",{className:lt,onClick:d,children:e.jsx("img",{src:b.menu_icon,alt:"menu icon"})})]})}),e.jsx(nt,{isVisibleShowLoginPopUp:r,setIsVisibleShowLoginPopUp:n})]})}const pt=h.memo(mt),_t="_footer_left_logo_pl53s_2",ft="_footer_left_desc_pl53s_6",ht="_footer_left_icons_pl53s_12",gt={footer_left_logo:_t,footer_left_desc:ft,footer_left_icons:ht},{footer_left:bt,footer_left_logo:vt,footer_left_desc:xt,footer_left_icons:jt}=gt;function yt(){return e.jsxs("div",{className:bt,children:[e.jsx("div",{className:vt,children:e.jsx("img",{src:b.logo,alt:"logo totmato"})}),e.jsx("p",{className:xt,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, velit earum. Sed ex eos similique tempora quaerat aliquid enim reiciendis, asperiores minus laboriosam modi porro iure hic debitis vero unde?"}),e.jsxs("div",{className:jt,children:[e.jsx("img",{src:b.facebook_icon,alt:"facebook"}),e.jsx("img",{src:b.linkedin_icon,alt:"linkedin"}),e.jsx("img",{src:b.twitter_icon,alt:"twitter"})]})]})}const kt="_footer_center_yi3i7_1",wt={footer_center:kt},{footer_center:Nt,footer_center_title:Ct}=wt;function $t({dataLink:t}){const s=t.map(o=>e.jsx($,{to:"/",children:e.jsx("li",{children:o})},o));return e.jsxs("div",{className:Nt,children:[e.jsx("h2",{className:Ct,children:"COMPANY"}),e.jsx("ul",{children:s})]})}function St(){return e.jsxs("div",{className:"footer-right",children:[e.jsx("h2",{className:"footer-right title",children:"GET IN TOUCH"}),e.jsxs("ul",{children:[e.jsx("li",{children:"+212 6 12 44 66 60"}),e.jsx("li",{children:"contact@tomato.com"})]})]})}const Rt="_footer_1xhkp_1",At="_footer_content_1xhkp_10",Et="_footer_copyRight_1xhkp_34",Tt={footer:Rt,footer_content:At,footer_copyRight:Et},{footer:Lt,footer_content:Ft,footer_copyRight:It}=Tt;function Mt(){return e.jsx("footer",{className:Lt,children:e.jsxs(T,{children:[e.jsxs("div",{className:Ft,children:[e.jsx(yt,{}),e.jsx($t,{dataLink:oe}),e.jsx(St,{})]}),e.jsx("hr",{}),e.jsx("p",{className:It,children:"CopyRight 2024 Tomato.com - All Right Reserved"})]})})}function Ht(){return e.jsxs("div",{className:"main-layout",children:[e.jsx(pt,{}),e.jsx(T,{children:e.jsx(ne,{})}),e.jsx(Mt,{}),e.jsx(ie,{})]})}export{Ht as default};