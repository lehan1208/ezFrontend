import React from 'react';
import useClock from './useClock';

function Clock() {
  const { timeString } = useClock();

  return <div style={{ fontSize: 32 }}>{timeString}</div>;
}

export default Clock;
