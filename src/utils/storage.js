import { AsyncStorage } from 'react-native';

export function clear() {
  return AsyncStorage.clear();
}

export function get(key, defaultValue = null) {
  return AsyncStorage.getItem(key).then(
    (value) => (value !== null ? JSON.parse(value) : defaultValue),
  );
}

export function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function remove(key) {
  return AsyncStorage.removeItem(key);
}

export function multiGet(...keys) {
  return AsyncStorage.multiGet([...keys]).then((stores) => {
    const data = {};
    stores.forEach((result, i, store) => {
      data[store[i][0]] = JSON.parse(store[i][1]);
    });
    return data;
  });
}

export function multiRemove(...keys) {
  return AsyncStorage.multiRemove([...keys]);
}

export default {
  clear,
  get,
  set,
  remove,
  multiGet,
  multiRemove,
};
