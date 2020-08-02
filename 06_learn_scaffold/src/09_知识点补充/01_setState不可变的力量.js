import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      friends: [
        { name: "Mike", age: 18 },
        { name: "Jack", age: 19 },
        { name: "Tom", age: 20 }
      ]
    };
  }

  insertData() {
    const newData = { name: "curry", age: 30 };
    // 直接改变 state 中的数据会使得 scu优化/pureComponent 失效
    // 因为前后浅层比较的都是同一个数据变量，不进行界面渲染
    const newFriends = [...this.state.friends];
    newFriends.push(newData);
    this.setState({
      friends: newFriends
    })
  }

  incrementAge(index) {
    const newFriends = [...this.state.friends];
    newFriends[index].age++;

    this.setState({
      friends: newFriends
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.friends.map((item, index) => {
              return (
                <li key={item.name}>
                  {`姓名：${item.name} 年龄：${item.age}`}
                  <button onClick={() => this.incrementAge(index)}>年龄+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={() => this.insertData()}>添加数据</button>
      </div>
    )
  }
}
