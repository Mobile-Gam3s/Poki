"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[9285],{3317:(e,t,n)=>{n.d(t,{Z:()=>o});const o={getAdblock:()=>!1}},8218:(e,t,n)=>{n.d(t,{G:()=>Ne,p:()=>Ue});var o={};n.r(o),n.d(o,{checkAutoRedirectEpic:()=>z,checkPrivacyPolicyEpic:()=>J,fetchMysteryGameEpic:()=>F,googleAnalyticsPrivacyEpic:()=>W,sendDeviceCapabilitiesEpic:()=>$,setScrollRestorationToManualEpic:()=>V,setViewportOrientationEpic:()=>M,setVisibilityEpic:()=>H,showUserFeedbackEpic:()=>Q,unregisterServiceWorkersEpics:()=>G});var i={};n.r(i),n.d(i,{loadCMPEpic:()=>oe,startCMPLoadingEpic:()=>ie});var a={};n.r(a),n.d(a,{closeSearchEpic:()=>de,openSearchEpic:()=>se,pagePulseEpic:()=>ce,pageViewEpic:()=>re});var l={};n.r(l),n.d(l,{adLibsNotLoadedEpic:()=>je,destoryAllInGameDisplayAdsEpic:()=>Le,destoryGoogleRewardedWebEpic:()=>qe,destroyAdEpic:()=>Pe,initAdsEpic:()=>Ae,initCCPAPrivacyEpic:()=>Ie,lazyStartMonetizationCoreEpic:()=>Se,processAdEpic:()=>Ce,receivePokiSDKGameCommandsEpic:()=>De,updateAdsOnNavigationEpic:()=>ke});var r={};n.r(r),n.d(r,{getPageDoneEpic:()=>Oe});var c=n(2915),s=n(6515),d=n(7877),u=n(8661),p=n(4848),v=n(5069),f=n(1545),g=n(2401),w=n(9127),m=n(3071),y=n(2965),h=n(4727),_=n(2006),b=n(533),E=n(7782),A=n(4978),S=n(2817),k=n(4975),P=n(378),C=n(6697),I=n(6108),D=n(9635),j=n(9878),L=n(3505),q=n(8813),x=n(8027),O=n(4927),N=n(6151),U=n(111),T=n(8656),B=n(7344),Z=n(8562),R=n(3067),K=n(8490);function M(e){var t;if("function"!=typeof(null===(t=window)||void 0===t?void 0:t.matchMedia))return f.E;const n=window.matchMedia("(orientation: portrait)"),o=(0,g.R)(window,"orientationchange").pipe((0,w.U)((()=>n.matches))),i=e.pipe((0,v.l)(q.Qi.type));return(0,m.T)(i,o).pipe((0,y.b)(100),(0,w.U)((()=>(0,q.It)({orientation:n.matches?"portrait":"landscape"}))))}function V(e){return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,_.b)((()=>{window.history.scrollRestoration="manual"})),(0,b.l)())}function H(e){return(0,m.T)(e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1)),(0,g.R)(document,"visibilitychange")).pipe((0,w.U)((()=>(0,q.iJ)({visibility:!document.visibilityState||"visible"===document.visibilityState}))))}function J(e,t){return f.E}function z(e,t){var n,o,i;if("undefined"==typeof window||null===(n=window)||void 0===n||null===(o=n.location)||void 0===o||null===(i=o.hash)||void 0===i||!i.includes("#utm_source=redirect")||(0,B.N0)(t.value)===K.n.APP)return f.E;const a=()=>(0,N.Zv)(t.value),l=e.pipe((0,v.l)(q.dY.type),(0,k.h)((()=>a())));return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,P.j)((()=>a()?(0,S.of)(void 0):l)),(0,_.b)((()=>{var e,n,o;let i,a;const l=window.location.hash.replace("#utm_source=redirect-","")||"";window.location.hash="",5===l.length&&([i,a]=l.split("-"));const r=(0,T.Ao)(t.value),c=r.find((e=>{var t;return(null==e||null===(t=e.href)||void 0===t?void 0:t.includes("poki.com/"))&&(null==e?void 0:e.lang)===i})),s=r.find((e=>{var t;return(null==e||null===(t=e.href)||void 0===t?void 0:t.includes("poki.com/"))&&(null==e?void 0:e.lang)===a}));if(!c||!s)return f.E;const d=(0,p.sY)(u.default.createElement("img",{src:"https://a.poki.com/images/icon-world-v2.svg",alt:"",style:{width:"22px"}})),v=(0,U.B)(t.value),g=`${d} ${v.auto_redirect_title.replace("[language]",s.languageName)}`,w=v.auto_redirect_message.replace("[language]",c.languageName),m=null===(e=v.auto_redirect_button)||void 0===e?void 0:e.replace("[language]",c.languageName);(0,R.A)({category:"page",action:"autoRedirectImpression",data:{from:c.languageName,to:s.languageName}}),null===(n=window)||void 0===n||null===(o=n.store)||void 0===o||o.dispatch((0,x.sc)({notification:{title:g,childComponent:{name:"AutoRedirectNotification",props:{message:w,button:m,href:null==c?void 0:c.href,lang:null==c?void 0:c.lang}},autoExpire:1e4}}))})))}function G(e){return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,_.b)((()=>{var e,t;null===(e=navigator)||void 0===e||null===(t=e.serviceWorker)||void 0===t||t.getRegistrations().then((e=>{e.forEach((e=>{console.info("Poki: unregistering ServiceWorker",e),e.unregister()}))}))})),(0,b.l)())}function W(e,t){return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,_.b)((()=>{const e=(0,T.uJ)(t.value),n=`https://${(0,B.lH)(t.value).domain}${e}`;console.info(`%cGoogle Analytics is blocked by Poki, refer to our privacy statement (${n})`,"background:rgb(0, 156, 255);color:#fff")})),(0,b.l)())}function $(e,t){if("undefined"==typeof window)return f.E;const o=(0,Z.J1)(t.value),i=(0,N.jL)(t.value);return!o||i>.5?f.E:e.pipe((0,v.l)(O.o.type),(0,h.q)(1),(0,E.g)(6e4),(0,_.b)((()=>{n.e(9101).then(n.bind(n,9101)).then((e=>{let{default:t}=e;t()}))})),(0,b.l)())}function F(e,t){var n,o,i;const a=(0,N.Zn)(t.value);if(["GB","NL"].includes(a))return f.E;if((0,N.eD)(t.value))return f.E;if((0,Z.IF)(t.value)||(0,N.At)(t.value)||"4g"!==(null===(n=navigator)||void 0===n||null===(o=n.connection)||void 0===o?void 0:o.effectiveType)||(null===(i=navigator)||void 0===i?void 0:i.hardwareConcurrency)<8)return f.E;const l=document.createElement("canvas").getContext("webgl2",{failIfMajorPerformanceCaveat:!0});if(!l)return f.E;if(l.getParameter(l.MAX_RENDERBUFFER_SIZE)<16384)return f.E;const r=(0,C.F)(3e5).pipe((0,I.O)(0)),c=e.pipe((0,v.l)(q.oo.type),(0,h.q)(1));return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,A.w)((()=>r.pipe((0,d.z)((()=>(0,D.D)(fetch("https://mystery-game-tile.poki.io/v0/mystery-game")))),(0,d.z)((e=>(0,D.D)(e.json()))),(0,A.w)((t=>e.pipe((0,v.l)("@@router/LOCATION_CHANGE"),(0,h.q)(1),(0,A.w)((()=>(0,D.D)([(0,q.LO)({game:t})])))))),(0,j.K)((()=>f.E)),(0,L.R)(c)))))}function Q(e,t){if("undefined"==typeof window)return f.E;const n=(0,N.jL)(t.value),o=(0,N.Hl)(t.value),i=(0,N.Zn)(t.value),a=(0,B.lH)(t.value),l=n<.05,r=["AU","CA","GB","IE","NZ","US"].includes(i),c=3===a.id;if(r&&c&&!o&&(0,R.A)({category:"pps",action:"trigger"}),o||!l||!r||!c)return f.E;const s="user-satisfaction",u=e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,E.g)(36e4)),p=e.pipe((0,v.l)(O.o.type),(0,k.h)((()=>"game"!==(0,T.Wj)(t.value))),(0,h.q)(1));return u.pipe((0,P.j)((()=>p)),(0,d.z)((()=>(0,S.of)((0,x.sc)({notification:{id:s,title:"Would you recommend Poki to your friends?",childComponent:{name:"UserSatisfaction",props:{notificationID:s}}}}),(0,q.GH)()))))}var X=n(230),Y=n(6712),ee=n(8132),te=n(9263);const ne="https://cmp.inmobi.com/choice/E_PXTAq4C0D1u/poki.com/choice.js?tag_version=V3";function oe(e,t){return"undefined"==typeof window?f.E:e.pipe((0,v.l)(q.Iy.type),(0,k.h)((()=>"content"!==(0,T.Wj)(t.value))),(0,h.q)(1),(0,d.z)((()=>new X.y((e=>{var o,i;const a=(0,N.tl)(t.value);if(!(0,N.nE)(t.value)&&!a)return;const l=document.createElement("script"),r=document.getElementsByTagName("script")[0];let c=0;l.async=!0,l.type="text/javascript",l.src=ne,l.onerror=()=>{(0,R.A)({category:"consent",action:"bootError"})},r.parentNode.insertBefore(l,r),function(){const e="__tcfapiLocator",t=[];let n,o=window;for(;o;){try{if(o.frames[e]){n=o;break}}catch(e){}if(o===window.top)break;o=o.parent}n||(!function t(){const n=o.document,i=!!o.frames[e];if(!i)if(n.body){const t=n.createElement("iframe");t.style.cssText="display:none",t.name=e,n.body.appendChild(t)}else setTimeout(t,5);return!i}(),o.__tcfapi=function(){let e;const n=arguments;if(!n.length)return t;if("setGdprApplies"===n[0])n.length>3&&2===n[2]&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0));else if("ping"===n[0]){const t={gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"};"function"==typeof n[2]&&n[2](t)}else"init"===n[0]&&"object"==typeof n[3]&&(n[3]=Object.assign(n[3],{tag_version:"V2"})),t.push(n)},o.addEventListener("message",(function(e){const t="string"==typeof e.data;let n={};try{n=t?JSON.parse(e.data):e.data}catch(e){}const o=n.__tcfapiCall;o&&window.__tcfapi(o.command,o.version,((n,i)=>{let a={__tcfapiReturn:{returnValue:n,success:i,callId:o.callId}};t&&(a=JSON.stringify(a)),e&&e.source&&e.source.postMessage&&e.source.postMessage(a,"*")}),o.parameter)}),!1))}();const s=()=>{const e=arguments;typeof window.__uspapi!==s&&setTimeout((()=>{void 0!==window.__uspapi&&window.__uspapi.apply(window.__uspapi,e)}),500)};let d;const u=()=>{c++,window.__uspapi===s&&c<3?console.error("USP is not accessible"):clearInterval(d)};void 0===window.__uspapi&&(window.__uspapi=s,d=setInterval(u,6e3));let p=!1;window.__tcfapi("addEventListener",2,((e,o)=>{if((0,R.A)({category:"consent",action:e.eventStatus}),o&&"cmpuishown"===e.eventStatus){const e=(0,T.uJ)(t.value),o=(0,T.vJ)(t.value),i=(0,T.Tm)(t.value),a=(0,U.B)(t.value);n.e(2857).then(n.bind(n,2857)).then((e=>{const t=document.createElement("style");t.innerHTML=e.default.toString(),document.head.appendChild(t)})),function(e){let{privacyUrl:t,cookieStatementUrl:n,termsOfUseUrl:o,localisations:i}=e;const a=`\n\t\t<div class="poki-qc-cmp2-footer-links">\n\t\t\t${[{label:i.privacy_statement,url:t},{label:i.cookie_statement,url:n},{label:i.nav_terms_of_use,url:o}].map((e=>{const t=document.createElement("a");return t.setAttribute("href",e.url),t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer"),t.innerText=e.label,t})).map((e=>e.outerHTML)).join(" &#x2022; ")}\n\t\t</div>\n\t`;(0,te.Z)("#qc-cmp2-ui").then((e=>{e.insertAdjacentHTML("beforeend",a)}))}({privacyUrl:e,cookieStatementUrl:o,termsOfUseUrl:i,localisations:a})}if(o&&("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus)){if(p&&!a){var i,l;let t=!1;null!=e&&null!==(i=e.purpose)&&void 0!==i&&null!==(l=i.consents)&&void 0!==l&&l[1]&&(t=!0);try{window.localStorage.setItem("localStorageConsentSet",t)}catch(e){}window.localStorageConsentSet=t,window.location.reload()}p=!0}})),window.__tcfapi("addEventListener",2,((t,n)=>{if((0,R.A)({category:"consent",action:t.eventStatus}),a&&"function"==typeof window.__uspapi&&window.__uspapi("getUSPData",1,((t,n)=>{if(n){const{uspString:n}=t;e.next((0,q.X1)({usPrivacyString:n}))}})),n&&("tcloaded"===t.eventStatus||"useractioncomplete"===t.eventStatus)){var o,i;null!=t&&null!==(o=t.purpose)&&void 0!==o&&null!==(i=o.consents)&&void 0!==i&&i[1]?(window.localStorageConsentSet=!0,(0,ee.Xq)(),(0,R.A)({category:"consent",action:"full"}),e.next((0,q.dY)({consentStatus:Y.El}))):(window.localStorageConsentSet=!1,(0,R.A)({category:"consent",action:"no"}),e.next((0,q.dY)({consentStatus:Y.mo})));try{window.localStorage.setItem("localStorageConsentSet",window.localStorageConsentSet)}catch(e){}window.__tcfapi("getNonIABVendorConsents",2,((e,t)=>{if(!t||!e)return;const{nonIabVendorConsents:n}=e;n&&(0,R.A)({category:"consent",action:"noniab",data:{nonIABConsents:n}})})),window.__tcfapi("removeEventListener",2,(()=>{}),t.listenerId)}})),null===(o=window.tracker)||void 0===o||null===(i=o.installTCFHandler)||void 0===i||i.call(o)})))))}function ie(e,t){if("undefined"==typeof window)return f.E;return(0,Z.XN)(t.value)?e.pipe((0,v.l)(q.Qi.type,O.o.type),(0,h.q)(1),(0,w.U)((()=>(0,q.Iy)()))):f.E}var ae=n(7627),le=n(6924);function re(e){let t=0;return e.pipe((0,v.l)(O.o.type),(0,_.b)((e=>{let{path:n,pageType:o,pageID:i}=e;t>0&&(window.updateSession(n,o,i),(0,R.A)({category:"pageview",options:{interaction:!0}})),t++})),(0,b.l)())}function ce(e){return e.pipe((0,v.l)(q.Qi.type,O.o.type),(0,A.w)((()=>(0,C.F)(3e4))),(0,_.b)((()=>{(0,R.A)({category:"page",action:"pulse"})})),(0,b.l)())}function se(e,t){return e.pipe((0,v.l)(ae.UL.type),(0,_.b)((()=>{const e=(0,le.ZM)(t.value),n=(0,T.Wj)(t.value);(0,R.A)({category:"searchPanel",action:"open",label:n,data:{searchSessionId:e},options:{interaction:!0}})})),(0,b.l)())}function de(e,t){return e.pipe((0,v.l)(ae.hF.type),(0,_.b)((()=>{const e=(0,le.ZM)(t.value),n=(0,T.Wj)(t.value);(0,R.A)({category:"searchPanel",action:"close",label:n,data:{searchSessionId:e},options:{interaction:!0}})})),(0,b.l)())}var ue=n(400),pe=n(4862),ve=n(905),fe=n(7250),ge=n(9317),we=n(6084),me=n(8855),ye=n(132),he=n(8092),_e=n(3171);const be=e=>{const t=(0,ge.sY)(e),n=(0,N.tl)(e),o=(0,ge.KB)(e),i=(0,Z.IF)(e),a=(0,N.Zn)(e);return{bot:"true"===window.pokiBotVerified,experiment:t.experiment,isPokiIframe:!1,siteID:t.site_id,tag:t.tag,ccpaApplies:n,country:a,runningOnPlayground:!0,nonPersonalized:!o,familyFriendly:i,cookieDepL:t.cookieDepL}},Ee=e=>{const t=(0,T.J1)(e),n=(0,N.z7)(e),o=(0,T.ex)(e);let i="";n?i="landing":o&&(i="crosspromo");const a=(0,ge.eS)(e);return{categories:((null==t?void 0:t.categories)||[]).map((e=>{let{id:t}=e;return t})),iabcat:a,gameID:t?t.pokifordevs_game_id:"",contentGameID:null==t?void 0:t.id,specialCondition:i}};function Ae(e,t){return e.pipe((0,v.l)(q.Qi.type,O.o.type),(0,k.h)((()=>["game","preview"].includes((0,T.Wj)(t.value)))),(0,h.q)(1),(0,d.z)((()=>new X.y((e=>{const n=(0,fe.L)(t.value);window.pbjs.que.push((()=>{window.pbjs.addAdUnits(n.adUnits)}));const o=t=>{console.error(t),e.next((0,pe.xZ)()),e.complete()},i=(0,N.eD)(t.value),a=(0,ge.KB)(t.value),l=(0,Z.IF)(t.value);(window.adBridge=!0,window.pokiSDKVersion=(0,we.R)(t.value),Promise.all([(0,ye.v)("https://game-cdn.poki.com/scripts/v2/poki-sdk.js")])).then((()=>{var r,c,s;(0,he.$8)(),null===(r=window)||void 0===r||null===(c=r.PokiSDK)||void 0===c||null===(s=c.init)||void 0===s||s.call(c,{wrapper:(0,he.AF)(i),prebid:{config:n.config},a9Signals:{ortb2:(0,ge.Jv)(t.value)},startupParams:{...be(t.value),...Ee(t.value)},strictConsentMode:!0,nonPersonalized:!a,familyFriendly:l,onAdblocked:o}).then((()=>{(0,_e.J)((0,ge.Jv)(t.value)),e.next((0,pe.xZ)()),e.complete()})).catch(o)}))})))))}function Se(e,t){return e.pipe((0,v.l)(pe.xZ.type,q.dY.type,ve.Gq.type),(0,k.h)((()=>(0,ge.y0)(t.value))),(0,h.q)(1),(0,d.z)((()=>new X.y((e=>{var t,n,o,i;null===(t=window)||void 0===t||null===(n=t.PokiSDK)||void 0===n||null===(o=n.startLoadingMonetizationCore)||void 0===o||null===(i=o.call(n))||void 0===i||i.then((()=>{e.next((0,pe.qs)()),e.complete()})).catch((t=>{let n;try{n=JSON.stringify(t)}catch(t){}window.api.getAdblock=()=>!0,e.next((0,pe.Ux)()),(0,R.A)("ads","adblocked",{playground:`${t.message||t}`,sdk:`${n}`}),e.next((0,pe.qs)())}))})))))}function ke(e,t){const n=e.pipe((0,v.l)(pe.xZ.type));return e.pipe((0,v.l)(O.o.type),(0,P.j)((()=>(0,ge.XZ)(t.value)?(0,S.of)(void 0):n)),(0,k.h)((()=>["game","preview"].includes((0,T.Wj)(t.value)))),(0,_.b)((()=>{var e,n,o;null===(e=window)||void 0===e||null===(n=e.PokiSDK)||void 0===n||null===(o=n.setRuntimeInformation)||void 0===o||o.call(n,Ee(t.value)),(0,_e.J)((0,ge.Jv)(t.value))})),(0,b.l)())}function Pe(e,t){const n=e.pipe((0,v.l)(pe.xZ.type));return e.pipe((0,v.l)(pe.VJ.type),(0,P.j)((()=>(0,ge.XZ)(t.value)?(0,S.of)(void 0):n)),(0,_.b)((e=>{var n,o,i;let{code:a}=e;if(!(0,fe.O)(t.value).find((e=>{let{code:t}=e;return t===a})))return void console.error("Investigate AdStack ad was undefined on destroyAdSlot");const l=document.getElementById(a);l?null===(n=window)||void 0===n||null===(o=n.PokiSDK)||void 0===o||null===(i=o.destroyAd)||void 0===i||i.call(o,l):console.error("Investigate AdStack adContainer was undefined on destroyAdSlot (React unloaded?)")})),(0,b.l)())}function Ce(e,t){const n=e.pipe((0,v.l)(pe.qs.type));return e.pipe((0,v.l)(pe.Cq.type,pe.SB.type),(0,P.j)((()=>(0,ge.HO)(t.value)?(0,S.of)(void 0):n)),(0,k.h)((()=>["game","preview"].includes((0,T.Wj)(t.value)))),(0,k.h)((()=>!(0,ge.xU)(t.value))),(0,_.b)((e=>{var n,o,i;let{code:a,refreshType:l}=e;const r=(0,fe.O)(t.value).find((e=>{let{code:t}=e;return t===a}));if(!r)return void console.error("Investigate AdStack ad was undefined on display/refresh");const c=document.getElementById(a);if(!c)return void console.warn("Investigate AdStack adContainer was undefined on display/refresh",c,r,a);const s={...(0,ge.sY)(t.value),...(0,N.tl)(t.value)?{us_privacy:(0,N.yu)(t.value)}:{},refreshType:l},d=document.getElementById("game-element");if(d){const e=d.getBoundingClientRect();s.player_size=e.width}const u=ue.Z.mobile.mobile_gamebar_320x50(t.value);var p,v,f;if(a===(null==u?void 0:u.code))return s["game-id"]="",void(null===(p=window)||void 0===p||null===(v=p.PokiSDK)||void 0===v||null===(f=v.playgroundPlatformAd)||void 0===f||f.call(v,c,r.code,`${r.width}x${r.height}`,s,!0));s.p4d_game_id="",s.p4d_game_id_cond="",null===(n=window)||void 0===n||null===(o=n.PokiSDK)||void 0===o||null===(i=o.playgroundPlatformAd)||void 0===i||i.call(o,c,r.code,`${r.width}x${r.height}`,s)})),(0,b.l)())}function Ie(e,t){return e.pipe((0,v.l)(q.Qi.type),(0,h.q)(1),(0,_.b)((()=>{(0,N.tl)(t.value)&&window.addEventListener("message",(e=>{const t=e&&e.data&&e.data.__uspapiCall;t&&window.__uspapi&&window.__uspapi(t.command,t.version,((n,o)=>{e.source.postMessage({__uspapiReturn:{returnValue:n,success:o,callId:t.callId}},"*")}))}),!1)})),(0,b.l)())}function De(e,t){const n=e.pipe((0,v.l)(pe.xZ.type)),o=(0,N.eD)(t.value);return e.pipe((0,v.l)(ve.iq.type),(0,P.j)((()=>(0,ge.XZ)(t.value)?(0,S.of)(void 0):n)),(0,k.h)((()=>["game","preview"].includes((0,T.Wj)(t.value)))),(0,_.b)((e=>{var n,i,a,l,r,c,s,d,u,p,v,f;let{event:g,data:w,source:m}=e;const y=(0,N.eD)(t.value),h=(0,N.$9)(t.value),_=(0,me.Eo)(t.value);switch(g){case"adTiming":(0,he.eJ)({...w,isAdBlocked:(0,ge.N9)(t.value)},m);break;case"forcePreroll":null===(n=window)||void 0===n||null===(i=n.PokiSDK)||void 0===i||null===(a=i.forcePreroll)||void 0===a||a.call(i);break;case"startStartAdsAfterTimer":null===(l=window)||void 0===l||null===(r=l.PokiSDK)||void 0===r||null===(c=r.startStartAdsAfterTimer)||void 0===c||c.call(r);break;case"muteAd":null===(s=window)||void 0===s||null===(d=s.PokiSDK)||void 0===d||null===(u=d.muteAd)||void 0===u||u.call(d);break;case"setVolume":null===(p=window)||void 0===p||null===(v=p.PokiSDK)||void 0===v||null===(f=v.setVolume)||void 0===f||f.call(v,w.volume);break;case"requestVideoAd":(0,he.u9)(w,m);break;case"destroyAd":(0,he.eX)(w,m);break;case"displayAd":y&&"landscape"===h||!y&&_?(0,he.rR)(w,o,m):(0,he.eX)(w,m)}})),(0,b.l)())}function je(e,t){return e.pipe((0,v.l)(ve.iq.type),(0,k.h)((()=>["game","preview"].includes((0,T.Wj)(t.value)))),(0,k.h)((e=>{let{event:t}=e;return"adLibrariesNotLoaded"===t})),(0,w.U)((()=>(0,q.Bl)({isVisible:!0}))))}function Le(e,t){const n=e.pipe((0,v.l)(pe.qs.type));return e.pipe((0,v.l)(O.o.type),(0,P.j)((()=>(0,ge.HO)(t.value)?(0,S.of)(void 0):n)),(0,_.b)((()=>{var e,t,n;null===(e=window)||void 0===e||null===(t=e.PokiSDK)||void 0===t||null===(n=t.stopVideoAd)||void 0===n||n.call(t),(0,he.aH)()})),(0,b.l)())}function qe(e,t){const n=e.pipe((0,v.l)(pe.qs.type));return e.pipe((0,v.l)("@@router/LOCATION_CHANGE"),(0,P.j)((()=>(0,ge.HO)(t.value)?(0,S.of)(void 0):n)),(0,k.h)((()=>window.location.toString().includes("#fullscreen"))),(0,_.b)((()=>{var e,t,n;null===(e=window)||void 0===e||null===(t=e.PokiSDK)||void 0===t||null===(n=t.stopVideoAd)||void 0===n||n.call(t)})),(0,b.l)())}var xe=n(6619);function Oe(e){return e.pipe((0,v.l)(O.o.type),(0,_.b)((()=>{(0,xe.k)()})),(0,b.l)())}const Ne=new s.X((0,c.l)(...Object.values(o),...Object.values(i),...Object.values(a),...Object.values(l),...Object.values(r))),Ue=(e,t,n)=>Ne.pipe((0,d.z)((o=>o(e,t,n))))},394:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(4852);let i;const a=()=>(i=i||(0,o.lX)(),i)}}]);