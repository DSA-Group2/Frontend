import axios from "axios";
import { SERVER_API_ENDPOINT } from "./constants";

const api = axios.create({
    baseURL: SERVER_API_ENDPOINT || "https://compilerbackend.onrender.com/api",
});

export default api;
