import React from 'react'
import SectionMain from '../SectionMain'
import { useAppContext } from '../store/AppContext'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		backgroundColor: (theme) => theme.primary,
		padding: 10,
		height: 50,
		justifyContent: 'flex-end',
		alignItems: 'center'
	}
})

const HeaderUI = ({ children, title }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles(colorSchema)
	return <SectionMain className={classes.root}>{children}</SectionMain>
}

export default HeaderUI
