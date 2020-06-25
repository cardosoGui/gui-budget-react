import React from 'react'
import UserAvatarUI from './UserAvatarUI'
import UserAvatarWrapper from './UserAvatarWrapper'

const UserAvatar = () => {
	return <UserAvatarWrapper>{({ user }) => <UserAvatarUI user={user} />}</UserAvatarWrapper>
}

export default UserAvatar
