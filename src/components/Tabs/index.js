import React from 'react'
import TabsWrapper from './TabsWrapper'
import TabsUI from './TabsUI'

const Tabs = () => {
	return <TabsWrapper>{({ label }) => <TabsUI label={label} />}</TabsWrapper>
}

export default Tabs
