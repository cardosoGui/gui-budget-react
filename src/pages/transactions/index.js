import React from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderUI from '../../components/HeaderUI'
import { MdSearch } from 'react-icons/md'
import { IconButton, makeStyles } from '@material-ui/core'
import Tabs from '../../components/Tabs'
import { TabPanel } from '../../components/Tabs/TabsUI'
import { months } from '../../components/Tabs/TabsWrapper'
import { useAppContext } from '../../store/AppContext'
import BalanceTransactions from '../../components/BalanceTransactions'

const useStyles = makeStyles({ container: { background: '#fff', padding: 15 } })

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
			<SectionMain className={classes.container}>
				<Tabs />
				{months.map((tab, i) => (
					<TabPanel value={tabs.index} index={i}>
						Item {tab}
					</TabPanel>
				))}
			</SectionMain>
			<SectionMain className={classes.container}>
				<BalanceTransactions />
			</SectionMain>
		</SectionMain>
	)
}

export default TransactionsPage
