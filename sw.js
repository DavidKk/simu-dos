if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>i(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(n.map((e=>u[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-B52ntSbK.css",revision:null},{url:"assets/index-gFACe5FJ.js",revision:null},{url:"assets/jyqxz-BlP2rs_Z.js",revision:null},{url:"assets/jyqxz-BV0iljKK.js",revision:null},{url:"assets/QRCode-CYdR1IyX.js",revision:null},{url:"assets/wdosbox-CQi94ncY.js",revision:null},{url:"assets/xjqxz-Ctt54Dcp.js",revision:null},{url:"assets/xjqxz-DS4RGnxt.js",revision:null},{url:"index.html",revision:"4686e4e27d5a748d55b1f3a24b0d6c5b"},{url:"registerSW.js",revision:"07db1119a900e40fc9660801be403fb5"},{url:"wdosbox.js",revision:"3211f0c2a31d27713e9133bd19f495a8"},{url:"wdosbox.wasm.js",revision:"df90df0fd894cf6ee026bf847969c3ce"},{url:"manifest.webmanifest",revision:"2e6afd49a3409c5c2c8d19334f372a6e"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
