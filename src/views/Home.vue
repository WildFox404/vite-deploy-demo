<!-- filepath: /Users/zhuanz/vite-deploy-demo/src/views/Home.vue -->
<template>
  <div class="container">
    <button @click="toggleTheme">Toggle Theme</button>
    <h1>123123</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()

const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  document.documentElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('mode', newTheme)
}
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s, color 0.3s;

  // 明亮模式样式
  background-color: #ffffff;
  color: #000000;

  // 黑暗模式样式
  [data-theme="dark"] & {
    background-color: #313131;
    color: #ffffff;
  }
}
</style>