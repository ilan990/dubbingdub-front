<template>
    <div class="home">
      <h1 class="text-3xl font-bold text-center mt-8">Bienvenue sur l'application de doublage</h1>
      <p class="text-center mt-4">Connectez-vous pour accéder à votre tableau de bord.</p>
      <div class="text-center mt-8">
        <router-link 
          to="/login" 
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Se connecter
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage'
  }
  </script>