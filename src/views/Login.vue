<template>
  <div>
    <h2>Login</h2>
    <button @click="login">Log In</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();

const login = () => {

  authStore.login();


  router.push('/dashboard');
};
</script>
