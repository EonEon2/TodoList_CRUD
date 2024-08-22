<template>
    <div>
        <TodoList></TodoList>
    </div>
</template>

<script setup>
import { provide, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import TodoList from './TodoList.vue';

const todoList = ref([])

const addTodo = (title, content) => {
    
    const todo = { // 해당todoo는 addTodo 내부에 위치해야 아래 todoList의 값이 동일하게 변경된다.
        tno: uuidv4(),
        title: title,
        content: content
    }
    todoList.value = [...todoList.value, todo]
}

const removeTodos = (tnoArr) => { // 선택한 tnoArr에 포함된 tno가 있는 todolist를 제거
   todoList.value =  todoList.value.filter(todo => !tnoArr.includes(todo.tno))
}

// 더미데이터 생성
addTodo('aaa','aaaa')
addTodo('bbb','bbbb')
addTodo('fff','ffff')
addTodo('aaa','aaaa')
addTodo('bbb','bbbb')
addTodo('fff','ffff')
addTodo('aaa','aaaa')
addTodo('bbb','bbbb')
addTodo('fff','ffff')

// provide를 통해 하위 컴포넌트에 전달
provide('addTodo',addTodo)
provide('todoList',todoList)
provide('removeTodos', removeTodos)




</script>

<style lang="scss" scoped>

</style>