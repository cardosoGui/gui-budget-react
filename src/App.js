import React, { useState } from 'react'
import AppLayout from './components/AppLayout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import '../src/styles.css'
import HomePage from './pages/home'
import TransactionsPage from './pages/transactions'
import AppContext from './store/AppContext'

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
		colorSchema: { primary: '#6690FF', success: '#40c949', info: '#3aa0ff', warning: '#ffb042', danger: '#ff3838' },
		tabs: { index: 0 }
	})
	const setAppState = (value) => setState({ ...appState, ...value })

	return (
		<AppContext.Provider value={{ ...appState, setAppState }}>
			<Router>
				<AppLayout>
					<Switch>
						<Route path="/" exact component={HomePage} />
						<Route path="/transactions" exact component={TransactionsPage} />
					</Switch>
				</AppLayout>
			</Router>
		</AppContext.Provider>
	)
}
