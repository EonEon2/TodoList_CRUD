import { createApp } from 'vue'
import App from './App.vue'
import routeConfig from './routers'




createApp(App).
use(routeConfig).
mount('#app') // use(routeConfig)으로 설정한 라우터로 사용하겠다
