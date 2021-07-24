import axios from "axios";

const postHttp = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export default postHttp;