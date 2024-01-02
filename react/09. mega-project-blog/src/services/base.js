import axios from "axios"
import store from "../redux/store"

const baseUrl = process.env.REACT_APP_LOCAL_BASE_URL

const instanceAxios =  axios.create({
    baseURL: baseUrl,
})

instanceAxios.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    // const token = "13254";
    token && (config.headers.Authorization = `Bearer ${token}`);

    return config;
}, (error) => {
    return Promise.reject(error)
})

instanceAxios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if(error.response.status === 401){
        localStorage.clear()
        // window.location.href = process.env.REACT_APP_BASE_URL
        window.location.href = "http://localhost:3000"
    }
    return Promise.reject(error)
})

export default instanceAxios