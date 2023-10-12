import axios, { type AxiosRequestConfig } from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const apiRequest = (config: AxiosRequestConfig) => {
	const defaultConfig: AxiosRequestConfig = {
		...config,
		baseURL: 'https://newsapi.org/v2',
		timeout: 2000,
		params: { apiKey: API_KEY, ...config.params }
	};

	return axios(defaultConfig);
};

export default apiRequest;
