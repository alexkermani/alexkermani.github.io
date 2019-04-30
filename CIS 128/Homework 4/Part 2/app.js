if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('./service-worker.js', {scope: '/'})
	      .then(registration => console.log('Success - Registered SW'))
		  .catch(err => console.log(`Failure - SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}
/* 
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(function (registration) {
        // Registration of service worker ok
       console.log('Registration of service worker successful with scope: ',
registration.scope);
   }).catch(function(err) {
       // Registration of service worker failed
      console.log('Registration of service worker failed with error: ', err);
}) } else {
  console.log('Service Worker is not supported by this browser');
} */