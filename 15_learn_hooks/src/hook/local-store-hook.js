import { useState, useEffect } from "react";

function useLocalStore(key) {
  const [name, setName] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key));
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(name));
  }, [name, key])

  return [name, setName];
}

export default useLocalStore;