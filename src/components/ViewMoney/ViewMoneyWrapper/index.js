import React from 'react'
import SectionMain from '../../SectionMain'

const ViewMoneyWrapper = ({ children, amount }) => {
	return <SectionMain noPadding>{children({ amount: amount })}</SectionMain>
}

export default ViewMoneyWrapper
