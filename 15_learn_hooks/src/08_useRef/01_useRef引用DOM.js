import React, { useRef } from 'react'

export default function RefHookDemo() {
  const titleRef = useRef();
  const inputRef = useRef();

  function changeDOM() {
    titleRef.current.innerHTML = "changeDOM";
    inputRef.current.placeholder = "plz!!!";
    inputRef.current.focus();
  }

  return (
    <div>
      <h2 ref={titleRef}>RefHookDemo</h2>
      <input ref={inputRef} type="text"/>

      <button onClick={() => changeDOM()}>修改DOM</button>
    </div>
  )
}
