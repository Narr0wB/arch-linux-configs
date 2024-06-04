// Vencord a66138f
// Standalone: true
// Platform: Universal
// Updater Disabled: false
"use strict";var Hr=Object.create;var Te=Object.defineProperty;var Br=Object.getOwnPropertyDescriptor;var Yr=Object.getOwnPropertyNames;var Jr=Object.getPrototypeOf,qr=Object.prototype.hasOwnProperty;var h=(e,t)=>()=>(e&&(t=e(e=0)),t);var xe=(e,t)=>{for(var r in t)Te(e,r,{get:t[r],enumerable:!0})},dt=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of Yr(t))!qr.call(e,i)&&i!==r&&Te(e,i,{get:()=>t[i],enumerable:!(n=Br(t,i))||n.enumerable});return e};var Ge=(e,t,r)=>(r=e!=null?Hr(Jr(e)):{},dt(t||!e||!e.__esModule?Te(r,"default",{value:e,enumerable:!0}):r,e)),Ve=e=>dt(Te({},"__esModule",{value:!0}),e);var l=h(()=>{"use strict"});var pe=h(()=>{"use strict";l()});var he,Me=h(()=>{l();he="a66138f"});var $,Ne=h(()=>{l();$="Vendicated/Vencord"});var vt,mt=h(()=>{"use strict";l();Me();Ne();vt=`Vencord/${he}${$?` (https://github.com/${$})`:""}`});function ee(e,t={}){return new Promise((r,n)=>{gt.default.get(e,t,i=>{let{statusCode:o,statusMessage:a,headers:s}=i;if(o>=400)return void n(`${o}: ${a} - ${e}`);if(o>=300)return void r(ee(s.location,t));let c=[];i.on("error",n),i.on("data",u=>c.push(u)),i.once("end",()=>r(Buffer.concat(c)))})})}var gt,Ue=h(()=>{"use strict";l();gt=Ge(require("https"))});function de(e){return async function(){try{return{ok:!0,value:await e(...arguments)}}catch(t){return{ok:!1,error:t instanceof Error?{...t}:t}}}}var yt,wt=h(()=>{"use strict";l();yt=["patcher.js","preload.js","renderer.js","renderer.css"]});var $r={};async function xt(e){return ee(Kr+e,{headers:{Accept:"application/vnd.github+json","User-Agent":vt}})}async function Qr(){if(!await Et())return[];let t=await xt(`/compare/${he}...HEAD`);return JSON.parse(t.toString("utf-8")).commits.map(n=>({hash:n.sha.slice(0,7),author:n.author.login,message:n.commit.message.split(`
`)[0]}))}async function Et(){let e=await xt("/releases/latest"),t=JSON.parse(e.toString());return t.name.slice(t.name.lastIndexOf(" ")+1)===he?!1:(t.assets.forEach(({name:n,browser_download_url:i})=>{yt.some(o=>n.startsWith(o))&&We.push([n,i])}),!0)}async function Xr(){return await Promise.all(We.map(async([e,t])=>(0,St.writeFile)((0,Tt.join)(__dirname,e),await ee(t)))),We=[],!0}var ve,St,Tt,Kr,We,Dt=h(()=>{"use strict";l();pe();mt();ve=require("electron"),St=require("fs/promises"),Tt=require("path");Me();Ne();Ue();wt();Kr=`https://api.github.com/repos/${$}`,We=[];ve.ipcMain.handle("VencordGetRepo",de(()=>`https://github.com/${$}`));ve.ipcMain.handle("VencordGetUpdates",de(Qr));ve.ipcMain.handle("VencordUpdate",de(Et));ve.ipcMain.handle("VencordBuild",de(Xr))});var It=h(()=>{"use strict";l();Dt()});var ze={};xe(ze,{initDevtoolsOpenEagerLoad:()=>en});function en(e){let t=()=>e.sender.executeJavaScript("Vencord.Plugins.plugins.ConsoleShortcuts.eagerLoad(true)");e.sender.isDevToolsOpened()?t():e.sender.once("devtools-opened",()=>t())}var bt=h(()=>{"use strict";l()});var me,At=h(()=>{"use strict";l();me=class{pathListeners=new Map;globalListeners=new Set;constructor(t,r={}){this.plain=t,this.store=this.makeProxy(t),Object.assign(this,r)}makeProxy(t,r=t,n=""){let i=this;return new Proxy(t,{get(o,a){let s=o[a];return!(a in o)&&i.getDefaultValue&&(s=i.getDefaultValue({target:o,key:a,root:r,path:n})),typeof s=="object"&&s!==null&&!Array.isArray(s)?i.makeProxy(s,r,`${n}${n&&"."}${a}`):s},set(o,a,s){if(o[a]===s)return!0;Reflect.set(o,a,s);let c=`${n}${n&&"."}${a}`;return i.globalListeners.forEach(u=>u(s,c)),i.pathListeners.get(c)?.forEach(u=>u(s)),!0}})}setData(t,r){if(this.readOnly)throw new Error("SettingsStore is read-only");if(this.plain=t,this.store=this.makeProxy(t),r){let n=t,i=r.split(".");for(let o of i){if(!n){console.warn(`Settings#setData: Path ${r} does not exist in new data. Not dispatching update`);return}n=n[o]}this.pathListeners.get(r)?.forEach(o=>o(n))}this.markAsChanged()}addGlobalChangeListener(t){this.globalListeners.add(t)}addChangeListener(t,r){let n=this.pathListeners.get(t)??new Set;n.add(r),this.pathListeners.set(t,n)}removeGlobalChangeListener(t){this.globalListeners.delete(t)}removeChangeListener(t,r){let n=this.pathListeners.get(t);!n||(n.delete(r),n.size||this.pathListeners.delete(t))}markAsChanged(){this.globalListeners.forEach(t=>t(this.plain,""))}}});function Ze(e,t){for(let r in t){let n=t[r];typeof n=="object"&&!Array.isArray(n)?(e[r]??={},Ze(e[r],n)):e[r]??=n}return e}var Pt=h(()=>{"use strict";l()});var Ot,N,Ee,te,U,re,Fe,He,Rt,De,ne=h(()=>{"use strict";l();Ot=require("electron"),N=require("path"),Ee=process.env.VENCORD_USER_DATA_DIR??(process.env.DISCORD_USER_DATA_DIR?(0,N.join)(process.env.DISCORD_USER_DATA_DIR,"..","VencordData"):(0,N.join)(Ot.app.getPath("userData"),"..","Vencord")),te=(0,N.join)(Ee,"settings"),U=(0,N.join)(Ee,"themes"),re=(0,N.join)(te,"quickCss.css"),Fe=(0,N.join)(te,"settings.json"),He=(0,N.join)(te,"native-settings.json"),Rt=["https:","http:","steam:","spotify:","com.epicgames.launcher:","tidal:"],De=process.argv.includes("--vanilla")});function Ct(e,t){try{return JSON.parse((0,F.readFileSync)(t,"utf-8"))}catch(r){return r?.code!=="ENOENT"&&console.error(`Failed to read ${e} settings`,r),{}}}var Ie,F,x,tn,Lt,_t,H=h(()=>{"use strict";l();pe();At();Pt();Ie=require("electron"),F=require("fs");ne();(0,F.mkdirSync)(te,{recursive:!0});x=new me(Ct("renderer",Fe));x.addGlobalChangeListener(()=>{try{(0,F.writeFileSync)(Fe,JSON.stringify(x.plain,null,4))}catch(e){console.error("Failed to write renderer settings",e)}});Ie.ipcMain.handle("VencordGetSettingsDir",()=>te);Ie.ipcMain.on("VencordGetSettings",e=>e.returnValue=x.plain);Ie.ipcMain.handle("VencordSetSettings",(e,t,r)=>{x.setData(t,r)});tn={plugins:{}},Lt=Ct("native",He);Ze(Lt,tn);_t=new me(Lt);_t.addGlobalChangeListener(()=>{try{(0,F.writeFileSync)(He,JSON.stringify(_t.plain,null,4))}catch(e){console.error("Failed to write native settings",e)}})});var Gt={};var kt,Vt=h(()=>{"use strict";l();H();kt=require("electron");kt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://open.spotify.com/embed/")){let i=x.store.plugins?.FixSpotifyEmbeds;if(!i?.enabled)return;n.executeJavaScript(`
                    const original = Audio.prototype.play;
                    Audio.prototype.play = function() {
                        this.volume = ${i.volume/100||.1};
                        return original.apply(this, arguments);
                    }
                `)}})})})});var Nt={};var Mt,Ut=h(()=>{"use strict";l();H();Mt=require("electron");Mt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.startsWith("https://www.youtube.com/")){if(!x.store.plugins?.FixYoutubeEmbeds?.enabled)return;n.executeJavaScript(`
                new MutationObserver(() => {
                    if(
                        document.querySelector('div.ytp-error-content-wrap-subreason a[href*="www.youtube.com/watch?v="]')
                    ) location.reload()
                }).observe(document.body, { childList: true, subtree:true });
                `)}})})})});var Be={};xe(Be,{resolveRedirect:()=>nn});function jt(e){return new Promise((t,r)=>{let n=(0,Wt.request)(new URL(e),{method:"HEAD"},i=>{t(i.headers.location?jt(i.headers.location):e)});n.on("error",r),n.end()})}async function nn(e,t){return rn.test(t)?jt(t):t}var Wt,rn,zt=h(()=>{"use strict";l();Wt=require("https"),rn=/^https:\/\/(spotify\.link|s\.team)\/.+$/});var Ye={};xe(Ye,{readRecording:()=>on});async function on(e,t){t=(0,ge.normalize)(t);let r=(0,ge.basename)(t),n=(0,ge.normalize)(Zt.app.getPath("userData")+"/");if(console.log(r,n,t),r!=="recording.ogg"||!t.startsWith(n))return null;try{let i=await(0,Ft.readFile)(t);return new Uint8Array(i.buffer)}catch{return null}}var Zt,Ft,ge,Ht=h(()=>{"use strict";l();Zt=require("electron"),Ft=require("fs/promises"),ge=require("path")});var Bt,Yt=h(()=>{l();Bt=`"use strict";const LOGO_ID="block-youtube-ads-logo",hiddenCSS=["#__ffYoutube1","#__ffYoutube2","#__ffYoutube3","#__ffYoutube4","#feed-pyv-container","#feedmodule-PRO","#homepage-chrome-side-promo","#merch-shelf","#offer-module",'#pla-shelf > ytd-pla-shelf-renderer[class="style-scope ytd-watch"]',"#pla-shelf","#premium-yva","#promo-info","#promo-list","#promotion-shelf","#related > ytd-watch-next-secondary-results-renderer > #items > ytd-compact-promoted-video-renderer.ytd-watch-next-secondary-results-renderer","#search-pva","#shelf-pyv-container","#video-masthead","#watch-branded-actions","#watch-buy-urls","#watch-channel-brand-div","#watch7-branded-banner","#YtKevlarVisibilityIdentifier","#YtSparklesVisibilityIdentifier",".carousel-offer-url-container",".companion-ad-container",".GoogleActiveViewElement",'.list-view[style="margin: 7px 0pt;"]',".promoted-sparkles-text-search-root-container",".promoted-videos",".searchView.list-view",".sparkles-light-cta",".watch-extra-info-column",".watch-extra-info-right",".ytd-carousel-ad-renderer",".ytd-compact-promoted-video-renderer",".ytd-companion-slot-renderer",".ytd-merch-shelf-renderer",".ytd-player-legacy-desktop-watch-ads-renderer",".ytd-promoted-sparkles-text-search-renderer",".ytd-promoted-video-renderer",".ytd-search-pyv-renderer",".ytd-video-masthead-ad-v3-renderer",".ytp-ad-action-interstitial-background-container",".ytp-ad-action-interstitial-slot",".ytp-ad-image-overlay",".ytp-ad-overlay-container",".ytp-ad-progress",".ytp-ad-progress-list",'[class*="ytd-display-ad-"]','[layout*="display-ad-"]','a[href^="http://www.youtube.com/cthru?"]','a[href^="https://www.youtube.com/cthru?"]',"ytd-action-companion-ad-renderer","ytd-banner-promo-renderer","ytd-compact-promoted-video-renderer","ytd-companion-slot-renderer","ytd-display-ad-renderer","ytd-promoted-sparkles-text-search-renderer","ytd-promoted-sparkles-web-renderer","ytd-search-pyv-renderer","ytd-single-option-survey-renderer","ytd-video-masthead-ad-advertiser-info-renderer","ytd-video-masthead-ad-v3-renderer","YTM-PROMOTED-VIDEO-RENDERER"],hideElements=()=>{const e=hiddenCSS;if(!e)return;const t=e.join(", ")+" { display: none!important; }",r=document.createElement("style");r.innerHTML=t,document.head.appendChild(r)},observeDomChanges=e=>{new MutationObserver(r=>{e(r)}).observe(document.documentElement,{childList:!0,subtree:!0})},hideDynamicAds=()=>{const e=document.querySelectorAll("#contents > ytd-rich-item-renderer ytd-display-ad-renderer");e.length!==0&&e.forEach(t=>{if(t.parentNode&&t.parentNode.parentNode){const r=t.parentNode.parentNode;r.localName==="ytd-rich-item-renderer"&&(r.style.display="none")}})},autoSkipAds=()=>{if(document.querySelector(".ad-showing")){const e=document.querySelector("video");e&&e.duration&&(e.currentTime=e.duration,setTimeout(()=>{const t=document.querySelector("button.ytp-ad-skip-button");t&&t.click()},100))}},overrideObject=(e,t,r)=>{if(!e)return!1;let n=!1;for(const o in e)e.hasOwnProperty(o)&&o===t?(e[o]=r,n=!0):e.hasOwnProperty(o)&&typeof e[o]=="object"&&overrideObject(e[o],t,r)&&(n=!0);return n},jsonOverride=(e,t)=>{const r=JSON.parse;JSON.parse=(...o)=>{const d=r.apply(this,o);return overrideObject(d,e,t),d};const n=Response.prototype.json;Response.prototype.json=new Proxy(n,{apply(...o){const d=Reflect.apply(...o);return new Promise((s,i)=>{d.then(a=>{overrideObject(a,e,t),s(a)}).catch(a=>i(a))})}})},addAdGuardLogoStyle=()=>{},addAdGuardLogo=()=>{if(document.getElementById(LOGO_ID))return;const e=document.createElement("span");if(e.innerHTML="__logo_text__",e.setAttribute("id",LOGO_ID),window.location.hostname==="m.youtube.com"){const t=document.querySelector("header.mobile-topbar-header > button");t&&(t.parentNode?.insertBefore(e,t.nextSibling),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube.com"){const t=document.getElementById("country-code");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="music.youtube.com"){const t=document.querySelector(".ytmusic-nav-bar#left-content");t&&(t.appendChild(e),addAdGuardLogoStyle())}else if(window.location.hostname==="www.youtube-nocookie.com"){const t=document.querySelector("#yt-masthead #logo-container .content-region");t&&(t.innerHTML="",t.appendChild(e),addAdGuardLogoStyle())}};jsonOverride("adPlacements",[]),jsonOverride("playerAds",[]),hideElements(),addAdGuardLogo(),hideDynamicAds(),autoSkipAds(),observeDomChanges(()=>{addAdGuardLogo(),hideDynamicAds(),autoSkipAds()});
`});var qt={};var Jt,Kt=h(()=>{"use strict";l();H();Jt=require("electron");Yt();Jt.app.on("browser-window-created",(e,t)=>{t.webContents.on("frame-created",(r,{frame:n})=>{n.once("dom-ready",()=>{if(n.url.includes("discordsays")&&n.url.includes("youtube.com")){if(!x.store.plugins?.WatchTogetherAdblock?.enabled)return;n.executeJavaScript(Bt)}})})})});var Je={};xe(Je,{sendToOverlay:()=>an});function an(e,t){t.icon=Buffer.from(t.icon).toString("base64");let r=JSON.stringify(t);Qt??=(0,Xt.createSocket)("udp4"),Qt.send(r,42069,"127.0.0.1")}var Xt,Qt,$t=h(()=>{"use strict";l();Xt=require("dgram")});var er,tr=h(()=>{l();bt();Vt();Ut();zt();Ht();Kt();$t();er={ConsoleShortcuts:ze,FixSpotifyEmbeds:Gt,FixYoutubeEmbeds:Nt,OpenInApp:Be,VoiceMessages:Ye,WatchTogetherAdblock:qt,XsOverlay:Je}});var qe,rr,nr=h(()=>{"use strict";l();pe();qe=require("electron");tr();rr={};for(let[e,t]of Object.entries(er)){let r=Object.entries(t);if(!r.length)continue;let n=rr[e]={};for(let[i,o]of r){let a=`VencordPluginNative_${e}_${i}`;qe.ipcMain.handle(a,o),n[i]=a}}qe.ipcMain.on("VencordGetPluginIpcMethodMap",e=>{e.returnValue=rr})});function Ke(e,t=300){let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}}var ir=h(()=>{"use strict";l()});var or,ar=h(()=>{l();or="PCFkb2N0eXBlIGh0bWw+PGh0bWwgbGFuZz0iZW4iPjxoZWFkPjxtZXRhIGNoYXJzZXQ9InV0Zi04Ij48dGl0bGU+VmVuY29yZCBRdWlja0NTUyBFZGl0b3I8L3RpdGxlPjxsaW5rIHJlbD0ic3R5bGVzaGVldCIgaHJlZj0iaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzL2VkaXRvci9lZGl0b3IubWFpbi5taW4uY3NzIiBpbnRlZ3JpdHk9InNoYTUxMi1NT29RMDJoODBoa2xjY2ZMclhGWWtDekcrV1ZqT1JmbE9wOVpwOGRsdGlhUlArMzVMWW5PNExLT2tsUjY0b01HZkdnSkRMTzhXSnBrTTFvNWdaWFlaUT09IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjxzdHlsZT4jY29udGFpbmVyLGJvZHksaHRtbHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTttYXJnaW46MDtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVufTwvc3R5bGU+PC9oZWFkPjxib2R5PjxkaXYgaWQ9ImNvbnRhaW5lciI+PC9kaXY+PHNjcmlwdCBzcmM9Imh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL21vbmFjby1lZGl0b3IvMC40MC4wL21pbi92cy9sb2FkZXIubWluLmpzIiBpbnRlZ3JpdHk9InNoYTUxMi1Rek1wWGVDUGNpQUhQNHdiWWxWMlBZZ3JRY2FFa0RRVWp6a1BVNHhuanlWU0Q5VDM2L3VkYW14dE5CcWI0cUs0L2JNUU1QWjhheXJCZTlockdkQkZqUT09IiBjcm9zc29yaWdpbj0iYW5vbnltb3VzIiByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjwvc2NyaXB0PjxzY3JpcHQ+cmVxdWlyZS5jb25maWcoe3BhdGhzOnt2czoiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvbW9uYWNvLWVkaXRvci8wLjQwLjAvbWluL3ZzIn19KSxyZXF1aXJlKFsidnMvZWRpdG9yL2VkaXRvci5tYWluIl0sKCgpPT57Z2V0Q3VycmVudENzcygpLnRoZW4oKGU9Pnt2YXIgdD1tb25hY28uZWRpdG9yLmNyZWF0ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiY29udGFpbmVyIikse3ZhbHVlOmUsbGFuZ3VhZ2U6ImNzcyIsdGhlbWU6Z2V0VGhlbWUoKX0pO3Qub25EaWRDaGFuZ2VNb2RlbENvbnRlbnQoKCgpPT5zZXRDc3ModC5nZXRWYWx1ZSgpKSkpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCJyZXNpemUiLCgoKT0+e3QubGF5b3V0KCl9KSl9KSl9KSk8L3NjcmlwdD48L2JvZHk+PC9odG1sPg=="});function Qe(e,t={}){return{fileName:e,name:t.name??e.replace(/\.css$/i,""),author:t.author??"Unknown Author",description:t.description??"A Discord Theme.",version:t.version,license:t.license,source:t.source,website:t.website,invite:t.invite}}function sr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function cr(e,t){if(!e)return Qe(t);let r=e.split("/**",2)?.[1]?.split("*/",1)?.[0];if(!r)return Qe(t);let n={},i="",o="";for(let a of r.split(sn))if(a.length!==0)if(a.charAt(0)==="@"&&a.charAt(1)!==" "){n[i]=o.trim();let s=a.indexOf(" ");i=a.substring(1,s),o=a.substring(s+1)}else o+=" "+a.replace("\\n",`
`).replace(cn,"@");return n[i]=o.trim(),delete n[""],Qe(t,n)}var sn,cn,lr=h(()=>{"use strict";l();sn=/[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/,cn=/^\\@/});function fr(e){e.webContents.setWindowOpenHandler(({url:t})=>{switch(t){case"about:blank":case"https://discord.com/popout":case"https://ptb.discord.com/popout":case"https://canary.discord.com/popout":return{action:"allow"}}try{var{protocol:r}=new URL(t)}catch{return{action:"deny"}}switch(r){case"http:":case"https:":case"mailto:":case"steam:":case"spotify:":ur.shell.openExternal(t)}return{action:"deny"}})}var ur,pr=h(()=>{"use strict";l();ur=require("electron")});function Xe(e,t){let r=(0,ie.normalize)(e),n=(0,ie.join)(e,t),i=(0,ie.normalize)(n);return i.startsWith(r)?i:null}function hr(){return(0,Y.readFile)(re,"utf-8").catch(()=>"")}async function ln(){let e=await(0,Y.readdir)(U).catch(()=>[]),t=[];for(let r of e){if(!r.endsWith(".css"))continue;let n=await dr(r).then(sr).catch(()=>null);n!=null&&t.push(cr(n,r))}return t}function dr(e){e=e.replace(/\?v=\d+$/,"");let t=Xe(U,e);return t?(0,Y.readFile)(t,"utf-8"):Promise.reject(`Unsafe path ${e}`)}function vr(e){let t;(0,Y.open)(re,"a+").then(n=>{n.close(),t=(0,B.watch)(re,{persistent:!1},Ke(async()=>{e.webContents.postMessage("VencordQuickCssUpdate",await hr())},50))}).catch(()=>{});let r=(0,B.watch)(U,{persistent:!1},Ke(()=>{e.webContents.postMessage("VencordThemeUpdate",void 0)}));e.once("closed",()=>{t?.close(),r.close()})}var m,B,Y,ie,$e=h(()=>{"use strict";l();It();nr();H();ir();pe();m=require("electron");ar();B=require("fs"),Y=require("fs/promises"),ie=require("path");lr();ne();pr();(0,B.mkdirSync)(U,{recursive:!0});m.ipcMain.handle("VencordOpenQuickCss",()=>m.shell.openPath(re));m.ipcMain.handle("VencordOpenExternal",(e,t)=>{try{var{protocol:r}=new URL(t)}catch{throw"Malformed URL"}if(!Rt.includes(r))throw"Disallowed protocol.";m.shell.openExternal(t)});m.ipcMain.handle("VencordGetQuickCss",()=>hr());m.ipcMain.handle("VencordSetQuickCss",(e,t)=>(0,B.writeFileSync)(re,t));m.ipcMain.handle("VencordGetThemesDir",()=>U);m.ipcMain.handle("VencordGetThemesList",()=>ln());m.ipcMain.handle("VencordGetThemeData",(e,t)=>dr(t));m.ipcMain.handle("VencordGetThemeSystemValues",()=>({"os-accent-color":`#${m.systemPreferences.getAccentColor?.()||""}`}));m.ipcMain.handle("VencordOpenMonacoEditor",async()=>{let e="Vencord QuickCSS Editor",t=m.BrowserWindow.getAllWindows().find(n=>n.title===e);if(t&&!t.isDestroyed()){t.focus();return}let r=new m.BrowserWindow({title:e,autoHideMenuBar:!0,darkTheme:!0,webPreferences:{preload:(0,ie.join)(__dirname,"preload.js"),contextIsolation:!0,nodeIntegration:!1,sandbox:!1}});fr(r),await r.loadURL(`data:text/html;base64,${or}`)})});function Mr(e,t,r){let n=t;if(t in e)return void r(e[n]);Object.defineProperty(e,t,{set(i){delete e[n],e[n]=i,r(i)},configurable:!0,enumerable:!1})}var Nr=h(()=>{"use strict";l()});var _n={};function On(e,t){let r=e.slice(4).split(".").map(Number),n=t.slice(4).split(".").map(Number);for(let i=0;i<n.length;i++){if(r[i]>n[i])return!0;if(r[i]<n[i])return!1}return!1}function Rn(){if(!process.env.DISABLE_UPDATER_AUTO_PATCHING)try{let e=(0,A.dirname)(process.execPath),t=(0,A.basename)(e),r=(0,A.join)(e,".."),n=(0,D.readdirSync)(r).reduce((s,c)=>c.startsWith("app-")&&On(c,s)?c:s,t);if(n===t)return;let i=(0,A.join)(r,n,"resources"),o=(0,A.join)(i,"app.asar"),a=(0,A.join)(i,"_app.asar");if(!(0,D.existsSync)(o)||(0,D.statSync)(o).isDirectory())return;console.info("[Vencord] Detected Host Update. Repatching..."),(0,D.renameSync)(o,a),(0,D.mkdirSync)(o),(0,D.writeFileSync)((0,A.join)(o,"package.json"),JSON.stringify({name:"discord",main:"index.js"})),(0,D.writeFileSync)((0,A.join)(o,"index.js"),`require(${JSON.stringify((0,A.join)(__dirname,"patcher.js"))});`)}catch(e){console.error("[Vencord] Failed to repatch latest host update",e)}}var Ur,D,A,Wr=h(()=>{"use strict";l();Ur=require("electron"),D=require("original-fs"),A=require("path");Ur.app.on("before-quit",Rn)});var Gn={};var S,j,Cn,Ln,st,kn,jr=h(()=>{"use strict";l();Nr();S=Ge(require("electron")),j=require("path");$e();H();ne();console.log("[Vencord] Starting up...");Cn=require.main.filename,Ln=require.main.path.endsWith("app.asar")?"_app.asar":"app.asar",st=(0,j.join)((0,j.dirname)(Cn),"..",Ln),kn=require((0,j.join)(st,"package.json"));require.main.filename=(0,j.join)(st,kn.main);S.app.setAppPath(st);if(De)console.log("[Vencord] Running in vanilla mode. Not loading Vencord");else{let e=x.store;if(process.platform==="win32"&&(Wr(),e.winCtrlQ)){let i=S.Menu.buildFromTemplate;S.Menu.buildFromTemplate=function(o){if(o[0]?.label==="&File"){let{submenu:a}=o[0];Array.isArray(a)&&a.push({label:"Quit (Hidden)",visible:!1,acceleratorWorksWhenHidden:!0,accelerator:"Control+Q",click:()=>S.app.quit()})}return i.call(this,o)}}class t extends S.default.BrowserWindow{constructor(o){if(o?.webPreferences?.preload&&o.title){let a=o.webPreferences.preload;o.webPreferences.preload=(0,j.join)(__dirname,"preload.js"),o.webPreferences.sandbox=!1,o.webPreferences.backgroundThrottling=!1,e.frameless?o.frame=!1:process.platform==="win32"&&e.winNativeTitleBar&&delete o.frame,e.transparent&&(o.transparent=!0,o.backgroundColor="#00000000"),process.platform==="darwin"&&e.macosVibrancyStyle&&(o.backgroundColor="#00000000",e.macosVibrancyStyle&&(o.vibrancy=e.macosVibrancyStyle)),process.env.DISCORD_PRELOAD=a,super(o),vr(this)}else super(o)}}Object.assign(t,S.default.BrowserWindow),Object.defineProperty(t,"name",{value:"BrowserWindow",configurable:!0});let r=require.resolve("electron");delete require.cache[r].exports,require.cache[r].exports={...S.default,BrowserWindow:t},Mr(global,"appSettings",i=>{i.set("DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING",!0),e.disableMinSize?(i.set("MIN_WIDTH",0),i.set("MIN_HEIGHT",0)):(i.set("MIN_WIDTH",940),i.set("MIN_HEIGHT",500))}),process.env.DATA_DIR=(0,j.join)(S.app.getPath("userData"),"..","Vencord");let n=S.app.commandLine.appendSwitch;S.app.commandLine.appendSwitch=function(...i){return i[0]==="disable-features"&&!i[1]?.includes("WidgetLayering")&&(i[1]+=",WidgetLayering"),n.apply(this,i)},S.app.commandLine.appendSwitch("disable-renderer-backgrounding"),S.app.commandLine.appendSwitch("disable-background-timer-throttling"),S.app.commandLine.appendSwitch("disable-backgrounding-occluded-windows")}console.log("[Vencord] Loading original Discord app.asar");require(require.main.filename)});l();var J=require("electron"),zr=require("path");$e();H();ne();l();var kr=require("electron");l();var yr=require("module"),un=(0,yr.createRequire)("/"),Ae,fn=";var __w=require('worker_threads');__w.parentPort.on('message',function(m){onmessage({data:m})}),postMessage=function(m,t){__w.parentPort.postMessage(m,t)},close=process.exit;self=global";try{Ae=un("worker_threads").Worker}catch{}var pn=Ae?function(e,t,r,n,i){var o=!1,a=new Ae(e+fn,{eval:!0}).on("error",function(s){return i(s,null)}).on("message",function(s){return i(null,s)}).on("exit",function(s){s&&!o&&i(new Error("exited with code "+s),null)});return a.postMessage(r,n),a.terminate=function(){return o=!0,Ae.prototype.terminate.call(a)},a}:function(e,t,r,n,i){setImmediate(function(){return i(new Error("async operations unsupported - update to Node 12+ (or Node 10-11 with the --experimental-worker CLI flag)"),null)});var o=function(){};return{terminate:o,postMessage:o}},T=Uint8Array,W=Uint16Array,rt=Uint32Array,nt=new T([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),it=new T([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wr=new T([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Sr=function(e,t){for(var r=new W(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new rt(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return[r,i]},Tr=Sr(nt,2),ot=Tr[0],hn=Tr[1];ot[28]=258,hn[258]=28;var xr=Sr(it,0),Er=xr[0],io=xr[1],Re=new W(32768);for(d=0;d<32768;++d)L=(d&43690)>>>1|(d&21845)<<1,L=(L&52428)>>>2|(L&13107)<<2,L=(L&61680)>>>4|(L&3855)<<4,Re[d]=((L&65280)>>>8|(L&255)<<8)>>>1;var L,d,oe=function(e,t,r){for(var n=e.length,i=0,o=new W(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new W(t);for(i=0;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var s;if(r){s=new W(1<<t);var c=15-t;for(i=0;i<n;++i)if(e[i])for(var u=i<<4|e[i],v=t-e[i],g=a[e[i]-1]++<<v,P=g|(1<<v)-1;g<=P;++g)s[Re[g]>>>c]=u}else for(s=new W(n),i=0;i<n;++i)e[i]&&(s[i]=Re[a[e[i]-1]++]>>>15-e[i]);return s},ye=new T(288);for(d=0;d<144;++d)ye[d]=8;var d;for(d=144;d<256;++d)ye[d]=9;var d;for(d=256;d<280;++d)ye[d]=7;var d;for(d=280;d<288;++d)ye[d]=8;var d,Dr=new T(32);for(d=0;d<32;++d)Dr[d]=5;var d;var Ir=oe(ye,9,1);var br=oe(Dr,5,1),Pe=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},b=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Oe=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Ar=function(e){return(e+7)/8|0},_e=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var n=new(e.BYTES_PER_ELEMENT==2?W:e.BYTES_PER_ELEMENT==4?rt:T)(r-t);return n.set(e.subarray(t,r)),n};var Pr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(e,t,r){var n=new Error(t||Pr[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,E),!r)throw n;return n},Or=function(e,t,r){var n=e.length;if(!n||r&&r.f&&!r.l)return t||new T(0);var i=!t||r,o=!r||r.i;r||(r={}),t||(t=new T(n*3));var a=function(ft){var pt=t.length;if(ft>pt){var ht=new T(Math.max(pt*2,ft));ht.set(t),t=ht}},s=r.f||0,c=r.p||0,u=r.b||0,v=r.l,g=r.d,P=r.m,k=r.n,se=n*8;do{if(!v){s=b(e,c,1);var z=b(e,c+1,3);if(c+=3,z)if(z==1)v=Ir,g=br,P=9,k=5;else if(z==2){var V=b(e,c,31)+257,q=b(e,c+10,15)+4,ce=V+b(e,c+5,31)+1;c+=14;for(var Z=new T(ce),le=new T(19),w=0;w<q;++w)le[wr[w]]=b(e,c+w*3,7);c+=q*3;for(var C=Pe(le),we=(1<<C)-1,K=oe(le,C,1),w=0;w<ce;){var ue=K[b(e,c,we)];c+=ue&15;var y=ue>>>4;if(y<16)Z[w++]=y;else{var Q=0,Se=0;for(y==16?(Se=3+b(e,c,3),c+=2,Q=Z[w-1]):y==17?(Se=3+b(e,c,7),c+=3):y==18&&(Se=11+b(e,c,127),c+=7);Se--;)Z[w++]=Q}}var ct=Z.subarray(0,V),M=Z.subarray(V);P=Pe(ct),k=Pe(M),v=oe(ct,P,1),g=oe(M,k,1)}else E(1);else{var y=Ar(c)+4,I=e[y-4]|e[y-3]<<8,G=y+I;if(G>n){o&&E(0);break}i&&a(u+I),t.set(e.subarray(y,G),u),r.b=u+=I,r.p=c=G*8,r.f=s;continue}if(c>se){o&&E(0);break}}i&&a(u+131072);for(var Zr=(1<<P)-1,Fr=(1<<k)-1,Ce=c;;Ce=c){var Q=v[Oe(e,c)&Zr],X=Q>>>4;if(c+=Q&15,c>se){o&&E(0);break}if(Q||E(2),X<256)t[u++]=X;else if(X==256){Ce=c,v=null;break}else{var lt=X-254;if(X>264){var w=X-257,fe=nt[w];lt=b(e,c,(1<<fe)-1)+ot[w],c+=fe}var Le=g[Oe(e,c)&Fr],ke=Le>>>4;Le||E(3),c+=Le&15;var M=Er[ke];if(ke>3){var fe=it[ke];M+=Oe(e,c)&(1<<fe)-1,c+=fe}if(c>se){o&&E(0);break}i&&a(u+131072);for(var ut=u+lt;u<ut;u+=4)t[u]=t[u-M],t[u+1]=t[u+1-M],t[u+2]=t[u+2-M],t[u+3]=t[u+3-M];u=ut}}r.l=v,r.p=Ce,r.b=u,r.f=s,v&&(s=1,r.m=P,r.d=g,r.n=k)}while(!s);return u==t.length?t:_e(t,0,u)};var dn=new T(0);var vn=function(e,t){var r={};for(var n in e)r[n]=e[n];for(var n in t)r[n]=t[n];return r},mr=function(e,t,r){for(var n=e(),i=e.toString(),o=i.slice(i.indexOf("[")+1,i.lastIndexOf("]")).replace(/\s+/g,"").split(","),a=0;a<n.length;++a){var s=n[a],c=o[a];if(typeof s=="function"){t+=";"+c+"=";var u=s.toString();if(s.prototype)if(u.indexOf("[native code]")!=-1){var v=u.indexOf(" ",8)+1;t+=u.slice(v,u.indexOf("(",v))}else{t+=u;for(var g in s.prototype)t+=";"+c+".prototype."+g+"="+s.prototype[g].toString()}else t+=u}else r[c]=s}return[t,r]},be=[],mn=function(e){var t=[];for(var r in e)e[r].buffer&&t.push((e[r]=new e[r].constructor(e[r])).buffer);return t},gn=function(e,t,r,n){var i;if(!be[r]){for(var o="",a={},s=e.length-1,c=0;c<s;++c)i=mr(e[c],o,a),o=i[0],a=i[1];be[r]=mr(e[s],o,a)}var u=vn({},be[r][1]);return pn(be[r][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",r,u,mn(u),n)},yn=function(){return[T,W,rt,nt,it,wr,ot,Er,Ir,br,Re,Pr,oe,Pe,b,Oe,Ar,_e,E,Or,at,Rr,_r]};var Rr=function(e){return postMessage(e,[e.buffer])},_r=function(e){return e&&e.size&&new T(e.size)},wn=function(e,t,r,n,i,o){var a=gn(r,n,i,function(s,c){a.terminate(),o(s,c)});return a.postMessage([e,t],t.consume?[e.buffer]:[]),function(){a.terminate()}};var R=function(e,t){return e[t]|e[t+1]<<8},O=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},et=function(e,t){return O(e,t)+O(e,t+4)*4294967296};function Sn(e,t,r){return r||(r=t,t={}),typeof r!="function"&&E(7),wn(e,t,[yn],function(n){return Rr(at(n.data[0],_r(n.data[1])))},1,r)}function at(e,t){return Or(e,t)}var tt=typeof TextDecoder<"u"&&new TextDecoder,Tn=0;try{tt.decode(dn,{stream:!0}),Tn=1}catch{}var xn=function(e){for(var t="",r=0;;){var n=e[r++],i=(n>127)+(n>223)+(n>239);if(r+i>e.length)return[t,_e(e,r-1)];i?i==3?(n=((n&15)<<18|(e[r++]&63)<<12|(e[r++]&63)<<6|e[r++]&63)-65536,t+=String.fromCharCode(55296|n>>10,56320|n&1023)):i&1?t+=String.fromCharCode((n&31)<<6|e[r++]&63):t+=String.fromCharCode((n&15)<<12|(e[r++]&63)<<6|e[r++]&63):t+=String.fromCharCode(n)}};function En(e,t){if(t){for(var r="",n=0;n<e.length;n+=16384)r+=String.fromCharCode.apply(null,e.subarray(n,n+16384));return r}else{if(tt)return tt.decode(e);var i=xn(e),o=i[0],a=i[1];return a.length&&E(8),o}}var Dn=function(e,t){return t+30+R(e,t+26)+R(e,t+28)},In=function(e,t,r){var n=R(e,t+28),i=En(e.subarray(t+46,t+46+n),!(R(e,t+8)&2048)),o=t+46+n,a=O(e,t+20),s=r&&a==4294967295?bn(e,o):[a,O(e,t+24),O(e,t+42)],c=s[0],u=s[1],v=s[2];return[R(e,t+10),c,u,i,o+R(e,t+30)+R(e,t+32),v]},bn=function(e,t){for(;R(e,t)!=1;t+=4+R(e,t+2));return[et(e,t+12),et(e,t+4),et(e,t+20)]};var gr=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Cr(e,t,r){r||(r=t,t={}),typeof r!="function"&&E(7);var n=[],i=function(){for(var y=0;y<n.length;++y)n[y]()},o={},a=function(y,I){gr(function(){r(y,I)})};gr(function(){a=r});for(var s=e.length-22;O(e,s)!=101010256;--s)if(!s||e.length-s>65558)return a(E(13,0,1),null),i;var c=R(e,s+8);if(c){var u=c,v=O(e,s+16),g=v==4294967295||u==65535;if(g){var P=O(e,s-12);g=O(e,P)==101075792,g&&(u=c=O(e,P+32),v=O(e,P+48))}for(var k=t&&t.filter,se=function(y){var I=In(e,v,g),G=I[0],V=I[1],q=I[2],ce=I[3],Z=I[4],le=I[5],w=Dn(e,le);v=Z;var C=function(K,ue){K?(i(),a(K,null)):(ue&&(o[ce]=ue),--c||a(null,o))};if(!k||k({name:ce,size:V,originalSize:q,compression:G}))if(!G)C(null,_e(e,w,w+V));else if(G==8){var we=e.subarray(w,w+V);if(V<32e4)try{C(null,at(we,new T(q)))}catch(K){C(K,null)}else n.push(Sn(we,{size:q},C))}else C(E(14,"unknown compression type "+G,1),null);else C(null,null)},z=0;z<u;++z)se(z)}else a(null,{});return i}var Gr=require("fs"),_=require("fs/promises"),ae=require("path");ne();l();function Lr(e){function t(a,s,c,u){let v=0;return v+=a<<0,v+=s<<8,v+=c<<16,v+=u<<24>>>0,v}if(e[0]===80&&e[1]===75&&e[2]===3&&e[3]===4)return e;if(e[0]!==67||e[1]!==114||e[2]!==50||e[3]!==52)throw new Error("Invalid header: Does not start with Cr24");let r=e[4]===3,n=e[4]===2;if(!n&&!r||e[5]||e[6]||e[7])throw new Error("Unexpected crx format version number.");if(n){let a=t(e[8],e[9],e[10],e[11]),s=t(e[12],e[13],e[14],e[15]),c=16+a+s;return e.subarray(c,e.length)}let o=12+t(e[8],e[9],e[10],e[11]);return e.subarray(o,e.length)}Ue();var An=(0,ae.join)(Ee,"ExtensionCache");async function Pn(e,t){return await(0,_.mkdir)(t,{recursive:!0}),new Promise((r,n)=>{Cr(e,(i,o)=>{if(i)return void n(i);Promise.all(Object.keys(o).map(async a=>{if(a.startsWith("_metadata/"))return;if(a.endsWith("/"))return void(0,_.mkdir)((0,ae.join)(t,a),{recursive:!0});let s=a.split("/"),c=s.pop(),u=s.join("/"),v=(0,ae.join)(t,u);u&&await(0,_.mkdir)(v,{recursive:!0}),await(0,_.writeFile)((0,ae.join)(v,c),o[a])})).then(()=>r()).catch(a=>{(0,_.rm)(t,{recursive:!0,force:!0}),n(a)})})})}async function Vr(e){let t=(0,ae.join)(An,`${e}`);try{await(0,_.access)(t,Gr.constants.F_OK)}catch{let n=e==="fmkadmapgofadopljbjfkapdkoienihi"?"https://raw.githubusercontent.com/Vendicated/random-files/f6f550e4c58ac5f2012095a130406c2ab25b984d/fmkadmapgofadopljbjfkapdkoienihi.zip":`https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&x=id%3D${e}%26uc&prodversion=32`,i=await ee(n,{headers:{"User-Agent":"Vencord (https://github.com/Vendicated/Vencord)"}});await Pn(Lr(i),t).catch(console.error)}kr.session.defaultSession.loadExtension(t)}De||J.app.whenReady().then(()=>{J.protocol.registerFileProtocol("vencord",({url:i},o)=>{let a=i.slice(10);if(a.endsWith("/")&&(a=a.slice(0,-1)),a.startsWith("/themes/")){let s=a.slice(8),c=Xe(U,s);if(!c){o({statusCode:403});return}o(c.replace(/\?v=\d+$/,""));return}switch(a){case"renderer.js.map":case"vencordDesktopRenderer.js.map":case"preload.js.map":case"vencordDesktopPreload.js.map":case"patcher.js.map":case"vencordDesktopMain.js.map":o((0,zr.join)(__dirname,a));break;default:o({statusCode:403})}});try{x.store.enableReactDevtools&&Vr("fmkadmapgofadopljbjfkapdkoienihi").then(()=>console.info("[Vencord] Installed React Developer Tools")).catch(i=>console.error("[Vencord] Failed to install React Developer Tools",i))}catch{}let e=(i,o)=>Object.keys(i).find(a=>a.toLowerCase()===o),t=i=>{let o={};return i.split(";").forEach(a=>{let[s,...c]=a.trim().split(/\s+/g);s&&!Object.prototype.hasOwnProperty.call(o,s)&&(o[s]=c)}),o},r=i=>Object.entries(i).filter(([,o])=>o?.length).map(o=>o.flat().join(" ")).join("; "),n=i=>{let o=e(i,"content-security-policy");if(o){let a=t(i[o][0]);for(let s of["style-src","connect-src","img-src","font-src","media-src","worker-src"])a[s]??=[],a[s].push("*","blob:","data:","vencord:","'unsafe-inline'");a["script-src"]??=[],a["script-src"].push("'unsafe-eval'","https://unpkg.com","https://cdnjs.cloudflare.com"),i[o]=[r(a)]}};J.session.defaultSession.webRequest.onHeadersReceived(({responseHeaders:i,resourceType:o},a)=>{if(i&&(o==="mainFrame"&&n(i),o==="stylesheet")){let s=e(i,"content-type");s&&(i[s]=["text/css"])}a({cancel:!1,responseHeaders:i})}),J.session.defaultSession.webRequest.onHeadersReceived=()=>{}});jr();
//# sourceURL=VencordPatcher
//# sourceMappingURL=vencord://patcher.js.map
/*! For license information please see patcher.js.LEGAL.txt */
