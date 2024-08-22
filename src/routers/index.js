import AboutPage from '../pages/AboutPage.vue'
import MainPage from '../pages/MainPage.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routeConfig = createRouter({
    history: createWebHistory(), // url의 해시코드를 안보이게 하여 깔끔한 URL 사용가능
    routes: [
        {path: "/", component: MainPage},

        {path: "/about", component: AboutPage},
       
    ]
})

export default routeConfig //다른파일에서 routeConfig를 쉽게 import