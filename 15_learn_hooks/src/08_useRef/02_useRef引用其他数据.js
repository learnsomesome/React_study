import React, { useRef, useState } from 'react'

export default function RefHookDemo02() {
  const [count, setCount] = useState(0);
  const numRef = useRef(count);

  return (
    <div>
      <h2>RefHookDemo02: {numRef.current}</h2>
      <h2>count: {count}</h2>
      <button onClick={() => setCount(count + 10)}>+10</button>
    </div>
  )
}
