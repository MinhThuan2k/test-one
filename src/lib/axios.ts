/** @format */

import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://localhost:3000",
	headers: {
		"Content-Type": "application/json",
	},
});

axiosInstance.interceptors.response.use(
	(response) => response,
	(error) => {
		return Promise.reject(error.response?.data || error.message);
	}
);
