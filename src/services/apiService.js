import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiService = axios.create({
    baseURL: "http://localhost:3400"
});

apiService .interceptors.request.use( async (config) =>{
    const token = await AsyncStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    config.headers['Content-Type'] = 'application/json';
    config.headers['Accept'] = 'application/json';

    return config;
},
(error) =>{
    return Promise.reject(error);
}

)

export {apiService};