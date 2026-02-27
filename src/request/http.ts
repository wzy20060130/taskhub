/// <reference types="node" />
import axios, { type AxiosInstance, type InternalAxiosRequestConfig } from 'axios';

/** 后端约定：业务成功时 code 为 200 */
const SUCCESS_CODE = 200;

/** 接口统一响应结构（按你后端实际字段调整） */
export interface ApiResponse<T = unknown> {
  code: number;
  data: T;
  message?: string;
}

const baseURL = process.env.REACT_APP_API_BASE_URL ?? '/api';
const timeout = Number(process.env.REACT_APP_API_TIMEOUT) || 15000;

const http: AxiosInstance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ------------------------- 请求拦截器 -------------------------
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// ------------------------- 响应拦截器 -------------------------
http.interceptors.response.use(
  response => {
    const res = response.data as ApiResponse;

    if (res.code !== undefined && res.code !== SUCCESS_CODE) {
      const msg = res.message ?? '请求失败';
      console.error(`[API ${response.config.url}] ${msg}`);
      return Promise.reject(new Error(msg));
    }

    return response.data;
  },
  error => {
    if (error.response) {
      const { status } = error.response;
      if (status === 401) {
        localStorage.removeItem('token');
        // 可在此跳转登录页： window.location.href = '/login';
      }
      const msg = error.response?.data?.message ?? error.message ?? '网络异常';
      console.error('[HTTP Error]', status, msg);
      return Promise.reject(new Error(msg));
    }
    console.error('[HTTP Error]', error.message);
    return Promise.reject(new Error(error.message || '网络异常'));
  }
);

export default http;
