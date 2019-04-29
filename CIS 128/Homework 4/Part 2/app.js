if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
	   navigator.serviceWorker.register('./service-worker.js')
	      .then(registration => console.log('SW registered'))
		  .catch(err => console.log(`SW not registered - Error: ${err}`))
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