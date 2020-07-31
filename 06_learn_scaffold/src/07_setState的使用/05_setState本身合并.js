import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick() {
    // 合并操作 结果为 1
    /* this.setState({
      counter: this.state.counter + 2
    })
    this.setState({
      counter: this.state.counter + 3,
    })
    this.setState({
      counter: this.state.counter + 1,
    }) */

    // 累加操作 结果为 3
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
    this.setState((prevState, props) => {
      return {
        counter: prevState.counter + 1
      }
    })
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        <h2>{this.state.name}</h2>
        <button onClick={() => this.handleClick()}>+1</button>
      </div>
    )
  }
}
