// src/services/api.js
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

const apiService = {
  init() {
    axios.defaults.baseURL = API_URL
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  },

  setHeader() {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
  },

  removeHeader() {
    axios.defaults.headers.common = {}
  },

  get(resource) {
    return axios.get(resource)
  },

  post(resource, data) {
    return axios.post(resource, data)
  },

  put(resource, data) {
    return axios.put(resource, data)
  },

  delete(resource) {
    return axios.delete(resource)
  },

  customRequest(data) {
    return axios(data)
  }
}

export default apiService