import React, { useState } from 'react'
import AppContext from './components/store/AppContext'
import renderScreen from './components/navigation/renderScreen'
import AppLayout from './components/AppLayout'
import '../src/styles.css'

export default () => {
	const [ appState, setState ] = useState({
		user: {
			amount: 1815000000,
			name: 'Guilherme Cardoso de Almeida',
			accounts: [
				{ name: 'Conta Principal', amount: 0, category: 'principal' },
				{ name: 'Conta Principal', amount: 0, category: 'principal' }
			]
		},
		screen: 'home',
		theme: { light: { backgroundColor: '#f8f8f8', color: '#282828' } },
		colorSchema: { primary: '#6690FF', success: '#40c949', info: '#3aa0ff', warning: '#ffb042', danger: '#ff3838' }
	})
	const setAppState = (value) => setState({ ...appState, ...value })

	return (
		<AppContext.Provider value={{ ...appState, setAppState }}>
			<AppLayout>{renderScreen(appState.screen)}</AppLayout>
		</AppContext.Provider>
	)
}
