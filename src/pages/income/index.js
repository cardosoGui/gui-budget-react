import React from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderBackgroundUI from '../../components/HeaderBackgroundUI'
import Title from '../../components/Title'
import { makeStyles, Fade, IconButton, Button, Collapse } from '@material-ui/core'
import toCurrency from '../../utils/toCurrency'
import { Formik } from 'formik'
import NumericInput from '../../components/NumericInput'
import { IoIosBackspace } from 'react-icons/io'
import { FaMinus, FaPlus, FaExchangeAlt } from 'react-icons/fa'

const useStyles = makeStyles({
	amount: {
		fontFamily: 'Oxygen Mono'
	},
	form: {
		padding: 0,
		width: 'inherit'
	},

	typeButton: {
		display: 'flex',
		flexDirection: 'column'
	},
	bulletPoint: {
		height: 0,
		color: '#fff'
	}
})

const IncomePage = () => {
	const classes = useStyles()

	const onDeleteNumber = (formikProps) => {
		const { amount } = formikProps.values
		formikProps.setFieldValue('amount', amount.substring(0, amount.length - 1))
	}

	const TypeButtons = ({ formikProps }) => {
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

	const TypeSymbols = ({ type }) => {
		switch (type) {
			case 'expense':
				return <FaMinus fontSize={25} color="#fff" />
			case 'income':
				return <FaPlus fontSize={25} color="#fff" />
			case 'transference':
				return <FaExchangeAlt fontSize={25} color="#fff" />

			default:
				return <span />
		}
	}

	return (
		<Fade in={true}>
			<SectionMain noPadding>
				<Formik
					initialValues={{
						amount: '',
						type: 'expense',
						description: '',
						account: '',
						date: new Date().toLocaleDateString(),
						recurrence: '',
						backgroundColor: 'danger',
						showNumericInput: true
					}}
				>
					{(formikProps) => (
						<form className={classes.form}>
							<HeaderBackgroundUI
								backgroundColor={formikProps.values.backgroundColor}
								rightComponent={<TypeButtons formikProps={formikProps} />}
							>
								<SectionMain item xs={1}>
									<TypeSymbols type={formikProps.values.type} />
								</SectionMain>
								<SectionMain
									item
									xs={11}
									position="flex-end"
									alignItems="center"
									onClick={() =>
										formikProps.values.showNumericInput === false &&
										formikProps.setFieldValue('showNumericInput', true)}
								>
									<Title color="#fff" size="big">
										<code className={classes.amount}>{toCurrency(formikProps.values.amount)}</code>
									</Title>
									<IconButton onClick={() => onDeleteNumber(formikProps)}>
										<IoIosBackspace fontSize={40} color="#fff" />
									</IconButton>
								</SectionMain>
							</HeaderBackgroundUI>
							<Collapse in={formikProps.values.showNumericInput}>
								<NumericInput formikProps={formikProps} />
							</Collapse>
						</form>
					)}
				</Formik>
			</SectionMain>
		</Fade>
	)
}

export default IncomePage
