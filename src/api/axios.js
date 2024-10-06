// src/api/axios.js
import axios from 'axios'
import store from '../store'
import router from '../router'
import { API_BASE_URL } from '../config/api'

// Créer une instance axios avec une URL de base
const instance = axios.create({
  baseURL: API_BASE_URL
})

// Ajouter un intercepteur pour gérer les erreurs d'authentification
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      store.dispatch('auth/logout')
      router.push({ name: 'Login' })
    }
    return Promise.reject(error)
  }
)


export default instance