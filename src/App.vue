<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  
  <div>
    <span><RouterLink to="/">Main</RouterLink></span> <!--A태그 처럼 생긴 화면이동-->
    <span><RouterLink to="/about">About</RouterLink></span>
    <span><RouterLink to="/todo">Todo</RouterLink></span>
  </div>

  <RouterView></RouterView> <!--라우터로 이용된 페이지를 출력-->
</template>


<style scoped>

span{
  margin-left: 1em;
}

</style>
