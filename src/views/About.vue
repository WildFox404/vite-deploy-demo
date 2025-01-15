<!-- filepath: /Users/zhuanz/Desktop/1111/vite-deploy-demo/src/views/About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <router-link to="/">Go to Home</router-link>
    <button class="bg-white text-black dark:bg-black dark:text-white">Button</button>
    <p class="text-black dark:text-white">This is a paragraph.</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()
</script>