
<template>
  <div :class="themeClass">
    <button @click="toggleTheme">Toggle Theme</button>
    <router-view></router-view>
    <p class="text">This is a paragraph.</p>
  </div>
</template>

<script setup>
import { computed, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

const themeClass = computed(() => {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
})

const toggleTheme = () => {
  proxy.$toggleTheme()
}
</script>

<style scoped>
.light .text {
  color: black;
}

.dark .text {
  color: white;
}

.light button {
  background-color: white;
  color: black;
}

.dark button {
  background-color: black;
  color: white;
}
</style>
