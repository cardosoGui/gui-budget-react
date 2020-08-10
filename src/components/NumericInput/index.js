import React from 'react'
import NumericInputWrapper from './NumericInputWrapper'
import NumericInputUI from './NumericInputUI'

const NumericInput = ({ formikProps }) => {
	const onNumberChange = (number) => {
		const functions = {
			clear: () => formikProps.setFieldValue('amount', '0'),
			submit: () => formikProps.setFieldValue('showNumericInput', false),
			onChange: () => formikProps.setFieldValue('amount', formikProps.values.amount.concat(number))
		}
		if (window.navigator.vibrate) {
			window.navigator.vibrate(50)
		}
		return number.toString().match(/clear|submit/) ? functions[number]() : functions['onChange']()
	}

	return (
		<NumericInputWrapper>
			{({ number, component }) => (
				<NumericInputUI component={component} number={number} onNumberChange={() => onNumberChange(number)} />
			)}
		</NumericInputWrapper>
	)
}

export default NumericInput
