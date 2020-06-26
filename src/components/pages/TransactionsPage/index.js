import React from 'react'
import SectionMain from '../../SectionMain'
import HeaderUI from '../../HeaderUI'
import { MdSearch } from 'react-icons/md'
import { IconButton, makeStyles } from '@material-ui/core'
import Tabs from '../../Tabs'

const useStyles = makeStyles({ tabs: { background: '#fff' } })

const TransactionsPage = () => {
	const classes = useStyles()
	return (
		<SectionMain noPadding>
			<HeaderUI>
				<IconButton size="small">
					<MdSearch color="#fff" size={25} />
				</IconButton>
			</HeaderUI>
			<SectionMain className={classes.tabs}>
				<Tabs />
			</SectionMain>
		</SectionMain>
	)
}

export default TransactionsPage
