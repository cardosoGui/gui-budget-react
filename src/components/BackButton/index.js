import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'

const useStyles = makeStyles(() => ({
	iconButton: {
		marginLeft: 6
	}
}))

const BackButton = ({ onClick, htmlColor = '#fff' }) => {
	const classes = useStyles()
	return (
		<IconButton size="small" onClick={onClick}>
			<ArrowBackIosIcon className={classes.iconButton} htmlColor={htmlColor} />
		</IconButton>
	)
}

export default BackButton
