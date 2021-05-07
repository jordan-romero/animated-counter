import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count < 700) {
      setTimeout(() => setCount(count + 1), 1);
    } else {
      setCount(count);
    }
  }, [count]);
  return (
    <div style={{ fontSize: '3rem', color: 'blue', margin: '3rem' }}>
      {count}
    </div>
  );
};

export default Counter;
