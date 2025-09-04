import axios from 'axios'

// Create axios instance
const api = axios.create({
  baseURL: 'https://mocki.io/v1', // ✅ keep domain here
  timeout: 10000, // 10s timeout
})


api.interceptors.request.use(
  (config) => {
    // Example: Add Authorization header
    // const token = store.getState().auth.token
    // if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralized error logging
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export default api
