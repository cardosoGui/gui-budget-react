import React from 'react'
import { Container, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
	root: { padding: '0px 0px 60px' }
}))

const AppLayoutUI = ({ children }) => {
	const classes = useStyles()
	return <Container className={classes.root}>{children}</Container>
}

export default AppLayoutUI
