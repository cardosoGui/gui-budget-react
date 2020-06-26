import React from 'react'
import { Tab } from '@material-ui/core'

const TabsUI = ({ label, ...props }) => {
	return <Tab label={label} {...props} />
}

export const TabPanel = ({ children, value, index, ...props }) => {
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...props}
		>
			{value === index && children}
		</div>
	)
}

export default TabsUI
