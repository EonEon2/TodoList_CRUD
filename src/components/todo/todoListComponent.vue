<template>
    <div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getList } from '../../apis/todoAPI';


const route = useRoute() // 현재 라우터의 정보에 접근
const router = useRouter() // 현재 라우터를 통해 페이지 이동

const todoList = ref([]) // 언제 올지 모르니까 ref로 만든다

getList().then(data =>{ // api에서 받은 res.data중에서 content라는 속성을 todoList.value에 집어넣는다.
    console.log(data.content)
    todoList.value = data.content //data의 content속성을 가져온다.
})

</script>

<style lang="scss" scoped>

</style>