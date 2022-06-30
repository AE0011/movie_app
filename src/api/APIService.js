import axios from 'axios';
import Config from '../res/Config';
import {apiMethods} from '../res/TypeKeys';

axios.defaults.timeout = Config.data.apiTimeout;

const instance = axios.create();

const defaultHeaders = {
  Accept: '*/*',
  'Content-Type': 'application/json',
};

class APIService {
  call = (url, method, params, data, onSuccess, onError) => {
    return new Promise(async resolve => {
      let options;
      if (method === apiMethods.get) {
        options = {
          url: url,
          method: method,
          params: params,
          headers: defaultHeaders,
        };
      } else {
        options = {
          url: url,
          method: method,
          data: data,
          headers: defaultHeaders,
        };
      }
      const handleSuccess = res => {
        onSuccess?.(res.data);
        resolve({success: true, data: res.data});
      };

      const handleError = error => {
        console.log({error});
        const err = error.response?.data?.message || 'default error message';
        onError?.(err);
        resolve({success: false, error: err});
      };

      instance(options).then(handleSuccess).catch(handleError);
    });
  };
}

const apiService = new APIService();
export default apiService;
