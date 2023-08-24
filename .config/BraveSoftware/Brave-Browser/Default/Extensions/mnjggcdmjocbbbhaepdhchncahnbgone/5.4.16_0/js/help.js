(()=>{"use strict";var e={7741:function(e,o){var t=this&&this.__awaiter||function(e,o,t,i){return new(t||(t=Promise))((function(n,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(s,a)}c((i=i.apply(e,o||[])).next())}))};function i(e){return null==e?"":" "==e?"Space":1==e.length?e.toUpperCase():e}Object.defineProperty(o,"__esModule",{value:!0}),o.keybindToString=o.formatKey=o.keybindEquals=o.isSafari=o.ProtoConfig=void 0,o.ProtoConfig=class{constructor(e,o,t){this.configLocalListeners=[],this.configSyncListeners=[],this.cachedSyncConfig=null,this.cachedLocalStorage=null,this.config=null,this.local=null,this.syncDefaults=e,this.localDefaults=o,this.setupConfig(t).then((e=>{this.config=null==e?void 0:e.sync,this.local=null==e?void 0:e.local}))}configProxy(){chrome.storage.onChanged.addListener(((e,o)=>{if("sync"===o){for(const o in e)this.cachedSyncConfig[o]=e[o].newValue;for(const o of this.configSyncListeners)o(e)}else if("local"===o){for(const o in e)this.cachedLocalStorage[o]=e[o].newValue;for(const o of this.configLocalListeners)o(e)}}));const e=this,o={set:(o,t,i)=>(e.cachedSyncConfig[t]=i,chrome.storage.sync.set({[t]:i}),!0),get(o,t){const i=e.cachedSyncConfig[t];return o[t]||i},deleteProperty:(e,o)=>(chrome.storage.sync.remove(o),!0)},t={set:(o,t,i)=>(e.cachedLocalStorage[t]=i,chrome.storage.local.set({[t]:i}),!0),get(o,t){const i=e.cachedLocalStorage[t];return o[t]||i},deleteProperty:(e,o)=>(chrome.storage.local.remove(o),!0)};return{sync:new Proxy({handler:o},o),local:new Proxy({handler:t},t)}}forceSyncUpdate(e){const o=this.cachedSyncConfig[e];if("unsubmittedSegments"===e&&JSON.stringify(o).length+e.length>8e3)for(const e in o)(!o[e]||o[e].length<=0)&&delete o[e];chrome.storage.sync.set({[e]:o})}forceLocalUpdate(e){chrome.storage.local.set({[e]:this.cachedLocalStorage[e]})}fetchConfig(){return t(this,void 0,void 0,(function*(){yield Promise.all([new Promise((e=>{chrome.storage.sync.get(null,(o=>{this.cachedSyncConfig=o,e()}))})),new Promise((e=>{chrome.storage.local.get(null,(o=>{this.cachedLocalStorage=o,e()}))}))])}))}setupConfig(e){return t(this,void 0,void 0,(function*(){if("undefined"==typeof chrome)return null;yield this.fetchConfig(),this.addDefaults();const o=this.configProxy();return e(o.sync),o}))}addDefaults(){for(const e in this.syncDefaults)if(Object.prototype.hasOwnProperty.call(this.cachedSyncConfig,e)){if("barTypes"===e)for(const o in this.syncDefaults[e])Object.prototype.hasOwnProperty.call(this.cachedSyncConfig[e],o)||(this.cachedSyncConfig[e][o]=this.syncDefaults[e][o])}else this.cachedSyncConfig[e]=this.syncDefaults[e];for(const e in this.localDefaults)Object.prototype.hasOwnProperty.call(this.cachedLocalStorage,e)||(this.cachedLocalStorage[e]=this.localDefaults[e])}isReady(){return null!==this.config}},o.isSafari=function(){return"undefined"!=typeof navigator&&"Apple Computer, Inc."===navigator.vendor},o.keybindEquals=function(e,o){return!(null==e||null==o||Boolean(e.alt)!=Boolean(o.alt)||Boolean(e.ctrl)!=Boolean(o.ctrl)||Boolean(e.shift)!=Boolean(o.shift)||null==e.key&&null==e.code||null==o.key&&null==o.code)&&(null!=e.code&&null!=o.code?e.code===o.code:null!=e.key&&null!=o.key&&e.key.toUpperCase()===o.key.toUpperCase())},o.formatKey=i,o.keybindToString=function(e){if(null==e||null==e.key)return"";let o="";return e.ctrl&&(o+="Ctrl+"),e.alt&&(o+="Alt+"),e.shift&&(o+="Shift+"),o+i(e.key)}},8362:function(e,o){var t=this&&this.__awaiter||function(e,o,t,i){return new(t||(t=Promise))((function(n,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(s,a)}c((i=i.apply(e,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0}),o.isFirefoxOrSafari=o.timeoutPomise=o.PromiseTimeoutError=o.objectToURI=o.waitFor=void 0,o.waitFor=function(e,o=5e3,i=100,n){return t(this,void 0,void 0,(function*(){return yield new Promise(((t,r)=>{setTimeout((()=>{clearInterval(a),r("TIMEOUT")}),o);const s=()=>{const o=e();(n?n(o):o)&&(t(o),clearInterval(a))},a=setInterval(s,i);s()}))}))},o.objectToURI=function(e,o,t){let i=0;for(const n in o){const r=e.includes("?")||i>0?"&":t?"?":"",s="string"==typeof o[n]?o[n]:JSON.stringify(o[n]);e+=r+encodeURIComponent(n)+"="+encodeURIComponent(s),i++}return e};class i extends Error{constructor(e){super("Promise timed out"),this.promise=e}}o.PromiseTimeoutError=i,o.timeoutPomise=function(e){return new Promise(((o,t)=>{e&&setTimeout((()=>{t(new i)}),e)}))},o.isFirefoxOrSafari=function(){return"undefined"!=typeof browser}},9019:(e,o)=>{function t(e){const o=e.replace(/__MSG_(\w+)__/g,(function(e,o){return o?chrome.i18n.getMessage(o).replace(/</g,"&#60;").replace(/"/g,"&quot;").replace(/\n/g,"<br/>"):""}));return o!=e&&o}Object.defineProperty(o,"__esModule",{value:!0}),o.getLocalizedMessage=o.localizeHtmlPage=o.generateUserID=void 0,o.generateUserID=function(e=36){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let t="";const i="undefined"==typeof window?crypto:window.crypto;if(i&&i.getRandomValues){const n=new Uint32Array(e);i.getRandomValues(n);for(let i=0;i<e;i++)t+=o[n[i]%o.length];return t}for(let i=0;i<e;i++)t+=o[Math.floor(Math.random()*o.length)];return t},o.localizeHtmlPage=function(){const e=t(document.title);e&&(document.title=e);const o=document.querySelector(".sponsorBlockPageBody"),i=t(o.innerHTML.toString());i&&(o.innerHTML=i)},o.getLocalizedMessage=t},7542:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0});const i=t(1181),n=t(2938),r=t(7683),s=t(7741);class a extends s.ProtoConfig{resetToDefault(){chrome.storage.sync.set(Object.assign(Object.assign({},this.syncDefaults),{userID:this.config.userID,minutesSaved:this.config.minutesSaved,skipCount:this.config.skipCount,sponsorTimesContributed:this.config.sponsorTimesContributed}))}}const c=new a({userID:null,isVip:!1,permissions:{},unsubmittedSegments:{},defaultCategory:"chooseACategory",renderSegmentsAsChapters:!1,whitelistedChannels:[],forceChannelCheck:!1,minutesSaved:0,skipCount:0,sponsorTimesContributed:0,submissionCountSinceCategories:0,showTimeWithSkips:!0,disableSkipping:!1,muteSegments:!0,fullVideoSegments:!0,fullVideoLabelsOnThumbnails:!0,manualSkipOnFullVideo:!1,trackViewCount:!0,trackViewCountInPrivate:!0,trackDownvotes:!0,dontShowNotice:!1,noticeVisibilityMode:r.NoticeVisbilityMode.FadedForAutoSkip,hideVideoPlayerControls:!1,hideInfoButtonPlayerControls:!1,hideDeleteButtonPlayerControls:!1,hideUploadButtonPlayerControls:!1,hideSkipButtonPlayerControls:!1,hideDiscordLaunches:0,hideDiscordLink:!1,invidiousInstances:["invidious.snopyta.org"],supportInvidious:!1,serverAddress:i.serverAddress,minDuration:0,skipNoticeDuration:4,audioNotificationOnSkip:!1,checkForUnlistedVideos:!1,testingServer:!1,refetchWhenNotFound:!0,ytInfoPermissionGranted:!1,allowExpirements:!0,showDonationLink:!0,showPopupDonationCount:0,showUpsells:!0,showNewFeaturePopups:!0,donateClicked:0,autoHideInfoButton:!0,autoSkipOnMusicVideos:!1,scrollToEditTimeUpdate:!1,categoryPillUpdate:!1,showChapterInfoMessage:!0,darkMode:!0,showCategoryGuidelines:!0,showCategoryWithoutPermission:!1,showSegmentNameInChapterBar:!0,useVirtualTime:!0,showSegmentFailedToFetchWarning:!0,allowScrollingToEdit:!0,deArrowInstalled:!1,showDeArrowPromotion:!0,showZoomToFillError2:!0,categoryPillColors:{},skipKeybind:{key:"Enter"},startSponsorKeybind:{key:";"},submitKeybind:{key:"'"},nextChapterKeybind:{key:"ArrowRight",ctrl:!0},previousChapterKeybind:{key:"ArrowLeft",ctrl:!0},categorySelections:[{name:"sponsor",option:r.CategorySkipOption.AutoSkip},{name:"poi_highlight",option:r.CategorySkipOption.ManualSkip},{name:"exclusive_access",option:r.CategorySkipOption.ShowOverlay},{name:"chapter",option:r.CategorySkipOption.ShowOverlay}],payments:{licenseKey:null,lastCheck:0,lastFreeCheck:0,freeAccess:!1,chaptersAllowed:!1},colorPalette:{red:"#780303",white:"#ffffff",locked:"#ffc83d"},barTypes:{"preview-chooseACategory":{color:"#ffffff",opacity:"0.7"},sponsor:{color:"#00d400",opacity:"0.7"},"preview-sponsor":{color:"#007800",opacity:"0.7"},selfpromo:{color:"#ffff00",opacity:"0.7"},"preview-selfpromo":{color:"#bfbf35",opacity:"0.7"},exclusive_access:{color:"#008a5c",opacity:"0.7"},interaction:{color:"#cc00ff",opacity:"0.7"},"preview-interaction":{color:"#6c0087",opacity:"0.7"},intro:{color:"#00ffff",opacity:"0.7"},"preview-intro":{color:"#008080",opacity:"0.7"},outro:{color:"#0202ed",opacity:"0.7"},"preview-outro":{color:"#000070",opacity:"0.7"},preview:{color:"#008fd6",opacity:"0.7"},"preview-preview":{color:"#005799",opacity:"0.7"},music_offtopic:{color:"#ff9900",opacity:"0.7"},"preview-music_offtopic":{color:"#a6634a",opacity:"0.7"},poi_highlight:{color:"#ff1684",opacity:"0.7"},"preview-poi_highlight":{color:"#9b044c",opacity:"0.7"},filler:{color:"#7300FF",opacity:"0.9"},"preview-filler":{color:"#2E0066",opacity:"0.7"}}},{downvotedSegments:{},navigationApiAvailable:null},(function(e){if(e.showZoomToFillError&&chrome.storage.sync.remove("showZoomToFillError"),e.chapterCategoryAdded||(e.chapterCategoryAdded=!0,e.categorySelections.some((e=>"chapter"===e.name))||(e.categorySelections.push({name:"chapter",option:r.CategorySkipOption.ShowOverlay}),e.categorySelections=e.categorySelections)),e.segmentTimes){const o={};for(const t of e.segmentTimes)o[t[0]]=t[1];chrome.storage.sync.remove("segmentTimes",(()=>e.unsubmittedSegments=o))}if(void 0!==e.exclusive_accessCategoryAdded&&chrome.storage.sync.remove("exclusive_accessCategoryAdded"),void 0!==e.fillerUpdate&&chrome.storage.sync.remove("fillerUpdate"),void 0!==e.highlightCategoryAdded&&chrome.storage.sync.remove("highlightCategoryAdded"),void 0!==e.highlightCategoryUpdate&&chrome.storage.sync.remove("highlightCategoryUpdate"),e.askAboutUnlistedVideos&&chrome.storage.sync.remove("askAboutUnlistedVideos"),!e.autoSkipOnMusicVideosUpdate){e.autoSkipOnMusicVideosUpdate=!0;for(const o of e.categorySelections)if("music_offtopic"===o.name&&o.option===r.CategorySkipOption.AutoSkip){e.autoSkipOnMusicVideos=!0;break}}if(e.disableAutoSkip)for(const o of e.categorySelections)"sponsor"===o.name&&(o.option=r.CategorySkipOption.ManualSkip,chrome.storage.sync.remove("disableAutoSkip"));"string"==typeof e.skipKeybind&&(e.skipKeybind={key:e.skipKeybind}),"string"==typeof e.startSponsorKeybind&&(e.startSponsorKeybind={key:e.startSponsorKeybind}),"string"==typeof e.submitKeybind&&(e.submitKeybind={key:e.submitKeybind});const o=["skipKeybind","startSponsorKeybind","submitKeybind"];for(let t=o.length-1;t>=0;t--)for(let i=0;i<o.length;i++)t!=i&&(0,s.keybindEquals)(e[o[t]],e[o[i]])&&(e[o[t]]=null);void 0!==e.sponsorVideoID&&chrome.storage.sync.remove("sponsorVideoID"),void 0!==e.previousVideoID&&chrome.storage.sync.remove("previousVideoID"),!e.supportInvidious&&e.invidiousInstances.length<n.length&&(e.invidiousInstances=[...new Set([...n,...e.invidiousInstances])]),e.lastIsVipUpdate&&chrome.storage.sync.remove("lastIsVipUpdate")}));o.default=c},5694:function(e,o,t){var i=this&&this.__awaiter||function(e,o,t,i){return new(t||(t=Promise))((function(n,r){function s(e){try{c(i.next(e))}catch(e){r(e)}}function a(e){try{c(i.throw(e))}catch(e){r(e)}}function c(e){var o;e.done?n(e.value):(o=e.value,o instanceof t?o:new t((function(e){e(o)}))).then(s,a)}c((i=i.apply(e,o||[])).next())}))};Object.defineProperty(o,"__esModule",{value:!0});const n=t(9019),r=t(7542),s=t(7657),a=t(8362);function c(){return i(this,void 0,void 0,(function*(){(0,n.localizeHtmlPage)(),yield(0,a.waitFor)((()=>null!==r.default.config)),r.default.config.darkMode||document.documentElement.setAttribute("data-theme","light"),(0,s.showDonationLink)()||(document.getElementById("sbDonate").style.display="none")}))}"complete"===document.readyState?c():document.addEventListener("DOMContentLoaded",c)},7683:(e,o)=>{var t,i,n,r,s,a;Object.defineProperty(o,"__esModule",{value:!0}),o.NoticeVisbilityMode=o.ChannelIDStatus=o.SponsorSourceType=o.ActionTypes=o.ActionType=o.SponsorHideType=o.CategorySkipOption=void 0,(a=o.CategorySkipOption||(o.CategorySkipOption={}))[a.Disabled=-1]="Disabled",a[a.ShowOverlay=0]="ShowOverlay",a[a.ManualSkip=1]="ManualSkip",a[a.AutoSkip=2]="AutoSkip",(s=o.SponsorHideType||(o.SponsorHideType={}))[s.Visible=void 0]="Visible",s[s.Downvoted=1]="Downvoted",s[s.MinimumDuration=2]="MinimumDuration",s[s.Hidden=3]="Hidden",function(e){e.Skip="skip",e.Mute="mute",e.Chapter="chapter",e.Full="full",e.Poi="poi"}(t=o.ActionType||(o.ActionType={})),o.ActionTypes=[t.Skip,t.Mute],(r=o.SponsorSourceType||(o.SponsorSourceType={}))[r.Server=void 0]="Server",r[r.Local=1]="Local",r[r.YouTube=2]="YouTube",(n=o.ChannelIDStatus||(o.ChannelIDStatus={}))[n.Fetching=0]="Fetching",n[n.Found=1]="Found",n[n.Failed=2]="Failed",(i=o.NoticeVisbilityMode||(o.NoticeVisbilityMode={}))[i.FullSize=0]="FullSize",i[i.MiniForAutoSkip=1]="MiniForAutoSkip",i[i.MiniForAll=2]="MiniForAll",i[i.FadedForAutoSkip=3]="FadedForAutoSkip",i[i.FadedForAll=4]="FadedForAll"},7657:(e,o,t)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.showDonationLink=void 0;const i=t(7542);o.showDonationLink=function(){return"Apple Computer, Inc."!==navigator.vendor&&i.default.config.showDonationLink}},2938:e=>{e.exports=JSON.parse('["www.youtubekids.com","inv.bp.projectsegfau.lt","inv.tux.pizza","inv.zzls.xyz","invidious.0011.lt","invidious.lunar.icu","invidious.privacydev.net","invidious.tiekoetter.com","iv.ggtyler.dev","iv.melmac.space","vid.priv.au","vid.puffyan.us","yewtu.be","yt.artemislena.eu"]')},1181:e=>{e.exports=JSON.parse('{"serverAddress":"https://sponsor.ajay.app","testingServerAddress":"https://sponsor.ajay.app/test","serverAddressComment":"This specifies the default SponsorBlock server to connect to","categoryList":["sponsor","selfpromo","exclusive_access","interaction","poi_highlight","intro","outro","preview","filler","chapter","music_offtopic"],"categorySupport":{"sponsor":["skip","mute","full"],"selfpromo":["skip","mute","full"],"exclusive_access":["full"],"interaction":["skip","mute"],"intro":["skip","mute"],"outro":["skip","mute"],"preview":["skip","mute"],"filler":["skip","mute"],"music_offtopic":["skip"],"poi_highlight":["poi"],"chapter":["chapter"]},"wikiLinks":{"sponsor":"https://wiki.sponsor.ajay.app/w/Sponsor","selfpromo":"https://wiki.sponsor.ajay.app/w/Unpaid/Self_Promotion","exclusive_access":"https://wiki.sponsor.ajay.app/w/Exclusive_Access","interaction":"https://wiki.sponsor.ajay.app/w/Interaction_Reminder_(Subscribe)","intro":"https://wiki.sponsor.ajay.app/w/Intermission/Intro_Animation","outro":"https://wiki.sponsor.ajay.app/w/Endcards/Credits","preview":"https://wiki.sponsor.ajay.app/w/Preview/Recap","filler":"https://wiki.sponsor.ajay.app/w/Filler_Tangent","music_offtopic":"https://wiki.sponsor.ajay.app/w/Music:_Non-Music_Section","poi_highlight":"https://wiki.sponsor.ajay.app/w/Highlight","guidelines":"https://wiki.sponsor.ajay.app/w/Guidelines","mute":"https://wiki.sponsor.ajay.app/w/Mute_Segment","chapter":"https://wiki.sponsor.ajay.app/w/Chapter"},"extensionImportList":{"chromium":["enamippconapkdmgfgjchkhakpfinmaj"],"firefox":["deArrow@ajay.app","deArrowBETA@ajay.app"],"safari":["app.ajay.dearrow.extension"]}}')}},o={};!function t(i){var n=o[i];if(void 0!==n)return n.exports;var r=o[i]={exports:{}};return e[i].call(r.exports,r,r.exports,t),r.exports}(5694)})();