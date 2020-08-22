import React from 'react'
import { Slide, DialogContent, Dialog, makeStyles } from '@material-ui/core'
import Title from '../Title'
import BackButton from '../BackButton'
import SectionMain from '../SectionMain'
import { useAppContext } from '../../store/AppContext'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles({ root: { padding: 10, alignItems: 'center' } })

const Modal = ({ children, title, openModal, handleClose }) => {
	const classes = useStyles()
	const { colorSchema } = useAppContext()
	return (
		<Dialog open={openModal} TransitionComponent={Transition} fullScreen keepMounted>
			<SectionMain className={classes.root}>
				<BackButton htmlColor="#282828" onClick={handleClose} />
				<Title size="large" color={colorSchema['primary']}>
					{title}
				</Title>
			</SectionMain>
			<DialogContent>{children}</DialogContent>
		</Dialog>
	)
}

export default Modal
