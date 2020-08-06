import React from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderBackgroundUI from '../../components/HeaderBackgroundUI'
import Title from '../../components/Title'
import { makeStyles, Fade, IconButton } from '@material-ui/core'
import toCurrency from '../../utils/toCurrency'
import { Formik } from 'formik'
import NumericInput from '../../components/NumericInput'
import { IoIosBackspace } from 'react-icons/io'

const useStyles = makeStyles({
	amount: {
		fontFamily: 'Oxygen Mono'
	},
	form: {
		padding: 0,
		width: 'inherit'
	}
})

const IncomePage = () => {
	const classes = useStyles()

	const onDeleteNumber = (formikProps) => {
		const { amount } = formikProps.values
		formikProps.setFieldValue('amount', amount.substring(0, amount.length - 1))
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
						recurrence: ''
					}}
				>
					{(formikProps) => (
						<form className={classes.form}>
							<HeaderBackgroundUI>
								<SectionMain position="flex-end" alignItems="center">
									<Title color="#fff" size="big">
										<code className={classes.amount}>{toCurrency(formikProps.values.amount)}</code>
									</Title>
									<IconButton onClick={() => onDeleteNumber(formikProps)}>
										<IoIosBackspace fontSize={40} color="#fff" />
									</IconButton>
								</SectionMain>
							</HeaderBackgroundUI>
							<NumericInput formikProps={formikProps} />
						</form>
					)}
				</Formik>
			</SectionMain>
		</Fade>
	)
}

export default IncomePage
