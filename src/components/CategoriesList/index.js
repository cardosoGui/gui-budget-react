import React from 'react'
import useGetCategory from '../../hooks/useGetCategory'
import SectionMain from '../SectionMain'
import SelectInputUI from '../SelectInputUI'
import CategoryIcons from './CategoryIcons'
import LoaderSpinner from '../LoaderSpinner'

const CategoriesList = () => {
	const [ categories, , loaderSpinner ] = useGetCategory()

	return (
		<SectionMain noPadding alignItems="center">
			<LoaderSpinner loading={loaderSpinner} />
			{categories.map((category) => (
				<SelectInputUI
					onClick={() => alert('teste')}
					titleText={category.name}
					icon={<CategoryIcons tagName={category.icon} />}
				/>
			))}
		</SectionMain>
	)
}

export default CategoriesList
