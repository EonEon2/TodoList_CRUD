<script setup>
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';
</script>

<template>
  <RouterView></RouterView> <!--라우터로 이용된 페이지를 출력-->

  <div>
    <span><RouterLink to="/">Main</RouterLink></span> <!--A태그 처럼 생긴 화면이동-->
    <span><RouterLink to="/about">About</RouterLink></span>
  </div>
</template>


<style scoped>

</style>
