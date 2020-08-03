import React, { PureComponent, createContext } from 'react'

// 定义高阶组件(共享context)
function withUser(WrappedComponent) {
  // Anonymous 匿名函数
  return props => {
    return (
      <UserContext.Consumer>
        {
          value => {
            return <WrappedComponent {...props} {...value}/>
          }
        }
      </UserContext.Consumer>
    )
  }
}

const UserContext = createContext({
  name: "username",
  level: 1,
  region: "中国"
})

class Home extends PureComponent {
  render() {
    return <h2>Home：{`昵称：${this.props.name} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}

class About extends PureComponent {
  render() {
    return <h2>Home：{`昵称：${this.props.name} 等级：${this.props.level} 地区：${this.props.region}`}</h2>
  }
}

class List extends PureComponent {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>{this.props.level}</li>
        <li>{this.props.region}</li>
      </ul>
    )
  }
}

const UserHome = withUser(Home);
const UserAbout = withUser(About);
const UserList = withUser(List);

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider value={{name: "Mike", level: 100, region: "中国"}}>
          <UserHome/>
          <UserAbout/>
          <UserList />
        </UserContext.Provider>
      </div>
    )
  }
}
