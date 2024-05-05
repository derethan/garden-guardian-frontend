import{P as D,j as r,s as u,S as G,_ as c,ay as M,k as N,f as U,g as W,T as f,e as p,h as V,a5 as F,l as J,m as K,r as j,i as C,a as Q,n as X,B as Y,L as k,d as Z}from"./index-yK2nRRt2.js";const ee=D(r.jsx("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),re=["slots","slotProps"],se=u(G)(({theme:e})=>c({display:"flex",marginLeft:`calc(${e.spacing(1)} * 0.5)`,marginRight:`calc(${e.spacing(1)} * 0.5)`},e.palette.mode==="light"?{backgroundColor:e.palette.grey[100],color:e.palette.grey[700]}:{backgroundColor:e.palette.grey[700],color:e.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":c({},e.palette.mode==="light"?{backgroundColor:e.palette.grey[200]}:{backgroundColor:e.palette.grey[600]}),"&:active":c({boxShadow:e.shadows[0]},e.palette.mode==="light"?{backgroundColor:M(e.palette.grey[200],.12)}:{backgroundColor:M(e.palette.grey[600],.12)})})),te=u(ee)({width:24,height:16});function oe(e){const{slots:s={},slotProps:l={}}=e,t=N(e,re),o=e;return r.jsx("li",{children:r.jsx(se,c({focusRipple:!0},t,{ownerState:o,children:r.jsx(te,c({as:s.CollapsedIcon,ownerState:o},l.collapsedIcon))}))})}function ae(e){return W("MuiBreadcrumbs",e)}const le=U("MuiBreadcrumbs",["root","ol","li","separator"]),ne=le,ie=["children","className","component","slots","slotProps","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],ce=e=>{const{classes:s}=e;return K({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},ae,s)},de=u(f,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:(e,s)=>[{[`& .${ne.li}`]:s.li},s.root]})({}),pe=u("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:(e,s)=>s.ol})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),ue=u("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:(e,s)=>s.separator})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function me(e,s,l,t){return e.reduce((o,n,i)=>(i<e.length-1?o=o.concat(n,r.jsx(ue,{"aria-hidden":!0,className:s,ownerState:t,children:l},`separator-${i}`)):o.push(n),o),[])}const xe=p.forwardRef(function(s,l){const t=V({props:s,name:"MuiBreadcrumbs"}),{children:o,className:n,component:i="nav",slots:m={},slotProps:O={},expandText:R="Show path",itemsAfterCollapse:h=1,itemsBeforeCollapse:g=1,maxItems:b=8,separator:I="/"}=t,q=N(t,ie),[$,E]=p.useState(!1),d=c({},t,{component:i,expanded:$,expandText:R,itemsAfterCollapse:h,itemsBeforeCollapse:g,maxItems:b,separator:I}),x=ce(d),H=F({elementType:m.CollapsedIcon,externalSlotProps:O.collapsedIcon,ownerState:d}),z=p.useRef(null),A=a=>{const y=()=>{E(!0);const P=z.current.querySelector("a[href],button,[tabindex]");P&&P.focus()};return g+h>=a.length?a:[...a.slice(0,g),r.jsx(oe,{"aria-label":R,slots:{CollapsedIcon:m.CollapsedIcon},slotProps:{collapsedIcon:H},onClick:y},"ellipsis"),...a.slice(a.length-h,a.length)]},v=p.Children.toArray(o).filter(a=>p.isValidElement(a)).map((a,y)=>r.jsx("li",{className:x.li,children:a},`child-${y}`));return r.jsx(de,c({ref:l,component:i,color:"text.secondary",className:J(x.root,n),ownerState:d},q,{children:r.jsx(pe,{className:x.ol,ref:z,ownerState:d,children:me($||b&&v.length<=b?v:A(v),x.separator,I,d)})}))}),fe=xe;var S={},he=C;Object.defineProperty(S,"__esModule",{value:!0});var w=S.default=void 0,ge=he(j()),be=r;w=S.default=(0,ge.default)((0,be.jsx)("path",{d:"M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var B={},ve=C;Object.defineProperty(B,"__esModule",{value:!0});var T=B.default=void 0,ye=ve(j()),je=r;T=B.default=(0,ye.default)((0,je.jsx)("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home");var _={},Ce=C;Object.defineProperty(_,"__esModule",{value:!0});var L=_.default=void 0,Se=Ce(j()),Be=r;L=_.default=(0,Se.default)((0,Be.jsx)("path",{d:"M12 20H2v-2h5.75c-.73-2.81-2.94-5.01-5.75-5.74.64-.16 1.31-.26 2-.26 4.42 0 8 3.58 8 8m10-7.74c-.64-.16-1.31-.26-2-.26-2.93 0-5.48 1.58-6.88 3.93.29.66.53 1.35.67 2.07.13.65.2 1.32.2 2h8v-2h-5.75c.74-2.81 2.95-5.01 5.76-5.74m-6.36-1.24c.78-2.09 2.23-3.84 4.09-5C15.44 6.16 12 9.67 12 14v.02c.95-1.27 2.2-2.3 3.64-3m-4.22-2.17C10.58 6.66 8.88 4.89 6.7 4 8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61.43.24.83.52 1.22.82.21-1.18.65-2.29 1.24-3.29"}),"GrassOutlined");const Re=({Icon:e,path:s,...l})=>{const t=Q(),n=X().pathname.split("/").filter(m=>m),i=n[n.length-1].replace(/%20/g," ");return r.jsxs(Y,{pt:4,sx:{display:"flex",justifyContent:"flex-start",alignItems:"center"},children:[r.jsx("div",{style:{backgroundColor:t.palette.background.lightGrey,padding:"8px",width:"fit-content"},children:r.jsxs(fe,{separator:r.jsx(w,{fontSize:"small"}),"aria-label":"breadcrumb",children:[r.jsxs(k,{color:"inherit",to:"/dashboard",style:{display:"flex",alignItems:"center"},children:[r.jsx(T,{fontSize:"inherit",sx:{mr:1}}),r.jsx(f,{color:"text.cardTitle",sx:{fontSize:{xs:"0.6rem",sm:"0.8rem",md:"1rem"}},children:"Home"})]}),r.jsxs(k,{color:"inherit",to:"/"+n[0],style:{display:"flex",alignItems:"center"},children:[n[0]==="sensor"?r.jsx(Z,{fontSize:"inherit",sx:{mr:1}}):r.jsx(L,{fontSize:"inherit",sx:{mr:1}}),r.jsx(f,{color:"text.cardTitle",sx:{fontSize:{xs:"0.6rem",sm:"0.8rem",md:"1rem"}},children:s})]}),r.jsxs(f,{color:"primary.secondary",sx:{display:"flex",alignItems:"center",fontWeight:"bold",fontSize:{xs:"0.6rem",sm:"0.8rem",md:"1rem"}},children:[r.jsx(e,{fontSize:"inherit",sx:{mr:1}}),l.plantName||l.sensorName||i]})]})}),r.jsx("div",{style:{width:"0",height:"0",borderTop:"20px solid transparent",borderBottom:"20px solid transparent",borderLeft:"20px solid "+t.palette.background.lightGrey}})]})};export{Re as B};
