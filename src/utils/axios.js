import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60 * 60 * 1000 
})

//request interceptor
service.interceptors.request.use(config => {
  if (window.localStorage.access_token) {
    config.headers.Authorization = localStorage.access_token;
  }
  return config
}, error => {
  return Promise.reject(error)
})

//response interceptor
service.interceptors.response.use(response => {
  return response
}, error => {
  throw new Error(error)
  const { status } = error.response
  if (status === 401) {
    window.localStorage.removeItem('access_token');
    router.push('/login')
  }
  return Promise.reject(error);
})

export default service
