import { useState } from "react";

 const useLocalStorage = (key, initialValue) => {

  //to retreive an item from localStorage, call localStorage.getItem('itemName')
  //if that item doesn't exist, it will return undefined

  const [storedValue, setStoredValue] = useState(() => {
    //get from local storage by key
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
//parse and return stored json or, if undefined, return initialValue
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];

};

export default useLocalStorage;