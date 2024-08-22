import { createApp } from 'vue'
import App from './App.vue'

import AboutPage from './pages/AboutPage.vue'
import MainPage from './pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from './pages/IndexPage.vue'
import TodoListPage from './pages/TodoListPage.vue'

const routeConfig = createRouter({
    history: createWebHistory(), // url의 해시코드를 안보이게 하여 깔끔한 URL 사용가능
    routes: [
        {path: "/", component: MainPage},
        {path: "/about", component: AboutPage},
        {path: "/todo",
            component: IndexPage, // todo의 하위페이지
            children: [
                {path: "list", component: TodoListPage}
            ]
        }
    ]
})


createApp(App).use(routeConfig).mount('#app') // use(routeConfig)으로 설정한 라우터로 사용하겠다
