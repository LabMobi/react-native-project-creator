import {Alert} from 'react-native';
import axios from 'axios';
import Config from 'react-native-config';

const BASE_URL = Config.API_URL;

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use(
  config => {
    if (__DEV__) {
      // console.log(">>>REQUEST", { config })
      console.log('>>>REQUEST', JSON.stringify(config));
    }
    return config;
  },
  error => {
    if (__DEV__) {
      console.log('>>>REQUEST ERROR', {error});
    }
    Alert.alert('Something went wrong');
    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  response => {
    if (__DEV__) {
      console.log('>>>RESPONSE', {response});
      // console.log(">>>RESPONSE", JSON.stringify(response))
    }
    return response.data;
  },
  error => {
    if (__DEV__) {
      console.log('>>>RESPONSE ERROR', {error});
    }
    Alert.alert('Something went wrong');
    return Promise.reject(error);
  },
);

const HttpClient = {
  Post: (url = '', data = {}, config = undefined) => {
    return AxiosInstance.post(url, data, config);
  },
  Put: (url = '', data = {}, config = undefined) => {
    return AxiosInstance.put(url, data, config);
  },
  Get: (url = '', params?: any) => {
    return AxiosInstance.get(url, {params});
  },
  Delete: (url = '', params?: any) => {
    return AxiosInstance.delete(url, {params});
  },
  Patch: (url = '', data = {}, config = undefined) => {
    return AxiosInstance.patch(url, data, config);
  },
};

export default HttpClient;
