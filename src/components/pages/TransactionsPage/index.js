import React from 'react'
import SectionMain from '../../SectionMain'
import HeaderUI from '../../HeaderUI'
import { MdSearch } from 'react-icons/md'
import { IconButton, makeStyles } from '@material-ui/core'
import Tabs from '../../Tabs'
import { useAppContext } from '../../store/AppContext'
import { TabPanel } from '../../Tabs/TabsUI'
import { months } from '../../Tabs/TabsWrapper'

const useStyles = makeStyles({ tabs: { background: '#fff' } })

const TransactionsPage = () => {
	const classes = useStyles()
	const { tabs } = useAppContext()
	return (
		<SectionMain noPadding>
			<HeaderUI title="Transações">
				<IconButton size="small">
					<MdSearch color="#fff" size={25} />
				</IconButton>
			</HeaderUI>
			<SectionMain className={classes.tabs}>
				<Tabs />
				{months.map((tab, i) => (
					<TabPanel value={tabs.index} index={i}>
						Item {tab}
					</TabPanel>
				))}
			</SectionMain>
		</SectionMain>
	)
}

export default TransactionsPage
