<!-- filepath: /Users/zhuanz/Desktop/1111/vite-deploy-demo/src/views/Home.vue -->
<template>
  <div class="container">
    <h1 >Home Page</h1>
    <router-link to="/about" class="mt-6">Go to About</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  
}>()
</script>

<style scoped lang="scss">
.container{
  height: 100vh;
  width: 100%;
  background-color: #07090a;
}
</style>