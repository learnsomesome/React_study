import React, { useState } from 'react'
import useScrollPosition from "../hook/scroll-position-hook";

export default function CustomLifeHookDemo03() {
  const [flag, setFlag] = useState(true);

  const scrollPosition = useScrollPosition();

  return (
    <div style={{padding: "1000px 0"}}>
      <h2>CustomLifeHookDemo03 {scrollPosition}</h2>
      <button onClick={() => setFlag(!flag)}>changeFlag</button>
    </div>
  )
}
