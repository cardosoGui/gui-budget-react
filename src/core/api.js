import axios from 'axios'

const baseURL = process.env.REACT_APP_API_URL

const api = axios.create({ baseURL })

api.interceptors.request.use((config) => ({
	...config,
	headers: {
		...config.headers,
		Authorization: `Bearer ${localStorage.getItem('token') || ''}`
	}
}))

export default api
