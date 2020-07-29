import React, { Component } from 'react'

class ChildCpn extends Component {
  // constructor(props) {
  //   // 将 props 传递给父类
  //   // 该构造方法默认实现，可省略，内部进行this.props = props传递
  //   super(props);
  // }

  render() {
    // 通过继承获取父类传递的参数
    const {name, age} = this.props;

    return (
      <div>
        <h2>{`name: ${name}, age: ${age}`}</h2>
      </div>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <ChildCpn name="小明" age="18"/>
      </div>
    )
  }
}
