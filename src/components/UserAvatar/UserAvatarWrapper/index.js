import React from 'react'
import { useAppContext } from '../../../store/AppContext'

const UserAvatarWrapper = ({ children }) => {
	const { user } = useAppContext()
	return <div>{children({ user })}</div>
}

export default UserAvatarWrapper
