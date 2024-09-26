import axios from "axios";
import { BACKEND_URL } from "shared/constants/api";

export const instance = axios.create({
	baseURL: BACKEND_URL + "/api",
	withCredentials: true
});

instance.interceptors.request.use(config => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = localStorage.getItem("token");
	}
	return config;
});

instance.interceptors.response.use(null, error => {
	// TODO дописать логику refresh
	if (error?.response?.status !== 401) {
		throw error;
	}
	throw error;
});
