import React from 'react'
import SectionMain from '../SectionMain'
import Title from '../Title'
import { makeStyles } from '@material-ui/core'
import toCurrency from '../../utils/toCurrency'

const useStyles = makeStyles({
	container: {
		width: '33%'
	}
})

const BalanceTransactions = ({ earnings = 0, expenses = 0, todayBalance = 0 }) => {
	const classes = useStyles()
	return (
		<SectionMain noPadding position="space-between">
			<SectionMain className={classes.container} direction="column" position="space-between" alignItems="center">
				<Title>{toCurrency(earnings)}</Title>
				<Title variant="secondary">Ganhos</Title>
			</SectionMain>
			<SectionMain className={classes.container} direction="column" position="space-between" alignItems="center">
				<Title color="red">{toCurrency(expenses)} -</Title>
				<Title variant="secondary">Despesas</Title>
			</SectionMain>
			<SectionMain className={classes.container} direction="column" position="space-between" alignItems="center">
				<Title color="blue">{toCurrency(todayBalance)} +</Title>
				<Title variant="secondary">Total</Title>
			</SectionMain>
		</SectionMain>
	)
}

export default BalanceTransactions
