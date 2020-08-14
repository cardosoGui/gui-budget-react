export default () => {
	const storeCategories = localStorage.getItem('categories')

	const categories = [
		{
			label: 'Bares & Restaurantes',
			id: +new Date().toString().substring(7)
		},
		{
			label: 'Roupas',
			id: +new Date().toString().substring(7)
		},
		{
			label: 'Comida',
			id: +new Date().toString().substring(7)
		},
		{
			label: 'Grocerias/Mercado',
			id: +new Date().toString().substring(7)
		}
	]

	const onSetStorage = async () => {
		try {
			if (!storeCategories) {
				const payload = JSON.stringify(categories)
				await localStorage.setItem('categories', payload)
			}
		} catch (e) {
			console.log(e)
			alert('erro a sincronizar')
		}
	}

	return onSetStorage()
}
