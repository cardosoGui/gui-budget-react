import React from 'react'
import Title from '../../Title'
import { Button, makeStyles } from '@material-ui/core'
import { useAppContext } from '../../../store/AppContext'

const useStyles = makeStyles({
	button: {
		padding: 0,
		borderRadius: '100%',
		height: '20vw',
		width: '20vw',
		margin: '10px',
		background: ({ colorTheme }) => colorTheme
	},
	buttonBackground: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		height: '20vw',
		width: '100%',
		borderRadius: '100%',
		background: ({ colorTheme }) => colorTheme
	}
})

const NumericInputUI = ({ number, component, onNumberChange }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['secondary'] })
	return !component ? (
		<Button className={classes.button} onClick={onNumberChange} variant="outlined">
			<span className={classes.buttonBackground}>
				<Title fontWeight="600" size="medium" color="#fff">
					{number}
				</Title>
			</span>
		</Button>
	) : (
		<Button className={classes.button} onClick={onNumberChange} variant="outlined">
			<span className={classes.buttonBackground}>
				<Title fontWeight="600" size="medium" color="#fff">
					{component}
				</Title>
			</span>
		</Button>
	)
}

export default NumericInputUI
