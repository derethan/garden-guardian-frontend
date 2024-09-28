import{e as l,j as e,T as t,B as c,c as x}from"./index-uY33ycs6.js";import{a as p}from"./Container-BLGB_x5D.js";const h="/assets/videoPlaceholder-Y7YWToIT.png";function u(){const r="http://76.11.80.32:3000/";async function s(a,o){const i=a&&o?`sensors/readSensor/latest?device_id=${a}&measurement=${o}`:`sensors/readSensor/latest/all?device_id=${a}`;try{const n=await fetch(r+i,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("token")}`}});if(!n.ok)throw new Error("There was an error checking for device");return await n.json()}catch(n){throw console.error("There was an error checking for device: ",n),n}}return{getLatestReading:s}}const m=({deviceID:r,deviceStatus:s})=>{const{getLatestReading:a}=u(),[o,i]=l.useState("Loading...");return l.useEffect(()=>{(async()=>{const d=await a(r,"Device Temperature");i(d.value)})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(t,{variant:"h6",color:"text.primary",fontWeight:"bold",children:"Active Device"}),e.jsxs(p,{variant:"light",sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",padding:"1rem",marginTop:"1rem",borderRadius:"15px"},children:[e.jsx("img",{src:h,alt:"Camera feed",style:{width:"100%"}}),e.jsxs(c,{sx:{display:"flex",justifyContent:"space-between",paddingTop:"1rem"},children:[e.jsx(t,{variant:"body",color:"text.primary",fontWeight:"bold",children:"Device:"}),e.jsx(t,{variant:"body1",color:"text.secondary",children:r})]}),e.jsxs(c,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{variant:"body",color:"text.secondary",children:"Temperature:"}),e.jsxs(t,{variant:"body1",color:"text.primary",children:[o," °C"]})]}),e.jsxs(c,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{variant:"subtext",color:"text.secondary",children:"Status:"}),e.jsx(t,{variant:"body1",color:s==="online"?"green":"red",children:s})]})]})]})},g=()=>{const{deviceID:r,deviceStatus:s}=x();return e.jsx(p,{variant:"light",sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",padding:"1rem",height:"100%"},children:e.jsx(m,{deviceID:r,deviceStatus:s})})};export{g as S,u};
