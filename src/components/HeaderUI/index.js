import React from 'react'
import SectionMain from '../SectionMain'
import Title from '../Title'
import { useAppContext } from '../store/AppContext'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		backgroundColor: (theme) => theme.primary,
		padding: 10,
		height: 50,
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

const HeaderUI = ({ children, title = 'teste' }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles(colorSchema)
	return (
		<SectionMain className={classes.root}>
			<Title color="#fff" size="medium" capitalize>
				{title}
			</Title>
			{children}
		</SectionMain>
	)
}

export default HeaderUI
