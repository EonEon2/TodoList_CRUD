<template>
    <div>
        <ul>
            <li v-for="todo in todoList" :key="todo.mno">
                {{ todo }}
            </li>
        </ul>
        <div>
            <span @click="() => handleClickPage(1)"> 1 </span>
            <span @click="() => handleClickPage(2)"> 2 </span>
            <span @click="() => handleClickPage(3)"> 3 </span>
            <span @click="() => handleClickPage(4)"> 4 </span>
            <span @click="() => handleClickPage(5)"> 5 </span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';
import { getList } from '../../apis/todoAPI';


const route = useRoute() // 현재 라우터의 정보에 접근
const router = useRouter() // 현재 라우터를 통해 페이지 이동

const handleClickPage = (pageNum) => { // 이것에 역할은, pageNum을 매개변수로 받는 이벤트 메소드의 기능이 있는데
    router.push({query: {page:pageNum}}) // 메소드가 실행되면 router.push를 통해서 현재 route의 속성중에 query라는 속성중에서 page라는 속성을 만들어서 pageNum의 매개변수를 넣는다.
}   // -> 이곳의 page는 url을 업데이트하는 역할(http://example.com?page=2)


const todoList = ref([]) // 언제 올지 모르니까 ref로 만든다

    const loadPageData = async(page) =>{// api에서 받은 res.data중에서 content라는 속성을 todoList.value에 집어넣는다. 
    const data = await getList(page)
    todoList.value = data.content //data의 content속성을 가져온다.
}


onMounted (() => { // 마운트 되자마자 메소드가 실행된다.
    const page = route.query.page || 1 // 현재 라우터에 대한 페이지를 page변수에 담는데, 페이지가 없으면 1페이지로 하고
    loadPageData(page) // 페이지 값을 loadPageData 메소드에 넣는다
})
 
onBeforeRouteUpdate((to, from, next) => { // 라우터가 변경되기 직전에 메소드가 실행된다. 다른 페이지로 이동하기 직전에
    const page = to.query.page // to : 변경될 라우터의 객체가 담겨있다.
    loadPageData(page)
    next() // next로 인해서 라우터의 변경이 계속진행된다.
}) 
</script>

<style lang="scss" scoped>

</style>