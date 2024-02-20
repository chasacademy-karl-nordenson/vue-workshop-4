
<template>
    <div>
      <h2>Dashboard</h2>
      <p>Skyddad sida. Åtkomst ges när du är inloggad. Vilket du är!</p>
      <button @click="logout">Logga ut</button>
    </div>
  </template>
  
  <script setup>
  import { useAuthStore } from '../store/auth';
  import { useRouter } from 'vue-router';
  
  const authStore = useAuthStore();
  const router = useRouter();
  
  const logout = () => {
  authStore.logout();
  console.log('Logging out...');
  router.push('/');
  console.log('Redirecting to home page...');
};
  </script>
  