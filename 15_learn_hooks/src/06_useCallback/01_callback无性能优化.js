import React, { useState, useCallback } from 'react';

export default function CallbackHookDemo() {

  const [count, setCount] = useState(0);

  const increment1 = function() {
    setCount(count + 1);
  };

  const increment2 = useCallback(function increment2() {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button>    
    </div>
  )
}
