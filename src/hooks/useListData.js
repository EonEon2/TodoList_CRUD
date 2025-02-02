import { computed, onMounted, ref, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';


const useListData = (listFn) => {

  const fn = listFn

  const route = useRoute()
  const router = useRouter()
  
  const loading = ref(false)
  const refresh = ref(false)

  const result = ref({
    content:[],
    number:0,
    size:10,
    totalElements:0,
    totalPages:0
  })
  
  const loadPageData = async (page) => {

    loading.value = true
    const data = await fn(page)

    result.value = data
    loading.value = false
    
  }

  const pageArr =  computed(() => {

    //현재 페이지 번호 
    const currentPage = result.value.number + 1

    //마지막 페이지 번호  -  올림( 페이지번호/10.0 ) * 10 

    let lastPage = Math.ceil( currentPage/10.0 ) * 10

    //시작 페이지 번호
    const start = lastPage - 9 

    //이전, 다음 
    const prev = start !== 1
    const next = result.value.totalPages > lastPage

    if(result.value.totalPages < lastPage){
      lastPage = result.value.totalPages
    }


    //페이지 번호에 출력에 필요한 데이터를 배열로 
    const pageArr = []

    //이전
    if(prev){
      pageArr.push({page: start -1, label:'이전' })
    }

    for(let i = start; i <= lastPage ; i++){
      pageArr.push({page: i, label: i })
    }
    //다음
    if(next){
      pageArr.push({page: lastPage + 1, label:'다음' })
    }
    return pageArr
  })


  onMounted(() => { // 데이터를 로드하는 역할

    loadPageData(route.query.page || 1)

  })

  watch(refresh, ()=> { // refresh값을 감지하여 refresh되면 loadPageData호출

    loadPageData(route.query.page || 1)
  })

  onBeforeRouteUpdate((to, from, next) => { // 사용자가 페이지를 변경할때 (페이지 번호클릭해서 url변경시)

    loadPageData(to.query.page || 1)
    next()
    
  })

  const moveToRead = (tno) => {
    router.push(`/todo/read/${tno}`)
  }

  return {loading, moveToRead, router, route, refresh, result, pageArr}

}

export default useListData