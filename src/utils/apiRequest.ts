import axios, { type AxiosRequestConfig } from 'axios';

const API_KEY = 'e91a527a5a73466991c6b08a32a1ad35';

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
