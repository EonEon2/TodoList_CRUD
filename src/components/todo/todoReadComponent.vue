
<template>
    <div>
      {{ todo }}
    </div>
    <button @click="handleMoveEdit" >EDIT</button>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getOne } from '../../apis/todoAPI';
  import { useRoute, useRouter } from 'vue-router';
  import useMember2 from '../../stores/useMember2';
  const route = useRoute()
  const router = useRouter()
  const mno = route.params.mno // routers에서 url주소에 mno값을 넣은뒤에  

  const {computedMid} = useMember2()

  const handleMoveEdit = () => {
  router.push(`/todo/edit/${mno}`)
}
  const todo = ref({
    mno:0,
    title:'',
    writer:'',
    dueDate:''
  })
  onMounted(()=> {
    console.log("mno: " + mno)
    getOne(mno).then(data => todo.value = data) // api에서 받은 data값을 ref값에 대입
  })
  </script>
  
  <style lang="scss" scoped>
  </style>