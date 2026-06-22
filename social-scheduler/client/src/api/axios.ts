import axios from "axios";

const api = axios.create({
    baseURL: "https://socialsync-server-70dg.onrender.com"
})

export default api;
