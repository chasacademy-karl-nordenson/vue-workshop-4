<template>
  <header>
    <h1>My App</h1>
    <div v-if="authStore.isLoggedIn">
      <p>Welcome, User!</p>
      <button @click="logout">Log Out</button>
    </div>
    <div v-else>
      <p>Please log in</p>
      <router-link to="/login">Log In</router-link>
    </div>
    <div >
      <router-link to="/products">To Products</router-link>
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
