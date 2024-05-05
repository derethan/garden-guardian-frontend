import{a as m,j as e,B as i,T as t,u as p,e as c,G as x,p as b,c as f,D as j}from"./index-yESpCeQD.js";import{B as v}from"./ButtonCard-BWXdXwzu.js";import{d as y}from"./AddCircleOutline-CqEOXapc.js";import{C as d}from"./Card-atDsQMDj.js";import{S as D}from"./SummaryColumn-2xPaGwC1.js";import{C as S}from"./Container-zjyhton9.js";const W=({name:n})=>{const o=m();return e.jsxs(i,{name:"Header",sx:{backgroundColor:"background.lightGrey",padding:4,borderRadius:5},children:[e.jsxs(t,{variant:"h4",fontWeight:"bold",sx:{color:o.typography.primary.main},children:["Welcome back, ",n,"!"," "]}),e.jsx(t,{variant:"subtitle2",mt:1,sx:{color:o.typography.primary.subtitle},children:"Here is a quick overview of your activity since your last visit."})]})},h=({location:n,title:o,...a})=>{const s=p(),r=()=>{s(n)};return e.jsxs(v,{sx:{mt:4,mb:4,maxWidth:{xs:"100%",md:"500px"},height:"250px",backgroundColor:"background.lightGrey",boxShadow:"none",border:"3px dashed #2A2A2A","&:hover":{backgroundColor:"background.lightGrey","@media (hover: none)":{backgroundColor:"initial"}}},onClick:r,children:[e.jsx(t,{variant:"h6",color:"text.main",fontWeight:"bold",pt:2,children:o}),e.jsx(t,{variant:"h6",pt:2,pb:2,children:a.subtitle||"No Data Found"}),e.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:"1rem",pb:4},children:[e.jsx(y,{}),e.jsx(t,{variant:"body1",children:"Click here to Get Started"})]})]})},k=({user:n})=>{const o=JSON.parse(localStorage.getItem("gardens")||"[]").filter(r=>r.userID===n.id),a=JSON.parse(localStorage.getItem("gardenGroups")||"[]").filter(r=>r.userID===n.id),s=JSON.parse(localStorage.getItem("gardenPlants")||"[]").filter(r=>r.userID===n.id);return e.jsx(e.Fragment,{children:o.length!=0?e.jsxs(d,{variant:"light",sx:{mt:4,p:2,borderRadius:4,width:{xs:"100%",md:"80%"},maxWidth:"500px"},children:[e.jsx(t,{variant:"h6",color:"text.main",fontWeight:"bold",children:"Garden Overview"}),e.jsx(t,{variant:"caption",color:"text.subtitle",fontWeight:"bold",children:"Here is a quick snapshot of your gardens"}),e.jsx(i,{sx:{pt:4,pb:4},children:e.jsxs(t,{variant:"body2",color:"text.textDark",fontWeight:"bold",children:["You are currently managing ",o.length," garden",o.length>1?"s":"",e.jsx("br",{}),"( ",e.jsx(t,{variant:"caption",color:"text.subtitle",fontWeight:"bold",children:o.map((r,l)=>e.jsxs(t,{variant:"caption",color:"text.subtitle",fontWeight:"bold",children:[r.gardenName,l<o.length-1?", ":""]},l))})," )"]})}),e.jsxs(i,{sx:{pb:4},children:[e.jsxs(t,{variant:"body2",color:"text.main",fontWeight:"bold",children:["Here is what you have growing:"," ",e.jsxs(t,{variant:"span",color:"text.subtitle",fontWeight:"bold",children:["(",s.length," Plant",s.length>1?"s":""," )"]})]}),s.map((r,l)=>{const u=a.find(g=>g.groupID===r.groupID);return e.jsxs(t,{variant:"subtitle2",color:"text.textDark",fontWeight:"bold",pt:1,pl:10,textAlign:"left",children:[r.name," ",r.variant&&"("+r.variant+")"," -"," ",e.jsx(t,{component:"span",variant:"caption",color:"text.subtitle",fontWeight:"bold",children:u.groupName})]},l)})]})]}):e.jsx(h,{location:"/gardens",title:"Garden Overview",subtitle:"No gardens Found"})})},C=({device:n})=>{const{getSensorInfo:o}=b(),[a,s]=c.useState([]);return c.useEffect(()=>{async function r(){const l=await o(n);s(l)}r()},[n]),e.jsxs(d,{variant:"light",sx:{p:2,mt:2,borderRadius:4},children:[e.jsxs(i,{children:[e.jsx(t,{variant:"h6",color:"text.main",fontWeight:"bold",children:n.deviceName}),e.jsx(t,{variant:"caption",color:"text.subtitle",fontWeight:"bold",children:n.deviceID})]}),a.length>0?e.jsx(x,{container:!0,pt:4,children:a.map((r,l)=>e.jsx(x,{item:!0,xs:6,sm:4,md:12,lg:6,p:1,children:e.jsxs(i,{sx:{backgroundColor:"background.shaded",padding:"0.5em"},children:[e.jsx(t,{variant:"body1",color:"text.cardTitle",fontWeight:"bold",children:r.sensor}),e.jsx(t,{variant:"caption",color:r.sensorStatus==="Online"?"success.main":"error.main",fontWeight:"bold",children:r.sensorStatus})]})},l))}):e.jsx(t,{variant:"body1",color:"text.textDark",pt:2,children:"No sensors found"})]},n.deviceID)},I=({user:n,hasDevice:o,devices:a})=>e.jsx(e.Fragment,{children:o?e.jsxs(d,{variant:"light",sx:{m:4,p:2,borderRadius:4,width:{xs:"100%",md:"80%"}},children:[e.jsx(t,{variant:"h6",color:"text.main",fontWeight:"bold",children:"Sensor Overview"}),e.jsx(t,{variant:"caption",color:"text.subtitle",fontWeight:"bold",children:"Here is a quick snapshot of your devices"}),e.jsx(i,{sx:{display:"flex",flexDirection:"column",gap:2,mt:2},children:a.map(s=>e.jsx(C,{device:s},s.deviceID))})]}):e.jsx(h,{title:"No Sensors Found",subtitle:"No sensors have been added to your account yet.",location:"/sensor"})}),A=()=>{const{user:n,hasDevice:o,devices:a}=f(),s=n.name.split(" ")[0];return e.jsxs(S,{maxWidth:"none",sx:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",paddingTop:4},children:[e.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:2,width:o?{xs:"100%",md:"70%"}:"100%"},children:[e.jsx(W,{name:s}),e.jsxs(i,{sx:{display:"flex",flexDirection:{xs:"column",md:"row"},justifyContent:"space-evenly",alignItems:{xs:"center",md:"flex-start"},gap:4,width:"100%"},children:[e.jsx(k,{user:n}),e.jsx(I,{user:n,hasDevice:o,devices:a})]})]}),o&&e.jsxs(i,{sx:{width:"30%",display:{xs:"none",md:"flex"},gap:2},children:[e.jsx(j,{orientation:"vertical",flexItem:!0,sx:{display:{xs:"none",md:"block"}}}),e.jsx(D,{})]})]})};export{A as default};
