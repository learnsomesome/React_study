import React, { Component } from 'react'

// 1.创建 Context 对象
const UserContext = React.createContext({
  nickName: "aaa",
  level: 1
})

class ProfileHeader extends Component {
  render() {
    const {nickName, level} = this.context;

    return (
      <div>
        <h2>用户名称: {nickName}</h2>
        <h2>用户等级: {level}</h2>
      </div>
    );
  }
}

// 3.赋值 contextType 属性
ProfileHeader.contextType = UserContext;

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
      nickName: "Mike",
      level: 8
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
