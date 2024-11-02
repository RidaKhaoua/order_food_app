import{u as p,j as e}from"./index-B-iDZvjo.js";import{u as _,t as h,I as m}from"./zod-DRkhyrZM.js";import{z as t}from"./singInShema-BZ4Gr-hJ.js";import"./FoodAddQuantity-DfGqd3nf.js";import{C as j}from"./CartTotal-DnkCcbs3.js";import"./Button-BGr2ULm3.js";const N=t.object({firstName:t.string().min(1,{message:"firstName is required"}).max(10,{message:"firstName has a maximum size"}),lastName:t.string().min(1,{message:"lastName"}).max(10,{message:"lastName has a maximum size"}),email:t.string().email(),country:t.string().min(1,{message:"Country is required"}).max(10,{message:"Country has a maximum size"}),street:t.string().min(1,{message:"Street is required"}).max(30,{message:"Street has a maximum size"}),zipCode:t.string().min(1,{message:"Zip code  is required"}).max(10,{message:"Zip code has a maximum size"}),phone:t.string().min(1,{message:"Phone is required"}).max(13,{message:"Phone has maximum size"}),city:t.string().min(1,{message:"City is required"}).max(20,{message:"City has maximum size"})}),g=()=>{const c=p(a=>a.auth.accessToken),{status:d,error:s,foodIdAndQuantity:r,foods:u}=p(a=>a.cart),i=u.map(a=>({...a,quantity:r[a.id]||0})),{handleSubmit:o,register:n,formState:{errors:l}}=_({resolver:h(N),mode:"onBlur"});return{status:d,error:s,fullfoodInfo:i,accessToken:c,handleSubmit:o,register:n,errors:l}},z="_place_order_rkywo_1",C="_place_order_form_rkywo_8",k="_multi_fields_rkywo_32",q={place_order:z,place_order_form:C,multi_fields:k},{place_order:H,place_order_form:S,multi_fields:v}=q;function A(){var i,o,n,l,a,x,f;const{fullfoodInfo:c,accessToken:d}=g(),{register:s,errors:r}=g(),u=p(y=>y.foodList.discountPrice);return e.jsxs("div",{className:H,children:[e.jsxs("div",{className:S,children:[e.jsx("h2",{children:"Delivery Information"}),e.jsxs("form",{children:[e.jsxs("div",{className:v,children:[e.jsx(m,{type:"text",register:s,name:"firstName",placeHolder:"firstName",error:(i=r.firstName)==null?void 0:i.message}),e.jsx(m,{type:"text",register:s,name:"lastName",placeHolder:"lastName",error:(o=r.lastName)==null?void 0:o.message})]}),e.jsx(m,{type:"email",register:s,name:"email",placeHolder:"example@gmail.com",error:(n=r.email)==null?void 0:n.message}),e.jsx(m,{type:"text",register:s,name:"street",placeHolder:"Street",error:(l=r.street)==null?void 0:l.message}),e.jsxs("div",{className:"multi_fields",children:[e.jsx(m,{type:"text",register:s,name:"city",placeHolder:"City",error:(a=r.city)==null?void 0:a.message}),e.jsx(m,{type:"text",register:s,name:"country",placeHolder:"Country",error:(x=r.country)==null?void 0:x.message})]}),e.jsx(m,{type:"text",register:s,name:"phone",placeHolder:"+211 6 00 00 00 00 ",error:(f=r.phone)==null?void 0:f.message})]})]}),e.jsx(j,{foods:c,accessToken:d,discountVal:u})]})}export{A as default};