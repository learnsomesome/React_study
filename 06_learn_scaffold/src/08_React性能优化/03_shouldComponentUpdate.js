import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: "Hello React"
    };
  }

  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  changeText() {
    this.setState({
      message: "Bye Bye"
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 根据逻辑判断是否调用render进行页面渲染
    if (this.state.counter !== nextState.counter) return true;
    return false;
  }

  render() {
    console.log("App render被调用");
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <button onClick={() => this.handleClick()}>+1</button>
        <button onClick={() => this.changeText()}>改变文本</button>
      </div>
    )
  }
}