!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/auto-like"]=t():e["utils/auto-like"]=t()}(globalThis,(()=>(()=>{var e,t,o={945:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=945,e.exports=t},185:e=>{"use strict";e.exports="进入视频 / 查看动态时, 自动点赞.\n"}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var s={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>s[e]=()=>o[e]));return s.default=()=>o,r.d(i,s),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>d});const e=coreApis.componentApis.define,t=coreApis.componentApis.feeds.api,o=coreApis.spinQuery,n=coreApis.utils,s=coreApis.utils.urls,a=[],d=(0,e.defineComponentMetadata)({name:"autoLike",displayName:"自动点赞",tags:[componentsTags.utils,componentsTags.feeds,componentsTags.video],urlInclude:[...s.videoAndBangumiUrls,...s.feedsUrls],options:{video:{defaultValue:!0,displayName:"对视频点赞"},feed:{defaultValue:!0,displayName:"对动态点赞"}},entry:async e=>{let{settings:{options:r}}=e;if(r.video&&s.videoAndBangumiUrls.some((e=>(0,n.matchUrlPattern)(e)))){await(0,n.playerReady)();const e=await(0,o.select)(".video-toolbar .like, .tool-bar .like-info, .video-toolbar-v1 .like");if(!e||e.classList.contains("on"))return;e.click()}r.feed&&s.feedsUrls.some((e=>(0,n.matchUrlPattern)(e)))&&(window.setInterval((()=>{if(0===a.length)return;a.shift()?.click()}),1e3),(0,t.forEachFeedsCard)({added:e=>{const t=dq(e.element,".bili-dyn-action.like");t&&!t.classList.contains("active")&&a.push(t)}}))},commitHash:"97c6184e1c8cd822deeebb18db1bd41279575173",coreVersion:"2.7.2",description:(()=>{const e=r(945);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,185,17)).then((e=>e.default))}})()})})(),i=i.component})()));