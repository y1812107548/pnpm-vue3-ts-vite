import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router';
import { setupStore } from './store';
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'

const bootstrap = ()=>{
    const app = createApp(App)
    // 初始化仓库
    setupStore(app)
    // 初始化路由
    setupRouter(app)
    app.mount('#app')
}

bootstrap()
