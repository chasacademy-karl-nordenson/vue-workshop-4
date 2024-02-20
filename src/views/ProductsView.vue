<template>
    <div>
      <h2>Produkter</h2>
      <nav>
        <router-link id="addProductButton" to="/products/add">Lägg till produkt</router-link>
        <router-link to="/products/list">Produktlista</router-link>
      </nav>
      <router-view></router-view> 
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>

#addProductButton {
  margin-right: 5rem;
}
  </style>
  