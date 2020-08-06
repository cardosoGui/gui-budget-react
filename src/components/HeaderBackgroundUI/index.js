import React from 'react'
import { makeStyles, IconButton } from '@material-ui/core'
import { useAppContext } from '../../store/AppContext'
import SectionMain from '../SectionMain'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import { useHistory } from 'react-router-dom'

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

const HeaderBackgroundUI = ({ children }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ colorTheme: colorSchema['primary'] })
	const history = useHistory()
	return (
		<SectionMain className={classes.root}>
			<SectionMain noPadding>
				<IconButton size="small" onClick={() => history.goBack()}>
					<ArrowBackIosIcon className={classes.iconButton} htmlColor="#fff" />
				</IconButton>
			</SectionMain>
			{children}
		</SectionMain>
	)
}

export default HeaderBackgroundUI
