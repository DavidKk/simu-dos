if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let t={};const o=s=>i(s,l),u={module:{uri:l},exports:t,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(r(...s),t)))}}define(["./workbox-cd63daf5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/index-2Xt0hv5m.js",revision:null},{url:"assets/index-DykE8nHD.css",revision:null},{url:"assets/jyqxz-BlP2rs_Z.js",revision:null},{url:"assets/jyqxz-BV0iljKK.js",revision:null},{url:"assets/QRCode-Br473t15.js",revision:null},{url:"assets/wdosbox-Cn16rZFG.js",revision:null},{url:"assets/xjqxz-Ctt54Dcp.js",revision:null},{url:"assets/xjqxz-DS4RGnxt.js",revision:null},{url:"index.html",revision:"01054ff3e6fcac9a46fb531c95bf96a0"},{url:"registerSW.js",revision:"07db1119a900e40fc9660801be403fb5"},{url:"wdosbox.js",revision:"3211f0c2a31d27713e9133bd19f495a8"},{url:"wdosbox.wasm.js",revision:"df90df0fd894cf6ee026bf847969c3ce"},{url:"manifest.webmanifest",revision:"7daa5bed8349d033609bd9b244c0ac17"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
