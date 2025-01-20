import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('mode') === 'dark')

  function toggleTheme() {
    const newMode = isDark.value ? 'light' : 'dark'
    document.documentElement.classList.remove(isDark.value ? 'dark' : 'light')
    document.documentElement.classList.add(newMode)
    localStorage.setItem('mode', newMode)
    isDark.value = !isDark.value
  }

  return { isDark, toggleTheme }
})
