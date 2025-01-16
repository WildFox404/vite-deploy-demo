
<template>
  <div :class="themeClass" class="container">
    <div class="nav-bar">
      <div class="nav-bar-content">
          123
      </div>
    </div>
    <router-view></router-view>
    <h1 style="color: #000;">Home Page</h1>
    <p class="text" @click="toggleTheme">This is a paragraph312312312312312312312312312.</p>
    <button @click="toggleTheme">Toggle Theme</button>
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

<style scoped lang="scss">
.container{
  position: relative;
  align-items: center;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
}
.nav-bar{
  z-index: 9999;
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-bar-content{
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    color-scheme: dark;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    grid-template-rows: 24px auto;
    grid-template-columns: 1fr;
    justify-content: center;
    width: 100%;
    height: 76px;
    background: linear-gradient(137deg,rgba(17,18,20,.75) 4.87%,rgba(12,13,15,.9) 75.88%);
    backdrop-filter: blur(5px);
    border: 1px solid var(--Card-Border,hsla(0,0%,100%,.06));
    border-radius: 16px;
    box-shadow: inset 0 1px 1px 0 hsla(0,0%,100%,.15);

    overflow: visible;
    flex: 1;
    max-width: 1204px;
  }
}

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
  background-color: #07090a;
  color: white;
}
</style>
