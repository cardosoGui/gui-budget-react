import React from 'react'
import NumericInputWrapper from './NumericInputWrapper'
import NumericInputUI from './NumericInputUI'

const NumericInput = ({ formikProps }) => {
	return (
		<NumericInputWrapper>
			{({ number, component, type }) => (
				<NumericInputUI
					component={component}
					number={number}
					handleNumber={formikProps.setFieldValue}
					value={formikProps.values.amount}
					type={type}
				/>
			)}
		</NumericInputWrapper>
	)
}

export default NumericInput
