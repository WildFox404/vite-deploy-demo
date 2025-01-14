import { createApp } from 'vue'
import '@/style.css'
import '@/global.css'
import App from '@/App.vue'
import router from '@/router'

const app = createApp(App)

// 根据 localStorage 设置主题
const mode = localStorage.getItem('mode') || 'light'
document.documentElement.setAttribute('data-theme', mode)

app.use(router)
app.mount('#app')
