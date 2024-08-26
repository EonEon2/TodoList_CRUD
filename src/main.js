import { createApp } from 'vue'
import App from './App.vue'
import routeConfig from './routers'
import { createPinia } from 'pinia'




createApp(App).
use(routeConfig).
use(createPinia()).
mount('#app') // use(routeConfig)으로 설정한 라우터로 사용하겠다
