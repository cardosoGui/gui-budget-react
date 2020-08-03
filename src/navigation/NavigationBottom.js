import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { RiHomeSmileLine, RiExchangeDollarLine } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdTimeline } from 'react-icons/md'
import { useHistory } from 'react-router-dom'

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
	const history = useHistory()
	const currentRoute = history.location.pathname
	const classes = useStyles()

	const handleNavigation = (route) => {
		history.push(route)
	}

	const menus = [
		{ route: '/', label: 'Início', icon: <RiHomeSmileLine size={25} color="#3366FF" /> },
		{ route: 'transactions', label: 'Transações', icon: <RiExchangeDollarLine size={25} color="#3366FF" /> },
		{
			route: 'income',
			label: 'Despesas',
			icon: <BsFillPlusCircleFill size={25} color="#3366FF" />
		},
		{ route: 'budget', label: 'Carteira', icon: <MdTimeline size={25} color="#3366FF" /> }
		// { route: 'settings', label: 'Objetivos', icon: <GiTriangleTarget size={25} color="#3366FF" /> }
	]

	return (
		<BottomNavigation className={classes.root}>
			{menus.map(({ label, route, icon }) => (
				<BottomNavigationAction
					key={label}
					onClick={(e) => handleNavigation(route)}
					showLabel={currentRoute === route}
					label={label}
					color="#282828"
					icon={icon}
				/>
			))}
		</BottomNavigation>
	)
}

export default NavigationBottom
