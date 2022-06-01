import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage.hook';

const useDarkMode = () => {
  const [isEnabled, toggleDarkMode] = useLocalStorage('dark-theme', false);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;

    isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
  }, [isEnabled]);

  return [isEnabled, toggleDarkMode];
};

export default useDarkMode;
