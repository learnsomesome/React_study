import React, { useState, useEffect } from 'react'

export default function EffectHookCancelDemo() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("订阅事件");

    return () => {
      console.log("取消订阅事件");
    }
  }, [])

  return (
    <div>
      <h2>EffectHookCancelDemo {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
