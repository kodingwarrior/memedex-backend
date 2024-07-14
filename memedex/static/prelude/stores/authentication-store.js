import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useAuthenticationStore = defineStore('authentication', {
  state: () => ({
    jwtToken: useLocalStorage('jwtToken', null),
  }),
  getters: {
    isAuthenticated(state) {
      return state?.jwtToken !== null
    }
  },
  actions: {
    async login(username, password) {
      const response = await fetch('/api/token/pair', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      const { access: token } = await response.json()
      this.jwtToken = token;
      window.location.reload();
    },
    logout() {
      this.jwtToken = null
      window.location.reload();
    },
  },
});
