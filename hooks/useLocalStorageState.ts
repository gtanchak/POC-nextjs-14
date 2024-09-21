import { useEffect, useRef, useState } from "react";

const useLocalStorageState = (key: string) => {
  const [state, setState] = useState(
    () => window.localStorage.getItem(key) || ""
  );

  const prevRefkey = useRef(key);

  useEffect(() => {
    const prevKey = prevRefkey.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    // prevRefkey.current = key;
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
};

export default useLocalStorageState;
