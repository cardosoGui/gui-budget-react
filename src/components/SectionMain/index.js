import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	root: {
		padding: (theme) => (theme.noPadding ? 0 : theme.miniPadding ? '10px 0' : '15px 0'),
		justifyContent: (theme) => theme.position
	}
})

const SectionMain = ({ children, position, noPadding, miniPadding, style, ...props }) => {
	const classes = useStyles({ noPadding, miniPadding, position })
	return (
		<Grid className={classes.root} container style={{ ...style }} {...props}>
			{children}
		</Grid>
	)
}

export default SectionMain
