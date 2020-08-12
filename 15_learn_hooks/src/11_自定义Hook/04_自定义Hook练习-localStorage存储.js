import React from 'react'
import useLocalStore from "../hook/local-store-hook";

export default function CustomLifeHookDemo04() {
  const [name, setName] = useLocalStore("username");

  return (
    <div>
      <h2>用户名: {name}</h2>
      <button onClick={() => setName("curry")}>设置用户名</button>
    </div>
  )
}
