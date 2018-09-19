if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js',{scope:'/'})
    .then(function(reg){
        console.log('Registion succeed. Scope is '+reg.scope);
    }).catch(function(error){
        console.log('Registration faied with' + error)
    });
    //register sync
    navigator.serviceWorker.ready
    .then(registration=>{
        document.getElementById('submit')
                  .addEventListener('click',()=>{
                      registration.sync.register('submit').then(()=>{
                          console.log('sync registered')
                      });
                  });
    });
    Notification.requestPermission(permission=>{
        console.log('permission:',permission)
    })
}