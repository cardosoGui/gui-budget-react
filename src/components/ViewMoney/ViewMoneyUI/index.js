import React from 'react'
import toCurrency from '../../../utils/toCurrency'
import SectionMain from '../../SectionMain'
import { MdSettings } from 'react-icons/md'
import { makeStyles, IconButton } from '@material-ui/core'
import Title from '../../Title'
import UserAvatar from '../../UserAvatar'
import { useAppContext } from '../../../store/AppContext'

const useStyles = makeStyles(() => ({
	root: {
		padding: '10px',
		justifyContent: 'center',
		height: 150,
		background: ({ primary }) => primary,
		alignItems: 'center'
	},
	amount: {
		fontFamily: 'Oxygen Mono'
	}
}))

const ViewMoneyUI = ({ amount }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ primary: colorSchema['primary'] })
	return (
		<SectionMain className={classes.root} align="center">
			<SectionMain noPadding position="space-between" align="center">
				<IconButton size="small">
					<UserAvatar />
				</IconButton>
				<IconButton size="small">
					<MdSettings size={30} color="#fff" />
				</IconButton>
			</SectionMain>
			<SectionMain miniPadding alignItems="center" direction="column">
				<Title size="big" align="center" color="#fff" fontMonoSpace>
					<code className={classes.amount}>{toCurrency(amount)}</code>
				</Title>
				<Title size="small" align="center" color="#fff">
					Balanço total
				</Title>
			</SectionMain>
		</SectionMain>
	)
}

export default ViewMoneyUI
