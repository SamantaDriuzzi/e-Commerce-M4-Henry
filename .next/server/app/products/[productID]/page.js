(()=>{var e={};e.id=463,e.ids=[463],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},1347:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>d,routeModule:()=>m,tree:()=>l}),r(1695),r(4528),r(2523);var s=r(3191),a=r(8716),o=r(7922),n=r.n(o),i=r(5231),c={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>i[e]);r.d(t,c);let l=["",{children:["products",{children:["[productID]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1695)),"/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/app/products/[productID]/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,4528)),"/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.bind(r,2523)),"/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/app/not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/app/products/[productID]/page.tsx"],u="/products/[productID]/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/products/[productID]/page",pathname:"/products/[productID]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6062:(e,t,r)=>{Promise.resolve().then(r.bind(r,5101))},5101:(e,t,r)=>{"use strict";r.d(t,{default:()=>l});var s=r(326),a=r(6226),o=r(7577),n=r(5047),i=r(9394);r(5996);var c=r(5423);let l=({product:e})=>{let t=(0,n.useRouter)(),[r,l]=(0,o.useState)(),[d,u]=(0,o.useState)(1);return(0,o.useEffect)(()=>{},[]),(0,s.jsxs)("div",{className:"flex justify-center min-h-screen p-4",children:[s.jsx("div",{className:" bg-blue h-900 top-0 left-0 w-1/2 absolute z-0"}),(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-center items-center gap-20 w-full",children:[s.jsx("div",{className:"w-full md:w-1/4 relative z-10",children:s.jsx(a.default,{src:e.image,alt:e.name,className:"w-full h-auto object-cover rounded-lg",layout:"responsive",width:500,height:500})}),(0,s.jsxs)("div",{className:"flex flex-col p-6 z-10 w-full md:w-1/2 gap-4",children:[s.jsx("h1",{className:"text-4xl font-bold",children:e.name}),(0,s.jsxs)("div",{className:"text-4xl font-bold text-red-700",children:["$",e.price]}),s.jsx("div",{className:"text-lg font-medium text-gray-900 mt-2",children:e.description}),s.jsx("div",{className:"flex items-baseline mt-4 mb-6 ",children:(0,s.jsxs)("div",{className:"space-x-2 flex bg-orange ",children:[s.jsx("button",{type:"button",onClick:()=>{d>1&&u(d-1)},className:"bg-orange hover:bg-orange-full text-gray-800 font-bold py-2 px-4 rounded-l",children:"-"}),s.jsx("input",{type:"text",value:d,onChange:e=>u(parseInt(e.target.value,10)),className:"focus:outline-none text-center w-8 bg-orange  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"}),s.jsx("button",{type:"button",onClick:()=>{u(d+1)},className:"bg-orange  text-gray-800 font-bold py-2 px-4 rounded-r",children:"+"})]})}),s.jsx("button",{onClick:()=>{if(!r){i.Am.error("Debes estar logueado para comprar"),t.push("/register");return}let s={productId:e.id,name:e.name,price:e.price,quantity:d,image:e.image},a=[...JSON.parse(localStorage.getItem("cart")||"[]"),s];localStorage.setItem("cart",JSON.stringify(a)),i.Am.success("Producto agregado al carrito"),setTimeout(()=>{t.push("/products")},2e3)},type:"submit",className:"text-dark font-bold p-2 rounded-lg bg-orange hover:bg-orangeFull",children:"Agregar al carrito"}),s.jsx(i.Ix,{...c.Z})]})]})]})}},5423:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={position:"bottom-right",autoClose:5e3}},1695:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var s=r(9510),a=r(8570);let o=(0,a.createProxy)(String.raw`/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/components/Products/ProductDetails.tsx`),{__esModule:n,$$typeof:i}=o;o.default;let c=(0,a.createProxy)(String.raw`/Users/mauritwerda/Desktop/e-Commerce-M4-Henry/src/components/Products/ProductDetails.tsx#default`);var l=r(5700);let d=async({params:e})=>{let t=await (0,l.O)(e.productID);return s.jsx(c,{product:t})}},5700:(e,t,r)=>{"use strict";r.d(t,{O:()=>o,X:()=>a});let s=process.env.API_URL,a=async()=>{try{let e=await fetch(`${s}/products`,{cache:"no-cache",headers:{"ngrok-skip-browser-warning":"true"}});return await e.json()}catch(e){throw Error(e)}},o=async e=>{try{let t=await fetch(`${s}/products/${e}`,{cache:"no-cache",headers:{"ngrok-skip-browser-warning":"true"}});return await t.json()}catch(e){throw Error(e)}}},5996:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,795,394,508],()=>r(1347));module.exports=s})();