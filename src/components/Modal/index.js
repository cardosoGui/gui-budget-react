import React from 'react'
import { useState } from 'react'
import { Slide, DialogTitle, DialogContent, Dialog } from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

const Modal = ({ children, title, openModal = false }) => {
	const [ open, setOpen ] = useState(openModal)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContent id="alert-dialog-slide-description">{children}</DialogContent>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
