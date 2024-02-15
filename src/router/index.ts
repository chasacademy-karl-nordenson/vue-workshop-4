import { createRouter, createWebHistory, RouteRecordRaw, NavigationGuardNext} from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import { useAuthStore } from '../store/auth'; 


const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to: any, from: any, next: NavigationGuardNext) => {
      const authStore = useAuthStore();
      if (authStore.isLoggedIn) {
        next(); 
      } else {
        next('/login'); 
      }
    },
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
