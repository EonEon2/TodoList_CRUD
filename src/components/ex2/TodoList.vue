<template>
    <div>
        <div><input type="checkbox" :value="'ALL'" v-model="selectAll"> SelectAll</div>
        <ul>
            <li v-for="todo in todoList" :key="todo.tno">
                    <input type="checkbox" :value="todo.tno" v-model="selectList"> {{ todo.tno }} -- {{ todo.title }}
                    <!--v-model은 양방향으로 여기서 체크하면 아래 script태그의 selectList의 배열에도 포함되도록-->
            </li>
        </ul>
        <button @click="handleClickRemove">REMOVE</button>
    </div>
</template>

<script setup>
import { inject, ref, watch } from 'vue';

const selectList = ref([])
const selectAll = ref([])

const todoList = inject('todoList')
const removeTodos = inject('removeTodos')


const handleClickRemove = () => {
    removeTodos(selectList.value)
}

watch(selectAll,(newValue) => { // watch는 상태가 변경됐는지 안됐는지 감시하는 역할

   if(!newValue || newValue == '') { // todoList
    
    console.log("uncheck")
    selectList.value.length = 0

   } else if(newValue == 'ALL')
   console.log("check")

   todoList.value.forEach(t => {
    selectList.value.push(t.tno)
   })
})


</script>

<style lang="scss" scoped>

</style>