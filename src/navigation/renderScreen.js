import React from 'react'
import HomePage from '../components/pages/home'
import TransactionsPage from '../components/pages/TransactionsPage'

const renderScreen = (screen) => {
	switch (screen) {
		case 'home':
			return <HomePage />
		case 'transactions':
			return <TransactionsPage />
		case 'expenses':
			return <HomePage />

		default:
			return 'appsd'
	}
}

export default renderScreen
