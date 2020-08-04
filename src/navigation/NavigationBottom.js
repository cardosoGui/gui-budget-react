import React from 'react'
import { BottomNavigation, BottomNavigationAction, makeStyles } from '@material-ui/core'
import { RiHomeSmileLine, RiExchangeDollarLine } from 'react-icons/ri'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { MdTimeline } from 'react-icons/md'
import { useHistory } from 'react-router-dom'
import { useAppContext } from '../store/AppContext'

const useStyles = makeStyles({
	root: {
		background: '#eee',
		position: 'fixed',
		bottom: 0,
		width: '100%',
		borderTop: 'solid 1px #0000001a'
	},
	icon: { color: ({ primary }) => primary }
})

const NavigationBottom = () => {
	const history = useHistory()
	const { colorSchema, setAppState, screen } = useAppContext()

	const classes = useStyles({ primary: colorSchema['primary'] })

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
		{ route: '/budget', label: 'Carteira', icon: <MdTimeline size={25} className={classes.icon} /> }
		// { route: 'settings', label: 'Objetivos', icon: <GiTriangleTarget size={25} className={classes.icon} /> }
	]

	return (
		<BottomNavigation className={classes.root}>
			{menus.map(({ label, route, icon }) => (
				<BottomNavigationAction
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
