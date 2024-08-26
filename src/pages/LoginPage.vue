<template>
    <div>
        <h1>Login Page</h1>
        <input type="text" v-model="midInput">
        <button @click="handleClick">Login</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import useMember2 from '../stores/useMember2';

const {signin} = useMember2() // useMember.js의 login 기능 사용

const midInput = ref('')

const handleClick = () => {

    const mid = midInput.value // input text 로 입력한 id 값을 mid변수에 넣고

    signin(mid) // store에 저장된 signin메소드에 mid 인자를 넣어 호춣
}

</script>

<style lang="scss" scoped>

</style>