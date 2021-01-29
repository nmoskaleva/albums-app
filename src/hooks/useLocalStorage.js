import { useState, useEffect } from 'react';

export default function UseLocalStorageState(key, defaultValue) {
  const storedVal = window.localStorage.getItem(key);
  const initialVal = storedVal ? JSON.parse(storedVal) : defaultValue;
  const [state, setState] = useState(initialVal);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
