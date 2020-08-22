import React from 'react'
import { useAppContext } from '../../store/AppContext'
import SectionMain from '../SectionMain'
import { makeStyles } from '@material-ui/core'
import Loader from 'react-loaders'
import 'loaders.css'
import Title from '../Title'

const useStyles = makeStyles({
	loader: {
		display: ({ loaderSpinner }) => (loaderSpinner ? 'flex' : 'none'),
		height: '500px',
		justifyContent: 'center',
		alignItems: 'center',
		transition: '0.5s',
		flexDirection: 'column'
	},
	text: { paddingTop: 30, justifyContent: 'center' }
})

const LoaderSpinner = ({ loading }) => {
	const { colorSchema } = useAppContext()
	const classes = useStyles({ loaderSpinner: loading })

	return (
		<SectionMain className={classes.loader}>
			<Loader type="ball-scale-ripple-multiple" active color={colorSchema['primary']} />
			<SectionMain className={classes.text}>
				<Title size="small">carregando...</Title>
			</SectionMain>
		</SectionMain>
	)
}

export default LoaderSpinner
