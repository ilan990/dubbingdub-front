// src/api/axios.js
import axios from 'axios'
import store from '../store'
import router from '../router'

// Créer une instance axios avec une URL de base
const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// Ajouter un intercepteur pour gérer les erreurs d'authentification
instance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status === 401) {
      // Si nous recevons une erreur 401, déconnectez l'utilisateur et redirigez vers la page de connexion
      store.dispatch('auth/logout')
      router.push({ name: 'Login' })
    }
    return Promise.reject(error)
  }
)


export default instance