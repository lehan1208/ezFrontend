import React, { useEffect, useState } from 'react';

function Clock() {
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

  return <div style={{ fontSize: 32 }}>{timeString}</div>;
}

export default Clock;
