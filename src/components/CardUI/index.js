import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({ root: { margin: 10, padding: 10, border: '1px solid #6690FFab', width: '100%' } })

const CardUI = ({ children }) => {
	const classes = useStyles()
	return <Paper className={classes.root}>{children}</Paper>
}

export default CardUI
