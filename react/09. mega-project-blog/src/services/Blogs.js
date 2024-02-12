import { GET_ALL_BLOGS_URL } from "../constants";
import instanceAxios from "./base";

const fetchBlogs = (data = {}) => instanceAxios.post(GET_ALL_BLOGS_URL, data)

export { fetchBlogs }