
<template>
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected page. Only accessible when logged in.</p>
      <button @click="logout">Log Out</button>
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
  