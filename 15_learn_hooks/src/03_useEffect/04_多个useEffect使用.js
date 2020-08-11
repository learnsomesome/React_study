import React, { useState, useEffect } from 'react'

export default function MultiEffectHookDemo() {
  
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("修改DOM");
  }, [])

  useEffect(() => {
    console.log("订阅事件");
  }, [])

  useEffect(() => {
    console.log("网络请求");
  }, [])

  return (
    <div>
      <h2>MultiEffectHookDemo</h2>
      <h2>当前计数：{counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  )
}
