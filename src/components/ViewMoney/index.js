import React from 'react'
import ViewMoneyWrapper from './ViewMoneyWrapper'
import ViewMoneyUI from './ViewMoneyUI'
import { useAppContext } from '../../store/AppContext'

const ViewMoney = () => {
	const { user } = useAppContext()

	return <ViewMoneyWrapper amount={user.amount}>{({ amount }) => <ViewMoneyUI amount={amount} />}</ViewMoneyWrapper>
}

export default ViewMoney
