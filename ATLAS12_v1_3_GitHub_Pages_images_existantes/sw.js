// ATLAS / 12 v1.3: preserve legacy localStorage and IndexedDB; licensed image cache.
const CACHE='atlas12-app-v1.3.0';
const CORE=['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png'];
const MEDIA=["./assets/library/incdb-0.svg","./assets/library/incdb-1.svg","./assets/library/chestrow-0.svg","./assets/library/chestrow-1.svg","./assets/library/shoulderpress-0.svg","./assets/library/shoulderpress-1.svg","./assets/library/latpulldown-0.svg","./assets/library/latpulldown-1.svg","./assets/library/latcable-0.svg","./assets/library/latcable-1.svg","./assets/library/cablefly-0.svg","./assets/library/cablefly-1.svg","./assets/library/ropepush-0.svg","./assets/library/ropepush-1.svg","./assets/library/hammer-0.svg","./assets/library/hammer-1.svg","./assets/library/hacksquat-0.svg","./assets/library/hacksquat-1.svg","./assets/library/rdl-0.svg","./assets/library/rdl-1.svg","./assets/library/legpress-0.svg","./assets/library/legpress-1.svg","./assets/library/legcurlseat-0.svg","./assets/library/legcurlseat-1.svg","./assets/library/calfstand-0.svg","./assets/library/calfstand-1.svg","./assets/library/cablecrunch-0.svg","./assets/library/cablecrunch-1.svg","./assets/library/smithsquat-0.svg","./assets/library/smithsquat-1.svg","./assets/library/bulgarian-0.svg","./assets/library/bulgarian-1.svg","./assets/library/hipthrust-0.svg","./assets/library/hipthrust-1.svg","./assets/library/legcurllie-0.svg","./assets/library/legcurllie-1.svg","./assets/library/legext-0.svg","./assets/library/legext-1.svg","./assets/library/calfseat-0.svg","./assets/library/calfseat-1.svg","./assets/library/pallof-0.svg","./assets/library/pallof-1.svg","./assets/library/inclinesmith-0.svg","./assets/library/inclinesmith-1.svg","./assets/library/pullups-0.svg","./assets/library/pullups-1.svg","./assets/library/chestpress-0.svg","./assets/library/chestpress-1.svg","./assets/library/rowone-0.svg","./assets/library/rowone-1.svg","./assets/library/latmachine-0.svg","./assets/library/latmachine-1.svg","./assets/library/reversepec-0.svg","./assets/library/reversepec-1.svg","./assets/library/overheadtri-0.svg","./assets/library/overheadtri-1.svg","./assets/library/preachercurl-0.svg","./assets/library/preachercurl-1.svg"];
self.addEventListener('install',event=>event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 await cache.addAll(CORE);
 // Images are downloaded during GitHub Actions deployment. Failed media never blocks app install.
 await Promise.allSettled(MEDIA.map(url=>cache.add(url)));
 await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const names=await caches.keys();await Promise.all(names.filter(k=>k.startsWith('atlas12-app-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
 const req=event.request;
 if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
 if(req.mode==='navigate'){event.respondWith(fetch(req).then(async res=>{if(res.ok){const cache=await caches.open(CACHE);cache.put(req,res.clone()).catch(()=>{})}return res}).catch(async()=>await caches.match(req)||await caches.match('./index.html')));return;}
 event.respondWith(caches.match(req).then(cached=>cached||fetch(req).then(async res=>{if(res.ok){const cache=await caches.open(CACHE);cache.put(req,res.clone()).catch(()=>{})}return res})));
});
