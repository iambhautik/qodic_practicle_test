import axios, { AxiosInstance } from "axios";
import { envSettings } from "./env.config";
const { apiURL } = envSettings

const axiosClient: AxiosInstance = axios.create({
    baseURL: apiURL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    }
})

export default axiosClient