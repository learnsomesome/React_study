import React, { useState } from 'react';

export default function CounterHook() {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCount(counter + 1)}>+1</button>
      <button onClick={() => setCount(counter - 1)}>-1</button>
    </div>
  )
}
