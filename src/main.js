import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
// 注入router
import router from './router';

createApp(App).use(router).mount('#app')
