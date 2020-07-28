import React, { Component } from 'react'

class Cpn extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    return (
      <div>我是Cpn组件</div>
    );
  }
}

// 执行顺序
// 1.挂载阶段：constructor -> render -> componentDidMount
// 2.数据更新阶段：render -> componentDidUpdate
// 3.销毁阶段：componentWillUnmount
export default class App extends Component {
  constructor() {
    super();
    this.state = { count: 0, isShow: true };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }

  handleChange() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
    console.log("render");

    return (
      <div>
        我是App组件
        <h2>当前计数：{this.state.count}</h2>
        <button onClick={() => this.handleClick()}>+</button>
        <hr />
        <button onClick={() => this.handleChange()}>切换显示</button>
        {this.state.isShow && <Cpn />}
      </div>
    )
  }
}
