import React from 'react'
import useUserContext from "../hook/user-hook";

export default function CustomLifeHookDemo02() {
  const [user, token] = useUserContext();
  console.log(user, token);

  return (
    <div>
      <h2>CustomLifeHookDemo02</h2>
    </div>
  )
}
