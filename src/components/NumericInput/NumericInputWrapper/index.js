import React from 'react'
import SectionMain from '../../SectionMain'
import { makeStyles } from '@material-ui/core'
import { useAppContext } from '../../../store/AppContext'

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		bottom: 0,
		height: '60%',
		borderRadius: '20px 20px 0 0',
		background: ({ colorTheme }) => colorTheme,
		boxShadow: ({ colorTheme }) => `0px 0px 20px 1px ${colorTheme}b3`,
		justifyContent: 'center',
		padding: '10px 40px'
	}
})

const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]

const NumericInputWrapper = ({ children }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['primary'] })
	return (
		<SectionMain noPadding className={classes.root}>
			<SectionMain position="space-around">
				{numbers.map((numericInput) => children({ number: numericInput }))}
			</SectionMain>
		</SectionMain>
	)
}

export default NumericInputWrapper
