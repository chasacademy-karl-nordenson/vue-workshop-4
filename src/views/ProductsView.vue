<template>
    <div>
      <h2>Products</h2>
      <nav>
        <router-link to="/products/add">Add Product</router-link>
        <router-link to="/products/list">Product List</router-link>
      </nav>
      <router-view></router-view> 
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>

  </style>
  