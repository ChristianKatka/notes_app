import { useEffect, useState } from 'react';

const getSavedValue = (key: any, initialValue) => {
  const savedValue = localStorage.getItem(key);
  if (!savedValue) return initialValue;
  return JSON.parse(savedValue);
};

const useLocalStorage = (key: any, initValue: any) => {
  const [value, setValue] = useState(() => getSavedValue(key, initValue));

  // useEffect ajetaan aina ku lifecycle hookkia kutsutaan eli ngoninit ngonChanges jne
  // aina kun value muuttuu ajetaan, jos toine param [] tyhjä niin ajaa vain ngoninit
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
