<template>
    <div>
        <ul>
            <li v-for="todo in todos" :key="todo.id"> {{ todo }}</li>
        </ul>
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';


const todos = ref([])
// 비동기처리를 할건데, 비동기 처리는 시간이 좀 지난뒤 갱신이 되므로 반응형으로 처리

// async를 사용하면 비동기로 실행됨, return값은 promise
const getData = async() => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    // fetch를 이용하여 외부 API 데이터를 가져오는 비동기 작업
    // await를 사용하면 비동기 작업이 완료될 때까지 기다린 후 코드가 실행됨. 

    return res.data
    // res.data는 promise
}

getData().then(arr => todos.value = arr)
// getData는 결국 promise를 반환하므로 then에서는 콜백함수가 실행됨.
// arr은 getData에서 반환된 데이터 -> API에서의 todos목록


</script>

<style lang="scss" scoped>

</style>