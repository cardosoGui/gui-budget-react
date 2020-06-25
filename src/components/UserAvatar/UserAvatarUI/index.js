import React from 'react'
import { Avatar, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		width: 40,
		height: 40,
		backgroundColor: '#FF3838',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
})

const UserAvatarUI = ({ user }) => {
	const classes = useStyles()
	return (
		<Avatar className={classes.root}>
			<div>{user.name[0]}</div>
		</Avatar>
	)
}

export default UserAvatarUI
