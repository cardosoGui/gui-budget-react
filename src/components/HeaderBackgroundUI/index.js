import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useAppContext } from '../../store/AppContext'
import SectionMain from '../SectionMain'
import { useHistory } from 'react-router-dom'
import BackButton from '../BackButton'

const useStyles = makeStyles(() => ({
	root: {
		borderRadius: '0 0 20px 20px',
		paddingRight: 15,
		paddingLeft: 5,
		justifyContent: 'center',
		height: 150,
		background: ({ colorTheme }) => colorTheme,
		alignItems: 'center'
	},
	iconButton: {
		marginLeft: 6
	}
}))

const HeaderBackgroundUI = ({ children, rightComponent, backgroundColor = 'primary' }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema[backgroundColor] })
	const history = useHistory()
	return (
		<SectionMain className={classes.root}>
			<SectionMain noPadding>
				<SectionMain noPadding item xs={2}>
					<BackButton onClick={() => history.goBack()} />
				</SectionMain>
				<SectionMain noPadding item xs={10} position="flex-end">
					{rightComponent}
				</SectionMain>
			</SectionMain>
			{children}
		</SectionMain>
	)
}

export default HeaderBackgroundUI
