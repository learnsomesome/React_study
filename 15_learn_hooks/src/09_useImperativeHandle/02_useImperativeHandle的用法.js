import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const HYInput = forwardRef((props, ref) => {
  const HYInputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      HYInputRef.current.focus();
    },
    setPlaceHolder: text => {
      HYInputRef.current.placeholder = text;
    }
  }))

  return <input ref={HYInputRef} type="text"/>
})

export default function ImperativeHandleHookDemo() {
  const inputRef = useRef();

  return (
    <div>
      <HYInput ref={inputRef}/>
      <button onClick={() => inputRef.current.focus()}>子元素input聚焦</button>
      <button onClick={() => inputRef.current.setPlaceHolder("初始值")}>设置初始值</button>
    </div>
  )
}
