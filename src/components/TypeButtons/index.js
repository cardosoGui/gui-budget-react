import React from 'react'
import SectionMain from '../SectionMain'
import { Button, Fade, makeStyles } from '@material-ui/core'
import Title from '../Title'

const useStyles = makeStyles({
	typeButton: {
		display: 'flex',
		flexDirection: 'column'
	},
	bulletPoint: {
		height: 0,
		color: '#fff'
	}
})

const TypeButtons = ({ formikProps }) => {
	const classes = useStyles()
	const typeIncomeButtons = [
		{ type: 'expense', label: 'Despesa', bgColor: 'danger' },
		{ type: 'income', label: 'Receita', bgColor: 'primary' },
		{ type: 'transference', label: 'Transferência', bgColor: 'info' }
	]

	const selectedType = formikProps.values.type

	const onChangeType = (type, bgColor) => {
		formikProps.setFieldValue('backgroundColor', bgColor)
		formikProps.setFieldValue('type', type)
	}
	return (
		<SectionMain noPadding position="space-between">
			{typeIncomeButtons.map(({ type, label, bgColor }) => (
				<Button variant="text" onClick={() => onChangeType(type, bgColor)}>
					<SectionMain className={classes.typeButton}>
						<Title color="#fff" size="xsmall">
							{label}
						</Title>
						<Title color="#fff" size="xsmall" className={classes.bulletPoint}>
							<Fade in={selectedType === type ? true : false}>
								<span>&#8226;</span>
							</Fade>
						</Title>
					</SectionMain>
				</Button>
			))}
		</SectionMain>
	)
}
export default TypeButtons
