import React from 'react'
import { useAppContext } from '../../store/AppContext'
import { GoPin } from 'react-icons/go'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const CategoryIcons = ({ tagName }) => {
	const { colorSchema } = useAppContext()

	const reactIconsLibrary = {
		GoPin: GoPin,
		HiOutlineShoppingBag: HiOutlineShoppingBag
	}

	const TagName = reactIconsLibrary[tagName]
	return <TagName fontSize={30} color={colorSchema['primary']} />
}

export default CategoryIcons
