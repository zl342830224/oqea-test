import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 60 * 60 * 1000 
})

export default service
