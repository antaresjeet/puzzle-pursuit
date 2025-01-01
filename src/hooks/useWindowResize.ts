import { WindowSize } from '@/declarations';
import { useEffect, useState } from 'react';

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const updateWindowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      updateWindowSize(); // set initial size
      window.addEventListener('resize', updateWindowSize);

      return () => {
        window.removeEventListener('resize', updateWindowSize);
      };
    }
  }, []);

  return windowSize;
};

export default useWindowSize;
