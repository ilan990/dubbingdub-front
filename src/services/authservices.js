import api from './api'

export default {
  register(userData) {
    return api.post('/auth/register', userData)
  },
  
  login(credentials) {
    return api.post('/auth/login', credentials)
  },
  
  logout() {
    return api.post('/auth/logout')
  },
  
  getUserInfo() {
    return api.get('/auth/me')
  },
  
  updateProfile(profileData) {
    return api.put('/auth/profil', profileData)
  }
}