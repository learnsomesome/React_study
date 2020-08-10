import React, { useState } from 'react'

export default function ComplexHookState() {
  const [friends, setFriends] = useState(["mike", "jack"]);
  const [students, setStudents] = useState([
    { id: 1, name: "jack", age: 18 },
    { id: 2, name: "tom", age: 19 },
    { id: 3, name: "tony", age: 20 }
  ]);

  const handleAge = index => {
    const newStudents = [...students];
    newStudents[index].age += 1; 
    setStudents(newStudents);
  }

  return (
    <div>
      <h2>好友列表</h2>
      <ul>
        {
          friends.map((item, index) => {
            return <li key={item}>{index + " " + item}</li>
          })
        }
      </ul>
      <button onClick={() => setFriends([...friends, "curry"])}>添加朋友</button>

      <h2>学生列表</h2>
      <ul>
        {
          students.map((item, index) => {
            return (
              <li key={item.id}>
                姓名：{item.name} 年龄：{item.age}
                <button onClick={() => handleAge(index)}>age + 1</button>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
