if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>i(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(n.map((s=>u[s]||t(s)))).then((s=>(r(...s),o)))}}define(["./workbox-f3e6b16a"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/index-BCausR-g.js",revision:null},{url:"assets/index-CAEqF18a.css",revision:null},{url:"assets/jyqxz-BlP2rs_Z.js",revision:null},{url:"assets/jyqxz-BV0iljKK.js",revision:null},{url:"assets/QRCode-Ba8m4tQk.js",revision:null},{url:"assets/wdosbox-Dyv_LGLd.js",revision:null},{url:"assets/xjqxz-Ctt54Dcp.js",revision:null},{url:"assets/xjqxz-DS4RGnxt.js",revision:null},{url:"index.html",revision:"383522f7b8c074d42a34d2815478703e"},{url:"registerSW.js",revision:"07db1119a900e40fc9660801be403fb5"},{url:"wdosbox.js",revision:"3211f0c2a31d27713e9133bd19f495a8"},{url:"wdosbox.wasm.js",revision:"df90df0fd894cf6ee026bf847969c3ce"},{url:"manifest.webmanifest",revision:"2e6afd49a3409c5c2c8d19334f372a6e"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
