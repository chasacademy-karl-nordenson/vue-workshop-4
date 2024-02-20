<template>
  <div>
    <h2>Lägg till produkt</h2>
    <form @submit.prevent="addProduct">
      <label>Namn:</label>
      <input type="text" v-model="productName" required>
      <label>Pris:</label>
      <input type="number" v-model="productPrice" required>
      <button type="submit">Lägg till produkt</button>
    </form>
    <button @click="navigateToProductList">Till produktlistan</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useProductsStore } from '../store/products'; 

const router = useRouter();
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

const navigateToProductList = () => {
  router.push('/products/list');
};
</script>
