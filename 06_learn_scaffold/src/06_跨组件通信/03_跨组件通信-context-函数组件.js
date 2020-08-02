import React, { Component } from 'react'

// 1.创建 Context 对象
const UserContext = React.createContext({
  nickName: "aaa",
  level: 1
})

const ThemeContext = React.createContext({
  age: 18
})

function ProfileHeader() {
  return (
    // 3.包裹后通过 value(参数) 传值
    // 多数据时采取嵌套
    // 一个 Context 只能传递一个对象
    <UserContext.Consumer>
      {
        value => {
          return (
            <ThemeContext.Consumer>
              {
                theme => {
                  return (
                    <div>
                      <h2>用户名称: {value.nickName}</h2>
                      <h2>用户等级: {value.level}</h2>
                      <h2>用户年龄：{theme.age}</h2>
                    </div>
                  )
                }
              }
            </ThemeContext.Consumer>
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
          <ThemeContext.Provider value={{age: 1}}>
            <Profile />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}
