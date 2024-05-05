import{r as m,i as x,j as e,c as S,e as v,o as N,B as n,T as i,q as p,D as H,u as E,G as R,t as U}from"./index-DgPKFDUi.js";/* empty css               */import{P as G}from"./PrimaryButton-nDPij5tt.js";import{C as P,a as J}from"./Container-fmQkMicZ.js";import{D as K,a as Q,b as X,c as Y}from"./DialogTitle-15oHsg8_.js";import{T}from"./TextField-WLzpe7gt.js";import{S as Z,u as ee}from"./SummaryColumn-2z6T6kVG.js";import{B as te}from"./ButtonCard-719-ATcL.js";import{s as re}from"./sensorFormat-fiRRPS_v.js";import{d as ae,a as ne}from"./Opacity-Z4ma1BVS.js";import"./Button-58lOTcEH.js";import"./Select-chzrtoZE.js";var b={},se=x;Object.defineProperty(b,"__esModule",{value:!0});var W=b.default=void 0,ie=se(m()),oe=e;W=b.default=(0,ie.default)((0,oe.jsx)("path",{d:"M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2m0 18H7V5h10zM12 6.72c-1.96 0-3.5 1.52-3.5 3.47h1.75c0-.93.82-1.75 1.75-1.75s1.75.82 1.75 1.75c0 1.75-2.63 1.57-2.63 4.45h1.76c0-1.96 2.62-2.19 2.62-4.45 0-1.96-1.54-3.47-3.5-3.47m-.88 8.8h1.76v1.76h-1.76z"}),"DeviceUnknown");const le=({display:t,setShowAddDeviceModal:r})=>{const{setHasDevice:a,setDeviceID:d}=S(),[s,g]=v.useState({device_id:"",device_name:""}),[,,,,j]=N(),[u,h]=v.useState(!1),[o,l]=v.useState(""),f=y=>{const{name:D,value:c}=y.target;g(L=>({...L,[D]:c}))},V=async y=>{const D="https://api.gardenguardian.app:8443/";y.preventDefault();try{const c=await j(D+"users/addDevice",s);if(!c||c.status!==201){console.log("There was an error adding the device. Please try again."),h(!0),l(c?c.message:"There was an error adding the device. Please try again.");return}console.log("Device added successfully"),d(s.device_id),a(!0),r(!1)}catch(c){console.error(c)}};return t?e.jsx("div",{className:"modal-wrapper",children:e.jsx(P,{sx:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(J,{variant:"light",sx:{padding:2,maxWidth:{md:"100%",lg:"100%"}},component:"form",onSubmit:V,noValidate:!0,children:[e.jsx(W,{fontSize:"large",sx:{color:"green"}}),e.jsx(K,{children:"Add a Device"}),e.jsxs(Q,{children:[e.jsx(X,{sx:{paddingBottom:2},children:"Oops! It looks like you haven't added a device yet. Please enter your Device ID to get started."}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",gap:2},children:[e.jsx(T,{id:"deviceIDField",name:"device_id",label:"Device ID",type:"text",margin:"normal",color:"primary",size:"small",variant:"outlined",value:s.ID,onChange:f,error:u,helperText:o}),e.jsx(T,{id:"deviceNameField",name:"device_name",label:"Enter a Name for your Device",type:"text",margin:"normal",color:"primary",size:"small",variant:"outlined",value:s.Name,onChange:f})]})]}),e.jsx(Y,{sx:{justifyContent:"center"},children:e.jsx(G,{text:"Submit",type:"submit"})})]})})}):null};var C={},ce=x;Object.defineProperty(C,"__esModule",{value:!0});var z=C.default=void 0,de=ce(m()),ue=e;z=C.default=(0,de.default)((0,ue.jsx)("path",{d:"M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10m-1-10v4h2v-4h3l-4-4-4 4z"}),"ArrowCircleUpOutlined");var w={},ve=x;Object.defineProperty(w,"__esModule",{value:!0});var q=w.default=void 0,me=ve(m()),xe=e;q=w.default=(0,me.default)((0,xe.jsx)("path",{d:"M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 10V8h-2v4H8l4 4 4-4z"}),"ArrowCircleDownOutlined");const _=({difference:t,sensor:r})=>e.jsx(n,{sx:{display:"flex",gap:"1rem"},children:t[r]!==0&&!isNaN(t[r])?t[r]>0?e.jsxs(e.Fragment,{children:[e.jsx(z,{}),e.jsxs(i,{variant:"caption",fontWeight:"bold",children:["Increase By ",t[r]," ",r.includes("Humidity")?"%":"°C"]})]}):e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsxs(i,{variant:"caption",fontWeight:"bold",children:["Decrease By ",Math.abs(t[r])," ",r.includes("Humidity")?"%":"°C"]})]}):null}),he=({sensorData:t,difference:r})=>{const a=t[p.temperature],d=t[p.humidity],s=t[p.waterTemp];return e.jsxs(n,{name:"sensorBanner",sx:{backgroundColor:"background.lightGrey",padding:"1rem"},children:[e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsx(_,{difference:r,sensor:p.temperature}),e.jsx(i,{variant:"caption",fontWeight:"bold",children:"Current Conditions"})]}),e.jsx(n,{sx:{textAlign:"left"},children:e.jsxs(i,{variant:"h4",fontWeight:"bold",children:["Temperature: ",a,"°C"]})}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",paddingTop:"1rem"},children:[e.jsxs(n,{children:[e.jsx(_,{difference:r,sensor:p.humidity}),e.jsxs(i,{variant:"body1",fontWeight:"bold",children:["Humidity: ",d,"%"]})]}),e.jsx(H,{orientation:"vertical",flexItem:!0,sx:{width:"5px"}}),e.jsxs(n,{children:[e.jsx(_,{difference:r,sensor:p.waterTemp}),e.jsxs(i,{variant:"body1",fontWeight:"bold",children:["Water Temp: ",s,"°C"]})]})]})]})},pe=(t,r)=>{switch(t){case"PH":return r[t]<=5||r[t]>=7?"error.main":r[t]<5.8||r[t]>6.3?"warning.main":"success.main";default:return"primary.secondary"}},fe=({sensor:t,sensorData:r,Icon:a})=>e.jsxs(e.Fragment,{children:[a&&e.jsx(a,{sx:{fontSize:80,color:pe(t,r)}}),e.jsxs(n,{children:[e.jsx(i,{variant:"caption",fontWeight:"bold",color:"text.subtitle",children:"Latest Reading"}),e.jsxs(i,{variant:"body1",color:"text.cardTitle",fontWeight:600,children:[r[t],re(t)]})]})]});var I={},ge=x;Object.defineProperty(I,"__esModule",{value:!0});var A=I.default=void 0,je=ge(m()),ye=e;A=I.default=(0,je.default)((0,ye.jsx)("path",{d:"M21.98 14H22zM5.35 13c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1v-2c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1m13.32 2c-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.1 1-3.34 1-1.24 0-1.38-1-3.33-1-1.95 0-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1 1.24 0 1.38 1 3.33 1 1.95 0 2.1-1 3.34-1 1.19 0 1.42 1 3.33 1 1.94 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1M5.35 9c1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.42 1 3.33 1 1.95 0 2.09-1 3.33-1 1.19 0 1.4.98 3.31 1V8c-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1-1.95 0-2.09 1-3.33 1-1.19 0-1.42-1-3.33-1C3.38 7 3.24 8 2 8v2c1.9 0 2.17-1 3.35-1"}),"WaterOutlined");var M={},De=x;Object.defineProperty(M,"__esModule",{value:!0});var B=M.default=void 0,_e=De(m()),Se=e;B=M.default=(0,_e.default)((0,Se.jsx)("path",{d:"M19 5H5C2.79 5 1 6.79 1 9v5c0 2.21 1.79 4 4 4h2v1h10v-1h2c2.21 0 4-1.79 4-4V9c0-2.21-1.79-4-4-4m2 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2z"}),"HomeMaxOutlined");var $={},be=x;Object.defineProperty($,"__esModule",{value:!0});var F=$.default=void 0,Ce=be(m()),we=e;F=$.default=(0,Ce.default)((0,we.jsx)("path",{d:"M18.41 5.8 17.2 4.59c-.78-.78-2.05-.78-2.83 0l-2.68 2.68L3 15.96V20h4.04l8.74-8.74 2.63-2.63c.79-.78.79-2.05 0-2.83M6.21 18H5v-1.21l8.66-8.66 1.21 1.21zM11 20l4-4h6v4z"}),"DriveFileRenameOutline");var O={},Ie=x;Object.defineProperty(O,"__esModule",{value:!0});var k=O.default=void 0,Me=Ie(m()),$e=e;k=O.default=(0,Me.default)((0,$e.jsx)("path",{d:"M13 11.33 18 18H6l5-6.67V6h2m2.96-2H8.04c-.42 0-.65.48-.39.81L9 6.5v4.17L3.2 18.4c-.49.66-.02 1.6.8 1.6h16c.82 0 1.29-.94.8-1.6L15 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81"}),"ScienceOutlined");const Oe=t=>{switch(t){case"Water Temperature":return A;case"Device Temperature":return B;case"Temperature Sensor":return ne;case"Humidity Sensor":return ae;case"PH":return F;case"TDS":return k;default:return null}},Re=({sensorData:t})=>{const r=E();return e.jsxs(n,{sx:{paddingTop:"3rem"},children:[e.jsx(i,{variant:"h5",sx:{fontWeight:"bold"},children:"Sensor Information"}),e.jsx(R,{container:!0,spacing:2,sx:{paddingTop:"1.5rem"},children:Object.keys(t).map((a,d)=>e.jsx(R,{item:!0,xs:6,children:e.jsx(te,{title:a,sx:{color:"text.cardTitle"},onClick:()=>{const s="/sensor/"+a.toLowerCase().replace(/\s/g,"");r(s,{state:{measurement:a,latestReading:t[a]}})},children:e.jsx(fe,{sensor:a,sensorData:t,Icon:Oe(a)})})},d))})]})},Te=()=>{const{deviceID:t}=S(),{getLatestReading:r}=ee(),[a,d]=v.useState({}),[s,g]=v.useState({}),j=(u,h)=>{const o={};for(const l in u)h.hasOwnProperty(l)&&(o[l]=Math.round((u[l]-h[l])*100)/100);return o};return v.useEffect(()=>{async function u(){const o=await r(t);if(localStorage.getItem("sensorData")){const l=JSON.parse(localStorage.getItem("sensorData")),f=j(o,l);g(f)}localStorage.setItem("sensorData",JSON.stringify(o)),d(o)}u();const h=setInterval(()=>{u()},1*60*1e3);return()=>clearInterval(h)},[]),e.jsxs(P,{maxWidth:"xl",sx:{display:"flex",gap:"1rem",padding:"1.5rem"},children:[e.jsxs(n,{sx:{width:{xs:"100%",md:"70%"}},children:[e.jsx(he,{sensorData:a,difference:s}),e.jsx(Re,{sensorData:a})]}),e.jsx(H,{orientation:"vertical",flexItem:!0,sx:{display:{xs:"none",md:"block"}}}),e.jsx(n,{sx:{width:"30%",display:{xs:"none",md:"block"}},children:e.jsx(Z,{})})]})},Ee=()=>{const{hasDevice:t}=S(),[r,a]=v.useState(!0);return e.jsx(e.Fragment,{children:t?e.jsx(Te,{}):e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(le,{display:r,setShowAddDeviceModal:a})]})})};export{Ee as default};
