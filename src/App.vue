<!-- App.vue -->

<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { createApp, onMounted } from 'vue'; // Import createApp from Vue
import { createPinia } from 'pinia'; // Import createPinia from Pinia
import Header from './components/Header.vue';
import { useAuthStore } from './store/auth'; // Import useAuthStore
import { router } from './router';

const pinia = createPinia(); // Create Pinia instance
const app = createApp(); // Create Vue app instance

app.use(pinia); // Use Pinia

onMounted(() => {
  const authStore = useAuthStore(); // Use useAuthStore
  if (authStore.isLoggedIn) {
    console.log('User is already logged in');
  } else {
    console.log('User is not logged in');
  }
});
</script>

