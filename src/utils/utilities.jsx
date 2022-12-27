
import { format, fromUnixTime } from 'date-fns';

const storage_prefix = process.env.NODE_ENV === 'development' ? 'its_dev_' : 'its_prod_';

const getKeyName = (key) => `${storage_prefix}${key}`;
const checkStoreKey = (key) => localStorage.key(key);
const checkSessionKey = (key) => sessionStorage.key(key);

const encryptStoreData = (data) => window.btoa(data);
const decryptStoreData = (data) => window.atob(data);

export const storageSet = (key, data) => {
  let storeData = JSON.stringify(data);
  storeData = encryptStoreData(storeData);
  localStorage.setItem(getKeyName(key), storeData);
};

export const storageRemove = (key) => {
  let storeKey = getKeyName(key);
  if (checkStoreKey(storeKey)) {
    return localStorage.removeItem(storeKey);
  }
};

export const storageGet = (key) => {
  let storeKey = getKeyName(key);
  let check = checkStoreKey(storeKey);
  if (!check) return null;

  let data = localStorage.getItem(storeKey);
  if ((check || !check) && (!data || data === 'undefined' || data === null)) {
    storageRemove(storeKey);
    return null;
  }
  data = decryptStoreData(data);
  data = JSON.parse(data);
  return data;
};

export const sessionSet = (key, data) => {
  let storeData = JSON.stringify(data);
  storeData = encryptStoreData(storeData);
  sessionStorage.setItem(getKeyName(key), storeData);
};

export const sessionRemove = (key) => {
  let storeKey = getKeyName(key);
  if (checkSessionKey(storeKey)) {
    return sessionStorage.removeItem(storeKey);
  }
};

export const sessionGet = (key) => {
  let storeKey = getKeyName(key);
  let check = checkSessionKey(storeKey);
  if (!check) return null;

  let data = sessionStorage.getItem(storeKey);
  if ((check || !check) && (!data || data === 'undefined' || data === null)) {
    sessionRemove(storeKey);
    return null;
  }
  data = decryptStoreData(data);
  data = JSON.parse(data);
  return data;
};

export const formatPayloadData = (obj) => {
  return {
      data: {
          ...obj
      }
  }
}

// group message by dates
export const groupedDays = (messages, key) => {
  if (messages) {
    return messages.reduce((acc, el, i) => {
      const messageDay = format(new Date(fromUnixTime(el[key])) || new Date(), 'MMM dd, yyyy');
      if (acc[messageDay]) {
        return { ...acc, [messageDay]: acc[messageDay].concat([el]) };
      }
      return { ...acc, [messageDay]: [el] };
    }, {});
  }
};
