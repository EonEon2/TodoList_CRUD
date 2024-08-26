import { defineStore } from "pinia";
import { computed, ref, toRef } from "vue";


const useMember2 = defineStore('useMember2', ()=> {

    const userId = ref({mid:''})

    const toMid = toRef(userId.value, "mid") // 기존의 ref를 사용하여 참조한다면 1뎁스 까지 참조가 되어 이후 출력할때 제대로된 출력이 불가능하다.
                                            // 코드뜻은 userId.value값 중에서 mid값을 참조하겠다는 말.
                                            

    const signin = (str) => {

        userId.value.mid = str
        localStorage.setItem("mid", str)

    }

    const signout = () => {
        userId.value.mid = ''
        localStorage.removeItem("mid")
    }

    const computedMid = computed(()=> { // computed는 내부에 반응형 객체가 사용될때 그 반응형 객체 값이 변경이 되면 출력값도 변경된 값으로 출력된다.

        if(!localStorage.getItem("mid")) {
            return ''
        }

        if(localStorage.getItem("mid")){ 
            userId.value.mid = localStorage.getItem("mid")
        }       


        return toMid
    }) 

    return {userId,signin,signout,computedMid}
})

export default useMember2