import React from 'react'

const AppContext = React.createContext({
	user: {
		amount: 0,
		name: 'Guilherme Cardoso de Almeida',
		accounts: [ { name: 'Conta Principal', amount: 0, category: 'principal' } ]
	},
	screen: 'home',
	theme: { light: { backgroundColor: '#f8f8f8', color: '#282828' } },
	colorSchema: { primary: '#6690FF', success: '#40c949', info: '#3aa0ff', warning: '#ffb042', danger: '#ff3838' },
	setAppState() {}
})

export const useAppContext = () => React.useContext(AppContext)

export default AppContext
