<template>
    <div>
        <h1>Todo Read Page</h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route.params.mno) // route는 현재 라우터에 대한 정보를 담고있는데, route속성중에 params속성중에 mno의 값을 가져온다.
// http://localhost:5173/todo/read/2 를 했을때 console창에 mno(2)의 값이 나옴

</script>

<style lang="scss" scoped>

</style>