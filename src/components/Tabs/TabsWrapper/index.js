import React, { useState } from 'react'
import { Tabs } from '@material-ui/core'

const TabsWrapper = ({ children }) => {
	const [ value, setValue ] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	function a11yProps(index) {
		return {
			id: `scrollable-auto-tab-${index}`,
			'aria-controls': `scrollable-auto-tabpanel-${index}`
		}
	}

	const months = [
		'Janeiro',
		'Fevereiro',
		'Março',
		'Abril',
		'Maio',
		'Junho',
		'Julho',
		'Agosto',
		'Setembro',
		'Dezembro'
	]
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
