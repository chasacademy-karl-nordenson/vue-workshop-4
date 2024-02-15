<template>
    <div>
      <h2>Add Product</h2>
      <form @submit.prevent="addProduct">
        <label>Name:</label>
        <input type="text" v-model="productName" required>
        <label>Price:</label>
        <input type="number" v-model="productPrice" required>
        <button type="submit">Add Product</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useProductsStore } from '../store/products';
  
  const productsStore = useProductsStore();
  const productName = ref('');
  const productPrice = ref(0);
  
  const addProduct = () => {
    const newProduct = {
      id: Date.now(),
      name: productName.value,
      price: productPrice.value,
    };
    productsStore.addProduct(newProduct);
    productName.value = '';
    productPrice.value = 0;
  };
  </script>
  