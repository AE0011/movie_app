import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  /**
   * get item from storage
   * @param {string} key - key of value
   * @param {boolean} isObject
   */
  getItem = async (key, isObject = true) => {
    try {
      let data = await AsyncStorage.getItem(key);
      if (data) {
        if (!isObject) {
          return data;
        } else {
          return JSON.parse(data);
        }
      }
    } catch (e) {
      __DEV__ && console.log('getData_e key : ', key);
      __DEV__ && console.log('getData_e e : ', e);
    }
  };

  /**
   * set item to storage
   * @param {string} key - key of value
   * @param {string|object} data - value
   */
  setItem = async (key, data) => {
    try {
      if (data) {
        if (typeof data === 'string') {
          await AsyncStorage.setItem(key, data);
        } else {
          const jsonValue = JSON.stringify(data);
          await AsyncStorage.setItem(key, jsonValue);
        }
      }
    } catch (e) {
      __DEV__ && console.log('setData_e : ', e);
    }
  };

  /**
   * remove item from storage
   * @param {string} key - key of value
   */
  removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      __DEV__ && console.log('removeItem_e : ', e);
    }
  };
}

const storageService = new StorageService();
export default storageService;
