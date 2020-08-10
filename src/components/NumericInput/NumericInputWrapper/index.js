import React from 'react'
import SectionMain from '../../SectionMain'
import { makeStyles } from '@material-ui/core'
import { useAppContext } from '../../../store/AppContext'
import { GoCheck } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

const useStyles = makeStyles({
	root: {
		position: 'absolute',
		bottom: 0,
		height: '60%',
		borderRadius: '20px 20px 0 0',
		background: ({ colorTheme }) => colorTheme,
		boxShadow: ({ colorTheme }) => `0px 0px 20px 1px ${colorTheme}b3`,
		justifyContent: 'center',
		padding: '10px 10%'
	}
})

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
		component: <IoMdClose color="#fff" fontSize={30} style={{ paddingTop: 5 }} />
	},
	{ value: 0, component: '' },
	{
		value: 'submit',
		component: <GoCheck color="#fff" fontSize={30} style={{ paddingTop: 5 }} />
	}
]

const NumericInputWrapper = ({ children }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['primary'] })

	return (
		<SectionMain noPadding className={classes.root}>
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
