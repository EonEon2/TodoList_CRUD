

<template>
    <div>
      <div v-if="loading" class="loadingDiv">
        <h1>Loading.............</h1>
      </div>
  
        <ul>
          <li v-for="t in result.content" :key="t.tno" @click="()=>handleClickMove(t.mno)">
            {{ t }}
          </li>
        </ul>
  
        <template v-for="(p,idx) in pageArr" :key="idx">
          <span class="pageSpan" @click="() => handleClickPage(p.page)" > {{p.label}} </span>
        </template>
  
    </div>
  </template>
  
  <script setup>
  
  import { getList } from '../../apis/todoAPI';
  import useListData from '../../hooks/useListData';
  
  const {loading, moveToRead, router, route, refresh, result, pageArr} = useListData(getList)
  
  const handleClickPage = (pageNum) => {
    
    const currentPage = route.query.page || 1 // page쿼리값이 있으면 가져오고 없으면 1
  
    router.push({query: {page:pageNum} }).then(() => {
      if(currentPage == pageNum){ // 현재 페이지 버튼을 누르면
        refresh.value = !refresh.value // refresh
      }
      
    })
  }
  
  const handleClickMove = ( tno )=> {
  
    moveToRead(tno)
  }
  
  
  </script>
  
  <style scoped>
  
  .loadingDiv {
    position: absolute;
    top: 30vh;
    left: 40vw;
    width: 20vw;
    height: 10vh;
    background-color: aqua;
  
  }
  
  .pageSpan {
    margin: 0.3em;
    padding: 0.1em;
    border: 1px solid black;
  }
  
  </style>