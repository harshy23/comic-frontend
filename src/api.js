import axios from 'axios';
import {jwtDecode} from "jwt-decode";

// export const BaseURL = "http://127.0.0.1:8000";
export const BaseURL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8000" ;

const api = axios.create({
    baseURL: BaseURL
});

api.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem("access");
        if (token) {
            const decoded = jwtDecode(token); // Correct usage
            const expirydate = decoded.exp;
            const currenttime = Date.now() / 1000;
            if (expirydate > currenttime) {
                config.headers.Authorization = `Bearer ${token}`; // Corrected 'Authorization' spelling
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;