import React from 'react'
import NumericInputWrapper from './NumericInputWrapper'
import NumericInputUI from './NumericInputUI'

const NumericInput = ({ formikProps }) => {
	return (
		<NumericInputWrapper>
			{({ number }) => (
				<NumericInputUI
					number={number}
					handleNumber={formikProps.setFieldValue}
					value={formikProps.values.amount}
				/>
			)}
		</NumericInputWrapper>
	)
}

export default NumericInput
