import{v as c,w as n,r as m,y as u,j as s}from"./index-4862f038.js";import{u as h,h as i}from"./handleClasses-1198aed5.js";import{c as x,a as r}from"./index.esm-70f86052.js";const g=()=>{const l=c(),[o,{isSuccess:a,isError:p,error:j,isLoading:b}]=n(),e=h({initialValues:{email:"",password:""},validationSchema:x({email:r().required("Enter Email"),password:r().required("Enter Password")}),onSubmit:(d,{resetForm:t})=>{o(d),t()}});return m.useEffect(()=>{a&&(u.success("login success"),l("/resturant"))},[a]),s.jsx("form",{onSubmit:e.handleSubmit,children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row mt-auto",children:s.jsx("div",{className:"col-sm-6 offset-sm-3 mt-5",children:s.jsxs("div",{className:"card bg-dark text-light",children:[s.jsx("div",{className:"card-header",children:"Login"}),s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{children:[s.jsx("label",{for:"email",className:"form-label",children:"Email"}),s.jsx("input",{className:i(e,"email"),...e.getFieldProps("email"),type:"email",id:"email",placeholder:"Enter Your Email"}),s.jsx("div",{className:"valid-feedback",children:"Looks good!"}),s.jsx("div",{className:"invalid-feedback",children:e.errors.email})]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("label",{for:"password",className:"form-label",children:"Password"}),s.jsx("input",{className:i(e,"password"),...e.getFieldProps("password"),type:"password",id:"password",placeholder:"Enter Your Password"}),s.jsx("div",{className:"valid-feedback",children:"Looks good!"}),s.jsx("div",{className:"invalid-feedback",children:e.errors.email})]}),s.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Login"}),s.jsx("p",{className:"text-center my-3",children:"OR"}),s.jsx("button",{className:"btn btn-outline-primary w-100",children:"Continue With Google"})]})]})})})})})};export{g as default};
