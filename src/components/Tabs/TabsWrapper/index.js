import React from 'react'
import { Tabs } from '@material-ui/core'
import { useAppContext } from '../../../store/AppContext'

export const months = [
	'Janeiro',
	'Fevereiro',
	'Março',
	'Abril',
	'Maio',
	'Junho',
	'Julho',
	'Agosto',
	'Setembro',
	'Outubro',
	'Novembro',
	'Dezembro'
]

const TabsWrapper = ({ children }) => {
	const { tabs, setAppState } = useAppContext()

	const handleChange = (event, newValue) => {
		setAppState({ tabs: { index: newValue } })
	}

	const a11yProps = (index) => {
		return {
			id: `scrollable-auto-tab-${index}`,
			'aria-controls': `scrollable-auto-tabpanel-${index}`
		}
	}

	return (
		<Tabs
			value={tabs.index}
			onChange={handleChange}
			indicatorColor="primary"
			textColor="primary"
			variant="scrollable"
			scrollButtons="auto"
			aria-label="scrollable auto tabs example"
		>
			{months.map((tab, i) => children({ label: tab, ...a11yProps(i) }))}
		</Tabs>
	)
}

export default TabsWrapper
