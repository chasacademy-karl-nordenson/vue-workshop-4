<template>
  <header>
    <h1>Workshop 4 - Vue</h1>
    <div v-if="authStore.isLoggedIn">
      <p>Välkommen, user!</p>
      <button @click="logout">Logga ut</button>
    </div>
    <div v-else>
      <p>Logga in, snälla. </p>
      <router-link to="/login">Logga in</router-link>
    </div>
    <div >
      <router-link to="/products">Till Produkter</router-link>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout();
  router.push('/');
};
</script>

<style>
header {
  background-color: #333;
  color: white;
  padding: 1em;
  display: flex;
  justify-content: space-between;
}
</style>
