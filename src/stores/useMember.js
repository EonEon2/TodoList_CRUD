import { defineStore } from "pinia";
import { ref, computed, toRef } from "vue";

const useMember = defineStore('memberStore', ()=>{ //memberStore는 스토어의 고유ID

    const member = ref({mid:localStorage.getItem('mid')||''})

    const memberMid = toRef(member,'mid')

    const login = (valueId) => {
        
        member.value.mid = valueId

        localStorage.setItem('mid',valueId) // 로컬스토리지의 상태를 업데이트

    }

    const logout = () => {
        console.log('logout.........')

        member.value.mid = ''

        localStorage.removeItem('mid')
    }

    const computedMid = computed(() => {

        if(!localStorage.getItem('mid')){
          return null
        }
    
        if(localStorage.getItem('mid') && ! member.mid){
          member.mid = localStorage.getItem('mid')
          return localStorage.getItem('mid')
        }
    
        return memberMid;
      });

    return{member,login, logout}

})

export default useMember