import{a as p,e as u,j as e,T as s,B as i}from"./index-yESpCeQD.js";import{P as x}from"./PrimaryButton-5mT3A8zm.js";import{D as c}from"./DontHaveAccountLink-rwM5l7IF.js";import{L as f}from"./LoginLink-8p6qdMk5.js";import{u as h}from"./useValidate-cU7JNALZ.js";import{C as g}from"./Card-atDsQMDj.js";import{C as j}from"./CardContent-9EyWZz6Z.js";import{T as y}from"./TextField-JlTXMkYs.js";import{L as C}from"./LandingSiteNav-EQxhR3je.js";import{C as b}from"./Container-zjyhton9.js";import"./Select-fA180htR.js";const v=()=>{const a=p(),[r,n]=u.useState({email:""}),[t,l,m]=h(r),d=o=>{o.preventDefault(),console.log(r),l()?console.log("Valid Form"):console.log("Invalid Form")};return e.jsxs(g,{variant:"light",sx:{padding:2},children:[e.jsxs(j,{children:[e.jsx(s,{variant:"h4",color:a.typography.primary.cardTitle,sx:{fontWeight:600},children:"Reset Password"}),e.jsx(s,{variant:"subtitle2",color:a.typography.primary.subtitle,sx:{paddingTop:"8px"},children:"Enter your email address to reset your password"})]}),e.jsxs(i,{type:"form",component:"form",noValidate:!0,onSubmit:d,children:[e.jsx(y,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",margin:"normal",color:"primary",size:"small",variant:"outlined",sx:{backgroundColor:"background.default"},onChange:o=>{n({...r,email:o.target.value}),m({...t,email:""})},error:!!t.email,helperText:t.email}),e.jsx(x,{disabled:!0,fullWidth:!0,type:"submit",text:"Reset Password"})]}),e.jsxs(i,{sx:{paddingTop:4,display:"flex",justifyContent:"space-between"},children:[e.jsx(c,{}),e.jsx(f,{})]})]})},T=v;function V(){return e.jsxs(e.Fragment,{children:[e.jsx(C,{}),e.jsx(b,{maxWidth:"sm",sx:{paddingTop:4},children:e.jsx(T,{})})]})}export{V as default};
