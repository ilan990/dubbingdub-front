// src/views/Logout.vue
<template>
  <div>
    <h1>Déconnexion</h1>
    <p>Déconnexion en cours...</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LogoutPage',
  mounted() {
    this.handleLogout()
  },
  methods: {
    ...mapActions('auth', ['logout']),
    async handleLogout() {
      await this.logout()
      // La redirection est gérée dans l'action du store
    }
  }
  
}
</script>