import { useState, useEffect } from 'react';

// INFO: workaround next js ssr error when hydrating. See: https://dev.to/abdulsamad/how-to-use-zustands-persist-middleware-in-nextjs-4lb5
const usePersistedStore = <T, F>(store: (callback: (state: T) => unknown) => unknown, callback: (state: T) => F): F | undefined => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};

export default usePersistedStore;
