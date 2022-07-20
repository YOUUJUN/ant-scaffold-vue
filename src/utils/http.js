import axios from 'axios';
import config from "./config";
import { getToken } from "@/utils/auth";
import router from '@/router';

let service = axios.create({
    baseURL : config.baseUrl(),
    withCredentials :true
});

service.interceptors.request.use(function (config) {
    let marscript = getToken();
    if (marscript) {
        config.headers.accessToken = marscript;
        // config.headers['accessToken'] = Token;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

service.interceptors.response.use((response) => {
    console.log('status', response.data.status)
    if(response.data.status === 50014){
        router.push(`/login`);
    }
    return response
}, (error) => {
    console.log('error',error)
    return Promise.reject(error);
})


export default service;