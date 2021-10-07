import { StorageHelper } from '@aws-amplify/core';
import { parseStringifyToJson } from '@kleeen/common/utils';

export const useLocalStorage = (key: string | null, defaultValue: any) => {
  const _storage = new StorageHelper().getStorage();
  let localStorageValue;
  try {
    localStorageValue = parseStringifyToJson({ value: _storage.getItem(key), defaultValue });
  } catch (e) {
    localStorageValue = defaultValue;
  }

  const setLocalStorageValue = (value) => {
    if (key) {
      _storage.setItem(key, JSON.stringify(value));
    }
  };

  const removeLocalStorageValue = () => {
    _storage.removeItem(key);
  };

  return { localStorageValue, setLocalStorageValue, removeLocalStorageValue };
};
