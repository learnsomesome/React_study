import React, { useContext } from 'react'
import { UserContext } from "../App";

export default function ContextHookDemo() {
  const userInfo = useContext(UserContext);

  return (
    <div>
      <h2>ContextHookDemo</h2>
      <h2>{userInfo.name}</h2>
      <h2>{userInfo.age}</h2>
    </div>
  )
}
