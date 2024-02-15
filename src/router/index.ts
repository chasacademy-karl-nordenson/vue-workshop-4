// index.ts
import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import { useAuthStore } from '../store/auth'; // Make sure this path is correct

// Declare routes before using them in createRouter
const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to: any, from: any, next: NavigationGuardNext) => {
      const authStore = useAuthStore();
      if (authStore.isLoggedIn) {
        next(); // Allow access to the Dashboard
      } else {
        next('/login'); // Redirect to the login page if not logged in
      }
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
