import React from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage('key');

    return [darkMode, setDarkMode]
}

export default useDarkMode;