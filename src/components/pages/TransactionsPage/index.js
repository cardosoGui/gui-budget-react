import React from 'react'
import SectionMain from '../../SectionMain'
import HeaderUI from '../../HeaderUI'
import { MdSearch } from 'react-icons/md'
import { IconButton, makeStyles } from '@material-ui/core'

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
			<SectionMain className={classes.tabs}>sdsds</SectionMain>
		</SectionMain>
	)
}

export default TransactionsPage
