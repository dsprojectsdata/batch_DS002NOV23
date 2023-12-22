import axios from "axios"

const baseUrl = process.env.REACT_APP_BASE_URL

const instanceAxios =  axios.create({
    baseURL: baseUrl
})

export default instanceAxios