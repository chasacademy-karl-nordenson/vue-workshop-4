<!-- ProductList.vue -->

<template>
    <div>
      <h2>Product List</h2>
      <p>Total Products: {{ totalProducts }}</p>
      <ul>
        <li v-for="product in expensiveProducts" :key="product.id">
          {{ product.name }} - ${{ product.price }}
          <button @click="removeProduct(product.id)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useProductsStore } from '../store/products';
  
  const productsStore = useProductsStore();
  const totalProducts = productsStore.totalProducts;
  const expensiveProducts = productsStore.productsAbovePrice(50);
  
  const removeProduct = (productId) => {
    productsStore.removeProduct(productId);
  };
  </script>
  