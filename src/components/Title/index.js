import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import { getSizeFont } from '../utils/getSizeFont'
import { useAppContext } from '../store/AppContext'

const useStyles = makeStyles({
	root: {
		fontSize: (theme) => theme.fontSize,
		color: (theme) => theme.color,
		fontWeight: (theme) => theme.fontWeight,
		textAlign: (theme) => theme.align
	}
})

const Title = ({ size, align, type = 'regular', variant, color = '#282828', fontWeight, children }) => {
	const { theme, colorSchema } = useAppContext()
	const weight = { bold: '600', regular: '400' }

	fontWeight = fontWeight ? fontWeight : weight[type]
	color = variant ? colorSchema[variant] : color
	const classes = useStyles({ fontSize: getSizeFont(size), fontWeight, align, ...theme.light, color })

	return <Typography className={classes.root}>{children}</Typography>
}

export default Title
