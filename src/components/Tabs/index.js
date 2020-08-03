import React, { useEffect } from 'react'
import TabsWrapper from './TabsWrapper'
import TabsUI from './TabsUI'
import moment from 'moment'
import { useAppContext } from '../../store/AppContext'

const Tabs = () => {
	const { setAppState } = useAppContext()

	const fetchTodayMonth = () => {
		const todayMonth = moment(new Date()).format('l')[0] - 1
		setAppState({ tabs: { index: todayMonth } })
	}

	useEffect(() => {
		fetchTodayMonth()
		// eslint-disable-next-line
	}, [])

	return <TabsWrapper>{({ label }) => <TabsUI label={label} />}</TabsWrapper>
}

export default Tabs
