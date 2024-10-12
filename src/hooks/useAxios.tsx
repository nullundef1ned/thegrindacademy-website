'use client';

import environmentUtil from '@/utils/env.util'
import axios, { AxiosRequestConfig } from 'axios'

export type MessageResponse = {
  message: string
}

export type AutoXError = {
  status: number,
  statusText: string,
  message: string,
  error: any
}

const config: AxiosRequestConfig = {
  baseURL: environmentUtil.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
}

export default function useAxios() {
  const axiosInstance = axios.create(config);

  axiosInstance.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.error(error);
  })

  axiosInstance.interceptors.response.use(
    (response) => {
      return response.data
    },
    (error) => {
      const { onLine } = window.navigator;
      if (!onLine) return Promise.reject(error);

      const errorData = error.response?.data as unknown as AutoXError;
      return Promise.reject(errorData);
    }
  )

  return axiosInstance;
}
