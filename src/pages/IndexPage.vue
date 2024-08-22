<template>
    <div>
        <h1>Todo Index Page</h1>
        <RouterView></RouterView> <!--TodoListPage는 IndexPage의 하위 페이지이므로-->
        
    </div>
</template>

<script setup>
import { RouterView } from 'vue-router';

RouterView

</script>

<style lang="scss" scoped>

</style>