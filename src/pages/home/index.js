import React, { useEffect } from 'react'
import SectionMain from '../../components/SectionMain'
import ViewMoney from '../../components/ViewMoney'
import CardUI from '../../components/CardUI'
import Title from '../../components/Title'
import { IconButton, Fade } from '@material-ui/core'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import AccountList from '../../components/AccountList'
import { useAppContext } from '../../store/AppContext'

const HomePage = () => {
	const { colorSchema, setAppState } = useAppContext()

	useEffect(() => {
		setAppState({ screen: '/' })
		// eslint-disable-next-line
	}, [])

	return (
		<Fade in={true} timeout={700}>
			<SectionMain noPadding>
				<ViewMoney />
				<SectionMain>
					<CardUI>
						<SectionMain noPadding position="space-between" alignItem="center">
							<Title type="bold" size="medium">
								Contas
							</Title>
							<IconButton size="small">
								<BsFillPlusCircleFill size={25} color={colorSchema['primary']} />
							</IconButton>
						</SectionMain>
						<SectionMain>
							<AccountList />
						</SectionMain>
					</CardUI>
					<CardUI>
						<SectionMain noPadding position="space-between" alignItem="center">
							<Title type="bold" size="medium">
								Cartões
							</Title>
							<IconButton size="small">
								<BsFillPlusCircleFill size={25} color={colorSchema['primary']} />
							</IconButton>
						</SectionMain>
						<SectionMain miniPadding position="center">
							<img
								alt="credit card animation"
								width={100}
								src="https://firebasestorage.googleapis.com/v0/b/gui-budget.appspot.com/o/animations%2Fcreditcard_animation.gif?alt=media&token=89775e37-75fb-46de-970f-076a67704d88"
							/>
							{/* <BsCreditCard size={50} color="#0000008a" /> */}
						</SectionMain>
						<SectionMain miniPadding position="center">
							<Title type="bold" color="#0000008a" size="medium" align="center">
								Adicione seus cartões
							</Title>
						</SectionMain>
						<SectionMain noPadding position="center">
							<Title color="#2828288a" size="small" align="center">
								Acompanhe o limite e as faturas de seus cartões.
							</Title>
						</SectionMain>
					</CardUI>
					<CardUI>
						<SectionMain noPadding position="space-between" alignItem="center">
							<Title type="bold" size="medium">
								Objetivos
							</Title>
							<IconButton size="small">
								<BsFillPlusCircleFill size={25} color={colorSchema['primary']} />
							</IconButton>
						</SectionMain>
						<SectionMain miniPadding position="center">
							<img
								alt="target_animation"
								width={100}
								src="https://firebasestorage.googleapis.com/v0/b/gui-budget.appspot.com/o/animations%2Ftarget_animation.gif?alt=media&token=ef598681-fed9-4a55-84a5-e63689cf533b"
							/>
						</SectionMain>
						<SectionMain miniPadding position="center">
							<Title type="bold" color="#0000008a" size="medium" align="center">
								Defina seus objetivos financeiros
							</Title>
						</SectionMain>
						<SectionMain noPadding position="center">
							<Title color="#2828288a" size="small" align="center">
								Conquiste seus sonhos e controle melhor o seu dinheiro.
							</Title>
						</SectionMain>
					</CardUI>
				</SectionMain>
			</SectionMain>
		</Fade>
	)
}

export default HomePage
