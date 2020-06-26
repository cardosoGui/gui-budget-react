import React, { useState, useEffect } from 'react'
import { Tabs } from '@material-ui/core'
import { useAppContext } from '../../store/AppContext'
import moment from 'moment'

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
	const [ value, setValue ] = useState(tabs.index)

	const handleChange = (event, newValue) => {
		setValue(newValue)
		setAppState({ tabs: { index: newValue } })
	}

	const fetchTodayMonth = () => {
		const todayMonth = moment(new Date()).format('l')[0] - 1
		setAppState({ tabs: { index: todayMonth } })
		setValue(todayMonth)
	}

	const a11yProps = (index) => {
		return {
			id: `scrollable-auto-tab-${index}`,
			'aria-controls': `scrollable-auto-tabpanel-${index}`
		}
	}

	useEffect(() => {
		fetchTodayMonth()
	})

	return (
		<Tabs
			value={value}
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
