/* eslint-disable no-unused-vars */
import axios from 'axios';
import { storageGet, storageRemove } from '../utils/utilities';

export const baseURL = 'http://127.0.0.1:8000/api/';

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use((config) => {
  // const token = storageGet('token');
  const token = storageGet('token');

  if (token) {
    config.headers = {
      Token: `Bearer ${token}`,
      'Content-Type': 'application/json'
    };
  }
  return config;
});

axiosInstance.interceptors.response.use((response) => {
  // to trigger automatic logout if the auth is invalid
  console.log(response)
  if (
    // response.data?.error?.message === 'Invalid Login credential' ||
    response.data?.error?.message === 'Invalid token.' ||
    response.data?.error?.message === 'Expired session.' || 
    response.data?.error?.message === "Unauthorized user. Please login."
    
    // response.data?.error?.status === 401
  ) {
    storageRemove('token');
    // storageRemove('userData');
    window.location.pathname = '/login';
    // console.log('logout refreshed');
  }
  return response;
});

export default axiosInstance;
