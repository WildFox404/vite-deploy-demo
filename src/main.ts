import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import './index.css'

const app = createApp(App)

// 读取 localStorage 中的 mode 并设置初始主题
const mode = localStorage.getItem('mode') || 'light'
document.documentElement.classList.add(mode)

// 切换主题的方法
// const toggleTheme = () => {
//   const currentMode = document.documentElement.classList.contains('dark') ? 'dark' : 'light'
//   const newMode = currentMode === 'dark' ? 'light' : 'dark'
//   document.documentElement.classList.remove(currentMode)
//   document.documentElement.classList.add(newMode)
//   localStorage.setItem('mode', newMode)
// }

// app.config.globalProperties.$toggleTheme = toggleTheme

app.use(router)
app.mount('#app')