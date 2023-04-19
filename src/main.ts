import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './store';
const bootstrap = ()=>{
    const app = createApp(App)
    // 初始化仓库
    setupStore(app)
    // 初始化路由
    setupRouter(app)
    app.mount('#app')
}

bootstrap()