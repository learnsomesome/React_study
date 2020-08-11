import React, { useReducer } from 'react';

import { reducer } from "./reducer";

export default function Home() {

  const [state, dispatch] = useReducer(reducer, {counter: 100});

  return (
    <div>
      <h2>Home当前计数：{state.counter}</h2>
      <button onClick={() => dispatch({type: "increment"})}>+1</button>
      <button onClick={() => dispatch({type: "decrement"})}>-1</button>
    </div>
  )
}
