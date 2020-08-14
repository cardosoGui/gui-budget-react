import React from 'react'
import SectionMain from '../../SectionMain'
import { GoCheck } from 'react-icons/go'
import { IoIosBackspace } from 'react-icons/io'

const numbers = [
	{ value: 1, component: '' },
	{ value: 2, component: '' },
	{ value: 3, component: '' },
	{ value: 4, component: '' },
	{ value: 5, component: '' },
	{ value: 6, component: '' },
	{ value: 7, component: '' },
	{ value: 8, component: '' },
	{ value: 9, component: '' },
	{
		value: 'clear',
		component: <IoIosBackspace color="#fff" fontSize={30} style={{ paddingTop: 5 }} />
	},
	{ value: 0, component: '' },
	{
		value: 'submit',
		component: <GoCheck color="#fff" fontSize={30} style={{ paddingTop: 5 }} />
	}
]

const NumericInputWrapper = ({ children }) => {
	return (
		<SectionMain noPadding position="center">
			<SectionMain noPadding position="space-around">
				{numbers.map((numericInput) =>
					children({
						number: numericInput.value,
						component: numericInput.component
					})
				)}
			</SectionMain>
		</SectionMain>
	)
}

export default NumericInputWrapper
