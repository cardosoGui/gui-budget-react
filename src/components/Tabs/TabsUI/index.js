import React from 'react'
import { Tab } from '@material-ui/core'

const TabsUI = ({ label, ...props }) => {
	return <Tab label={label} {...props} />
}

export default TabsUI
