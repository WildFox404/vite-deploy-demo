import { createApp } from 'vue'
import App from '@/App.vue'
import { createPinia } from 'pinia'
import './index.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
const pinia = createPinia()

// 初始化 AOS
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
})

// 读取 localStorage 中的 mode 并设置初始主题
const mode = localStorage.getItem('mode') || 'light'
document.documentElement.classList.add(mode)

app.use(pinia)
app.mount('#app')