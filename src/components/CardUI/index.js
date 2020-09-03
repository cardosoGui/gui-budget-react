import React from 'react'
import { Paper, makeStyles } from '@material-ui/core'
import { useAppContext } from '../../store/AppContext'

const useStyles = makeStyles({
	root: {
		margin: 10,
		padding: 10,
		border: ({ colorTheme }) => `1px solid ${colorTheme}ab`,
		width: '100%',
		borderRadius: 20
	}
})

const CardUI = ({ children }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['primary'] })
	return <Paper className={classes.root}>{children}</Paper>
}

export default CardUI
