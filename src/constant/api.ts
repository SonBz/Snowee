import axios from "axios";

const http = axios.create();

const localStore: Storage = window.localStorage;

export const baseURL = "https://snowee.vercel.app/";

http.interceptors.request.use((config: any) => {
    return {
        ...config,
        headers: {
        },
        baseURL
    };
})

http.interceptors.response.use(
    (response) => {
        return response;
    },
)

export default http;