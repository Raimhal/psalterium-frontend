import axios from "axios";

export const instance = axios.create({
    baseURL: `${process.env.VUE_APP_API_URL || "https://psalterium-backend.herokuapp.com"}/api`,
});

instance.interceptors.request.use((config) => {
    if((JSON.parse(localStorage.getItem('isAuth')))) {
        const token = `Bearer ${localStorage.getItem('accessToken')}`;
        if (config && config.headers)
            config.headers.Authorization = token ? token : '';
    }
    return config;
});
