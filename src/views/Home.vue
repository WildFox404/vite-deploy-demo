<!-- filepath: /Users/zhuanz/Desktop/1111/vite-deploy-demo/src/views/Home.vue -->
<template>
  <div class="container">
    <img src="@assets/vue.svg" alt="">
    <h1>Home Page</h1>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  msg: string
}>()
</script>

<style scoped lang="scss">
.container {
  width: 100%;
  height: 100%;
  /* Add your background pattern here */
  background-color: #313131;
  background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
  background-size: 30px 30px;
  background-position: -5px -5px
}
</style>