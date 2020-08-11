import React, { useState, useMemo } from 'react'

function calcNumber(count) {
  let total = 0;
  for (let i = 0; i <= count; i++) {
    total += i;
  }
  return total;
}

export default function MemoHookDemo() {

  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  // const total = calcNumber(count);

  const total = useMemo(() => {
    console.log("total计算");
    return calcNumber(count);
  }, [count]);

  return (
    <div>
      <h2>计算数字的和: {total}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
