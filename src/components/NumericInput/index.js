import React from 'react'
import NumericInputWrapper from './NumericInputWrapper'
import NumericInputUI from './NumericInputUI'
import { Dialog, DialogContent, Slide, makeStyles } from '@material-ui/core'
import { useAppContext } from '../../store/AppContext'

const useStyles = makeStyles({
	dialog: {
		position: 'absolute',
		height: '65%',
		bottom: 0,
		width: '100%',
		borderRadius: '20px 20px 0 0',
		background: ({ colorTheme }) => colorTheme,
		boxShadow: ({ colorTheme }) => `0px 0px 20px 1px ${colorTheme}b3`,
		justifyContent: 'center'
	},
	backdrop: { background: 'none' },
	dialogContent: { padding: '10px' }
})

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

const NumericInput = ({ formikProps }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['primary'] })
	const { amount } = formikProps.values

	const onNumberChange = (number) => {
		const functions = {
			clear: () => formikProps.setFieldValue('amount', amount.substring(0, amount.length - 1)),
			submit: () => formikProps.setFieldValue('showNumericInput', false),
			onChange: () => formikProps.setFieldValue('amount', amount.concat(number))
		}
		if (window.navigator.vibrate) {
			window.navigator.vibrate(50)
		}
		return number.toString().match(/clear|submit/) ? functions[number]() : functions['onChange']()
	}

	return (
		<Dialog
			fullScreen
			BackdropProps={{
				classes: {
					root: classes.backdrop
				}
			}}
			PaperProps={{ classes: { root: classes.dialog } }}
			keepMounted
			TransitionComponent={Transition}
			open={formikProps.values.showNumericInput}
			onClose={() => formikProps.setFieldValue('showNumericInput', false)}
		>
			<DialogContent className={classes.dialogContent}>
				<NumericInputWrapper>
					{({ number, component }) => (
						<NumericInputUI
							component={component}
							number={number}
							onNumberChange={() => onNumberChange(number)}
						/>
					)}
				</NumericInputWrapper>
			</DialogContent>
		</Dialog>
	)
}

export default NumericInput
