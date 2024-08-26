import axios from "axios"

const host = 'http://192.168.45.34:8088/api/v1/todos' // docker를 이용하여 네트워크 접속
//const host = 'http://49.174.76.109:8080/api/v1/todos'

export const getList = async (page) => { // todo에 접근하게 되면, getList가 실행되고
    const res = await axios.get(`${host}/list`,{params: {page:page}}) // host 대한 속성중 params 안에 page라는 속성을 매개변수로 받아 넣는다.
    return res.data // 여기서 현재 host에 대한 정보속성중에서 data라는 값을 res에 넣는다.
    // 이 getList의 return값인 res.data는  todoListcomponent로간다.

    // -> 이곳의 params의 page는 url에 대한 page를 가져오기 위해서 (http://example.com?page=2) 
}

export const getOne = async(mno) => { // 조회

    const res = await axios.get(`${host}/${mno}`)
    return res.data
  }


export const postOne = async (obj) => { // 등록

    const res = await axios.post(`${host}`, obj) // post는 원래 매개변수가 2개
  
    return res.data
  
}

export const deleteOne = async (mno) => { // 삭제

    const res = await axios.delete(`${host}/${mno}`)
  
    return res.data

}

export const putOne = async (todo) => { // 수정

    const res = await axios.put(`${host}/${todo.mno}`, todo)
  
    return res.data
  
}