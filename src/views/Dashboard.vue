<template>
    <div class="min-h-screen bg-gray-100 p-4">
      <h1 class="text-2xl font-bold text-gray-900 mb-4">Dashboard</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-sm font-medium text-gray-500">Projets en cours</h2>
          <p class="text-2xl font-semibold">12</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-sm font-medium text-gray-500">Doublages terminés</h2>
          <p class="text-2xl font-semibold">89</p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-sm font-medium text-gray-500">Heures enregistrées</h2>
          <p class="text-2xl font-semibold">1,245</p>
        </div>
      </div>
  
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-2">Projets par mois</h2>
          <div class="h-48 bg-gray-200 rounded-md">
            <!-- Remplacer par un vrai graphique -->
          </div>
        </div>
        
        <div class="bg-white p-4 rounded-lg shadow">
          <h2 class="text-lg font-medium mb-2">Tâches récentes</h2>
          <ul class="space-y-2">
            <li class="flex items-center text-sm">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Terminer le doublage de la scène 5
            </li>
            <li class="flex items-center text-sm">
              <span class="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              Réviser le script du film "Aventures Spatiales"
            </li>
            <li class="flex items-center text-sm">
              <span class="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Planifier la session d'enregistrement pour "Les Mystères de Paris"
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardPage',
    // Ajoutez ici la logique pour charger les données réelles
  }
  </script>