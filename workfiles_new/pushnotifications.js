/* value in Notification.permission can be: default, granted or denied. */
if (Notification.permission === 'default') {
    /* The Notification.requestPermission() shows the prompt pop up window to the user. It returns a promise that resolves to the value of permission */
    Notification.requestPermission().then (result => {
        if (result === 'denied') {
            console.log('Permission denied')
            return
        }

        if (result === 'granted') {
            console.log('Permission granted')
            /* The user clicked the Allow button. We will get the subscription token generated by the browser and store it in our database.

            The subscription token can be fetched using the getSubscription method available on pushManager of the serviceWorkerRegistration object. If subscription is not available, we subscribe using the subscribe method available on pushManager. The subscribe method takes in an object.
            */

            serviceWorkerRegistration.pushManager.getSubscription()
                .then (subscription => {
                    if (!subscription) {
                        const applicationServerKey = ''
                        serviceWorkerRegistration.pushManager.subscribe({
                            userVisibleOnly: true, // All push notifications from server should be displayed to the user
                            applicationServerKey // VAPID Public key
                        })
                    } else {
                        saveSubscriptionInDB(subscription, userId) // A method to save subscription token in the database
                    }
                })
        }
    })
}