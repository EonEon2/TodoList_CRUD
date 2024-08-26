<script setup>
import { RouterLink, RouterView } from 'vue-router';
import useMember2 from './stores/useMember2';

const {signout,computedMid} = useMember2() //useMember.js 에서 member변수와 logout기능을 사용하겠다.
</script>

<template>
  
  <div>
    <span><RouterLink to="/">Main</RouterLink></span> <!--A태그 처럼 생긴 화면이동-->
    <span><RouterLink to="/about">About</RouterLink></span>
    <span><RouterLink to="/todo">Todo</RouterLink></span>


    <span v-if="computedMid===''"><RouterLink to="/login">Login</RouterLink></span>
    <span v-if="computedMid!==''"><button @click="signout">Logout</button></span>
  </div>

  <div>
    <hr/>
    USERID : {{ computedMid }}
    <hr/>
  </div>

  <RouterView></RouterView> <!--라우터로 이용된 페이지를 출력-->
</template>


<style scoped>

span{
  margin-left: 1em;
}

</style>
