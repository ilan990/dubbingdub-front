<template>
  <div>
    <div v-if="isLoggedIn">
      <p>Vous êtes déjà connecté.</p>
      <router-link to="/dashboard">Aller au tableau de bord</router-link>
    </div>
    <form v-else @submit.prevent="handleLogin">
      <input v-model="email" type="email" placeholder="Email" required>
      <input v-model="password" type="password" placeholder="Mot de passe" required>
      <button type="submit">Se connecter</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters('auth', ['isLoggedIn'])
  },
  methods: {
    ...mapActions('auth', ['login']),
    async handleLogin() {
      try {
        this.errorMessage = '' // Réinitialiser le message d'erreur
        await this.login({ email: this.email, mot_de_passe: this.password })
        this.$router.push('/dashboard')
      } catch (error) {
        console.error('Erreur de connexion:', error)
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = "Une erreur est survenue lors de la connexion"
        }
      }
    }
  }
}
</script>

<style scoped>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>