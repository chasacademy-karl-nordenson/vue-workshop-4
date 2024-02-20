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
import { ref } from 'vue';

const productsStore = useProductsStore();
const totalProducts = ref(productsStore.totalProducts);

const expensiveProducts = ref([]);

const updateExpensiveProducts = () => {

  const priceThreshold = 50; 
  expensiveProducts.value = productsStore.productsAbovePrice(priceThreshold);
};

const removeProduct = (productId) => {
  productsStore.removeProduct(productId);

  updateExpensiveProducts();

  totalProducts.value = productsStore.totalProducts;
};


updateExpensiveProducts();
</script>
