import axios  from "axios";

const instance = axios.create({
    baseURL: "https://backend-zeta-vert.vercel.app",
    timeout: 3000
})

export default instance;
