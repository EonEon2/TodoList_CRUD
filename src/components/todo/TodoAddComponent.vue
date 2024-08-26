<template>
    <div>
      <h1>Todo Add Component</h1>
      <div>
        <input type="text" v-model="todo.title" >
      </div>
      <div>
        <input type="text" v-model="todo.writer" >
      </div>
      <div>
        <input type="date" v-model="todo.dueDate" >
      </div>
      <div>
        <button @click="handleClick" >ADD</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { postOne } from '../../apis/todoAPI';
  import { useRouter } from 'vue-router';
  const router = useRouter()
  const todo = ref({ // api에서의 obj값
    title:'',
    writer: '',
    dueDate: ''
  })
  const handleClick = async ()=> {
    console.log(todo.value)
    const res = await postOne(todo.value)
    alert(res.mno)
  }
  </script>
  
  <style lang="scss" scoped>
  </style>