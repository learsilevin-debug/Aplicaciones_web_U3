<template>
  <!-- Esto inyecta las rutas, en este caso cargará el HomeView -->
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style>
/* Estilos globales con fondo de gimnasio */
body {
  margin: 0;
  /* Degradado oscuro + Imagen de gimnasio de Unsplash */
  background: linear-gradient(rgba(15, 15, 15, 0.85), rgba(15, 15, 15, 0.95)), 
              url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1920&auto=format&fit=crop') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>