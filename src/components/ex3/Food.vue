<template>
    <div>
        <ul>
            <li v-for="i in arr" :key="i.sno">
                {{ i }}
            </li>
        </ul>
        <div>
            <button @click="() => handleClick('s1.json')">s1</button>
            <button @click="() => handleClick('s2.json')">s2</button>
        </div>    
    </div>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';


const getStores = async(fileName) => { // fileName (json파일)을 매개변수로

    const res = await axios.get(`http://localhost:5173/${fileName}`)

    console.log(res)

    return res.data // res 로그내부에 data라는 속성값을 반환한다.
}

const arr = ref([])

const handleClick = (file) => { // 클릭하는 이벤트를 만드는데, 매개변수로 file이름을 받는다.

    getStores(file).then( result => { //getStores의 promise가 return되면 then 내부가 실행되어 ref인 arr이 result값(file값)이 적용된다.
    arr.value = result
} )
// getStores의 return값은 promise로 주는데, return값인 res.data를 받은 이후 then이 실행됨.


}


</script>

<style lang="scss" scoped>

</style>