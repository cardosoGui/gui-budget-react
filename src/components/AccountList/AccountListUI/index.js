import React from 'react'
import { ListItem, Avatar, ListItemAvatar, ListItemText, ListItemSecondaryAction, makeStyles } from '@material-ui/core'
import { MdAccountBalanceWallet } from 'react-icons/md'
import Title from '../../Title'
import toCurrency from '../../../utils/toCurrency'

const useStyles = makeStyles({ root: { padding: '8px' }, amountLabel: { margin: '10px 0' } })

const AccountListUI = ({ account = { name: '', amount: 0, category: '' } }) => {
	const classes = useStyles()
	return (
		<ListItem className={classes.root}>
			<ListItemAvatar>
				<Avatar>
					<MdAccountBalanceWallet size={25} color="#fff" />
				</Avatar>
			</ListItemAvatar>
			<ListItemText primary={account.name} secondary={account.category && account.category} />

			<ListItemSecondaryAction className={classes.amountLabel}>
				<Title type="bold" size="small" variant="primary">
					{toCurrency(account.amount)}
				</Title>
			</ListItemSecondaryAction>
		</ListItem>
	)
}

export default AccountListUI
