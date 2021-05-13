import React, {useState} from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(()=>{
        const item = window.localStorage.getItem(key);

        const setValue = (value) => {
            setStoredValue(setValue);
            window.localStorage.setItem(key, JSON.stringify(value))
        }
        
        return item ? JSON.parse(item) : initialValue;
    })

    return [storedValue, setStoredValue];
}

export default useLocalStorage;