// src/services/api.js
import axios from 'axios'
import { API_BASE_URL } from '../config/api'

const apiService = {
  init() {
    axios.defaults.baseURL = API_BASE_URL
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