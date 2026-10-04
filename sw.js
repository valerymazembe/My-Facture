const C='vx1';
self.addEventListener('install',e=>{self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!='GET')return;
const net=()=>fetch(q).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(q,k));return r});
e.respondWith(q.mode=='navigate'?net().catch(()=>caches.match(q).then(m=>m||caches.match('index.html'))):caches.match(q).then(m=>m||net()))});