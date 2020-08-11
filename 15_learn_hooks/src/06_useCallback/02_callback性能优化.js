import React, { useState, useCallback, memo } from 'react';

const CounterIncrement = memo((props) => {
  console.log("CounterIncrment被渲染:", props.name);
  return <button onClick={props.increment}>+1</button>
})


export default function CallbackHookDemo() {
  console.log("CallbackHookDemo被渲染");
  const [count, setCount] = useState(0);
  const [isShow, setIsShow] = useState(true);

  const increment1 = () => {
    setCount(count + 1);
  };

  const increment2 = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>当前计数: {count}</h2>
      {/* <button onClick={increment1}>+1</button>
      <button onClick={increment2}>+1</button> */}
      <CounterIncrement name="btn1" increment={increment1}/>    
      <CounterIncrement name="btn2" increment={increment2}/>
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
