<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import { createApp, onMounted } from 'vue'; 
import { createPinia } from 'pinia'; 
import Header from './components/Header.vue';
import { useAuthStore } from './store/auth'; 
import { router } from './router';

const pinia = createPinia(); 
const app = createApp(); 

app.use(pinia); 

onMounted(() => {
  const authStore = useAuthStore(); 
  if (authStore.isLoggedIn) {
    console.log('User is already logged in');
  } else {
    console.log('User is not logged in');
  }
});
</script>

