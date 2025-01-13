<!-- filepath: /Users/zhuanz/Desktop/1111/vite-deploy-demo/src/views/About.vue -->
<template>
  <div>
    <h1>About Page</h1>
    <router-link to="/">Go to Home</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()
</script>