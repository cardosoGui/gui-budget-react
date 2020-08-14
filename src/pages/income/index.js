import React from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderBackgroundUI from '../../components/HeaderBackgroundUI'
import Title from '../../components/Title'
import { makeStyles, Fade, Button, InputBase } from '@material-ui/core'
import toCurrency from '../../utils/toCurrency'
import { Formik } from 'formik'
import NumericInput from '../../components/NumericInput'
import { FiRepeat } from 'react-icons/fi'
import { FaMinus, FaPlus, FaExchangeAlt, FaEdit, FaListUl, FaWallet, FaRegCalendarAlt } from 'react-icons/fa'
import SelectInputUI from '../../components/SelectInputUI'
import { useAppContext } from '../../store/AppContext'

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
	const { colorSchema } = useAppContext()

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

	const typeSymbols = {
		expense: <FaMinus fontSize={25} color="#fff" />,
		income: <FaPlus fontSize={25} color="#fff" />,
		transference: <FaExchangeAlt fontSize={25} color="#fff" />
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
						category: null,
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
								<SectionMain
									position="flex-end"
									alignItems="center"
									onClick={() =>
										formikProps.values.showNumericInput === false &&
										formikProps.setFieldValue('showNumericInput', true)}
								>
									<Title color="#fff" size="big">
										<code className={classes.amount}>{toCurrency(formikProps.values.amount)}</code>
									</Title>
									&nbsp;
									{typeSymbols[formikProps.values.type]}
								</SectionMain>
							</HeaderBackgroundUI>
							<SectionMain>
								<SelectInputUI icon={<FaEdit fontSize={30} color={colorSchema['primary']} />}>
									<InputBase
										id="standard-basic"
										defaultValue="Escreva sobre a despesa"
										inputProps={{ 'aria-label': 'naked' }}
										fullWidth
									/>
								</SelectInputUI>
								<SelectInputUI
									titleText="Categoria"
									icon={<FaListUl fontSize={30} color={colorSchema['primary']} />}
								>
									Selecione uma categoria de gastos
								</SelectInputUI>
								<SelectInputUI
									titleText="Conta/Carteira"
									icon={<FaWallet fontSize={30} color={colorSchema['primary']} />}
								>
									Escolha uma conta
								</SelectInputUI>
								<SelectInputUI
									titleText="Data"
									icon={<FaRegCalendarAlt fontSize={30} color={colorSchema['primary']} />}
								>
									{new Date().toLocaleDateString()}
								</SelectInputUI>
								<SelectInputUI
									titleText="Recorrência"
									icon={<FiRepeat fontSize={30} color={colorSchema['primary']} />}
								>
									Decida entre gasto fixo/temporário
								</SelectInputUI>
							</SectionMain>

							<NumericInput formikProps={formikProps} />
						</form>
					)}
				</Formik>
			</SectionMain>
		</Fade>
	)
}

export default IncomePage
