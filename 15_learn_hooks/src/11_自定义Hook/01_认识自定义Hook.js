import React, { useEffect } from 'react'

function useLoggingLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`);
    return () => {
      console.log(`${name}组件被销毁`);
    }
  })
}

export default function CustomLifeHookDemo01() {

  useLoggingLife("CustomLifeHookDemo01");  

  return (
    <div>
      <h2>CustomLifeHookDemo01</h2>
    </div>
  )
}
