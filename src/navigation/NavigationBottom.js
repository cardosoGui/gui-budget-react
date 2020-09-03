import React, { useState, useEffect } from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { RiHomeSmileLine, RiExchangeDollarLine } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { GiTriangleTarget } from 'react-icons/gi'
import { MdTimeline } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../store/AppContext'

const useStyles = makeStyles({
	root: {
		borderRadius: 20,
		margin: '2.5vw',
		background: '#f8f8f8',
		position: 'fixed',
		bottom: 0,
		minWidth: '95%',
		maxWidth: '95vw',
		borderTop: 'solid 1px #0000001a',
		boxShadow: ({ colorTheme }) => `0px 5px 5px 1px ${colorTheme}b3`,
		display: ({ showBottomMenu }) => showBottomMenu
	},
	icon: { color: ({ colorTheme }) => colorTheme },
	wrapper: {
		minWidth: '20%'
	}
})

const NavigationBottom = () => {
	const history = useHistory()
	const { colorSchema, setAppState, screen } = useAppContext()
	const [ showMenu, setShowMenu ] = useState('flex')

	const renderBottomMenu = (route) => {
		switch (route) {
			case '/':
				return setShowMenu('flex')
			case '/transactions':
				return setShowMenu('flex')
			case '/income':
				return setShowMenu('none')
			case '/budget':
				return setShowMenu('flex')

			default:
				return setShowMenu('flex')
		}
	}

	const classes = useStyles({ colorTheme: colorSchema['primary'], showBottomMenu: showMenu })

	const handleNavigation = (route) => {
		setAppState({ screen: route })
		history.push(route)
	}

	const menus = [
		{ route: '/', label: 'Início', icon: <RiHomeSmileLine size={25} className={classes.icon} /> },
		{
			route: '/transactions',
			label: 'Transações',
			icon: <RiExchangeDollarLine size={25} className={classes.icon} />
		},
		{
			route: '/income',
			label: 'Despesas',
			icon: <BsFillPlusCircleFill size={25} className={classes.icon} />
		},
		{ route: '/budget', label: 'Carteira', icon: <MdTimeline size={25} className={classes.icon} /> },
		{ route: '/settings', label: 'Objetivos', icon: <GiTriangleTarget size={25} className={classes.icon} /> }
	]

	useEffect(
		() => {
			renderBottomMenu(screen)
		},
		[ screen, history ]
	)

	return (
		<BottomNavigation className={classes.root}>
			{menus.map(({ label, route, icon }) => (
				<BottomNavigationAction
					className={classes.wrapper}
					key={label}
					onClick={(e) => handleNavigation(route)}
					showLabel={screen === route}
					label={label}
					color="#282828"
					icon={icon}
				/>
			))}
		</BottomNavigation>
	)
}

export default NavigationBottom
