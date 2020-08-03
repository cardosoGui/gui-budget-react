import React from 'react'
import { List, makeStyles } from '@material-ui/core'
import { useAppContext } from '../../../store/AppContext'

const useStyles = makeStyles({ root: { width: '100%' } })

const AccountListWrapper = ({ children }) => {
	const { user } = useAppContext()
	const classes = useStyles()

	const renderAccountList = () => user.accounts.map((account) => children({ account }))
	return <List className={classes.root}>{renderAccountList()}</List>
}

export default AccountListWrapper
