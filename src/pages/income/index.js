import React, { useState } from 'react'
import SectionMain from '../../components/SectionMain'
import HeaderBackgroundUI from '../../components/HeaderBackgroundUI'
import Title from '../../components/Title'
import { makeStyles, Fade, InputBase, Fab } from '@material-ui/core'
import toCurrency from '../../utils/toCurrency'
import { Formik } from 'formik'
import NumericInput from '../../components/NumericInput'
import { FiRepeat } from 'react-icons/fi'
import { FaMinus, FaPlus, FaExchangeAlt, FaEdit, FaListUl, FaWallet, FaRegCalendarAlt } from 'react-icons/fa'
import SelectInputUI from '../../components/SelectInputUI'
import { useAppContext } from '../../store/AppContext'
import TypeButtons from '../../components/TypeButtons'
import Modal from '../../components/Modal'
import CategoriesList from '../../components/CategoriesList'
import AddIcon from '@material-ui/icons/Add'
import api from '../../core/api'
import LoaderSpinner from '../../components/LoaderSpinner'

const useStyles = makeStyles({
	amount: {
		fontFamily: 'Oxygen Mono'
	},
	form: {
		padding: 0,
		width: 'inherit'
	},
	fabButton: { background: ({ color }) => color, bottom: 20, position: 'absolute' }
})

const IncomePage = () => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ color: colorSchema['primary'] })
	const [ open, setOpen ] = useState(null)

	const typeSymbols = {
		expense: <FaMinus fontSize={25} color="#fff" />,
		income: <FaPlus fontSize={25} color="#fff" />,
		transference: <FaExchangeAlt fontSize={25} color="#fff" />
	}

	const stackPageSection = {
		category: { title: 'Categoria', renderSection: <CategoriesList /> },
		account: { title: 'Conta/Despesa', renderSection: <CategoriesList /> },
		date: { title: 'Data', renderSection: <CategoriesList /> },
		recurrence: { title: 'Recorrência', renderSection: <CategoriesList /> }
	}

	const onSubmit = (values, setSubmitting) => {
		const form = {
			amount: Number(values.amount),
			type: values.type,
			description: values.description,
			account: values.account,
			date: values.date,
			recurrence: values.recurrence
		}

		try {
			api.post('/transactions', form).then((res) => {
				if (res.status === 200) {
					alert('deu certo mlk')
					setSubmitting(false)
				}
			})
		} catch (e) {
			setSubmitting(false)
			console.log({ e })
		}
	}

	return (
		<Fade in={true}>
			<SectionMain noPadding>
				{open && (
					<Modal openModal={open} title={stackPageSection[open].title} handleClose={() => setOpen(null)}>
						{stackPageSection[open].renderSection}
					</Modal>
				)}
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
					onSubmit={(values, formikProps) => onSubmit(values, formikProps.setSubmitting)}
				>
					{(formikProps) =>
						formikProps.isSubmitting ? (
							<LoaderSpinner loading={formikProps.isSubmitting} />
						) : (
							<form action="javascript:void(0)" className={classes.form}>
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
											<code className={classes.amount}>
												{toCurrency(formikProps.values.amount)}
											</code>
										</Title>
										&nbsp;
										{typeSymbols[formikProps.values.type]}
									</SectionMain>
								</HeaderBackgroundUI>
								<SectionMain>
									<SelectInputUI icon={<FaEdit fontSize={30} color={colorSchema['primary']} />}>
										<InputBase
											placeholder="Escreva sobre a despesa"
											onChange={(e) => formikProps.setFieldValue('description', e.target.value)}
											id="standard-basic"
											value={formikProps.values.description}
											inputProps={{ 'aria-label': 'naked' }}
											fullWidth
											multiline
											rowsMax={3}
										/>
									</SelectInputUI>
									<SelectInputUI
										onClick={() => setOpen('category')}
										titleText="Categoria"
										icon={<FaListUl fontSize={30} color={colorSchema['primary']} />}
									>
										Selecione uma categoria de gastos
									</SelectInputUI>
									<SelectInputUI
										onClick={() => setOpen('account')}
										titleText="Conta/Carteira"
										icon={<FaWallet fontSize={30} color={colorSchema['primary']} />}
									>
										Escolha uma conta
									</SelectInputUI>
									<SelectInputUI
										onClick={() => setOpen('date')}
										titleText="Data"
										icon={<FaRegCalendarAlt fontSize={30} color={colorSchema['primary']} />}
									>
										{new Date().toLocaleDateString()}
									</SelectInputUI>
									<SelectInputUI
										onClick={() => setOpen('recurrence')}
										titleText="Recorrência"
										icon={<FiRepeat fontSize={30} color={colorSchema['primary']} />}
									>
										Decida entre gasto fixo/temporário
									</SelectInputUI>
								</SectionMain>

								<NumericInput formikProps={formikProps} />
								<SectionMain noPadding position="center">
									<Fab
										aria-label="add"
										className={classes.fabButton}
										onClick={formikProps.handleSubmit}
									>
										<AddIcon htmlColor="#fff" />
									</Fab>
								</SectionMain>
							</form>
						)}
				</Formik>
			</SectionMain>
		</Fade>
	)
}

export default IncomePage
