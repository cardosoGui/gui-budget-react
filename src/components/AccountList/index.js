import React from 'react'
import AccountListWrapper from './AccountListWrapper'
import AccountListUI from './AccountListUI'

const AccountList = () => {
	return <AccountListWrapper>{({ account }) => <AccountListUI account={account} />}</AccountListWrapper>
}

export default AccountList
