
<template>
    <div v-if="error !== null">ERROR {{ error }}</div> <!--에러가 있으면 에러메세지표시 -->

<div v-if="error === null">
  <div>
    <input type="text" v-model="todo.mno" readonly> <!--mno, wrtier는 수정불가능-->
  </div>
  <div>
    <input type="text" v-model="todo.title" >
  </div>
  <div>
    <input type="text" v-model="todo.writer" readonly >
  </div>
  <div>
    <input type="date" v-model="todo.dueDate" >
  </div>
  <div>
    <button @click="handleClickModify">MODIFY</button>
    <button @click="handleClickDelete">DELETE</button>
  </div>
</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { deleteOne, getOne, putOne } from '../../apis/todoAPI';
  import useMember2 from '../../stores/useMember2';
  const route = useRoute()
  const router = useRouter()
  const mno = route.params.mno
  const {computedMid} = useMember2()

  const handleClickModify = () => {
  putOne(todo.value).then(result => { 
    router.replace(`/todo/read/${mno}`) // replace를 사용하면 현재 페이지의 히스토리가 삭제되므로 수정 및 삭제에서는 push 보단 replace
  })
}

  const handleClickDelete = () => {
    deleteOne(mno)
    router.replace("/todo/list")
  }
  const todo = ref({
    mno:0,
    title:'',
    writer:'',
    dueDate:''
  })

  const error = ref(null)

  onMounted(()=> {
    getOne(mno).then(data => todo.value = data).catch((err) => { // getOne이 성공적으로 되면 then으로 가지만 실패한다면 catch문
    error.value = err.response.data.message //error의 response속성중 data속성의 message
  })
})
  </script>
  
  <style lang="scss" scoped>
  </style>