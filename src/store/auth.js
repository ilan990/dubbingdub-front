// src/store/auth.js
import axios from 'axios'
import { API_BASE_URL } from '../config/api'

let tokenCheckInterval = null

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    user: null,
    status: ''
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, { token, user }) {
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
      state.token = ''
      state.user = null
    },
    logout(state) {
      state.status = ''
      state.token = ''
      state.user = null
    }
  },
  actions: {
    login({ commit, dispatch }, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          console.log('Tentative de connexion avec:', user)
          axios.post(`${API_BASE_URL}/auth/login`, user)
            .then(resp => {
              console.log('Réponse du serveur:', resp.data)
              if (resp.data.token) {
                const { userId, role, token } = resp.data
                console.log('Token reçu:', token)
                localStorage.setItem('token', token)
                console.log('Token stocké dans localStorage:', localStorage.getItem('token'))
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
                commit('auth_success', { token, user: { id: userId, role } })
                dispatch('startPeriodicTokenCheck')
                resolve(resp)
              } else {
                console.log('Aucun token reçu dans la réponse')
                throw new Error('Token not received')
              }
            })
            .catch(err => {
              console.error('Erreur lors de la connexion:', err.response ? err.response.data : err.message)
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
        })
      },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        if (tokenCheckInterval) {
          clearInterval(tokenCheckInterval)
          tokenCheckInterval = null
        }
        resolve()
      })
    },
    checkAuth({ commit, dispatch }) {
        return new Promise((resolve) => {  // Supprimé 'reject' ici
          const token = localStorage.getItem('token')
          if (token) {
            axios.get(`${API_BASE_URL}/auth/verify`, {
              headers: { 'Authorization': `Bearer ${token}` }
            })
              .then(response => {
                if (response.data.valid) {
                  const user = { id: response.data.userId, role: response.data.role }
                  commit('auth_success', { token, user })
                  resolve(true)
                } else {
                  dispatch('logout')
                  resolve(false)
                }
              })
              .catch(error => {
                console.error('Error checking auth:', error)
                dispatch('logout')
                resolve(false)
              })
          } else {
            resolve(false)
          }
        })
      },
      startPeriodicTokenCheck({ dispatch }) {
      if (tokenCheckInterval) {
        clearInterval(tokenCheckInterval)
      }
      tokenCheckInterval = setInterval(() => {
        dispatch('checkAuth')
      }, 15 * 60 * 1000) // Vérification toutes les 15 minutes
    }
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => state.user
  }
}