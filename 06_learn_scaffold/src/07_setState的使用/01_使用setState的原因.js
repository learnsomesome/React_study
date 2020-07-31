import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick() {
    // 数据改变时通过 setState 告知 React 界面需要重新渲染
    // setState 方法继承自 Component，是其原型上的方法
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    )
  }
}
