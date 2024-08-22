import axios from "axios"

const host = 'http://192.168.45.39:8088/api/v1/todos' // docker를 이용하여 네트워크 접속

export const getList = async () => { // todo에 접근하게 되면, getList가 실행되어 
    const res = await axios.get(`${host}/list`)
    console.log(res)
    console.log('----------')
    return res.data
}