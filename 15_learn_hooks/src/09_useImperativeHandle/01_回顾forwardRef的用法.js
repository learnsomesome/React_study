import React, { useRef } from 'react'
import { forwardRef } from 'react';

const HYInput = forwardRef((props, ref) => {
  return <input ref={ref} type="text"/>
})

export default function ForwardRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>子元素input聚焦</button>
    </div>
  )
}
