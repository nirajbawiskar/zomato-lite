import{r as i,x as v,v as b,z as E,y as a,j as e}from"./index-4862f038.js";import{u as S,h as u}from"./handleClasses-1198aed5.js";import{c as y,a as f}from"./index.esm-70f86052.js";const F=()=>{const[r,t]=i.useState(!1),[p,{isSuccess:o,isError:n,error:l,isLoading:h}]=v(),x=b(),[g,{isSuccess:d,isError:c,error:N,isLoading:j}]=E(),s=S({initialValues:{userName:"",otp:""},validationSchema:y({userName:f().required(),otp:f()}),onSubmit:(m,{resetForm:k})=>{r?p(m):g(m)}});return i.useEffect(()=>{d&&(s.setFieldValue("otp",""),t(!0),a.success("please verify otp"))},[d]),i.useEffect(()=>{c&&a.error(N.message)},[c]),i.useEffect(()=>{o&&x("/admin")},[o]),i.useEffect(()=>{n&&(t(!1),a.error(l.data?l.data.message:"sosmething went wrong"))},[n]),j||h?e.jsx("p",{children:"Please Wait ...."}):e.jsx(e.Fragment,{children:e.jsx("form",{onSubmit:s.handleSubmit,children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"row",children:e.jsx("div",{className:"col-sm-6 offset-sm-3",children:e.jsxs("div",{className:"card",children:[e.jsx("div",{className:"card-header",children:"Login"}),e.jsxs("div",{className:"card-body",children:[r?e.jsxs("div",{children:[e.jsx("label",{for:"otp",className:"form-label",children:"Enter Otp"}),e.jsx("input",{type:"text",...s.getFieldProps("otp"),className:u(s,"otp"),id:"otp",placeholder:"Enter Your otp"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.otp})]}):e.jsxs("div",{children:[e.jsx("label",{for:"email",className:"form-label",children:"Enter Email Or Mobile Number"}),e.jsx("input",{type:"text",...s.getFieldProps("userName"),className:u(s,"userName"),id:"email",placeholder:"Enter Your Email Or Mobile Number"}),e.jsx("div",{className:"valid-feedback",children:"Looks good!"}),e.jsx("div",{className:"invalid-feedback",children:s.errors.userName})]}),e.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:r?"Verify OTP":"Login"})]})]})})})})})})};export{F as default};
