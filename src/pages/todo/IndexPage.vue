<template>
    <div>
        <h1>Todo Index Page</h1>
        <div>
            <span> <RouterLink to="/todo/add">todoAdd</RouterLink></span>
        </div>
        <RouterView></RouterView> <!--TodoListPage는 IndexPage의 하위 페이지이므로-->
        
    </div>
</template>

<script setup>
import { RouterView, RouterLink } from 'vue-router';


</script>

<style lang="scss" scoped>

</style>