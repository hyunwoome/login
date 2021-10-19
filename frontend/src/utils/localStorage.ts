import {OTHER} from "@src/constants";
const key = OTHER.LOCALSTORAGE_KEY;
const value = OTHER.LOCALSTORAGE_VALUE;

const getLocalStorage = ():string | null => {
  return localStorage.getItem(key);
}

const setLocalStorage = (): void => {
  return localStorage.setItem(key, value);
}

const deleteLocalStorage = () => {
  return localStorage.removeItem(key);
}

export {getLocalStorage, setLocalStorage, deleteLocalStorage}