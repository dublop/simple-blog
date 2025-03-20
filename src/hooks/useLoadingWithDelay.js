import { useState, useEffect, useRef } from 'react';

function useLoadingWithDelay(data, delay = 300) {
  const [loading, setLoading] = useState(true);
  const timerIdRef = useRef(null);

  useEffect(() => {
    if (data) {
      timerIdRef.current = setTimeout(() => {
        setLoading(false);
      }, delay);
    }

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current);
      }
    };
  }, [data, delay]);

  return loading;
}

export default useLoadingWithDelay;