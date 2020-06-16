import axios from 'axios'
import headers from './headers'
const request = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000,
  headers: headers(),
})

request.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

request.interceptors.response.use(
  (response) => {
    return Promise.resolve(response.data)
  },
  (error) => {
    console.error(error)
    return Promise.reject(error.response)
  }
)

export default request
