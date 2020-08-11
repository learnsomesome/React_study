import React, {useState, useMemo, memo} from 'react'

const HYInfo = memo(props => {
  console.log("HYInfo重新渲染");
  return <h2>名字：{props.info.name} 年龄：{props.info.age}</h2>
})

export default function MemoHookDemo2() {

  const [isShow, setIsShow] = useState(true);

  // const info = { name: "curry", age: 18 };

  const info = useMemo(() => {
    return { name: "curry", age: 18 };
  }, []);

  return (
    <div>
      <HYInfo info={info}/>
      <button onClick={() => setIsShow(!isShow)}>切换</button>
    </div>
  )
}
