import React, { Component } from 'react'

class CounterBtn extends Component {
  render() {
    const {btnClick} = this.props;

    return <button onClick={btnClick}>+</button>
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div>
        <h2>当前计数：{this.state.counter}</h2>
        { /* 隐式绑定this */ }
        <CounterBtn btnClick={() => this.increment()}/>
      </div>
    )
  }
}
