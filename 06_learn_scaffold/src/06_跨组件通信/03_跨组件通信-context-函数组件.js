import React, { Component } from 'react'

// 1.创建 Context 对象
const UserContext = React.createContext({
  nickName: "aaa",
  level: 1
})

function ProfileHeader() {
  return (
    // 3.包裹后通过 value 传值
    <UserContext.Consumer>
      {
        value => {
          return (
            <div>
              <h2>用户名称: {value.nickName}</h2>
              <h2>用户等级: {value.level}</h2>
            </div>
          )
        }
      }
    </UserContext.Consumer>
  );
}

function Profile(props) {
  return (
    <div>
      <ProfileHeader />
      <ul>
        <li>设置1</li>   
        <li>设置2</li>   
        <li>设置3</li>   
      </ul>  
    </div>
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickName: "Jack",
      level: 10
    };
  }

  render() {
    return (
      <div>
        {/* 2.包裹需要传递数据的组件 */}
        {/* 未包裹时采用默认值 */}
        <UserContext.Provider value={this.state}>
          <Profile />
        </UserContext.Provider>
      </div>
    )
  }
}
