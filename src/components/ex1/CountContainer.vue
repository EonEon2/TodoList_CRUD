<template>
    <div>
        <CountDisplay></CountDisplay> 
        <CountButtons></CountButtons>
    </div>
</template>

<script setup>
import { onMounted, provide, ref } from 'vue';
import CountDisplay from './CountDisplay.vue';
import CountButtons from './CountButtons.vue';


const data = ref({num:10})
provide('data',data);


const changeNum = (amount) => {
    data.value.num += amount

    localStorage.setItem('count', JSON.stringify(data.value))
    // 값이 변경될때마다 로컬스토리지에 저장하기
    // data.value를 count라는 이름으로 스토리지에 저장하는데, json 문자열 형태로 저장해야하므로 형변환
}
provide('changeNum',changeNum)

// 컴포넌트가 마운트 되면 함수 실행
// 마운트뜻은 컴포넌트가 화면에 실제로 표시되는 과정
onMounted(() => {
    console.log("mounted...............")
    const str = localStorage.getItem('count')
    // 스토리지에 저장된 count 값을 str변수에 넣기

    if(!str){
        return
    }

    const obj = JSON.parse(str) // json문자열에서 일반문자열로 변경
    data.value = obj
})



</script>

<style lang="scss" scoped>

</style>