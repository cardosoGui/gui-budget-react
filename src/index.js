import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()

let deferredPrompt // Allows to show the install prompt
const installButton = document.getElementById('install_button')

window.addEventListener('beforeinstallprompt', (e) => {
	console.log('beforeinstallprompt fired')
	// Prevent Chrome 76 and earlier from automatically showing a prompt
	e.preventDefault()
	// Stash the event so it can be triggered later.
	deferredPrompt = e
	// Show the install button
	installButton.hidden = false
	installButton.addEventListener('click', installApp)
})

function installApp() {
	// Show the prompt
	deferredPrompt.prompt()
	installButton.disabled = true

	// Wait for the user to respond to the prompt
	deferredPrompt.userChoice.then((choiceResult) => {
		if (choiceResult.outcome === 'accepted') {
			console.log('PWA setup accepted')
			installButton.hidden = true
		} else {
			console.log('PWA setup rejected')
		}
		installButton.disabled = false
		deferredPrompt = null
	})
}

window.addEventListener('appinstalled', (evt) => {
	console.log('appinstalled fired', evt)
})

// eslint-disable-next-line
function registerNotification() {
	Notification.requestPermission((permission) => {
		if (permission === 'granted') {
			registerBackgroundSync()
		} else console.error('Permission was not granted.')
	})
}

function registerBackgroundSync() {
	if (!navigator.serviceWorker) {
		return console.error('Service Worker not supported')
	}

	navigator.serviceWorker.ready
		.then((registration) => registration.sync.register('syncAttendees'))
		.then(() => console.log('Registered background sync'))
		.catch((err) => console.error('Error registering background sync', err))
}
