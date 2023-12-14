import axiosConfig from "../api/axiosConfig";

export const setAuthToken = token => {
    if(token) {
        axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else delete axios.defaults.headers.common["Authorization"];
}