import{s as r,r as t,y as d,j as a,L as s,O as i}from"./index-4862f038.js";const l=()=>{const[e,{isSuccess:n}]=r();return t.useEffect(()=>{n&&d.success("logout suceess")},[n]),a.jsx(a.Fragment,{children:a.jsx("nav",{className:"navbar navbar-expand-lg bg-dark navbar-dark",children:a.jsxs("div",{className:"container",children:[a.jsx(s,{to:"/admin",className:"navbar-brand",children:"Admin"}),a.jsx("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup",children:a.jsx("span",{className:"navbar-toggler-icon"})}),a.jsx("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:a.jsxs("div",{className:"navbar-nav",children:[a.jsx(s,{to:"/admin",className:"nav-link active",children:"dashboard"}),a.jsx(s,{to:"/admin/resturant",className:"nav-link active",children:"Resturants"}),a.jsx(s,{to:"/admin/customer",className:"nav-link active",children:"Customers"}),a.jsx(s,{to:"/admin/order",className:"nav-link active",children:"Orders"}),a.jsx(s,{to:"/admin/rider",className:"nav-link active",children:"riders"})]})}),a.jsxs("div",{className:"dropdown",children:[a.jsx("button",{className:"btn btn-light dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown",children:"welcome Admin"}),a.jsxs("ul",{className:"dropdown-menu",children:[a.jsx("li",{children:a.jsx("a",{className:"dropdown-item",children:"Profile"})}),a.jsx("li",{children:a.jsx("a",{className:"dropdown-item",children:"Account"})}),a.jsx("li",{children:a.jsx("button",{onClick:e,className:"dropdown-item text-danger",children:"Logout"})})]})]})]})})})},o=()=>a.jsxs(a.Fragment,{children:[a.jsx(l,{}),a.jsx(i,{})]});export{o as default};
