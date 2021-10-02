import axios from "axios";
import { baseURL } from "../Utils";

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        authorization: `Token ${document.cookie.split("=")[1]}`,
    },
});

export default axiosInstance;
