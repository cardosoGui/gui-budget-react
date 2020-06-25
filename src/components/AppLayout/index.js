import React from 'react'
import AppLayoutWrapper from './AppLayoutWrapper'
import AppLayoutUI from './AppLayoutUI'
import NavigationBottom from '../navigation/NavigationBottom'

const AppLayout = ({ children }) => {
	return (
		<AppLayoutWrapper>
			<AppLayoutUI>{children}</AppLayoutUI>
			<NavigationBottom />
		</AppLayoutWrapper>
	)
}

export default AppLayout
