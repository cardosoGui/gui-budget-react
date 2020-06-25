import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { RiHomeSmileLine, RiExchangeDollarLine } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdTimeline } from 'react-icons/md'
import { useAppContext } from '../store/AppContext'

const useStyles = makeStyles({
	root: {
		background: '#eee',
		position: 'fixed',
		bottom: 0,
		width: '100%',
		borderTop: 'solid 1px #0000001a'
	}
})

const NavigationBottom = () => {
	const { screen, setAppState } = useAppContext()
	const classes = useStyles()

	const handleNavigation = (screen) => {
		setAppState({ screen })
	}

	const menus = [
		{ screen: 'home', label: 'Início', icon: <RiHomeSmileLine size={25} color="#3366FF" /> },
		{ screen: 'transactions', label: 'Transações', icon: <RiExchangeDollarLine size={25} color="#3366FF" /> },
		{
			screen: 'income',
			label: 'Despesas',
			icon: <BsFillPlusCircleFill size={25} color="#3366FF" />
		},
		{ screen: 'budget', label: 'Carteira', icon: <MdTimeline size={25} color="#3366FF" /> }
		// { screen: 'settings', label: 'Objetivos', icon: <GiTriangleTarget size={25} color="#3366FF" /> }
	]

	return (
		<BottomNavigation className={classes.root}>
			{menus.map((button) => (
				<BottomNavigationAction
					key={button.label}
					onClick={(e) => handleNavigation(button.screen)}
					showLabel={screen === button.screen}
					label={button.label}
					color="#282828"
					icon={button.icon}
				/>
			))}
		</BottomNavigation>
	)
}

export default NavigationBottom
