import { createRouter, createWebHistory } from 'vue-router'
import todoRouting from './todo'

const MainPage = () => import('../pages/MainPage.vue') // 코드스플리팅 - 레이지로딩
const AboutPage = () => import('../pages/AboutPage.vue')
const LoginPage = () => import('../pages/LoginPage.vue')


const routeConfig = createRouter({
    history: createWebHistory(), // url의 해시코드를 안보이게 하여 깔끔한 URL 사용가능
    routes: [
        {path: "/", component: MainPage},
        {path: "/about", component: AboutPage},
        {path: "/login", component: LoginPage},
        todoRouting
    ]
})

export default routeConfig //다른파일에서 routeConfig를 쉽게 import