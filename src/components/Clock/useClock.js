import { useEffect, useState } from 'react';

function useClock() {
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const clockInterval = setInterval(() => {
      const now = new Date();
      const newTimeString = now.toLocaleTimeString();
      setTimeString(newTimeString);
    }, 1000);

    return () => {
      clearInterval(clockInterval);
    };
  }, []);

  return { timeString };
}

export default useClock;
