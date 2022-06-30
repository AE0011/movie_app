import {useEffect, useRef} from 'react';

const useEffectDelay = (func, deps, delay = 700) => {
  const timeOutId = useRef();
  useEffect(() => {
    timeOutId.current = setTimeout(func, delay);

    return () => {
      clearTimeout(timeOutId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useEffectDelay;
