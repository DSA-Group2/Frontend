import axios from "axios";
import { SERVER_API_ENDPOINT } from "./constants";

const api = axios.create({
    baseURL: SERVER_API_ENDPOINT || "http://localhost:5000/api",
});

export default api;
