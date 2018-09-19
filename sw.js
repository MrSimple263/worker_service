const cacheName='v1';
const urlCache=[
    '/',
    '/index.html',
    '/app.js',
    '/sw.js',
    '/bountyHunters.jpg'
]
self.addEventListener('install',function(e){
    e.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(urlCache);
        })
    )
})
// self.addEventListener(active)
self.addEventListener('fetch',function(e){
    var request=e.request;
    var findReponse=caches.open(cacheName)
    .then(cache=>cache.match(request))
    .then(response=>{
        if(response){
            return response;
        }
        return fetch(request);
    })
    e.respondWith(findReponse);
    // e.waitUntil(caches.open(cacheName)
    //             .then(cache=>fetch(request))
    //               .then(response=>cache.put(request,response))
    // );
});

self.addEventListener('sync',function(e){
    if(e.tag==='submit'){
        console.log('sync!')
    }
})