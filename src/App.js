import React, { useState } from 'react'
import AppLayout from './components/AppLayout'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import '../src/styles.css'
import HomePage from './pages/home'
import TransactionsPage from './pages/transactions'
import AppContext from './store/AppContext'
import IncomePage from './pages/income'

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
		screen: window.location.pathname,
		theme: { light: { backgroundColor: '#f8f8f8', color: '#282828' } },
		colorSchema: {
			primary: '#293845',
			secondary: '#5a656e',
			success: '#40c949',
			info: '#3aa0ff',
			warning: '#ffb042',
			danger: '#ff3838'
		},
		tabs: { index: 0 }
	})
	const routes = [ '/', '/transactions', '/transactions/add', '/income', '/budget' ]
	const setAppState = (value) => setState({ ...appState, ...value })

	const checkUrl = () => {
		return !routes.some((route) => route === window.location.pathname)
	}

	return (
		<AppContext.Provider value={{ ...appState, setAppState }}>
			<Router>
				<AppLayout>
					{checkUrl() && <Redirect to="/" />}
					<Route path="/" exact component={HomePage} />
					<Route path="/transactions" exact component={TransactionsPage} />
					<Route path="/income" exact component={IncomePage} />
				</AppLayout>
			</Router>
		</AppContext.Provider>
	)
}
