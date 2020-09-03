import { useState, useEffect } from 'react'
import api from '../core/api'

const useGetCategory = (id) => {
	const [ category, setCategory ] = useState({ item: '', list: [], loader: true })

	const fetchData = async () => {
		try {
			if (id) {
				await api.get(`/categories/${id}`).then((res) => {
					const item = res.data
					setCategory({ ...category, item, loader: false })
				})
			} else {
				const store = sessionStorage.getItem('categories')
				if (store) {
					setCategory({ ...category, list: JSON.parse(store), loader: false })
				} else {
					await api.get('/categories').then((res) => {
						const list = res.data
						setCategory({ ...category, list, loader: false })
						return sessionStorage.setItem('categories', JSON.stringify(list))
					})
				}
			}
		} catch (e) {
			setCategory({ loader: false })
		}
	}

	useEffect(() => {
		fetchData()
		// eslint-disable-next-line
	}, [])

	return [ category.list, category.item, category.loader ]
}

export default useGetCategory
