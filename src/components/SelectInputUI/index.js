import React from 'react'
import { ListItem, makeStyles, ListItemAvatar, ListItemText } from '@material-ui/core'

const useStyles = makeStyles({
	root: { padding: '8px', borderBottom: 'solid 1px #eee' },
	amountLabel: { margin: '10px 0' }
})

const SelectInputUI = ({ titleText, icon, children }) => {
	const classes = useStyles()
	return (
		<ListItem className={classes.root} button>
			<ListItemAvatar>{icon}</ListItemAvatar>
			<ListItemText className={classes.secondary} primary={titleText} secondary={children} />
		</ListItem>
	)
}

export default SelectInputUI
