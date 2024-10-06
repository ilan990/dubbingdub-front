// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api/axios'
import './assets/main.css'

const app = createApp(App)

// Configurer axios pour utiliser le token dans toutes les requêtes
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => Promise.reject(error)
)

// Vérifier l'authentification au démarrage de l'application
store.dispatch('auth/checkAuth')

// Démarrer la vérification périodique du token
store.dispatch('auth/startPeriodicTokenCheck')

app.use(router)
app.use(store)

app.mount('#app')