import React, { Component } from 'react'

// 1.创建 Context 对象
const UserContext = React.createContext({
  nickName: "aaa",
  level: 1
})

const TestContext = React.createContext({
  name: "Mike",
  age: 18
})

class ProfileHeader extends Component {
  render() {
    // 取值
    const {nickName, level} = this.context;

    return (
      <TestContext.Consumer>
        {
          theme => {
            return (
              <div>
                <h2>{theme.name}</h2>
                <h2>{theme.age}</h2>
                <h2>用户名称: {nickName}</h2>
                <h2>用户等级: {level}</h2>
              </div>
            )
          }
        }
      </TestContext.Consumer>
    );
  }
}

// 3.赋值 contextType 属性
// 多次赋值会覆盖，嵌套时需要采取 Consumer 形式
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
          {/* <TestContext.Provider value={{name: "tom", age: 100}}> */}
          <Profile />
          {/* </TestContext.Provider> */}
        </UserContext.Provider>
      </div>
    )
  }
}
