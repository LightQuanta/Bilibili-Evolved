!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["video/player/legacy-auto-play"]=o():e["video/player/legacy-auto-play"]=o()}(globalThis,(()=>(()=>{"use strict";var e={d:(o,t)=>{for(var i in t)e.o(t,i)&&!e.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:t[i]})},o:(e,o)=>Object.prototype.hasOwnProperty.call(e,o)},o={};e.d(o,{component:()=>l});const t=coreApis.componentApis.define,i=coreApis.componentApis.video.playerAgent,a=coreApis.observer,n=coreApis.spinQuery,s=coreApis.utils,c=coreApis.utils.urls,l=(0,t.defineComponentMetadata)({name:"legacyAutoPlay",displayName:"传统连播模式",description:"模拟传统的多 P 连播策略: 仅连播视频的分 P, 最后 1P 放完禁止连播其他推荐视频.",tags:[componentsTags.video],urlInclude:c.videoUrls,entry:async()=>{const e={enable:[":is(.base-video-sections, .base-video-sections-v1) .next-button",":is(.multi-page, .multi-page-v1) .next-button",".player-auxiliary-autoplay-switch input"],disable:[":is(.recommend-list, .recommend-list-v1) .next-button"]},o=[()=>Boolean(dq(":is(.multi-page, .multi-page-v1) .list-box li.on:last-child")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-playing")),()=>Boolean(dq(".video-sections-item:last-child .video-episode-card:last-child .video-episode-card__info-title-playing"))];await(0,s.playerReady)();const t=async()=>{const t=await(0,n.select)([...e.disable,...e.enable].join(","));if(!t)return;var i;(e.enable.some((e=>t.matches(e)))&&o.every((e=>!e())))!==(i=t,Boolean(i.querySelector(".switch-button.on")||i.matches(":checked")))&&t.click()};(0,a.videoChange)((async()=>{t();(await i.playerAgent.query.video.element())?.addEventListener("play",t,{once:!0})}))},commitHash:"97c6184e1c8cd822deeebb18db1bd41279575173",coreVersion:"2.7.2"});return o=o.component})()));