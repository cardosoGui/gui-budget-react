import React from 'react'
import { ListItem, makeStyles, ListItemAvatar, ListItemText } from '@material-ui/core'
import SectionMain from '../SectionMain'

const useStyles = makeStyles({
	root: { padding: '8px', borderBottom: 'solid 1px #eee' },
	amountLabel: { margin: '10px 0' }
})

const SelectInputUI = ({ titleText, icon, modalComponent, children }) => {
	const classes = useStyles()

	return (
		<SectionMain noPadding>
			<ListItem className={classes.root} button>
				<ListItemAvatar>{icon}</ListItemAvatar>
				<ListItemText className={classes.secondary} primary={titleText} secondary={children} />
			</ListItem>
		</SectionMain>
	)
}

export default SelectInputUI
