<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div v-if="isLoggedIn">
        <p class="mt-6 text-center text-xl text-gray-900">
          Vous êtes déjà connecté.
        </p>
        <div class="mt-4 text-center">
          <router-link to="/dashboard" class="text-indigo-600 hover:text-indigo-500">
            Aller au tableau de bord
          </router-link>
        </div>
      </div>
      <div v-else>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Connectez-vous à votre compte
        </h2>
        <form class="mt-8 space-y-6" @submit.prevent="login">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">Adresse e-mail</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Adresse e-mail" v-model="email" />
            </div>
            <div>
              <label for="password" class="sr-only">Mot de passe</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Mot de passe" v-model="password" />
            </div>
          </div>

          <div>
            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Se connecter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    login() {
      this.$store.dispatch('login', { email: this.email, mot_de_passe: this.password })
        .then(() => this.$router.push('/dashboard'))
        .catch(err => console.log(err))
    }
  }
}
</script>