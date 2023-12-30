import axios from "axios"
import store from "../redux/store"

const baseUrl = process.env.REACT_APP_LOCAL_BASE_URL

const instanceAxios =  axios.create({
    baseURL: baseUrl,
})

instanceAxios.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    token && (config.headers.Authorization = `Bearer ${token}`);

    return config;
}, (error) => {
    return Promise.reject(error)
})

instanceAxios.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error)
})

export default instanceAxios