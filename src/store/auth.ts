// store/auth.ts

import { defineStore } from 'pinia';

interface AuthState {
  isLoggedIn: boolean;
}

interface AuthActions {
  login(this: AuthState): void;
  logout(this: AuthState): void;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    isLoggedIn: false
  }),
  actions: {
    login(this: AuthState) {
      this.isLoggedIn = true;
    },
    logout(this: AuthState) {
      this.isLoggedIn = false;
    }
  }
});
