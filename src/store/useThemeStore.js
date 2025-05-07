import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDark:
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') &&
        document.documentElement.classList.contains('dark'))
  }),
  actions: {
    toggleTheme () {
      this.isDark = !this.isDark
      if (this.isDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },
    initTheme () {
      if (this.isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    },
    getters: {
      currentTheme: state => {
        return state.isDark ? 'dark' : 'light'
      }
    }
  }
})
