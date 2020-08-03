import React from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderUI from '../../components/HeaderUI'
import { MdSearch } from 'react-icons/md'
import { IconButton, makeStyles } from '@material-ui/core'
import Tabs from '../../components/Tabs'
import { TabPanel } from '../../components/Tabs/TabsUI'
import { months } from '../../components/Tabs/TabsWrapper'
import { useAppContext } from '../../store/AppContext'

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
