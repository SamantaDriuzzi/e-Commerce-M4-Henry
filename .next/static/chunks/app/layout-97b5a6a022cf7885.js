(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{8756:function(e,t,r){Promise.resolve().then(r.t.bind(r,8173,23)),Promise.resolve().then(r.t.bind(r,231,23)),Promise.resolve().then(r.t.bind(r,4671,23)),Promise.resolve().then(r.t.bind(r,8391,23)),Promise.resolve().then(r.bind(r,3976)),Promise.resolve().then(r.bind(r,1880)),Promise.resolve().then(r.bind(r,4011)),Promise.resolve().then(r.bind(r,8739)),Promise.resolve().then(r.t.bind(r,3054,23))},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var s=r(5601),n=r.n(s)},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return n.a}});var s=r(231),n=r.n(s)},6463:function(e,t,r){"use strict";var s=r(1169);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return o},getImageProps:function(){return a}});let s=r(9920),n=r(497),l=r(8173),i=s._(r(1241));function a(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let o=l.Image},8739:function(e,t,r){"use strict";r.d(t,{default:function(){return _}});var s=r(7437),n=r(2265),l=r(7659),i=r.n(l),a=r(7138),o=r(6648),c={src:"/_next/static/media/cart.e08b1b54.svg",height:16,width:16,blurWidth:0,blurHeight:0},d=r(6463),u=()=>{let[e,t]=(0,n.useState)(""),[r,l]=(0,n.useState)(!1),i=(0,d.useRouter)();return(0,s.jsx)(a.default,{href:"/cart",onClick:e=>{if(e.preventDefault(),window.localStorage){let e=localStorage.getItem("userSession");t(JSON.parse(e)),l(!!e),e?i.push("/cart"):i.push("/login")}},children:(0,s.jsx)(o.default,{src:c,alt:"carrito",width:50,height:50})})},h=()=>{let e=(0,d.useRouter)(),[t,r]=(0,n.useState)(!1),l=t=>{e.push("/dashboard/".concat(t)),r(!1)};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{onClick:()=>{r(!t)},children:(0,s.jsx)(o.default,{src:"/icons/user.svg",width:50,height:50,alt:"Icono de usuario",className:"cursor-pointer"})}),t&&(0,s.jsxs)("div",{className:"absolute flex flex-col gap-4 right-0 mt-2 w-48 h-64 bg-blue rounded-md shadow-lg z-40",children:[(0,s.jsx)("button",{className:"text-xl font-semibold hover:bg-orangeBase p-2",onClick:()=>l("login"),children:"INICIAR SESI\xd3N"}),(0,s.jsx)("button",{className:"text-xl font-semibold hover:bg-orangeBase p-2",onClick:()=>l("profile"),children:"MI PERFIL"}),(0,s.jsx)("button",{className:"text-xl font-semibold hover:bg-orangeBase p-2",onClick:()=>l("orders"),children:"MIS COMPRAS"}),(0,s.jsx)("button",{className:"text-xl font-semibold hover:bg-orangeBase p-2",onClick:()=>l("logout"),children:"CERRAR SESI\xd3N"})]})]})})},f=()=>{let e=(0,d.useRouter)();return(0,s.jsx)("form",{onSubmit:t=>{t.preventDefault(),e.push("/products")},className:"",children:(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("label",{htmlFor:"default-search",className:"mb-2 text-sm font-medium text-gray-900 sr-only",children:"Search"}),(0,s.jsx)("input",{type:"search",id:"default-search",className:"block w-full p-4 ps-10 text-sm text-gray-900 border0 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500",placeholder:"Search Mockups, Logos...",required:!0}),(0,s.jsx)("div",{className:"absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",children:(0,s.jsx)("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,s.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"})})})]})})},m=r(8391),x=r.n(m),g=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{style:{fontFamily:x().className},className:"text-5xl font-bold w-72 tracking-widest",children:"SHOP"})});let b=[{label:"INICIO",href:"/home"},{label:"PRODUCTOS",href:"/products"},{label:"CONTACTO",href:"/contact"},{label:"REGISTRARSE",href:"/register"}];var v=e=>{let{toggle:t}=e,[r,l]=(0,n.useState)(!1),[o,c]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>{c(window.innerWidth<768)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.useEffect)(()=>{let e=()=>{window.scrollY>0?l(!0):l(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-full h-30 sticky top-0 mt-4 z-20 ".concat(r?"bg-white":"bg-transparent"),children:(0,s.jsxs)("div",{className:"container mx-auto px-4 h-full",children:[(0,s.jsxs)("div",{className:"flex justify-between items-center h-full",children:[(0,s.jsx)(f,{}),(0,s.jsx)(g,{}),(0,s.jsx)("button",{type:"button",className:"inline-flex items-center md:hidden",onClick:t,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"#000000",d:"M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"})})}),(0,s.jsxs)("div",{className:"hidden md:flex gap-4 z-50",children:[(0,s.jsx)(u,{}),(0,s.jsx)(h,{})]})]}),(0,s.jsx)("div",{className:" flex justify-center mb-2 align-center gap-x-14 sm:hidden",style:{display:o?"none":"flex",fontFamily:i().className},children:b.map((e,t)=>(0,s.jsx)("div",{className:"hover:scale-110 transition-transform cursor-pointer",children:(0,s.jsx)(a.default,{href:e.href,children:(0,s.jsx)("div",{children:e.label})})},t))})]})})})};let p=[{href:"/home",label:"Inicio"},{href:"/products",label:"Productos"},{href:"/contact",label:"Contacto"},{href:"/login",label:"Mi Cuenta"}];var j=e=>{let{isOpen:t,toggle:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"sidebar-container fixed w-full h-full overflow-hidden justify-center bg-blue grid pt-[120px] top-0 left-0 z-50",style:{opacity:"".concat(t?"1":"0"),top:" ".concat(t?"0":"-100%")},children:[(0,s.jsx)("button",{className:"absolute right-0 p-5",onClick:r,children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"})})}),(0,s.jsx)("div",{className:"sidebar-nav text-center leading-relaxed text-xl",role:"navigation",children:p.map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsx)(a.default,{href:e.href,passHref:!0,children:(0,s.jsx)("p",{onClick:r,children:e.label})})},t))})]})})},_=()=>{let[e,t]=(0,n.useState)(!1),r=()=>{t(!e)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{isOpen:e,toggle:r}),(0,s.jsx)(v,{toggle:r})]})}},3054:function(){},3976:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/facebook.f98c1b05.svg",height:160,width:160,blurWidth:0,blurHeight:0}},1880:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/instagram.52363891.svg",height:160,width:160,blurWidth:0,blurHeight:0}},4011:function(e,t,r){"use strict";r.r(t),t.default={src:"/_next/static/media/redX.90fb6092.svg",height:160,width:160,blurWidth:0,blurHeight:0}},8391:function(e){e.exports={style:{fontFamily:"'__Tiro_Devanagari_Sanskrit_9ecd93', '__Tiro_Devanagari_Sanskrit_Fallback_9ecd93'",fontWeight:400,fontStyle:"normal"},className:"__className_9ecd93"}},7659:function(e){e.exports={style:{fontFamily:"'__Tiro_Devanagari_Sanskrit_9ecd93', '__Tiro_Devanagari_Sanskrit_Fallback_9ecd93'",fontWeight:400,fontStyle:"normal"},className:"__className_9ecd93"}},4671:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}}},function(e){e.O(0,[13,173,231,971,23,744],function(){return e(e.s=8756)}),_N_E=e.O()}]);